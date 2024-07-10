import Papa from "papaparse";

interface Entry {
  response?: {
    content?: {
      text?: string;
    };
  };
}

interface LogData {
  log?: {
    entries?: Entry[];
  };
}

interface FlattenedObject {
  [key: string]: string | number | boolean | null | undefined | FlattenedObject;
}

// Read a JSON file from a Blob
async function readJsonFile(file: Blob): Promise<LogData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target!.result as string);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
}

// Extract data from the "results" field
function extractResultsData(jsonData: LogData): FlattenedObject[] {
  const results: FlattenedObject[] = [];
  const entries = jsonData?.log?.entries || [];

  for (const entry of entries) {
    const contentText = entry?.response?.content?.text;

    if (contentText && contentText.includes('"adArchiveID":')) {
      try {
        // Remove non-JSON prefix from the string
        const cleanedResponseText = contentText.replace(
          /^for\s*\(\s*;\s*;\s*\)\s*;/,
          ""
        );
        const parsedResponse = JSON.parse(cleanedResponseText);
        const resultsArray = findNestedResults(parsedResponse);

        if (Array.isArray(resultsArray)) {
          for (const result of resultsArray.flat()) {
            results.push(flattenObject(result));
          }
        }
      } catch (e) {
        console.error("Error parsing response:", e);
      }
    }
  }
  return results;
}

// Recursively search for "results"
function findNestedResults(obj: any): any[] {
  const results: any[] = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key === "results") {
        return obj[key];
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        const nestedResults = findNestedResults(obj[key]);
        if (nestedResults.length > 0) {
          results.push(...nestedResults);
        }
      }
    }
  }
  return results;
}

// Flatten an object
function flattenObject(ob: any, prefix: string = ""): FlattenedObject {
  const result: FlattenedObject = {};
  for (const key in ob) {
    if (ob.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (
        typeof ob[key] === "object" &&
        ob[key] !== null &&
        !Array.isArray(ob[key])
      ) {
        Object.assign(result, flattenObject(ob[key], newKey));
      } else {
        result[newKey] = ob[key];
      }
    }
  }
  return result;
}

// Convert .har to .csv and return .csv as a string
async function convertHarToCsv(file: Blob): Promise<string> {
  try {
    const jsonData = await readJsonFile(file);
    const resultsData = extractResultsData(jsonData);
    const csv = Papa.unparse(resultsData);
    return csv;
  } catch (error) {
    console.error("Error converting .har to CSV:", error);
    throw error;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const convertButton = document.getElementById(
    "convertButton"
  ) as HTMLButtonElement;
  const harInput = document.getElementById("harInput") as HTMLInputElement;
  const outputMessage = document.getElementById(
    "outputMessage"
  ) as HTMLDivElement;

  convertButton.addEventListener("click", async () => {
    const file = harInput.files?.[0];
    if (!file) {
      outputMessage.textContent = "Please select a .har file.";
      return;
    }

    try {
      const csvData = await convertHarToCsv(file);
      const blob = new Blob([csvData], { type: "text/csv" });
      const downloadUrl = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = downloadUrl;
      downloadLink.download = "output.csv";
      downloadLink.textContent = "Download the CSV";
      outputMessage.innerHTML = "";
      outputMessage.appendChild(downloadLink);
    } catch (error) {
      console.error("Error converting .har to CSV:", error);
      outputMessage.textContent = "An error occurred. Please try again later.";
    }
  });
});
