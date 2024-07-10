// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bYshZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "df5d1f8317ce229f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bWbkW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _papaparse = require("papaparse");
var _papaparseDefault = parcelHelpers.interopDefault(_papaparse);
// Read a JSON file from a Blob
async function readJsonFile(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = (event)=>{
            try {
                const data = JSON.parse(event.target.result);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = (error)=>reject(error);
        reader.readAsText(file);
    });
}
// Extract data from the "results" field
function extractResultsData(jsonData) {
    const results = [];
    const entries = jsonData?.log?.entries || [];
    for (const entry of entries){
        const contentText = entry?.response?.content?.text;
        if (contentText && contentText.includes('"adArchiveID":')) try {
            // Remove non-JSON prefix from the string
            const cleanedResponseText = contentText.replace(/^for\s*\(\s*;\s*;\s*\)\s*;/, "");
            const parsedResponse = JSON.parse(cleanedResponseText);
            const resultsArray = findNestedResults(parsedResponse);
            if (Array.isArray(resultsArray)) for (const result of resultsArray.flat())results.push(flattenObject(result));
        } catch (e) {
            console.error("Error parsing response:", e);
        }
    }
    return results;
}
// Recursively search for "results"
function findNestedResults(obj) {
    const results = [];
    for(const key in obj)if (obj.hasOwnProperty(key)) {
        if (key === "results") return obj[key];
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            const nestedResults = findNestedResults(obj[key]);
            if (nestedResults.length > 0) results.push(...nestedResults);
        }
    }
    return results;
}
// Flatten an object
function flattenObject(ob, prefix = "") {
    const result = {};
    for(const key in ob)if (ob.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof ob[key] === "object" && ob[key] !== null && !Array.isArray(ob[key])) Object.assign(result, flattenObject(ob[key], newKey));
        else result[newKey] = ob[key];
    }
    return result;
}
// Convert .har to .csv and return .csv as a string
async function convertHarToCsv(file) {
    try {
        const jsonData = await readJsonFile(file);
        const resultsData = extractResultsData(jsonData);
        const csv = (0, _papaparseDefault.default).unparse(resultsData);
        return csv;
    } catch (error) {
        console.error("Error converting .har to CSV:", error);
        throw error;
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    const convertButton = document.getElementById("convertButton");
    const harInput = document.getElementById("harInput");
    const outputMessage = document.getElementById("outputMessage");
    convertButton.addEventListener("click", async ()=>{
        const file = harInput.files?.[0];
        if (!file) {
            outputMessage.textContent = "Please select a .har file.";
            return;
        }
        try {
            const csvData = await convertHarToCsv(file);
            const blob = new Blob([
                csvData
            ], {
                type: "text/csv"
            });
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

},{"papaparse":"5w3wE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5w3wE":[function(require,module,exports) {
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/ !function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : module.exports = t();
}(this, function s() {
    "use strict";
    var f = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f ? f : {};
    var n = !f.document && !!f.postMessage, o = f.IS_PAPA_WORKER || !1, a = {}, u = 0, b = {
        parse: function(e, t) {
            var r = (t = t || {}).dynamicTyping || !1;
            J(r) && (t.dynamicTypingFunction = r, r = {});
            if (t.dynamicTyping = r, t.transform = !!J(t.transform) && t.transform, t.worker && b.WORKERS_SUPPORTED) {
                var i = function() {
                    if (!b.WORKERS_SUPPORTED) return !1;
                    var e = (r = f.URL || f.webkitURL || null, i = s.toString(), b.BLOB_URL || (b.BLOB_URL = r.createObjectURL(new Blob([
                        "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                        "(",
                        i,
                        ")();"
                    ], {
                        type: "text/javascript"
                    })))), t = new f.Worker(e);
                    var r, i;
                    return t.onmessage = _, t.id = u++, a[t.id] = t;
                }();
                return i.userStep = t.step, i.userChunk = t.chunk, i.userComplete = t.complete, i.userError = t.error, t.step = J(t.step), t.chunk = J(t.chunk), t.complete = J(t.complete), t.error = J(t.error), delete t.worker, void i.postMessage({
                    input: e,
                    config: t,
                    workerId: i.id
                });
            }
            var n = null;
            b.NODE_STREAM_INPUT, "string" == typeof e ? (e = function(e) {
                if (65279 === e.charCodeAt(0)) return e.slice(1);
                return e;
            }(e), n = t.download ? new l(t) : new p(t)) : !0 === e.readable && J(e.read) && J(e.on) ? n = new g(t) : (f.File && e instanceof File || e instanceof Object) && (n = new c(t));
            return n.stream(e);
        },
        unparse: function(e, t) {
            var n = !1, _ = !0, m = ",", y = "\r\n", s = '"', a = s + s, r = !1, i = null, o = !1;
            !function() {
                if ("object" != typeof t) return;
                "string" != typeof t.delimiter || b.BAD_DELIMITERS.filter(function(e) {
                    return -1 !== t.delimiter.indexOf(e);
                }).length || (m = t.delimiter);
                ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (n = t.quotes);
                "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (r = t.skipEmptyLines);
                "string" == typeof t.newline && (y = t.newline);
                "string" == typeof t.quoteChar && (s = t.quoteChar);
                "boolean" == typeof t.header && (_ = t.header);
                if (Array.isArray(t.columns)) {
                    if (0 === t.columns.length) throw new Error("Option columns is empty");
                    i = t.columns;
                }
                void 0 !== t.escapeChar && (a = t.escapeChar + s);
                ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (o = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/);
            }();
            var u = new RegExp(Q(s), "g");
            "string" == typeof e && (e = JSON.parse(e));
            if (Array.isArray(e)) {
                if (!e.length || Array.isArray(e[0])) return h(null, e, r);
                if ("object" == typeof e[0]) return h(i || Object.keys(e[0]), e, r);
            } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || i), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [
                e.data
            ])), h(e.fields || [], e.data || [], r);
            throw new Error("Unable to serialize unrecognized input");
            function h(e, t, r) {
                var i = "";
                "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
                var n = Array.isArray(e) && 0 < e.length, s = !Array.isArray(t[0]);
                if (n && _) {
                    for(var a = 0; a < e.length; a++)0 < a && (i += m), i += v(e[a], a);
                    0 < t.length && (i += y);
                }
                for(var o = 0; o < t.length; o++){
                    var u = n ? e.length : t[o].length, h = !1, f = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;
                    if (r && !n && (h = "greedy" === r ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === r && n) {
                        for(var d = [], l = 0; l < u; l++){
                            var c = s ? e[l] : l;
                            d.push(t[o][c]);
                        }
                        h = "" === d.join("").trim();
                    }
                    if (!h) {
                        for(var p = 0; p < u; p++){
                            0 < p && !f && (i += m);
                            var g = n && s ? e[p] : p;
                            i += v(t[o][g], p);
                        }
                        o < t.length - 1 && (!r || 0 < u && !f) && (i += y);
                    }
                }
                return i;
            }
            function v(e, t) {
                if (null == e) return "";
                if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
                var r = !1;
                o && "string" == typeof e && o.test(e) && (e = "'" + e, r = !0);
                var i = e.toString().replace(u, a);
                return (r = r || !0 === n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || function(e, t) {
                    for(var r = 0; r < t.length; r++)if (-1 < e.indexOf(t[r])) return !0;
                    return !1;
                }(i, b.BAD_DELIMITERS) || -1 < i.indexOf(m) || " " === i.charAt(0) || " " === i.charAt(i.length - 1)) ? s + i + s : i;
            }
        }
    };
    if (b.RECORD_SEP = String.fromCharCode(30), b.UNIT_SEP = String.fromCharCode(31), b.BYTE_ORDER_MARK = "\uFEFF", b.BAD_DELIMITERS = [
        "\r",
        "\n",
        '"',
        b.BYTE_ORDER_MARK
    ], b.WORKERS_SUPPORTED = !n && !!f.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = E, b.ParserHandle = r, b.NetworkStreamer = l, b.FileStreamer = c, b.StringStreamer = p, b.ReadableStreamStreamer = g, f.jQuery) {
        var d = f.jQuery;
        d.fn.parse = function(o) {
            var r = o.config || {}, u = [];
            return this.each(function(e) {
                if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && f.FileReader) || !this.files || 0 === this.files.length) return !0;
                for(var t = 0; t < this.files.length; t++)u.push({
                    file: this.files[t],
                    inputElem: this,
                    instanceConfig: d.extend({}, r)
                });
            }), e(), this;
            function e() {
                if (0 !== u.length) {
                    var e, t, r, i, n = u[0];
                    if (J(o.before)) {
                        var s = o.before(n.file, n.inputElem);
                        if ("object" == typeof s) {
                            if ("abort" === s.action) return e = "AbortError", t = n.file, r = n.inputElem, i = s.reason, void (J(o.error) && o.error({
                                name: e
                            }, t, r, i));
                            if ("skip" === s.action) return void h();
                            "object" == typeof s.config && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
                        } else if ("skip" === s) return void h();
                    }
                    var a = n.instanceConfig.complete;
                    n.instanceConfig.complete = function(e) {
                        J(a) && a(e, n.file, n.inputElem), h();
                    }, b.parse(n.file, n.instanceConfig);
                } else J(o.complete) && o.complete();
            }
            function h() {
                u.splice(0, 1), e();
            }
        };
    }
    function h(e) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        }, (function(e) {
            var t = w(e);
            t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
            this._handle = new r(t), (this._handle.streamer = this)._config = t;
        }).call(this, e), this.parseChunk = function(e, t) {
            if (this.isFirstChunk && J(this._config.beforeFirstChunk)) {
                var r = this._config.beforeFirstChunk(e);
                void 0 !== r && (e = r);
            }
            this.isFirstChunk = !1, this._halted = !1;
            var i = this._partialLine + e;
            this._partialLine = "";
            var n = this._handle.parse(i, this._baseIndex, !this._finished);
            if (!this._handle.paused() && !this._handle.aborted()) {
                var s = n.meta.cursor;
                this._finished || (this._partialLine = i.substring(s - this._baseIndex), this._baseIndex = s), n && n.data && (this._rowCount += n.data.length);
                var a = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                if (o) f.postMessage({
                    results: n,
                    workerId: b.WORKER_ID,
                    finished: a
                });
                else if (J(this._config.chunk) && !t) {
                    if (this._config.chunk(n, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
                    n = void 0, this._completeResults = void 0;
                }
                return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n.data), this._completeResults.errors = this._completeResults.errors.concat(n.errors), this._completeResults.meta = n.meta), this._completed || !a || !J(this._config.complete) || n && n.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), a || n && n.meta.paused || this._nextChunk(), n;
            }
            this._halted = !0;
        }, this._sendError = function(e) {
            J(this._config.error) ? this._config.error(e) : o && this._config.error && f.postMessage({
                workerId: b.WORKER_ID,
                error: e,
                finished: !1
            });
        };
    }
    function l(e) {
        var i;
        (e = e || {}).chunkSize || (e.chunkSize = b.RemoteChunkSize), h.call(this, e), this._nextChunk = n ? function() {
            this._readChunk(), this._chunkLoaded();
        } : function() {
            this._readChunk();
        }, this.stream = function(e) {
            this._input = e, this._nextChunk();
        }, this._readChunk = function() {
            if (this._finished) this._chunkLoaded();
            else {
                if (i = new XMLHttpRequest, this._config.withCredentials && (i.withCredentials = this._config.withCredentials), n || (i.onload = v(this._chunkLoaded, this), i.onerror = v(this._chunkError, this)), i.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
                    var e = this._config.downloadRequestHeaders;
                    for(var t in e)i.setRequestHeader(t, e[t]);
                }
                if (this._config.chunkSize) {
                    var r = this._start + this._config.chunkSize - 1;
                    i.setRequestHeader("Range", "bytes=" + this._start + "-" + r);
                }
                try {
                    i.send(this._config.downloadRequestBody);
                } catch (e) {
                    this._chunkError(e.message);
                }
                n && 0 === i.status && this._chunkError();
            }
        }, this._chunkLoaded = function() {
            4 === i.readyState && (i.status < 200 || 400 <= i.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : i.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(e) {
                var t = e.getResponseHeader("Content-Range");
                if (null === t) return -1;
                return parseInt(t.substring(t.lastIndexOf("/") + 1));
            }(i), this.parseChunk(i.responseText)));
        }, this._chunkError = function(e) {
            var t = i.statusText || e;
            this._sendError(new Error(t));
        };
    }
    function c(e) {
        var i, n;
        (e = e || {}).chunkSize || (e.chunkSize = b.LocalChunkSize), h.call(this, e);
        var s = "undefined" != typeof FileReader;
        this.stream = function(e) {
            this._input = e, n = e.slice || e.webkitSlice || e.mozSlice, s ? ((i = new FileReader).onload = v(this._chunkLoaded, this), i.onerror = v(this._chunkError, this)) : i = new FileReaderSync, this._nextChunk();
        }, this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
            var e = this._input;
            if (this._config.chunkSize) {
                var t = Math.min(this._start + this._config.chunkSize, this._input.size);
                e = n.call(e, this._start, t);
            }
            var r = i.readAsText(e, this._config.encoding);
            s || this._chunkLoaded({
                target: {
                    result: r
                }
            });
        }, this._chunkLoaded = function(e) {
            this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
        }, this._chunkError = function() {
            this._sendError(i.error);
        };
    }
    function p(e) {
        var r;
        h.call(this, e = e || {}), this.stream = function(e) {
            return r = e, this._nextChunk();
        }, this._nextChunk = function() {
            if (!this._finished) {
                var e, t = this._config.chunkSize;
                return t ? (e = r.substring(0, t), r = r.substring(t)) : (e = r, r = ""), this._finished = !r, this.parseChunk(e);
            }
        };
    }
    function g(e) {
        h.call(this, e = e || {});
        var t = [], r = !0, i = !1;
        this.pause = function() {
            h.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
            h.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e) {
            this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
            i && 1 === t.length && (this._finished = !0);
        }, this._nextChunk = function() {
            this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : r = !0;
        }, this._streamData = v(function(e) {
            try {
                t.push("string" == typeof e ? e : e.toString(this._config.encoding)), r && (r = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
            } catch (e) {
                this._streamError(e);
            }
        }, this), this._streamError = v(function(e) {
            this._streamCleanUp(), this._sendError(e);
        }, this), this._streamEnd = v(function() {
            this._streamCleanUp(), i = !0, this._streamData("");
        }, this), this._streamCleanUp = v(function() {
            this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
    }
    function r(m) {
        var a, o, u, i = Math.pow(2, 53), n = -i, s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, h = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, t = this, r = 0, f = 0, d = !1, e = !1, l = [], c = {
            data: [],
            errors: [],
            meta: {}
        };
        if (J(m.step)) {
            var p = m.step;
            m.step = function(e) {
                if (c = e, _()) g();
                else {
                    if (g(), 0 === c.data.length) return;
                    r += e.data.length, m.preview && r > m.preview ? o.abort() : (c.data = c.data[0], p(c, t));
                }
            };
        }
        function y(e) {
            return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
        }
        function g() {
            return c && u && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), u = !1), m.skipEmptyLines && (c.data = c.data.filter(function(e) {
                return !y(e);
            })), _() && function() {
                if (!c) return;
                function e(e, t) {
                    J(m.transformHeader) && (e = m.transformHeader(e, t)), l.push(e);
                }
                if (Array.isArray(c.data[0])) {
                    for(var t = 0; _() && t < c.data.length; t++)c.data[t].forEach(e);
                    c.data.splice(0, 1);
                } else c.data.forEach(e);
            }(), function() {
                if (!c || !m.header && !m.dynamicTyping && !m.transform) return c;
                function e(e, t) {
                    var r, i = m.header ? {} : [];
                    for(r = 0; r < e.length; r++){
                        var n = r, s = e[r];
                        m.header && (n = r >= l.length ? "__parsed_extra" : l[r]), m.transform && (s = m.transform(s, n)), s = v(n, s), "__parsed_extra" === n ? (i[n] = i[n] || [], i[n].push(s)) : i[n] = s;
                    }
                    return m.header && (r > l.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l.length + " fields but parsed " + r, f + t) : r < l.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l.length + " fields but parsed " + r, f + t)), i;
                }
                var t = 1;
                !c.data.length || Array.isArray(c.data[0]) ? (c.data = c.data.map(e), t = c.data.length) : c.data = e(c.data, 0);
                m.header && c.meta && (c.meta.fields = l);
                return f += t, c;
            }();
        }
        function _() {
            return m.header && 0 === l.length;
        }
        function v(e, t) {
            var r;
            return r = e, m.dynamicTypingFunction && void 0 === m.dynamicTyping[r] && (m.dynamicTyping[r] = m.dynamicTypingFunction(r)), !0 === (m.dynamicTyping[r] || m.dynamicTyping) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (function(e) {
                if (s.test(e)) {
                    var t = parseFloat(e);
                    if (n < t && t < i) return !0;
                }
                return !1;
            }(t) ? parseFloat(t) : h.test(t) ? new Date(t) : "" === t ? null : t) : t;
        }
        function k(e, t, r, i) {
            var n = {
                type: e,
                code: t,
                message: r
            };
            void 0 !== i && (n.row = i), c.errors.push(n);
        }
        this.parse = function(e, t, r) {
            var i = m.quoteChar || '"';
            if (m.newline || (m.newline = function(e, t) {
                e = e.substring(0, 1048576);
                var r = new RegExp(Q(t) + "([^]*?)" + Q(t), "gm"), i = (e = e.replace(r, "")).split("\r"), n = e.split("\n"), s = 1 < n.length && n[0].length < i[0].length;
                if (1 === i.length || s) return "\n";
                for(var a = 0, o = 0; o < i.length; o++)"\n" === i[o][0] && a++;
                return a >= i.length / 2 ? "\r\n" : "\r";
            }(e, i)), u = !1, m.delimiter) J(m.delimiter) && (m.delimiter = m.delimiter(e), c.meta.delimiter = m.delimiter);
            else {
                var n = function(e, t, r, i, n) {
                    var s, a, o, u;
                    n = n || [
                        ",",
                        "	",
                        "|",
                        ";",
                        b.RECORD_SEP,
                        b.UNIT_SEP
                    ];
                    for(var h = 0; h < n.length; h++){
                        var f = n[h], d = 0, l = 0, c = 0;
                        o = void 0;
                        for(var p = new E({
                            comments: i,
                            delimiter: f,
                            newline: t,
                            preview: 10
                        }).parse(e), g = 0; g < p.data.length; g++)if (r && y(p.data[g])) c++;
                        else {
                            var _ = p.data[g].length;
                            l += _, void 0 !== o ? 0 < _ && (d += Math.abs(_ - o), o = _) : o = _;
                        }
                        0 < p.data.length && (l /= p.data.length - c), (void 0 === a || d <= a) && (void 0 === u || u < l) && 1.99 < l && (a = d, s = f, u = l);
                    }
                    return {
                        successful: !!(m.delimiter = s),
                        bestDelimiter: s
                    };
                }(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess);
                n.successful ? m.delimiter = n.bestDelimiter : (u = !0, m.delimiter = b.DefaultDelimiter), c.meta.delimiter = m.delimiter;
            }
            var s = w(m);
            return m.preview && m.header && s.preview++, a = e, o = new E(s), c = o.parse(a, t, r), g(), d ? {
                meta: {
                    paused: !0
                }
            } : c || {
                meta: {
                    paused: !1
                }
            };
        }, this.paused = function() {
            return d;
        }, this.pause = function() {
            d = !0, o.abort(), a = J(m.chunk) ? "" : a.substring(o.getCharIndex());
        }, this.resume = function() {
            t.streamer._halted ? (d = !1, t.streamer.parseChunk(a, !0)) : setTimeout(t.resume, 3);
        }, this.aborted = function() {
            return e;
        }, this.abort = function() {
            e = !0, o.abort(), c.meta.aborted = !0, J(m.complete) && m.complete(c), a = "";
        };
    }
    function Q(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(j) {
        var z, M = (j = j || {}).delimiter, P = j.newline, U = j.comments, q = j.step, N = j.preview, B = j.fastMode, K = z = void 0 === j.quoteChar || null === j.quoteChar ? '"' : j.quoteChar;
        if (void 0 !== j.escapeChar && (K = j.escapeChar), ("string" != typeof M || -1 < b.BAD_DELIMITERS.indexOf(M)) && (M = ","), U === M) throw new Error("Comment character same as delimiter");
        !0 === U ? U = "#" : ("string" != typeof U || -1 < b.BAD_DELIMITERS.indexOf(U)) && (U = !1), "\n" !== P && "\r" !== P && "\r\n" !== P && (P = "\n");
        var W = 0, H = !1;
        this.parse = function(i, t, r) {
            if ("string" != typeof i) throw new Error("Input must be a string");
            var n = i.length, e = M.length, s = P.length, a = U.length, o = J(q), u = [], h = [], f = [], d = W = 0;
            if (!i) return L();
            if (j.header && !t) {
                var l = i.split(P)[0].split(M), c = [], p = {}, g = !1;
                for(var _ in l){
                    var m = l[_];
                    J(j.transformHeader) && (m = j.transformHeader(m, _));
                    var y = m, v = p[m] || 0;
                    for(0 < v && (g = !0, y = m + "_" + v), p[m] = v + 1; c.includes(y);)y = y + "_" + v;
                    c.push(y);
                }
                if (g) {
                    var k = i.split(P);
                    k[0] = c.join(M), i = k.join(P);
                }
            }
            if (B || !1 !== B && -1 === i.indexOf(z)) {
                for(var b = i.split(P), E = 0; E < b.length; E++){
                    if (f = b[E], W += f.length, E !== b.length - 1) W += P.length;
                    else if (r) return L();
                    if (!U || f.substring(0, a) !== U) {
                        if (o) {
                            if (u = [], I(f.split(M)), F(), H) return L();
                        } else I(f.split(M));
                        if (N && N <= E) return u = u.slice(0, N), L(!0);
                    }
                }
                return L();
            }
            for(var w = i.indexOf(M, W), R = i.indexOf(P, W), C = new RegExp(Q(K) + Q(z), "g"), S = i.indexOf(z, W);;)if (i[W] !== z) {
                if (U && 0 === f.length && i.substring(W, W + a) === U) {
                    if (-1 === R) return L();
                    W = R + s, R = i.indexOf(P, W), w = i.indexOf(M, W);
                } else if (-1 !== w && (w < R || -1 === R)) f.push(i.substring(W, w)), W = w + e, w = i.indexOf(M, W);
                else {
                    if (-1 === R) break;
                    if (f.push(i.substring(W, R)), D(R + s), o && (F(), H)) return L();
                    if (N && u.length >= N) return L(!0);
                }
            } else for(S = W, W++;;){
                if (-1 === (S = i.indexOf(z, S + 1))) return r || h.push({
                    type: "Quotes",
                    code: "MissingQuotes",
                    message: "Quoted field unterminated",
                    row: u.length,
                    index: W
                }), T();
                if (S === n - 1) return T(i.substring(W, S).replace(C, z));
                if (z !== K || i[S + 1] !== K) {
                    if (z === K || 0 === S || i[S - 1] !== K) {
                        -1 !== w && w < S + 1 && (w = i.indexOf(M, S + 1)), -1 !== R && R < S + 1 && (R = i.indexOf(P, S + 1));
                        var O = A(-1 === R ? w : Math.min(w, R));
                        if (i.substr(S + 1 + O, e) === M) {
                            f.push(i.substring(W, S).replace(C, z)), i[W = S + 1 + O + e] !== z && (S = i.indexOf(z, W)), w = i.indexOf(M, W), R = i.indexOf(P, W);
                            break;
                        }
                        var x = A(R);
                        if (i.substring(S + 1 + x, S + 1 + x + s) === P) {
                            if (f.push(i.substring(W, S).replace(C, z)), D(S + 1 + x + s), w = i.indexOf(M, W), S = i.indexOf(z, W), o && (F(), H)) return L();
                            if (N && u.length >= N) return L(!0);
                            break;
                        }
                        h.push({
                            type: "Quotes",
                            code: "InvalidQuotes",
                            message: "Trailing quote on quoted field is malformed",
                            row: u.length,
                            index: W
                        }), S++;
                    }
                } else S++;
            }
            return T();
            function I(e) {
                u.push(e), d = W;
            }
            function A(e) {
                var t = 0;
                if (-1 !== e) {
                    var r = i.substring(S + 1, e);
                    r && "" === r.trim() && (t = r.length);
                }
                return t;
            }
            function T(e) {
                return r || (void 0 === e && (e = i.substring(W)), f.push(e), W = n, I(f), o && F()), L();
            }
            function D(e) {
                W = e, I(f), f = [], R = i.indexOf(P, W);
            }
            function L(e) {
                return {
                    data: u,
                    errors: h,
                    meta: {
                        delimiter: M,
                        linebreak: P,
                        aborted: H,
                        truncated: !!e,
                        cursor: d + (t || 0)
                    }
                };
            }
            function F() {
                q(L()), u = [], h = [];
            }
        }, this.abort = function() {
            H = !0;
        }, this.getCharIndex = function() {
            return W;
        };
    }
    function _(e) {
        var t = e.data, r = a[t.workerId], i = !1;
        if (t.error) r.userError(t.error, t.file);
        else if (t.results && t.results.data) {
            var n = {
                abort: function() {
                    i = !0, m(t.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    });
                },
                pause: y,
                resume: y
            };
            if (J(r.userStep)) {
                for(var s = 0; s < t.results.data.length && (r.userStep({
                    data: t.results.data[s],
                    errors: t.results.errors,
                    meta: t.results.meta
                }, n), !i); s++);
                delete t.results;
            } else J(r.userChunk) && (r.userChunk(t.results, n, t.file), delete t.results);
        }
        t.finished && !i && m(t.workerId, t.results);
    }
    function m(e, t) {
        var r = a[e];
        J(r.userComplete) && r.userComplete(t), r.terminate(), delete a[e];
    }
    function y() {
        throw new Error("Not implemented.");
    }
    function w(e) {
        if ("object" != typeof e || null === e) return e;
        var t = Array.isArray(e) ? [] : {};
        for(var r in e)t[r] = w(e[r]);
        return t;
    }
    function v(e, t) {
        return function() {
            e.apply(t, arguments);
        };
    }
    function J(e) {
        return "function" == typeof e;
    }
    return o && (f.onmessage = function(e) {
        var t = e.data;
        void 0 === b.WORKER_ID && t && (b.WORKER_ID = t.workerId);
        if ("string" == typeof t.input) f.postMessage({
            workerId: b.WORKER_ID,
            results: b.parse(t.input, t.config),
            finished: !0
        });
        else if (f.File && t.input instanceof File || t.input instanceof Object) {
            var r = b.parse(t.input, t.config);
            r && f.postMessage({
                workerId: b.WORKER_ID,
                results: r,
                finished: !0
            });
        }
    }), (l.prototype = Object.create(h.prototype)).constructor = l, (c.prototype = Object.create(h.prototype)).constructor = c, (p.prototype = Object.create(p.prototype)).constructor = p, (g.prototype = Object.create(h.prototype)).constructor = g, b;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["bYshZ","bWbkW"], "bWbkW", "parcelRequired7b7")

//# sourceMappingURL=index.17ce229f.js.map
