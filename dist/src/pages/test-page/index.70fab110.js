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
})({"7TnVg":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "cdb2482f70fab110";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ldbFK":[function(require,module,exports) {
const root = document.querySelector("#root");
root.textContent = "testpage";
const names = [
    "Anna",
    "Vika",
    "Sasha"
];
var fs = require("fs");
var posthtml = require("posthtml");
var posthtmlCssModules = require("posthtml-css-modules");
var template = fs.readFileSync("./about.html", "utf8");
posthtml([
    posthtmlCssModules("./cssModules.json")
]).process(template).then(function(result) {
    console.log(result.html);
});

},{"fs":"jhUEF","posthtml":"3T3ky","posthtml-css-modules":"5KHsz"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"3T3ky":[function(require,module,exports) {
const pkg = require("../package.json");
const Api = require("./api.js");
let { parser  } = require("posthtml-parser");
let { render  } = require("posthtml-render");
/**
 * @author Ivan Voischev (@voischev),
 *         Ivan Demidov (@scrum)
 *
 * @requires api
 * @requires posthtml-parser
 * @requires posthtml-render
 *
 * @constructor PostHTML
 * @param {Array} plugins - An array of PostHTML plugins
 */ class PostHTML {
    constructor(plugins){
        /**
   * PostHTML Instance
   *
   * @prop plugins
   * @prop options
   */ this.version = pkg.version;
        this.name = pkg.name;
        this.plugins = typeof plugins === "function" ? [
            plugins
        ] : plugins || [];
        this.source = "";
        /**
     * Tree messages to store and pass metadata between plugins
     *
     * @memberof tree
     * @type {Array} messages
     *
     * @example
     * ```js
     * export default function plugin (options = {}) {
     *   return function (tree) {
     *      tree.messages.push({
     *        type: 'dependency',
     *        file: 'path/to/dependency.html',
     *        from: tree.options.from
     *      })
     *
     *      return tree
     *   }
     * }
     * ```
     */ this.messages = [];
        /**
     * Tree method parsing string inside plugins.
     *
     * @memberof tree
     * @type {Function} parser
     *
     * @example
     * ```js
     * export default function plugin (options = {}) {
     *   return function (tree) {
     *      tree.match({ tag: 'include' }, function(node) {
     *          node.tag = false;
     *          node.content = tree.parser(fs.readFileSync(node.attr.src))
     *          return node
     *      })
     *
     *      return tree
     *   }
     * }
     * ```
     */ this.parser = parser;
        /**
     * Tree method rendering tree to string inside plugins.
     *
     * @memberof tree
     * @type {Function} render
     *
     * @example
     * ```js
     * export default function plugin (options = {}) {
     *    return function (tree) {
     *      var outherTree = ['\n', {tag: 'div', content: ['1']}, '\n\t', {tag: 'div', content: ['2']}, '\n'];
     *      var htmlWitchoutSpaceless = tree.render(outherTree).replace(/[\n|\t]/g, '');
     *      return tree.parser(htmlWitchoutSpaceless)
     *    }
     * }
     * ```
     */ this.render = render;
        // extend api methods
        Api.call(this);
    }
    /**
  * @this posthtml
  * @param   {Function} plugin - A PostHTML plugin
  * @returns {Constructor} - this(PostHTML)
  *
  * **Usage**
  * ```js
  * ph.use((tree) => { tag: 'div', content: tree })
  *   .process('<html>..</html>', {})
  *   .then((result) => result))
  * ```
  */ use(...args) {
        this.plugins.push(...args);
        return this;
    }
    /**
   * @param   {String} html - Input (HTML)
   * @param   {?Object} options - PostHTML Options
   * @returns {Object<{html: String, tree: PostHTMLTree}>} - Sync Mode
   * @returns {Promise<{html: String, tree: PostHTMLTree}>} - Async Mode (default)
   *
   * **Usage**
   *
   * **Sync**
   * ```js
   * ph.process('<html>..</html>', { sync: true }).html
   * ```
   *
   * **Async**
   * ```js
   * ph.process('<html>..</html>', {}).then((result) => result))
   * ```
   */ process(tree1, options = {}) {
        /**
     * ## PostHTML Options
     *
     * @type {Object}
     * @prop {?Boolean} options.sync - enables sync mode, plugins will run synchronously, throws an error when used with async plugins
     * @prop {?Function} options.parser - use custom parser, replaces default (posthtml-parser)
     * @prop {?Function} options.render - use custom render, replaces default (posthtml-render)
     * @prop {?Boolean} options.skipParse - disable parsing
     * @prop {?Array} options.directives - Adds processing of custom [directives](https://github.com/posthtml/posthtml-parser#directives).
     */ this.options = options;
        this.source = tree1;
        if (options.parser) parser = this.parser = options.parser;
        if (options.render) render = this.render = options.render;
        tree1 = options.skipParse ? tree1 || [] : parser(tree1, options);
        tree1 = [].concat(tree1);
        // sync mode
        if (options.sync === true) {
            this.plugins.forEach((plugin, index)=>{
                _treeExtendApi(tree1, this);
                let result;
                if (plugin.length === 2 || isPromise(result = plugin(tree1))) throw new Error(`Can’t process contents in sync mode because of async plugin: ${plugin.name}`);
                // clearing the tree of options
                if (index !== this.plugins.length - 1 && !options.skipParse) tree1 = [].concat(tree1);
                // return the previous tree unless result is fulfilled
                tree1 = result || tree1;
            });
            return lazyResult(render, tree1);
        }
        // async mode
        let i = 0;
        const next = (result, cb)=>{
            _treeExtendApi(result, this);
            // all plugins called
            if (this.plugins.length <= i) {
                cb(null, result);
                return;
            }
            // little helper to go to the next iteration
            function _next(res) {
                if (res && !options.skipParse) res = [].concat(res);
                return next(res || result, cb);
            }
            // call next
            const plugin = this.plugins[i++];
            if (plugin.length === 2) {
                plugin(result, (err, res)=>{
                    if (err) return cb(err);
                    _next(res);
                });
                return;
            }
            // sync and promised plugins
            let err1 = null;
            const res1 = tryCatch(()=>plugin(result), (e)=>{
                err1 = e;
                return e;
            });
            if (err1) {
                cb(err1);
                return;
            }
            if (isPromise(res1)) {
                res1.then(_next).catch(cb);
                return;
            }
            _next(res1);
        };
        return new Promise((resolve, reject)=>{
            next(tree1, (err, tree)=>{
                if (err) reject(err);
                else resolve(lazyResult(render, tree));
            });
        });
    }
}
/**
 * @exports posthtml
 *
 * @param  {Array} plugins
 * @return {Function} posthtml
 *
 * **Usage**
 * ```js
 * import posthtml from 'posthtml'
 * import plugin from 'posthtml-plugin'
 *
 * const ph = posthtml([ plugin() ])
 * ```
 */ module.exports = (plugins)=>new PostHTML(plugins);
/**
 * Extension of options tree
 *
 * @private
 *
 * @param   {Array}    tree
 * @param   {Object}   PostHTML
 * @returns {?*}
 */ function _treeExtendApi(t, _t) {
    if (typeof t === "object") t = Object.assign(t, _t);
}
/**
 * Checks if parameter is a Promise (or thenable) object.
 *
 * @private
 *
 * @param   {*} promise - Target `{}` to test
 * @returns {Boolean}
 */ function isPromise(promise) {
    return !!promise && typeof promise.then === "function";
}
/**
 * Simple try/catch helper, if exists, returns result
 *
 * @private
 *
 * @param   {Function} tryFn - try block
 * @param   {Function} catchFn - catch block
 * @returns {?*}
 */ function tryCatch(tryFn, catchFn) {
    try {
        return tryFn();
    } catch (err) {
        catchFn(err);
    }
}
/**
 * Wraps the PostHTMLTree within an object using a getter to render HTML on demand.
 *
 * @private
 *
 * @param   {Function} render
 * @param   {Array}    tree
 * @returns {Object<{html: String, tree: Array}>}
 */ function lazyResult(render1, tree) {
    return {
        get html () {
            return render1(tree, tree.options);
        },
        tree,
        messages: tree.messages
    };
}

},{"../package.json":"jq6Ye","./api.js":"dsV2V","posthtml-parser":"aTJHp","posthtml-render":"llg2c"}],"jq6Ye":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"posthtml","version":"0.16.6","description":"HTML/XML processor","keywords":["html","xml","postproccessor","parser","transform","transformations","manipulation","preprocessor","processor"],"main":"lib","types":"types/posthtml.d.ts","files":["types","lib"],"engines":{"node":">=12.0.0"},"dependencies":{"posthtml-parser":"^0.11.0","posthtml-render":"^3.0.0"},"devDependencies":{"@commitlint/cli":"^16.2.1","@commitlint/config-angular":"^16.2.1","c8":"^7.7.3","chai":"^4.3.4","chai-as-promised":"^7.1.1","chai-subset":"^1.6.0","conventional-changelog-cli":"^2.1.1","husky":"^7.0.1","jsdoc-to-markdown":"^7.0.1","lint-staged":"^12.3.4","mocha":"^9.0.3","standard":"^16.0.2"},"scripts":{"version":"conventional-changelog -i changelog.md -s -r 0 && git add changelog.md","test":"c8 mocha","docs:api":"jsdoc2md lib/api.js > docs/api.md","docs:core":"jsdoc2md lib/index.js > docs/core.md"},"author":"Ivan Voischev <voischev.ivan@ya.ru>","contributors":[{"name":"Ivan Voischev","email":"voischev.ivan@ya.ru"},{"name":"Ivan Demidov","email":"scrum@list.ru"}],"homepage":"https://posthtml.org","repository":"https://github.com/posthtml/posthtml.git","bugs":"https://github.com/posthtml/posthtml/issues","license":"MIT"}');

},{}],"dsV2V":[function(require,module,exports) {
"use strict";
/**
 * # API
 *
 * @author Ivan Voischev (@voischev),
 *         Anton Winogradov (@awinogradov),
 *         Alexej Yaroshevich (@zxqfox),
 *         Vasiliy (@Yeti-or)
 *
 * @namespace tree
 */ function Api() {
    this.walk = walk;
    this.match = match;
}
/**
 * Walks the tree and passes all nodes via a callback
 *
 * @memberof tree
 *
 * @param  {Function} cb  Callback
 * @return {Function}     Callback(node)
 *
 *@example
 * ```js
 * export const walk = (tree) => {
 *   tree.walk((node) => {
 *     let classes = node.attrs && node.attrs.class.split(' ') || []
 *
 *     if (classes.includes(className)) return cb(node)
 *       return node
 *   })
 * }
 * ```
 */ function walk(cb) {
    return traverse(this, cb);
}
/**
 * Matches an expression to search for nodes in the tree
 *
 * @memberof tree
 *
 * @param  {String|RegExp|Object|Array} expression - Matcher(s) to search
 * @param  {Function} cb Callback
 *
 * @return {Function} Callback(node)
 *
 * @example
 * ```js
 * export const match = (tree) => {
 *   // Single matcher
 *   tree.match({ tag: 'custom-tag' }, (node) => {
 *     let tag = node.tag
 *
 *     Object.assign(node, { tag: 'div', attrs: {class: tag} })
 *
 *     return node
 *   })
 *   // Multiple matchers
 *   tree.match([{ tag: 'b' }, { tag: 'strong' }], (node) => {
 *     let style = 'font-weight: bold;'
 *
 *     node.tag = 'span'
 *
 *     node.attrs
 *       ? ( node.attrs.style
 *         ? ( node.attrs.style += style )
 *         : node.attrs.style = style
 *       )
 *       : node.attrs = { style: style }
 *
 *     return node
 *   })
 * }
 * ```
 */ function match(expression, cb) {
    return Array.isArray(expression) ? traverse(this, (node)=>{
        for(let i = 0; i < expression.length; i++){
            if (compare(expression[i], node)) return cb(node);
        }
        return node;
    }) : traverse(this, (node)=>{
        if (compare(expression, node)) return cb(node);
        return node;
    });
}
module.exports = Api;
module.exports.match = match;
module.exports.walk = walk;
/** @private */ function traverse(tree, cb) {
    if (Array.isArray(tree)) for(let i = 0; i < tree.length; i++)tree[i] = traverse(cb(tree[i]), cb);
    else if (tree && typeof tree === "object" && Object.prototype.hasOwnProperty.call(tree, "content")) traverse(tree.content, cb);
    return tree;
}
/** @private */ function compare(expected, actual) {
    if (expected instanceof RegExp) {
        if (typeof actual === "object") return false;
        if (typeof actual === "string") return expected.test(actual);
    }
    if (typeof expected !== typeof actual) return false;
    if (typeof expected !== "object" || expected === null) return expected === actual;
    if (Array.isArray(expected)) return expected.every((exp)=>[].some.call(actual, (act)=>compare(exp, act)));
    return Object.keys(expected).every((key)=>{
        const ao = actual[key];
        const eo = expected[key];
        if (typeof eo === "object" && eo !== null && ao !== null) return compare(eo, ao);
        if (typeof eo === "boolean") return eo !== (ao == null);
        return ao === eo;
    });
}

},{}],"aTJHp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _chunk2UQLUWPHjs = require("./chunk.2UQLUWPH.js");
var _htmlparser2 = require("htmlparser2");
var I = {
    lowerCaseTags: !1,
    lowerCaseAttributeNames: !1,
    decodeEntities: !1
}, P = [
    {
        name: "!doctype",
        start: "<",
        end: ">"
    }
], w = exports.parser = (g, c = {})=>{
    let a = new _chunk2UQLUWPHjs.a(g), i = [], s = [], p = 0, f = {};
    function u() {
        return i[i.length - 1];
    }
    function y(n, t) {
        return n.name instanceof RegExp ? new RegExp(n.name.source, "i").test(t) : t === n.name;
    }
    function x(n) {
        let t = {};
        return Object.keys(n).forEach((e)=>{
            let o = {};
            o[e] = String(n[e]).replace(/&quot;/g, '"'), c.recognizeNoValueAttribute && f[e] && (o[e] = !0), Object.assign(t, o);
        }), t;
    }
    function A(n, t) {
        var l;
        let e = P.concat((l = c.directives) != null ? l : []), o = u();
        for (let d of e){
            let b = d.start + t + d.end;
            if (y(d, n.toLowerCase())) {
                if (o === void 0) {
                    s.push(b);
                    return;
                }
                typeof o == "object" && (o.content === void 0 && (o.content = []), Array.isArray(o.content) && o.content.push(b));
            }
        }
    }
    function N(n) {
        let t = u(), e = `<!--${n}-->`;
        if (t === void 0) {
            s.push(e);
            return;
        }
        typeof t == "object" && (t.content === void 0 && (t.content = []), Array.isArray(t.content) && t.content.push(e));
    }
    function m(n, t, e) {
        e === void 0 && (f[n] = !0);
    }
    function h(n, t) {
        let e = {
            tag: n
        };
        c.sourceLocations && (e.location = {
            start: a.getPosition(r.startIndex),
            end: a.getPosition(r.endIndex)
        }, p = r.endIndex), Object.keys(t).length > 0 && (e.attrs = x(t)), f = {}, i.push(e);
    }
    function T(n, t) {
        let e = i.pop();
        if (e && typeof e == "object" && e.location && r.endIndex !== null && (t ? p < r.startIndex && (e.location.end = a.getPosition(r.startIndex - 1)) : e.location.end = a.getPosition(r.endIndex)), e) {
            let o = u();
            if (i.length <= 0) {
                s.push(e);
                return;
            }
            typeof o == "object" && (o.content === void 0 && (o.content = []), Array.isArray(o.content) && o.content.push(e));
        }
    }
    function v(n) {
        let t = u();
        if (t === void 0) {
            s.push(n);
            return;
        }
        if (typeof t == "object") {
            if (t.content && Array.isArray(t.content) && t.content.length > 0) {
                let e = t.content[t.content.length - 1];
                if (typeof e == "string" && !e.startsWith("<!--")) {
                    t.content[t.content.length - 1] = `${e}${n}`;
                    return;
                }
            }
            t.content === void 0 && (t.content = []), Array.isArray(t.content) && t.content.push(n);
        }
    }
    let r = new _htmlparser2.Parser({
        onprocessinginstruction: A,
        oncomment: N,
        onattribute: m,
        onopentag: h,
        onclosetag: T,
        ontext: v
    }, {
        ...I,
        ...c
    });
    return r.write(g), r.end(), s;
};
exports.parser = w;

},{"./chunk.2UQLUWPH.js":"ehpro","htmlparser2":"u1wQe"}],"ehpro":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var i = class {
    constructor(t){
        this.source = t, this.lastPosition = {
            line: 1,
            column: 1
        }, this.lastIndex = 0;
    }
    getPosition(t) {
        if (t < this.lastIndex) throw new Error("Source indices must be monotonic");
        for(; this.lastIndex < t;)this.source.charCodeAt(this.lastIndex) === 10 ? (this.lastPosition.line++, this.lastPosition.column = 1) : this.lastPosition.column++, this.lastIndex++;
        return {
            line: this.lastPosition.line,
            column: this.lastPosition.column
        };
    }
};
exports.a = i;

},{}],"u1wQe":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
var Parser_1 = require("./Parser");
Object.defineProperty(exports, "Parser", {
    enumerable: true,
    get: function() {
        return Parser_1.Parser;
    }
});
var domhandler_1 = require("domhandler");
Object.defineProperty(exports, "DomHandler", {
    enumerable: true,
    get: function() {
        return domhandler_1.DomHandler;
    }
});
Object.defineProperty(exports, "DefaultHandler", {
    enumerable: true,
    get: function() {
        return domhandler_1.DomHandler;
    }
});
// Helper methods
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */ function parseDocument(data, options) {
    var handler = new domhandler_1.DomHandler(undefined, options);
    new Parser_1.Parser(handler, options).end(data);
    return handler.root;
}
exports.parseDocument = parseDocument;
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 * @deprecated Use `parseDocument` instead.
 */ function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
exports.parseDOM = parseDOM;
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param cb A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
 */ function createDomStream(cb, options, elementCb) {
    var handler = new domhandler_1.DomHandler(cb, options, elementCb);
    return new Parser_1.Parser(handler, options);
}
exports.createDomStream = createDomStream;
var Tokenizer_1 = require("./Tokenizer");
Object.defineProperty(exports, "Tokenizer", {
    enumerable: true,
    get: function() {
        return __importDefault(Tokenizer_1).default;
    }
});
var ElementType = __importStar(require("domelementtype"));
exports.ElementType = ElementType;
/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */ __exportStar(require("./FeedHandler"), exports);
exports.DomUtils = __importStar(require("domutils"));
var FeedHandler_1 = require("./FeedHandler");
Object.defineProperty(exports, "RssHandler", {
    enumerable: true,
    get: function() {
        return FeedHandler_1.FeedHandler;
    }
});

},{"./Parser":"hebxp","domhandler":"fQBlo","./Tokenizer":"hyVpZ","domelementtype":"isPKn","./FeedHandler":"d4HtC","domutils":"41sL1"}],"hebxp":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parser = void 0;
var Tokenizer_1 = __importDefault(require("./Tokenizer"));
var formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea", 
]);
var pTag = new Set([
    "p"
]);
var tableSectionTags = new Set([
    "thead",
    "tbody"
]);
var ddtTags = new Set([
    "dd",
    "dt"
]);
var rtpTags = new Set([
    "rt",
    "rp"
]);
var openImpliesClose = new Map([
    [
        "tr",
        new Set([
            "tr",
            "th",
            "td"
        ])
    ],
    [
        "th",
        new Set([
            "th"
        ])
    ],
    [
        "td",
        new Set([
            "thead",
            "th",
            "td"
        ])
    ],
    [
        "body",
        new Set([
            "head",
            "link",
            "script"
        ])
    ],
    [
        "li",
        new Set([
            "li"
        ])
    ],
    [
        "p",
        pTag
    ],
    [
        "h1",
        pTag
    ],
    [
        "h2",
        pTag
    ],
    [
        "h3",
        pTag
    ],
    [
        "h4",
        pTag
    ],
    [
        "h5",
        pTag
    ],
    [
        "h6",
        pTag
    ],
    [
        "select",
        formTags
    ],
    [
        "input",
        formTags
    ],
    [
        "output",
        formTags
    ],
    [
        "button",
        formTags
    ],
    [
        "datalist",
        formTags
    ],
    [
        "textarea",
        formTags
    ],
    [
        "option",
        new Set([
            "option"
        ])
    ],
    [
        "optgroup",
        new Set([
            "optgroup",
            "option"
        ])
    ],
    [
        "dd",
        ddtTags
    ],
    [
        "dt",
        ddtTags
    ],
    [
        "address",
        pTag
    ],
    [
        "article",
        pTag
    ],
    [
        "aside",
        pTag
    ],
    [
        "blockquote",
        pTag
    ],
    [
        "details",
        pTag
    ],
    [
        "div",
        pTag
    ],
    [
        "dl",
        pTag
    ],
    [
        "fieldset",
        pTag
    ],
    [
        "figcaption",
        pTag
    ],
    [
        "figure",
        pTag
    ],
    [
        "footer",
        pTag
    ],
    [
        "form",
        pTag
    ],
    [
        "header",
        pTag
    ],
    [
        "hr",
        pTag
    ],
    [
        "main",
        pTag
    ],
    [
        "nav",
        pTag
    ],
    [
        "ol",
        pTag
    ],
    [
        "pre",
        pTag
    ],
    [
        "section",
        pTag
    ],
    [
        "table",
        pTag
    ],
    [
        "ul",
        pTag
    ],
    [
        "rt",
        rtpTags
    ],
    [
        "rp",
        rtpTags
    ],
    [
        "tbody",
        tableSectionTags
    ],
    [
        "tfoot",
        tableSectionTags
    ], 
]);
var voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr", 
]);
var foreignContextElements = new Set([
    "math",
    "svg"
]);
var htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title", 
]);
var reNameEnd = /\s|\//;
var Parser = /** @class */ function() {
    function Parser1(cbs, options) {
        if (options === void 0) options = {};
        var _a, _b, _c, _d, _e;
        this.options = options;
        /** The start index of the last event. */ this.startIndex = 0;
        /** The end index of the last event. */ this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */ this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 || _e.call(_d, this);
    }
    // Tokenizer event handlers
    /** @internal */ Parser1.prototype.ontext = function(data) {
        var _a, _b;
        var idx = this.tokenizer.getAbsoluteIndex();
        this.endIndex = idx - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 || _b.call(_a, data);
        this.startIndex = idx;
    };
    Parser1.prototype.isVoidElement = function(name) {
        return !this.options.xmlMode && voidElements.has(name);
    };
    /** @internal */ Parser1.prototype.onopentagname = function(name) {
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.lowerCaseTagNames) name = name.toLowerCase();
        this.emitOpenTag(name);
    };
    Parser1.prototype.emitOpenTag = function(name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        var impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
        if (impliesClose) while(this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])){
            var el = this.stack.pop();
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 || _b.call(_a, el, true);
        }
        if (!this.isVoidElement(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) this.foreignContext.push(true);
            else if (htmlIntegrationElements.has(name)) this.foreignContext.push(false);
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 || _d.call(_c, name);
        if (this.cbs.onopentag) this.attribs = {};
    };
    Parser1.prototype.endOpenTag = function(isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 || _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) this.cbs.onclosetag(this.tagname, true);
        this.tagname = "";
    };
    /** @internal */ Parser1.prototype.onopentagend = function() {
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */ Parser1.prototype.onclosetag = function(name) {
        var _a, _b, _c, _d, _e, _f;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.lowerCaseTagNames) name = name.toLowerCase();
        if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) this.foreignContext.pop();
        if (!this.isVoidElement(name)) {
            var pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    var count = this.stack.length - pos;
                    while(count--)// We know the stack has sufficient elements.
                    this.cbs.onclosetag(this.stack.pop(), count !== 0);
                } else this.stack.length = pos;
            } else if (!this.options.xmlMode && name === "p") {
                this.emitOpenTag(name);
                this.closeCurrentTag(true);
            }
        } else if (!this.options.xmlMode && name === "br") {
            // We can't go through `emitOpenTag` here, as `br` would be implicitly closed.
            (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 || _b.call(_a, name);
            (_d = (_c = this.cbs).onopentag) === null || _d === void 0 || _d.call(_c, name, {}, true);
            (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 || _f.call(_e, name, false);
        }
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */ Parser1.prototype.onselfclosingtag = function() {
        if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = this.endIndex + 1;
        } else // Ignore the fact that the tag is self-closing.
        this.onopentagend();
    };
    Parser1.prototype.closeCurrentTag = function(isOpenImplied) {
        var _a, _b;
        var name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[this.stack.length - 1] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 || _b.call(_a, name, !isOpenImplied);
            this.stack.pop();
        }
    };
    /** @internal */ Parser1.prototype.onattribname = function(name) {
        this.startIndex = this.tokenizer.getAbsoluteSectionStart();
        if (this.lowerCaseAttributeNames) name = name.toLowerCase();
        this.attribname = name;
    };
    /** @internal */ Parser1.prototype.onattribdata = function(value) {
        this.attribvalue += value;
    };
    /** @internal */ Parser1.prototype.onattribend = function(quote) {
        var _a, _b;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 || _b.call(_a, this.attribname, this.attribvalue, quote);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) this.attribs[this.attribname] = this.attribvalue;
        this.attribname = "";
        this.attribvalue = "";
    };
    Parser1.prototype.getInstructionName = function(value) {
        var idx = value.search(reNameEnd);
        var name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) name = name.toLowerCase();
        return name;
    };
    /** @internal */ Parser1.prototype.ondeclaration = function(value) {
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.cbs.onprocessinginstruction) {
            var name_1 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
        }
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */ Parser1.prototype.onprocessinginstruction = function(value) {
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.cbs.onprocessinginstruction) {
            var name_2 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
        }
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */ Parser1.prototype.oncomment = function(value) {
        var _a, _b, _c, _d;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 || _b.call(_a, value);
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 || _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */ Parser1.prototype.oncdata = function(value) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 || _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 || _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 || _f.call(_e);
        } else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 || _h.call(_g, "[CDATA[" + value + "]]");
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 || _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = this.endIndex + 1;
    };
    /** @internal */ Parser1.prototype.onerror = function(err) {
        var _a, _b;
        (_b = (_a = this.cbs).onerror) === null || _b === void 0 || _b.call(_a, err);
    };
    /** @internal */ Parser1.prototype.onend = function() {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for(var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i], true));
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 || _b.call(_a);
    };
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */ Parser1.prototype.reset = function() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 || _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack = [];
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 || _d.call(_c, this);
    };
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */ Parser1.prototype.parseComplete = function(data) {
        this.reset();
        this.end(data);
    };
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */ Parser1.prototype.write = function(chunk) {
        this.tokenizer.write(chunk);
    };
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */ Parser1.prototype.end = function(chunk) {
        this.tokenizer.end(chunk);
    };
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */ Parser1.prototype.pause = function() {
        this.tokenizer.pause();
    };
    /**
     * Resumes parsing after `pause` was called.
     */ Parser1.prototype.resume = function() {
        this.tokenizer.resume();
    };
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */ Parser1.prototype.parseChunk = function(chunk) {
        this.write(chunk);
    };
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */ Parser1.prototype.done = function(chunk) {
        this.end(chunk);
    };
    return Parser1;
}();
exports.Parser = Parser;

},{"./Tokenizer":"hyVpZ"}],"hyVpZ":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var decode_codepoint_1 = __importDefault(require("entities/lib/decode_codepoint"));
var decode_1 = require("entities/lib/decode");
function isWhitespace(c) {
    return c === 32 /* Space */  || c === 10 /* NewLine */  || c === 9 /* Tab */  || c === 12 /* FormFeed */  || c === 13 /* CarriageReturn */ ;
}
function isEndOfTagSection(c) {
    return c === 47 /* Slash */  || c === 62 /* Gt */  || isWhitespace(c);
}
function isNumber(c) {
    return c >= 48 /* Zero */  && c <= 57 /* Nine */ ;
}
function isASCIIAlpha(c) {
    return c >= 97 /* LowerA */  && c <= 122 /* LowerZ */  || c >= 65 /* UpperA */  && c <= 90 /* UpperZ */ ;
}
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */ var Sequences = {
    Cdata: new Uint16Array([
        0x43,
        0x44,
        0x41,
        0x54,
        0x41,
        0x5b
    ]),
    CdataEnd: new Uint16Array([
        0x5d,
        0x5d,
        0x3e
    ]),
    CommentEnd: new Uint16Array([
        0x2d,
        0x2d,
        0x3e
    ]),
    ScriptEnd: new Uint16Array([
        0x3c,
        0x2f,
        0x73,
        0x63,
        0x72,
        0x69,
        0x70,
        0x74, 
    ]),
    StyleEnd: new Uint16Array([
        0x3c,
        0x2f,
        0x73,
        0x74,
        0x79,
        0x6c,
        0x65
    ]),
    TitleEnd: new Uint16Array([
        0x3c,
        0x2f,
        0x74,
        0x69,
        0x74,
        0x6c,
        0x65
    ])
};
var Tokenizer = /** @class */ function() {
    function Tokenizer1(_a, cbs) {
        var _b = _a.xmlMode, xmlMode = _b === void 0 ? false : _b, _c = _a.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
        this.cbs = cbs;
        /** The current state the tokenizer is in. */ this._state = 1 /* Text */ ;
        /** The read buffer. */ this.buffer = "";
        /** The beginning of the section that is currently being read. */ this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */ this._index = 0;
        /**
         * Data that has already been processed will be removed from the buffer occasionally.
         * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
         */ this.bufferOffset = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */ this.baseState = 1 /* Text */ ;
        /** For special parsing behavior inside of script and style tags. */ this.isSpecial = false;
        /** Indicates whether the tokenizer has been paused. */ this.running = true;
        /** Indicates whether the tokenizer has finished running / `.end` has been called. */ this.ended = false;
        this.sequenceIndex = 0;
        this.trieIndex = 0;
        this.trieCurrent = 0;
        this.trieResult = null;
        this.entityExcess = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityTrie = xmlMode ? decode_1.xmlDecodeTree : decode_1.htmlDecodeTree;
    }
    Tokenizer1.prototype.reset = function() {
        this._state = 1 /* Text */ ;
        this.buffer = "";
        this.sectionStart = 0;
        this._index = 0;
        this.bufferOffset = 0;
        this.baseState = 1 /* Text */ ;
        this.currentSequence = undefined;
        this.running = true;
        this.ended = false;
    };
    Tokenizer1.prototype.write = function(chunk) {
        if (this.ended) return this.cbs.onerror(Error(".write() after done!"));
        this.buffer += chunk;
        this.parse();
    };
    Tokenizer1.prototype.end = function(chunk) {
        if (this.ended) return this.cbs.onerror(Error(".end() after done!"));
        if (chunk) this.write(chunk);
        this.ended = true;
        if (this.running) this.finish();
    };
    Tokenizer1.prototype.pause = function() {
        this.running = false;
    };
    Tokenizer1.prototype.resume = function() {
        this.running = true;
        if (this._index < this.buffer.length) this.parse();
        if (this.ended) this.finish();
    };
    /**
     * The start of the current section.
     */ Tokenizer1.prototype.getAbsoluteSectionStart = function() {
        return this.sectionStart + this.bufferOffset;
    };
    /**
     * The current index within all of the written data.
     */ Tokenizer1.prototype.getAbsoluteIndex = function() {
        return this.bufferOffset + this._index;
    };
    Tokenizer1.prototype.stateText = function(c) {
        if (c === 60 /* Lt */  || !this.decodeEntities && this.fastForwardTo(60 /* Lt */ )) {
            if (this._index > this.sectionStart) this.cbs.ontext(this.getSection());
            this._state = 2 /* BeforeTagName */ ;
            this.sectionStart = this._index;
        } else if (this.decodeEntities && c === 38 /* Amp */ ) this._state = 25 /* BeforeEntity */ ;
    };
    Tokenizer1.prototype.stateSpecialStartSequence = function(c) {
        var isEnd = this.sequenceIndex === this.currentSequence.length;
        var isMatch = isEnd ? isEndOfTagSection(c) : (c | 0x20) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) this.isSpecial = false;
        else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this._state = 3 /* InTagName */ ;
        this.stateInTagName(c);
    };
    /** Look for an end tag. For <title> tags, also decode entities. */ Tokenizer1.prototype.stateInSpecialTag = function(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === 62 /* Gt */  || isWhitespace(c)) {
                var endOfText = this._index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    // Spoof the index so that reported locations match up.
                    var actualIndex = this._index;
                    this._index = endOfText;
                    this.cbs.ontext(this.getSection());
                    this._index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2; // Skip over the `</`
                this.stateInClosingTagName(c);
                return; // We are done; skip the rest of the function.
            }
            this.sequenceIndex = 0;
        }
        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) this.sequenceIndex += 1;
        else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) // We have to parse entities in <title> tags.
            {
                if (this.decodeEntities && c === 38 /* Amp */ ) this._state = 25 /* BeforeEntity */ ;
            } else if (this.fastForwardTo(60 /* Lt */ )) // Outside of <title> tags, we can fast-forward.
            this.sequenceIndex = 1;
        } else // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
        this.sequenceIndex = Number(c === 60 /* Lt */ );
    };
    Tokenizer1.prototype.stateCDATASequence = function(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this._state = 21 /* InCommentLike */ ;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this._index + 1;
            }
        } else {
            this.sequenceIndex = 0;
            this._state = 16 /* InDeclaration */ ;
            this.stateInDeclaration(c); // Reconsume the character
        }
    };
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */ Tokenizer1.prototype.fastForwardTo = function(c) {
        while(++this._index < this.buffer.length){
            if (this.buffer.charCodeAt(this._index) === c) return true;
        }
        /*
         * We increment the index at the end of the `parse` loop,
         * so set it to `buffer.length - 1` here.
         *
         * TODO: Refactor `parse` to increment index before calling states.
         */ this._index = this.buffer.length - 1;
        return false;
    };
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */ Tokenizer1.prototype.stateInCommentLike = function(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                // Remove 2 trailing chars
                var section = this.buffer.slice(this.sectionStart, this._index - 2);
                if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(section);
                else this.cbs.oncomment(section);
                this.sequenceIndex = 0;
                this.sectionStart = this._index + 1;
                this._state = 1 /* Text */ ;
            }
        } else if (this.sequenceIndex === 0) // Fast-forward to the first character of the sequence
        {
            if (this.fastForwardTo(this.currentSequence[0])) this.sequenceIndex = 1;
        } else if (c !== this.currentSequence[this.sequenceIndex - 1]) // Allow long sequences, eg. --->, ]]]>
        this.sequenceIndex = 0;
    };
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */ Tokenizer1.prototype.isTagStartChar = function(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    };
    Tokenizer1.prototype.startSpecial = function(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this._state = 23 /* SpecialStartSequence */ ;
    };
    Tokenizer1.prototype.stateBeforeTagName = function(c) {
        if (c === 33 /* ExclamationMark */ ) {
            this._state = 15 /* BeforeDeclaration */ ;
            this.sectionStart = this._index + 1;
        } else if (c === 63 /* Questionmark */ ) {
            this._state = 17 /* InProcessingInstruction */ ;
            this.sectionStart = this._index + 1;
        } else if (this.isTagStartChar(c)) {
            var lower = c | 0x20;
            this.sectionStart = this._index;
            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) this.startSpecial(Sequences.TitleEnd, 3);
            else this._state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? 22 /* BeforeSpecialS */  : 3 /* InTagName */ ;
        } else if (c === 47 /* Slash */ ) this._state = 5 /* BeforeClosingTagName */ ;
        else {
            this._state = 1 /* Text */ ;
            this.stateText(c);
        }
    };
    Tokenizer1.prototype.stateInTagName = function(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.getSection());
            this.sectionStart = -1;
            this._state = 8 /* BeforeAttributeName */ ;
            this.stateBeforeAttributeName(c);
        }
    };
    Tokenizer1.prototype.stateBeforeClosingTagName = function(c) {
        if (isWhitespace(c)) ;
        else if (c === 62 /* Gt */ ) this._state = 1 /* Text */ ;
        else {
            this._state = this.isTagStartChar(c) ? 6 /* InClosingTagName */  : 20 /* InSpecialComment */ ;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateInClosingTagName = function(c) {
        if (c === 62 /* Gt */  || isWhitespace(c)) {
            this.cbs.onclosetag(this.getSection());
            this.sectionStart = -1;
            this._state = 7 /* AfterClosingTagName */ ;
            this.stateAfterClosingTagName(c);
        }
    };
    Tokenizer1.prototype.stateAfterClosingTagName = function(c) {
        // Skip everything until ">"
        if (c === 62 /* Gt */  || this.fastForwardTo(62 /* Gt */ )) {
            this._state = 1 /* Text */ ;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateBeforeAttributeName = function(c) {
        if (c === 62 /* Gt */ ) {
            this.cbs.onopentagend();
            if (this.isSpecial) {
                this._state = 24 /* InSpecialTag */ ;
                this.sequenceIndex = 0;
            } else this._state = 1 /* Text */ ;
            this.baseState = this._state;
            this.sectionStart = this._index + 1;
        } else if (c === 47 /* Slash */ ) this._state = 4 /* InSelfClosingTag */ ;
        else if (!isWhitespace(c)) {
            this._state = 9 /* InAttributeName */ ;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateInSelfClosingTag = function(c) {
        if (c === 62 /* Gt */ ) {
            this.cbs.onselfclosingtag();
            this._state = 1 /* Text */ ;
            this.baseState = 1 /* Text */ ;
            this.sectionStart = this._index + 1;
            this.isSpecial = false; // Reset special state, in case of self-closing special tags
        } else if (!isWhitespace(c)) {
            this._state = 8 /* BeforeAttributeName */ ;
            this.stateBeforeAttributeName(c);
        }
    };
    Tokenizer1.prototype.stateInAttributeName = function(c) {
        if (c === 61 /* Eq */  || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.getSection());
            this.sectionStart = -1;
            this._state = 10 /* AfterAttributeName */ ;
            this.stateAfterAttributeName(c);
        }
    };
    Tokenizer1.prototype.stateAfterAttributeName = function(c) {
        if (c === 61 /* Eq */ ) this._state = 11 /* BeforeAttributeValue */ ;
        else if (c === 47 /* Slash */  || c === 62 /* Gt */ ) {
            this.cbs.onattribend(undefined);
            this._state = 8 /* BeforeAttributeName */ ;
            this.stateBeforeAttributeName(c);
        } else if (!isWhitespace(c)) {
            this.cbs.onattribend(undefined);
            this._state = 9 /* InAttributeName */ ;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateBeforeAttributeValue = function(c) {
        if (c === 34 /* DoubleQuote */ ) {
            this._state = 12 /* InAttributeValueDq */ ;
            this.sectionStart = this._index + 1;
        } else if (c === 39 /* SingleQuote */ ) {
            this._state = 13 /* InAttributeValueSq */ ;
            this.sectionStart = this._index + 1;
        } else if (!isWhitespace(c)) {
            this.sectionStart = this._index;
            this._state = 14 /* InAttributeValueNq */ ;
            this.stateInAttributeValueNoQuotes(c); // Reconsume token
        }
    };
    Tokenizer1.prototype.handleInAttributeValue = function(c, quote) {
        if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
            this.cbs.onattribdata(this.getSection());
            this.sectionStart = -1;
            this.cbs.onattribend(String.fromCharCode(quote));
            this._state = 8 /* BeforeAttributeName */ ;
        } else if (this.decodeEntities && c === 38 /* Amp */ ) {
            this.baseState = this._state;
            this._state = 25 /* BeforeEntity */ ;
        }
    };
    Tokenizer1.prototype.stateInAttributeValueDoubleQuotes = function(c) {
        this.handleInAttributeValue(c, 34 /* DoubleQuote */ );
    };
    Tokenizer1.prototype.stateInAttributeValueSingleQuotes = function(c) {
        this.handleInAttributeValue(c, 39 /* SingleQuote */ );
    };
    Tokenizer1.prototype.stateInAttributeValueNoQuotes = function(c) {
        if (isWhitespace(c) || c === 62 /* Gt */ ) {
            this.cbs.onattribdata(this.getSection());
            this.sectionStart = -1;
            this.cbs.onattribend(null);
            this._state = 8 /* BeforeAttributeName */ ;
            this.stateBeforeAttributeName(c);
        } else if (this.decodeEntities && c === 38 /* Amp */ ) {
            this.baseState = this._state;
            this._state = 25 /* BeforeEntity */ ;
        }
    };
    Tokenizer1.prototype.stateBeforeDeclaration = function(c) {
        if (c === 91 /* OpeningSquareBracket */ ) {
            this._state = 19 /* CDATASequence */ ;
            this.sequenceIndex = 0;
        } else this._state = c === 45 /* Dash */  ? 18 /* BeforeComment */  : 16 /* InDeclaration */ ;
    };
    Tokenizer1.prototype.stateInDeclaration = function(c) {
        if (c === 62 /* Gt */  || this.fastForwardTo(62 /* Gt */ )) {
            this.cbs.ondeclaration(this.getSection());
            this._state = 1 /* Text */ ;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateInProcessingInstruction = function(c) {
        if (c === 62 /* Gt */  || this.fastForwardTo(62 /* Gt */ )) {
            this.cbs.onprocessinginstruction(this.getSection());
            this._state = 1 /* Text */ ;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateBeforeComment = function(c) {
        if (c === 45 /* Dash */ ) {
            this._state = 21 /* InCommentLike */ ;
            this.currentSequence = Sequences.CommentEnd;
            // Allow short comments (eg. <!-->)
            this.sequenceIndex = 2;
            this.sectionStart = this._index + 1;
        } else this._state = 16 /* InDeclaration */ ;
    };
    Tokenizer1.prototype.stateInSpecialComment = function(c) {
        if (c === 62 /* Gt */  || this.fastForwardTo(62 /* Gt */ )) {
            this.cbs.oncomment(this.getSection());
            this._state = 1 /* Text */ ;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateBeforeSpecialS = function(c) {
        var lower = c | 0x20;
        if (lower === Sequences.ScriptEnd[3]) this.startSpecial(Sequences.ScriptEnd, 4);
        else if (lower === Sequences.StyleEnd[3]) this.startSpecial(Sequences.StyleEnd, 4);
        else {
            this._state = 3 /* InTagName */ ;
            this.stateInTagName(c); // Consume the token again
        }
    };
    Tokenizer1.prototype.stateBeforeEntity = function(c) {
        // Start excess with 1 to include the '&'
        this.entityExcess = 1;
        if (c === 35 /* Num */ ) this._state = 26 /* BeforeNumericEntity */ ;
        else if (c === 38 /* Amp */ ) ;
        else {
            this.trieIndex = 0;
            this.trieCurrent = this.entityTrie[0];
            this.trieResult = null;
            this._state = 27 /* InNamedEntity */ ;
            this.stateInNamedEntity(c);
        }
    };
    Tokenizer1.prototype.stateInNamedEntity = function(c) {
        this.entityExcess += 1;
        this.trieIndex = (0, decode_1.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
        if (this.trieIndex < 0) {
            this.emitNamedEntity();
            this._index--;
            return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        // If the branch is a value, store it and continue
        if (this.trieCurrent & decode_1.BinTrieFlags.HAS_VALUE) {
            // If we have a legacy entity while parsing strictly, just skip the number of bytes
            if (!this.allowLegacyEntity() && c !== 59 /* Semi */ ) // No need to consider multi-byte values, as the legacy entity is always a single byte
            this.trieIndex += 1;
            else {
                // Add 1 as we have already incremented the excess
                var entityStart = this._index - this.entityExcess + 1;
                if (entityStart > this.sectionStart) this.emitPartial(this.buffer.substring(this.sectionStart, entityStart));
                // If this is a surrogate pair, combine the higher bits from the node with the next byte
                this.trieResult = this.trieCurrent & decode_1.BinTrieFlags.MULTI_BYTE ? String.fromCharCode(this.entityTrie[++this.trieIndex], this.entityTrie[++this.trieIndex]) : String.fromCharCode(this.entityTrie[++this.trieIndex]);
                this.entityExcess = 0;
                this.sectionStart = this._index + 1;
            }
        }
    };
    Tokenizer1.prototype.emitNamedEntity = function() {
        if (this.trieResult) this.emitPartial(this.trieResult);
        this._state = this.baseState;
    };
    Tokenizer1.prototype.stateBeforeNumericEntity = function(c) {
        if ((c | 0x20) === 120 /* LowerX */ ) {
            this.entityExcess++;
            this._state = 29 /* InHexEntity */ ;
        } else {
            this._state = 28 /* InNumericEntity */ ;
            this.stateInNumericEntity(c);
        }
    };
    Tokenizer1.prototype.decodeNumericEntity = function(base, strict) {
        var entityStart = this._index - this.entityExcess - 1;
        var numberStart = entityStart + 2 + (base >> 4);
        if (numberStart !== this._index) {
            // Emit leading data if any
            if (entityStart > this.sectionStart) this.emitPartial(this.buffer.substring(this.sectionStart, entityStart));
            // Parse entity
            var entity = this.buffer.substring(numberStart, this._index);
            var parsed = parseInt(entity, base);
            this.emitPartial((0, decode_codepoint_1.default)(parsed));
            this.sectionStart = this._index + Number(strict);
        }
        this._state = this.baseState;
    };
    Tokenizer1.prototype.stateInNumericEntity = function(c) {
        if (c === 59 /* Semi */ ) this.decodeNumericEntity(10, true);
        else if (!isNumber(c)) {
            if (this.allowLegacyEntity()) this.decodeNumericEntity(10, false);
            else this._state = this.baseState;
            this._index--;
        } else this.entityExcess++;
    };
    Tokenizer1.prototype.stateInHexEntity = function(c) {
        if (c === 59 /* Semi */ ) this.decodeNumericEntity(16, true);
        else if ((c < 97 /* LowerA */  || c > 102 /* LowerF */ ) && (c < 65 /* UpperA */  || c > 70 /* UpperF */ ) && !isNumber(c)) {
            if (this.allowLegacyEntity()) this.decodeNumericEntity(16, false);
            else this._state = this.baseState;
            this._index--;
        } else this.entityExcess++;
    };
    Tokenizer1.prototype.allowLegacyEntity = function() {
        return !this.xmlMode && (this.baseState === 1 /* Text */  || this.baseState === 24 /* InSpecialTag */ );
    };
    /**
     * Remove data that has already been consumed from the buffer.
     */ Tokenizer1.prototype.cleanup = function() {
        // If we are inside of text, emit what we already have.
        if (this.running && this.sectionStart !== this._index && (this._state === 1 /* Text */  || this._state === 24 /* InSpecialTag */  && this.sequenceIndex === 0)) {
            // TODO: We could emit attribute data here as well.
            this.cbs.ontext(this.buffer.substr(this.sectionStart));
            this.sectionStart = this._index;
        }
        var start = this.sectionStart < 0 ? this._index : this.sectionStart;
        this.buffer = start === this.buffer.length ? "" : this.buffer.substr(start);
        this._index -= start;
        this.bufferOffset += start;
        if (this.sectionStart > 0) this.sectionStart = 0;
    };
    Tokenizer1.prototype.shouldContinue = function() {
        return this._index < this.buffer.length && this.running;
    };
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */ Tokenizer1.prototype.parse = function() {
        while(this.shouldContinue()){
            var c = this.buffer.charCodeAt(this._index);
            if (this._state === 1 /* Text */ ) this.stateText(c);
            else if (this._state === 23 /* SpecialStartSequence */ ) this.stateSpecialStartSequence(c);
            else if (this._state === 24 /* InSpecialTag */ ) this.stateInSpecialTag(c);
            else if (this._state === 19 /* CDATASequence */ ) this.stateCDATASequence(c);
            else if (this._state === 12 /* InAttributeValueDq */ ) this.stateInAttributeValueDoubleQuotes(c);
            else if (this._state === 9 /* InAttributeName */ ) this.stateInAttributeName(c);
            else if (this._state === 21 /* InCommentLike */ ) this.stateInCommentLike(c);
            else if (this._state === 20 /* InSpecialComment */ ) this.stateInSpecialComment(c);
            else if (this._state === 8 /* BeforeAttributeName */ ) this.stateBeforeAttributeName(c);
            else if (this._state === 3 /* InTagName */ ) this.stateInTagName(c);
            else if (this._state === 6 /* InClosingTagName */ ) this.stateInClosingTagName(c);
            else if (this._state === 2 /* BeforeTagName */ ) this.stateBeforeTagName(c);
            else if (this._state === 10 /* AfterAttributeName */ ) this.stateAfterAttributeName(c);
            else if (this._state === 13 /* InAttributeValueSq */ ) this.stateInAttributeValueSingleQuotes(c);
            else if (this._state === 11 /* BeforeAttributeValue */ ) this.stateBeforeAttributeValue(c);
            else if (this._state === 5 /* BeforeClosingTagName */ ) this.stateBeforeClosingTagName(c);
            else if (this._state === 7 /* AfterClosingTagName */ ) this.stateAfterClosingTagName(c);
            else if (this._state === 22 /* BeforeSpecialS */ ) this.stateBeforeSpecialS(c);
            else if (this._state === 14 /* InAttributeValueNq */ ) this.stateInAttributeValueNoQuotes(c);
            else if (this._state === 4 /* InSelfClosingTag */ ) this.stateInSelfClosingTag(c);
            else if (this._state === 16 /* InDeclaration */ ) this.stateInDeclaration(c);
            else if (this._state === 15 /* BeforeDeclaration */ ) this.stateBeforeDeclaration(c);
            else if (this._state === 18 /* BeforeComment */ ) this.stateBeforeComment(c);
            else if (this._state === 17 /* InProcessingInstruction */ ) this.stateInProcessingInstruction(c);
            else if (this._state === 27 /* InNamedEntity */ ) this.stateInNamedEntity(c);
            else if (this._state === 25 /* BeforeEntity */ ) this.stateBeforeEntity(c);
            else if (this._state === 29 /* InHexEntity */ ) this.stateInHexEntity(c);
            else if (this._state === 28 /* InNumericEntity */ ) this.stateInNumericEntity(c);
            else // `this._state === State.BeforeNumericEntity`
            this.stateBeforeNumericEntity(c);
            this._index++;
        }
        this.cleanup();
    };
    Tokenizer1.prototype.finish = function() {
        if (this._state === 27 /* InNamedEntity */ ) this.emitNamedEntity();
        // If there is remaining data, emit it in a reasonable way
        if (this.sectionStart < this._index) this.handleTrailingData();
        this.cbs.onend();
    };
    /** Handle any trailing data. */ Tokenizer1.prototype.handleTrailingData = function() {
        var data = this.buffer.substr(this.sectionStart);
        if (this._state === 21 /* InCommentLike */ ) {
            if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(data);
            else this.cbs.oncomment(data);
        } else if (this._state === 28 /* InNumericEntity */  && this.allowLegacyEntity()) this.decodeNumericEntity(10, false);
        else if (this._state === 29 /* InHexEntity */  && this.allowLegacyEntity()) this.decodeNumericEntity(16, false);
        else if (this._state === 3 /* InTagName */  || this._state === 8 /* BeforeAttributeName */  || this._state === 11 /* BeforeAttributeValue */  || this._state === 10 /* AfterAttributeName */  || this._state === 9 /* InAttributeName */  || this._state === 13 /* InAttributeValueSq */  || this._state === 12 /* InAttributeValueDq */  || this._state === 14 /* InAttributeValueNq */  || this._state === 6 /* InClosingTagName */ ) ;
        else this.cbs.ontext(data);
    };
    Tokenizer1.prototype.getSection = function() {
        return this.buffer.substring(this.sectionStart, this._index);
    };
    Tokenizer1.prototype.emitPartial = function(value) {
        if (this.baseState !== 1 /* Text */  && this.baseState !== 24 /* InSpecialTag */ ) this.cbs.onattribdata(value);
        else this.cbs.ontext(value);
    };
    return Tokenizer1;
}();
exports.default = Tokenizer;

},{"entities/lib/decode_codepoint":"fiw2E","entities/lib/decode":"jtwBx"}],"fiw2E":[function(require,module,exports) {
"use strict";
// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
Object.defineProperty(exports, "__esModule", {
    value: true
});
var decodeMap = new Map([
    [
        0,
        65533
    ],
    [
        128,
        8364
    ],
    [
        130,
        8218
    ],
    [
        131,
        402
    ],
    [
        132,
        8222
    ],
    [
        133,
        8230
    ],
    [
        134,
        8224
    ],
    [
        135,
        8225
    ],
    [
        136,
        710
    ],
    [
        137,
        8240
    ],
    [
        138,
        352
    ],
    [
        139,
        8249
    ],
    [
        140,
        338
    ],
    [
        142,
        381
    ],
    [
        145,
        8216
    ],
    [
        146,
        8217
    ],
    [
        147,
        8220
    ],
    [
        148,
        8221
    ],
    [
        149,
        8226
    ],
    [
        150,
        8211
    ],
    [
        151,
        8212
    ],
    [
        152,
        732
    ],
    [
        153,
        8482
    ],
    [
        154,
        353
    ],
    [
        155,
        8250
    ],
    [
        156,
        339
    ],
    [
        158,
        382
    ],
    [
        159,
        376
    ], 
]);
var fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
String.fromCodePoint || function(codePoint) {
    var output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(codePoint >>> 10 & 0x3ff | 0xd800);
        codePoint = 0xdc00 | codePoint & 0x3ff;
    }
    output += String.fromCharCode(codePoint);
    return output;
};
function decodeCodePoint(codePoint) {
    var _a;
    if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) return "\uFFFD";
    return fromCodePoint((_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint);
}
exports.default = decodeCodePoint;

},{}],"jtwBx":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTML = exports.determineBranch = exports.JUMP_OFFSET_BASE = exports.BinTrieFlags = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
var decode_data_html_1 = __importDefault(require("./generated/decode-data-html"));
exports.htmlDecodeTree = decode_data_html_1.default;
var decode_data_xml_1 = __importDefault(require("./generated/decode-data-xml"));
exports.xmlDecodeTree = decode_data_xml_1.default;
var decode_codepoint_1 = __importDefault(require("./decode_codepoint"));
var BinTrieFlags;
(function(BinTrieFlags1) {
    BinTrieFlags1[BinTrieFlags1["HAS_VALUE"] = 32768] = "HAS_VALUE";
    BinTrieFlags1[BinTrieFlags1["BRANCH_LENGTH"] = 32512] = "BRANCH_LENGTH";
    BinTrieFlags1[BinTrieFlags1["MULTI_BYTE"] = 128] = "MULTI_BYTE";
    BinTrieFlags1[BinTrieFlags1["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
exports.JUMP_OFFSET_BASE = 47;
function getDecoder(decodeTree) {
    return function decodeHTMLBinary(str, strict) {
        var ret = "";
        var lastIdx = 0;
        var strIdx = 0;
        while((strIdx = str.indexOf("&", strIdx)) >= 0){
            ret += str.slice(lastIdx, strIdx);
            lastIdx = strIdx;
            // Skip the "&"
            strIdx += 1;
            // If we have a numeric entity, handle this separately.
            if (str.charCodeAt(strIdx) === 35 /* NUM */ ) {
                // Skip the leading "&#". For hex entities, also skip the leading "x".
                var start = strIdx + 1;
                var base = 10;
                var cp = str.charCodeAt(start);
                if ((cp | 32 /* To_LOWER_BIT */ ) === 120 /* LOWER_X */ ) {
                    base = 16;
                    strIdx += 1;
                    start += 1;
                }
                while((cp = str.charCodeAt(++strIdx)) >= 48 /* ZERO */  && cp <= 57 /* NINE */  || base === 16 && (cp | 32 /* To_LOWER_BIT */ ) >= 97 /* LOWER_A */  && (cp | 32 /* To_LOWER_BIT */ ) <= 102 /* LOWER_F */ );
                if (start !== strIdx) {
                    var entity = str.substring(start, strIdx);
                    var parsed = parseInt(entity, base);
                    if (str.charCodeAt(strIdx) === 59 /* SEMI */ ) strIdx += 1;
                    else if (strict) continue;
                    ret += decode_codepoint_1.default(parsed);
                    lastIdx = strIdx;
                }
                continue;
            }
            var result = null;
            var excess = 1;
            var treeIdx = 0;
            var current = decodeTree[treeIdx];
            for(; strIdx < str.length; strIdx++, excess++){
                treeIdx = determineBranch(decodeTree, current, treeIdx + 1, str.charCodeAt(strIdx));
                if (treeIdx < 0) break;
                current = decodeTree[treeIdx];
                // If the branch is a value, store it and continue
                if (current & BinTrieFlags.HAS_VALUE) {
                    // If we have a legacy entity while parsing strictly, just skip the number of bytes
                    if (strict && str.charCodeAt(strIdx) !== 59 /* SEMI */ ) // No need to consider multi-byte values, as the legacy entity is always a single byte
                    treeIdx += 1;
                    else {
                        // If this is a surrogate pair, combine the higher bits from the node with the next byte
                        result = current & BinTrieFlags.MULTI_BYTE ? String.fromCharCode(decodeTree[++treeIdx], decodeTree[++treeIdx]) : String.fromCharCode(decodeTree[++treeIdx]);
                        excess = 0;
                    }
                }
            }
            if (result != null) {
                ret += result;
                lastIdx = strIdx - excess + 1;
            }
        }
        return ret + str.slice(lastIdx);
    };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
    if (current <= 128) return char === current ? nodeIdx : -1;
    var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 8;
    if (branchCount === 0) return -1;
    if (branchCount === 1) return char === decodeTree[nodeIdx] ? nodeIdx + 1 : -1;
    var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    if (jumpOffset) {
        var value = char - exports.JUMP_OFFSET_BASE - jumpOffset;
        return value < 0 || value > branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
    }
    // Binary search for the character.
    var lo = nodeIdx;
    var hi = lo + branchCount - 1;
    while(lo <= hi){
        var mid = lo + hi >>> 1;
        var midVal = decodeTree[mid];
        if (midVal < char) lo = mid + 1;
        else if (midVal > char) hi = mid - 1;
        else return decodeTree[mid + branchCount];
    }
    return -1;
}
exports.determineBranch = determineBranch;
var htmlDecoder = getDecoder(decode_data_html_1.default);
var xmlDecoder = getDecoder(decode_data_xml_1.default);
function decodeHTML(str) {
    return htmlDecoder(str, false);
}
exports.decodeHTML = decodeHTML;
function decodeHTMLStrict(str) {
    return htmlDecoder(str, true);
}
exports.decodeHTMLStrict = decodeHTMLStrict;
function decodeXML(str) {
    return xmlDecoder(str, true);
}
exports.decodeXML = decodeXML;

},{"./generated/decode-data-html":"64fP9","./generated/decode-data-xml":"4rSYu","./decode_codepoint":"fiw2E"}],"64fP9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
// Generated using scripts/write-decode-map.ts
// prettier-ignore
exports.default = new Uint16Array([
    14866,
    60,
    237,
    340,
    721,
    1312,
    1562,
    1654,
    1838,
    1957,
    2183,
    2239,
    2301,
    2958,
    3037,
    3893,
    4123,
    4298,
    4330,
    4801,
    5191,
    5395,
    5752,
    5903,
    5943,
    5972,
    6050,
    0,
    0,
    0,
    0,
    0,
    0,
    6135,
    6565,
    7422,
    8183,
    8738,
    9242,
    9503,
    9938,
    10189,
    10573,
    10637,
    10715,
    11950,
    12246,
    13539,
    13950,
    14445,
    14533,
    15364,
    16514,
    16980,
    17390,
    17763,
    17849,
    18036,
    18125,
    4096,
    69,
    77,
    97,
    98,
    99,
    102,
    103,
    108,
    109,
    110,
    111,
    112,
    114,
    115,
    116,
    117,
    92,
    100,
    106,
    115,
    122,
    137,
    142,
    151,
    157,
    163,
    167,
    182,
    196,
    204,
    220,
    229,
    108,
    105,
    103,
    33024,
    198,
    59,
    32768,
    198,
    80,
    33024,
    38,
    59,
    32768,
    38,
    99,
    117,
    116,
    101,
    33024,
    193,
    59,
    32768,
    193,
    114,
    101,
    118,
    101,
    59,
    32768,
    258,
    512,
    105,
    121,
    127,
    134,
    114,
    99,
    33024,
    194,
    59,
    32768,
    194,
    59,
    32768,
    1040,
    114,
    59,
    32896,
    55349,
    56580,
    114,
    97,
    118,
    101,
    33024,
    192,
    59,
    32768,
    192,
    112,
    104,
    97,
    59,
    32768,
    913,
    97,
    99,
    114,
    59,
    32768,
    256,
    100,
    59,
    32768,
    10835,
    512,
    103,
    112,
    172,
    177,
    111,
    110,
    59,
    32768,
    260,
    102,
    59,
    32896,
    55349,
    56632,
    112,
    108,
    121,
    70,
    117,
    110,
    99,
    116,
    105,
    111,
    110,
    59,
    32768,
    8289,
    105,
    110,
    103,
    33024,
    197,
    59,
    32768,
    197,
    512,
    99,
    115,
    209,
    214,
    114,
    59,
    32896,
    55349,
    56476,
    105,
    103,
    110,
    59,
    32768,
    8788,
    105,
    108,
    100,
    101,
    33024,
    195,
    59,
    32768,
    195,
    109,
    108,
    33024,
    196,
    59,
    32768,
    196,
    2048,
    97,
    99,
    101,
    102,
    111,
    114,
    115,
    117,
    253,
    278,
    282,
    310,
    315,
    321,
    327,
    332,
    512,
    99,
    114,
    258,
    267,
    107,
    115,
    108,
    97,
    115,
    104,
    59,
    32768,
    8726,
    583,
    271,
    274,
    59,
    32768,
    10983,
    101,
    100,
    59,
    32768,
    8966,
    121,
    59,
    32768,
    1041,
    768,
    99,
    114,
    116,
    289,
    296,
    306,
    97,
    117,
    115,
    101,
    59,
    32768,
    8757,
    110,
    111,
    117,
    108,
    108,
    105,
    115,
    59,
    32768,
    8492,
    97,
    59,
    32768,
    914,
    114,
    59,
    32896,
    55349,
    56581,
    112,
    102,
    59,
    32896,
    55349,
    56633,
    101,
    118,
    101,
    59,
    32768,
    728,
    99,
    114,
    59,
    32768,
    8492,
    109,
    112,
    101,
    113,
    59,
    32768,
    8782,
    3584,
    72,
    79,
    97,
    99,
    100,
    101,
    102,
    104,
    105,
    108,
    111,
    114,
    115,
    117,
    368,
    373,
    380,
    426,
    461,
    466,
    487,
    491,
    495,
    533,
    593,
    695,
    701,
    707,
    99,
    121,
    59,
    32768,
    1063,
    80,
    89,
    33024,
    169,
    59,
    32768,
    169,
    768,
    99,
    112,
    121,
    387,
    393,
    419,
    117,
    116,
    101,
    59,
    32768,
    262,
    512,
    59,
    105,
    398,
    400,
    32768,
    8914,
    116,
    97,
    108,
    68,
    105,
    102,
    102,
    101,
    114,
    101,
    110,
    116,
    105,
    97,
    108,
    68,
    59,
    32768,
    8517,
    108,
    101,
    121,
    115,
    59,
    32768,
    8493,
    1024,
    97,
    101,
    105,
    111,
    435,
    441,
    449,
    454,
    114,
    111,
    110,
    59,
    32768,
    268,
    100,
    105,
    108,
    33024,
    199,
    59,
    32768,
    199,
    114,
    99,
    59,
    32768,
    264,
    110,
    105,
    110,
    116,
    59,
    32768,
    8752,
    111,
    116,
    59,
    32768,
    266,
    512,
    100,
    110,
    471,
    478,
    105,
    108,
    108,
    97,
    59,
    32768,
    184,
    116,
    101,
    114,
    68,
    111,
    116,
    59,
    32768,
    183,
    114,
    59,
    32768,
    8493,
    105,
    59,
    32768,
    935,
    114,
    99,
    108,
    101,
    1024,
    68,
    77,
    80,
    84,
    508,
    513,
    520,
    526,
    111,
    116,
    59,
    32768,
    8857,
    105,
    110,
    117,
    115,
    59,
    32768,
    8854,
    108,
    117,
    115,
    59,
    32768,
    8853,
    105,
    109,
    101,
    115,
    59,
    32768,
    8855,
    111,
    512,
    99,
    115,
    539,
    562,
    107,
    119,
    105,
    115,
    101,
    67,
    111,
    110,
    116,
    111,
    117,
    114,
    73,
    110,
    116,
    101,
    103,
    114,
    97,
    108,
    59,
    32768,
    8754,
    101,
    67,
    117,
    114,
    108,
    121,
    512,
    68,
    81,
    573,
    586,
    111,
    117,
    98,
    108,
    101,
    81,
    117,
    111,
    116,
    101,
    59,
    32768,
    8221,
    117,
    111,
    116,
    101,
    59,
    32768,
    8217,
    1024,
    108,
    110,
    112,
    117,
    602,
    614,
    648,
    664,
    111,
    110,
    512,
    59,
    101,
    609,
    611,
    32768,
    8759,
    59,
    32768,
    10868,
    768,
    103,
    105,
    116,
    621,
    629,
    634,
    114,
    117,
    101,
    110,
    116,
    59,
    32768,
    8801,
    110,
    116,
    59,
    32768,
    8751,
    111,
    117,
    114,
    73,
    110,
    116,
    101,
    103,
    114,
    97,
    108,
    59,
    32768,
    8750,
    512,
    102,
    114,
    653,
    656,
    59,
    32768,
    8450,
    111,
    100,
    117,
    99,
    116,
    59,
    32768,
    8720,
    110,
    116,
    101,
    114,
    67,
    108,
    111,
    99,
    107,
    119,
    105,
    115,
    101,
    67,
    111,
    110,
    116,
    111,
    117,
    114,
    73,
    110,
    116,
    101,
    103,
    114,
    97,
    108,
    59,
    32768,
    8755,
    111,
    115,
    115,
    59,
    32768,
    10799,
    99,
    114,
    59,
    32896,
    55349,
    56478,
    112,
    512,
    59,
    67,
    713,
    715,
    32768,
    8915,
    97,
    112,
    59,
    32768,
    8781,
    2816,
    68,
    74,
    83,
    90,
    97,
    99,
    101,
    102,
    105,
    111,
    115,
    743,
    758,
    763,
    768,
    773,
    795,
    809,
    821,
    826,
    910,
    1295,
    512,
    59,
    111,
    748,
    750,
    32768,
    8517,
    116,
    114,
    97,
    104,
    100,
    59,
    32768,
    10513,
    99,
    121,
    59,
    32768,
    1026,
    99,
    121,
    59,
    32768,
    1029,
    99,
    121,
    59,
    32768,
    1039,
    768,
    103,
    114,
    115,
    780,
    786,
    790,
    103,
    101,
    114,
    59,
    32768,
    8225,
    114,
    59,
    32768,
    8609,
    104,
    118,
    59,
    32768,
    10980,
    512,
    97,
    121,
    800,
    806,
    114,
    111,
    110,
    59,
    32768,
    270,
    59,
    32768,
    1044,
    108,
    512,
    59,
    116,
    815,
    817,
    32768,
    8711,
    97,
    59,
    32768,
    916,
    114,
    59,
    32896,
    55349,
    56583,
    512,
    97,
    102,
    831,
    897,
    512,
    99,
    109,
    836,
    891,
    114,
    105,
    116,
    105,
    99,
    97,
    108,
    1024,
    65,
    68,
    71,
    84,
    852,
    859,
    877,
    884,
    99,
    117,
    116,
    101,
    59,
    32768,
    180,
    111,
    581,
    864,
    867,
    59,
    32768,
    729,
    98,
    108,
    101,
    65,
    99,
    117,
    116,
    101,
    59,
    32768,
    733,
    114,
    97,
    118,
    101,
    59,
    32768,
    96,
    105,
    108,
    100,
    101,
    59,
    32768,
    732,
    111,
    110,
    100,
    59,
    32768,
    8900,
    102,
    101,
    114,
    101,
    110,
    116,
    105,
    97,
    108,
    68,
    59,
    32768,
    8518,
    2113,
    920,
    0,
    0,
    0,
    925,
    946,
    0,
    1139,
    102,
    59,
    32896,
    55349,
    56635,
    768,
    59,
    68,
    69,
    931,
    933,
    938,
    32768,
    168,
    111,
    116,
    59,
    32768,
    8412,
    113,
    117,
    97,
    108,
    59,
    32768,
    8784,
    98,
    108,
    101,
    1536,
    67,
    68,
    76,
    82,
    85,
    86,
    961,
    978,
    996,
    1080,
    1101,
    1125,
    111,
    110,
    116,
    111,
    117,
    114,
    73,
    110,
    116,
    101,
    103,
    114,
    97,
    108,
    59,
    32768,
    8751,
    111,
    1093,
    985,
    0,
    0,
    988,
    59,
    32768,
    168,
    110,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8659,
    512,
    101,
    111,
    1001,
    1034,
    102,
    116,
    768,
    65,
    82,
    84,
    1010,
    1017,
    1029,
    114,
    114,
    111,
    119,
    59,
    32768,
    8656,
    105,
    103,
    104,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8660,
    101,
    101,
    59,
    32768,
    10980,
    110,
    103,
    512,
    76,
    82,
    1041,
    1068,
    101,
    102,
    116,
    512,
    65,
    82,
    1049,
    1056,
    114,
    114,
    111,
    119,
    59,
    32768,
    10232,
    105,
    103,
    104,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    10234,
    105,
    103,
    104,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    10233,
    105,
    103,
    104,
    116,
    512,
    65,
    84,
    1089,
    1096,
    114,
    114,
    111,
    119,
    59,
    32768,
    8658,
    101,
    101,
    59,
    32768,
    8872,
    112,
    1042,
    1108,
    0,
    0,
    1115,
    114,
    114,
    111,
    119,
    59,
    32768,
    8657,
    111,
    119,
    110,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8661,
    101,
    114,
    116,
    105,
    99,
    97,
    108,
    66,
    97,
    114,
    59,
    32768,
    8741,
    110,
    1536,
    65,
    66,
    76,
    82,
    84,
    97,
    1152,
    1179,
    1186,
    1236,
    1272,
    1288,
    114,
    114,
    111,
    119,
    768,
    59,
    66,
    85,
    1163,
    1165,
    1170,
    32768,
    8595,
    97,
    114,
    59,
    32768,
    10515,
    112,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8693,
    114,
    101,
    118,
    101,
    59,
    32768,
    785,
    101,
    102,
    116,
    1315,
    1196,
    0,
    1209,
    0,
    1220,
    105,
    103,
    104,
    116,
    86,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10576,
    101,
    101,
    86,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10590,
    101,
    99,
    116,
    111,
    114,
    512,
    59,
    66,
    1229,
    1231,
    32768,
    8637,
    97,
    114,
    59,
    32768,
    10582,
    105,
    103,
    104,
    116,
    805,
    1245,
    0,
    1256,
    101,
    101,
    86,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10591,
    101,
    99,
    116,
    111,
    114,
    512,
    59,
    66,
    1265,
    1267,
    32768,
    8641,
    97,
    114,
    59,
    32768,
    10583,
    101,
    101,
    512,
    59,
    65,
    1279,
    1281,
    32768,
    8868,
    114,
    114,
    111,
    119,
    59,
    32768,
    8615,
    114,
    114,
    111,
    119,
    59,
    32768,
    8659,
    512,
    99,
    116,
    1300,
    1305,
    114,
    59,
    32896,
    55349,
    56479,
    114,
    111,
    107,
    59,
    32768,
    272,
    4096,
    78,
    84,
    97,
    99,
    100,
    102,
    103,
    108,
    109,
    111,
    112,
    113,
    115,
    116,
    117,
    120,
    1344,
    1348,
    1354,
    1363,
    1386,
    1391,
    1396,
    1405,
    1413,
    1460,
    1475,
    1483,
    1514,
    1527,
    1531,
    1538,
    71,
    59,
    32768,
    330,
    72,
    33024,
    208,
    59,
    32768,
    208,
    99,
    117,
    116,
    101,
    33024,
    201,
    59,
    32768,
    201,
    768,
    97,
    105,
    121,
    1370,
    1376,
    1383,
    114,
    111,
    110,
    59,
    32768,
    282,
    114,
    99,
    33024,
    202,
    59,
    32768,
    202,
    59,
    32768,
    1069,
    111,
    116,
    59,
    32768,
    278,
    114,
    59,
    32896,
    55349,
    56584,
    114,
    97,
    118,
    101,
    33024,
    200,
    59,
    32768,
    200,
    101,
    109,
    101,
    110,
    116,
    59,
    32768,
    8712,
    512,
    97,
    112,
    1418,
    1423,
    99,
    114,
    59,
    32768,
    274,
    116,
    121,
    1060,
    1431,
    0,
    0,
    1444,
    109,
    97,
    108,
    108,
    83,
    113,
    117,
    97,
    114,
    101,
    59,
    32768,
    9723,
    101,
    114,
    121,
    83,
    109,
    97,
    108,
    108,
    83,
    113,
    117,
    97,
    114,
    101,
    59,
    32768,
    9643,
    512,
    103,
    112,
    1465,
    1470,
    111,
    110,
    59,
    32768,
    280,
    102,
    59,
    32896,
    55349,
    56636,
    115,
    105,
    108,
    111,
    110,
    59,
    32768,
    917,
    117,
    512,
    97,
    105,
    1489,
    1504,
    108,
    512,
    59,
    84,
    1495,
    1497,
    32768,
    10869,
    105,
    108,
    100,
    101,
    59,
    32768,
    8770,
    108,
    105,
    98,
    114,
    105,
    117,
    109,
    59,
    32768,
    8652,
    512,
    99,
    105,
    1519,
    1523,
    114,
    59,
    32768,
    8496,
    109,
    59,
    32768,
    10867,
    97,
    59,
    32768,
    919,
    109,
    108,
    33024,
    203,
    59,
    32768,
    203,
    512,
    105,
    112,
    1543,
    1549,
    115,
    116,
    115,
    59,
    32768,
    8707,
    111,
    110,
    101,
    110,
    116,
    105,
    97,
    108,
    69,
    59,
    32768,
    8519,
    1280,
    99,
    102,
    105,
    111,
    115,
    1572,
    1576,
    1581,
    1620,
    1648,
    121,
    59,
    32768,
    1060,
    114,
    59,
    32896,
    55349,
    56585,
    108,
    108,
    101,
    100,
    1060,
    1591,
    0,
    0,
    1604,
    109,
    97,
    108,
    108,
    83,
    113,
    117,
    97,
    114,
    101,
    59,
    32768,
    9724,
    101,
    114,
    121,
    83,
    109,
    97,
    108,
    108,
    83,
    113,
    117,
    97,
    114,
    101,
    59,
    32768,
    9642,
    1601,
    1628,
    0,
    1633,
    0,
    0,
    1639,
    102,
    59,
    32896,
    55349,
    56637,
    65,
    108,
    108,
    59,
    32768,
    8704,
    114,
    105,
    101,
    114,
    116,
    114,
    102,
    59,
    32768,
    8497,
    99,
    114,
    59,
    32768,
    8497,
    3072,
    74,
    84,
    97,
    98,
    99,
    100,
    102,
    103,
    111,
    114,
    115,
    116,
    1678,
    1683,
    1688,
    1701,
    1708,
    1729,
    1734,
    1739,
    1742,
    1748,
    1828,
    1834,
    99,
    121,
    59,
    32768,
    1027,
    33024,
    62,
    59,
    32768,
    62,
    109,
    109,
    97,
    512,
    59,
    100,
    1696,
    1698,
    32768,
    915,
    59,
    32768,
    988,
    114,
    101,
    118,
    101,
    59,
    32768,
    286,
    768,
    101,
    105,
    121,
    1715,
    1721,
    1726,
    100,
    105,
    108,
    59,
    32768,
    290,
    114,
    99,
    59,
    32768,
    284,
    59,
    32768,
    1043,
    111,
    116,
    59,
    32768,
    288,
    114,
    59,
    32896,
    55349,
    56586,
    59,
    32768,
    8921,
    112,
    102,
    59,
    32896,
    55349,
    56638,
    101,
    97,
    116,
    101,
    114,
    1536,
    69,
    70,
    71,
    76,
    83,
    84,
    1766,
    1783,
    1794,
    1803,
    1809,
    1821,
    113,
    117,
    97,
    108,
    512,
    59,
    76,
    1775,
    1777,
    32768,
    8805,
    101,
    115,
    115,
    59,
    32768,
    8923,
    117,
    108,
    108,
    69,
    113,
    117,
    97,
    108,
    59,
    32768,
    8807,
    114,
    101,
    97,
    116,
    101,
    114,
    59,
    32768,
    10914,
    101,
    115,
    115,
    59,
    32768,
    8823,
    108,
    97,
    110,
    116,
    69,
    113,
    117,
    97,
    108,
    59,
    32768,
    10878,
    105,
    108,
    100,
    101,
    59,
    32768,
    8819,
    99,
    114,
    59,
    32896,
    55349,
    56482,
    59,
    32768,
    8811,
    2048,
    65,
    97,
    99,
    102,
    105,
    111,
    115,
    117,
    1854,
    1861,
    1874,
    1880,
    1884,
    1897,
    1919,
    1934,
    82,
    68,
    99,
    121,
    59,
    32768,
    1066,
    512,
    99,
    116,
    1866,
    1871,
    101,
    107,
    59,
    32768,
    711,
    59,
    32768,
    94,
    105,
    114,
    99,
    59,
    32768,
    292,
    114,
    59,
    32768,
    8460,
    108,
    98,
    101,
    114,
    116,
    83,
    112,
    97,
    99,
    101,
    59,
    32768,
    8459,
    833,
    1902,
    0,
    1906,
    102,
    59,
    32768,
    8461,
    105,
    122,
    111,
    110,
    116,
    97,
    108,
    76,
    105,
    110,
    101,
    59,
    32768,
    9472,
    512,
    99,
    116,
    1924,
    1928,
    114,
    59,
    32768,
    8459,
    114,
    111,
    107,
    59,
    32768,
    294,
    109,
    112,
    533,
    1940,
    1950,
    111,
    119,
    110,
    72,
    117,
    109,
    112,
    59,
    32768,
    8782,
    113,
    117,
    97,
    108,
    59,
    32768,
    8783,
    3584,
    69,
    74,
    79,
    97,
    99,
    100,
    102,
    103,
    109,
    110,
    111,
    115,
    116,
    117,
    1985,
    1990,
    1996,
    2001,
    2010,
    2025,
    2030,
    2034,
    2043,
    2077,
    2134,
    2155,
    2160,
    2167,
    99,
    121,
    59,
    32768,
    1045,
    108,
    105,
    103,
    59,
    32768,
    306,
    99,
    121,
    59,
    32768,
    1025,
    99,
    117,
    116,
    101,
    33024,
    205,
    59,
    32768,
    205,
    512,
    105,
    121,
    2015,
    2022,
    114,
    99,
    33024,
    206,
    59,
    32768,
    206,
    59,
    32768,
    1048,
    111,
    116,
    59,
    32768,
    304,
    114,
    59,
    32768,
    8465,
    114,
    97,
    118,
    101,
    33024,
    204,
    59,
    32768,
    204,
    768,
    59,
    97,
    112,
    2050,
    2052,
    2070,
    32768,
    8465,
    512,
    99,
    103,
    2057,
    2061,
    114,
    59,
    32768,
    298,
    105,
    110,
    97,
    114,
    121,
    73,
    59,
    32768,
    8520,
    108,
    105,
    101,
    115,
    59,
    32768,
    8658,
    837,
    2082,
    0,
    2110,
    512,
    59,
    101,
    2086,
    2088,
    32768,
    8748,
    512,
    103,
    114,
    2093,
    2099,
    114,
    97,
    108,
    59,
    32768,
    8747,
    115,
    101,
    99,
    116,
    105,
    111,
    110,
    59,
    32768,
    8898,
    105,
    115,
    105,
    98,
    108,
    101,
    512,
    67,
    84,
    2120,
    2127,
    111,
    109,
    109,
    97,
    59,
    32768,
    8291,
    105,
    109,
    101,
    115,
    59,
    32768,
    8290,
    768,
    103,
    112,
    116,
    2141,
    2146,
    2151,
    111,
    110,
    59,
    32768,
    302,
    102,
    59,
    32896,
    55349,
    56640,
    97,
    59,
    32768,
    921,
    99,
    114,
    59,
    32768,
    8464,
    105,
    108,
    100,
    101,
    59,
    32768,
    296,
    828,
    2172,
    0,
    2177,
    99,
    121,
    59,
    32768,
    1030,
    108,
    33024,
    207,
    59,
    32768,
    207,
    1280,
    99,
    102,
    111,
    115,
    117,
    2193,
    2206,
    2211,
    2217,
    2232,
    512,
    105,
    121,
    2198,
    2203,
    114,
    99,
    59,
    32768,
    308,
    59,
    32768,
    1049,
    114,
    59,
    32896,
    55349,
    56589,
    112,
    102,
    59,
    32896,
    55349,
    56641,
    820,
    2222,
    0,
    2227,
    114,
    59,
    32896,
    55349,
    56485,
    114,
    99,
    121,
    59,
    32768,
    1032,
    107,
    99,
    121,
    59,
    32768,
    1028,
    1792,
    72,
    74,
    97,
    99,
    102,
    111,
    115,
    2253,
    2258,
    2263,
    2269,
    2283,
    2288,
    2294,
    99,
    121,
    59,
    32768,
    1061,
    99,
    121,
    59,
    32768,
    1036,
    112,
    112,
    97,
    59,
    32768,
    922,
    512,
    101,
    121,
    2274,
    2280,
    100,
    105,
    108,
    59,
    32768,
    310,
    59,
    32768,
    1050,
    114,
    59,
    32896,
    55349,
    56590,
    112,
    102,
    59,
    32896,
    55349,
    56642,
    99,
    114,
    59,
    32896,
    55349,
    56486,
    2816,
    74,
    84,
    97,
    99,
    101,
    102,
    108,
    109,
    111,
    115,
    116,
    2323,
    2328,
    2333,
    2374,
    2396,
    2775,
    2780,
    2797,
    2804,
    2934,
    2954,
    99,
    121,
    59,
    32768,
    1033,
    33024,
    60,
    59,
    32768,
    60,
    1280,
    99,
    109,
    110,
    112,
    114,
    2344,
    2350,
    2356,
    2360,
    2370,
    117,
    116,
    101,
    59,
    32768,
    313,
    98,
    100,
    97,
    59,
    32768,
    923,
    103,
    59,
    32768,
    10218,
    108,
    97,
    99,
    101,
    116,
    114,
    102,
    59,
    32768,
    8466,
    114,
    59,
    32768,
    8606,
    768,
    97,
    101,
    121,
    2381,
    2387,
    2393,
    114,
    111,
    110,
    59,
    32768,
    317,
    100,
    105,
    108,
    59,
    32768,
    315,
    59,
    32768,
    1051,
    512,
    102,
    115,
    2401,
    2702,
    116,
    2560,
    65,
    67,
    68,
    70,
    82,
    84,
    85,
    86,
    97,
    114,
    2423,
    2470,
    2479,
    2530,
    2537,
    2561,
    2618,
    2666,
    2683,
    2690,
    512,
    110,
    114,
    2428,
    2441,
    103,
    108,
    101,
    66,
    114,
    97,
    99,
    107,
    101,
    116,
    59,
    32768,
    10216,
    114,
    111,
    119,
    768,
    59,
    66,
    82,
    2451,
    2453,
    2458,
    32768,
    8592,
    97,
    114,
    59,
    32768,
    8676,
    105,
    103,
    104,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8646,
    101,
    105,
    108,
    105,
    110,
    103,
    59,
    32768,
    8968,
    111,
    838,
    2485,
    0,
    2498,
    98,
    108,
    101,
    66,
    114,
    97,
    99,
    107,
    101,
    116,
    59,
    32768,
    10214,
    110,
    805,
    2503,
    0,
    2514,
    101,
    101,
    86,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10593,
    101,
    99,
    116,
    111,
    114,
    512,
    59,
    66,
    2523,
    2525,
    32768,
    8643,
    97,
    114,
    59,
    32768,
    10585,
    108,
    111,
    111,
    114,
    59,
    32768,
    8970,
    105,
    103,
    104,
    116,
    512,
    65,
    86,
    2546,
    2553,
    114,
    114,
    111,
    119,
    59,
    32768,
    8596,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10574,
    512,
    101,
    114,
    2566,
    2591,
    101,
    768,
    59,
    65,
    86,
    2574,
    2576,
    2583,
    32768,
    8867,
    114,
    114,
    111,
    119,
    59,
    32768,
    8612,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10586,
    105,
    97,
    110,
    103,
    108,
    101,
    768,
    59,
    66,
    69,
    2604,
    2606,
    2611,
    32768,
    8882,
    97,
    114,
    59,
    32768,
    10703,
    113,
    117,
    97,
    108,
    59,
    32768,
    8884,
    112,
    768,
    68,
    84,
    86,
    2626,
    2638,
    2649,
    111,
    119,
    110,
    86,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10577,
    101,
    101,
    86,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10592,
    101,
    99,
    116,
    111,
    114,
    512,
    59,
    66,
    2659,
    2661,
    32768,
    8639,
    97,
    114,
    59,
    32768,
    10584,
    101,
    99,
    116,
    111,
    114,
    512,
    59,
    66,
    2676,
    2678,
    32768,
    8636,
    97,
    114,
    59,
    32768,
    10578,
    114,
    114,
    111,
    119,
    59,
    32768,
    8656,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8660,
    115,
    1536,
    69,
    70,
    71,
    76,
    83,
    84,
    2716,
    2730,
    2741,
    2750,
    2756,
    2768,
    113,
    117,
    97,
    108,
    71,
    114,
    101,
    97,
    116,
    101,
    114,
    59,
    32768,
    8922,
    117,
    108,
    108,
    69,
    113,
    117,
    97,
    108,
    59,
    32768,
    8806,
    114,
    101,
    97,
    116,
    101,
    114,
    59,
    32768,
    8822,
    101,
    115,
    115,
    59,
    32768,
    10913,
    108,
    97,
    110,
    116,
    69,
    113,
    117,
    97,
    108,
    59,
    32768,
    10877,
    105,
    108,
    100,
    101,
    59,
    32768,
    8818,
    114,
    59,
    32896,
    55349,
    56591,
    512,
    59,
    101,
    2785,
    2787,
    32768,
    8920,
    102,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8666,
    105,
    100,
    111,
    116,
    59,
    32768,
    319,
    768,
    110,
    112,
    119,
    2811,
    2899,
    2904,
    103,
    1024,
    76,
    82,
    108,
    114,
    2821,
    2848,
    2860,
    2887,
    101,
    102,
    116,
    512,
    65,
    82,
    2829,
    2836,
    114,
    114,
    111,
    119,
    59,
    32768,
    10229,
    105,
    103,
    104,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    10231,
    105,
    103,
    104,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    10230,
    101,
    102,
    116,
    512,
    97,
    114,
    2868,
    2875,
    114,
    114,
    111,
    119,
    59,
    32768,
    10232,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    10234,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    10233,
    102,
    59,
    32896,
    55349,
    56643,
    101,
    114,
    512,
    76,
    82,
    2911,
    2922,
    101,
    102,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8601,
    105,
    103,
    104,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8600,
    768,
    99,
    104,
    116,
    2941,
    2945,
    2948,
    114,
    59,
    32768,
    8466,
    59,
    32768,
    8624,
    114,
    111,
    107,
    59,
    32768,
    321,
    59,
    32768,
    8810,
    2048,
    97,
    99,
    101,
    102,
    105,
    111,
    115,
    117,
    2974,
    2978,
    2982,
    3007,
    3012,
    3022,
    3028,
    3033,
    112,
    59,
    32768,
    10501,
    121,
    59,
    32768,
    1052,
    512,
    100,
    108,
    2987,
    2998,
    105,
    117,
    109,
    83,
    112,
    97,
    99,
    101,
    59,
    32768,
    8287,
    108,
    105,
    110,
    116,
    114,
    102,
    59,
    32768,
    8499,
    114,
    59,
    32896,
    55349,
    56592,
    110,
    117,
    115,
    80,
    108,
    117,
    115,
    59,
    32768,
    8723,
    112,
    102,
    59,
    32896,
    55349,
    56644,
    99,
    114,
    59,
    32768,
    8499,
    59,
    32768,
    924,
    2304,
    74,
    97,
    99,
    101,
    102,
    111,
    115,
    116,
    117,
    3055,
    3060,
    3067,
    3089,
    3201,
    3206,
    3874,
    3880,
    3889,
    99,
    121,
    59,
    32768,
    1034,
    99,
    117,
    116,
    101,
    59,
    32768,
    323,
    768,
    97,
    101,
    121,
    3074,
    3080,
    3086,
    114,
    111,
    110,
    59,
    32768,
    327,
    100,
    105,
    108,
    59,
    32768,
    325,
    59,
    32768,
    1053,
    768,
    103,
    115,
    119,
    3096,
    3160,
    3194,
    97,
    116,
    105,
    118,
    101,
    768,
    77,
    84,
    86,
    3108,
    3121,
    3145,
    101,
    100,
    105,
    117,
    109,
    83,
    112,
    97,
    99,
    101,
    59,
    32768,
    8203,
    104,
    105,
    512,
    99,
    110,
    3128,
    3137,
    107,
    83,
    112,
    97,
    99,
    101,
    59,
    32768,
    8203,
    83,
    112,
    97,
    99,
    101,
    59,
    32768,
    8203,
    101,
    114,
    121,
    84,
    104,
    105,
    110,
    83,
    112,
    97,
    99,
    101,
    59,
    32768,
    8203,
    116,
    101,
    100,
    512,
    71,
    76,
    3168,
    3184,
    114,
    101,
    97,
    116,
    101,
    114,
    71,
    114,
    101,
    97,
    116,
    101,
    114,
    59,
    32768,
    8811,
    101,
    115,
    115,
    76,
    101,
    115,
    115,
    59,
    32768,
    8810,
    76,
    105,
    110,
    101,
    59,
    32768,
    10,
    114,
    59,
    32896,
    55349,
    56593,
    1024,
    66,
    110,
    112,
    116,
    3215,
    3222,
    3238,
    3242,
    114,
    101,
    97,
    107,
    59,
    32768,
    8288,
    66,
    114,
    101,
    97,
    107,
    105,
    110,
    103,
    83,
    112,
    97,
    99,
    101,
    59,
    32768,
    160,
    102,
    59,
    32768,
    8469,
    3328,
    59,
    67,
    68,
    69,
    71,
    72,
    76,
    78,
    80,
    82,
    83,
    84,
    86,
    3269,
    3271,
    3293,
    3312,
    3352,
    3430,
    3455,
    3551,
    3589,
    3625,
    3678,
    3821,
    3861,
    32768,
    10988,
    512,
    111,
    117,
    3276,
    3286,
    110,
    103,
    114,
    117,
    101,
    110,
    116,
    59,
    32768,
    8802,
    112,
    67,
    97,
    112,
    59,
    32768,
    8813,
    111,
    117,
    98,
    108,
    101,
    86,
    101,
    114,
    116,
    105,
    99,
    97,
    108,
    66,
    97,
    114,
    59,
    32768,
    8742,
    768,
    108,
    113,
    120,
    3319,
    3327,
    3345,
    101,
    109,
    101,
    110,
    116,
    59,
    32768,
    8713,
    117,
    97,
    108,
    512,
    59,
    84,
    3335,
    3337,
    32768,
    8800,
    105,
    108,
    100,
    101,
    59,
    32896,
    8770,
    824,
    105,
    115,
    116,
    115,
    59,
    32768,
    8708,
    114,
    101,
    97,
    116,
    101,
    114,
    1792,
    59,
    69,
    70,
    71,
    76,
    83,
    84,
    3373,
    3375,
    3382,
    3394,
    3404,
    3410,
    3423,
    32768,
    8815,
    113,
    117,
    97,
    108,
    59,
    32768,
    8817,
    117,
    108,
    108,
    69,
    113,
    117,
    97,
    108,
    59,
    32896,
    8807,
    824,
    114,
    101,
    97,
    116,
    101,
    114,
    59,
    32896,
    8811,
    824,
    101,
    115,
    115,
    59,
    32768,
    8825,
    108,
    97,
    110,
    116,
    69,
    113,
    117,
    97,
    108,
    59,
    32896,
    10878,
    824,
    105,
    108,
    100,
    101,
    59,
    32768,
    8821,
    117,
    109,
    112,
    533,
    3437,
    3448,
    111,
    119,
    110,
    72,
    117,
    109,
    112,
    59,
    32896,
    8782,
    824,
    113,
    117,
    97,
    108,
    59,
    32896,
    8783,
    824,
    101,
    512,
    102,
    115,
    3461,
    3492,
    116,
    84,
    114,
    105,
    97,
    110,
    103,
    108,
    101,
    768,
    59,
    66,
    69,
    3477,
    3479,
    3485,
    32768,
    8938,
    97,
    114,
    59,
    32896,
    10703,
    824,
    113,
    117,
    97,
    108,
    59,
    32768,
    8940,
    115,
    1536,
    59,
    69,
    71,
    76,
    83,
    84,
    3506,
    3508,
    3515,
    3524,
    3531,
    3544,
    32768,
    8814,
    113,
    117,
    97,
    108,
    59,
    32768,
    8816,
    114,
    101,
    97,
    116,
    101,
    114,
    59,
    32768,
    8824,
    101,
    115,
    115,
    59,
    32896,
    8810,
    824,
    108,
    97,
    110,
    116,
    69,
    113,
    117,
    97,
    108,
    59,
    32896,
    10877,
    824,
    105,
    108,
    100,
    101,
    59,
    32768,
    8820,
    101,
    115,
    116,
    101,
    100,
    512,
    71,
    76,
    3561,
    3578,
    114,
    101,
    97,
    116,
    101,
    114,
    71,
    114,
    101,
    97,
    116,
    101,
    114,
    59,
    32896,
    10914,
    824,
    101,
    115,
    115,
    76,
    101,
    115,
    115,
    59,
    32896,
    10913,
    824,
    114,
    101,
    99,
    101,
    100,
    101,
    115,
    768,
    59,
    69,
    83,
    3603,
    3605,
    3613,
    32768,
    8832,
    113,
    117,
    97,
    108,
    59,
    32896,
    10927,
    824,
    108,
    97,
    110,
    116,
    69,
    113,
    117,
    97,
    108,
    59,
    32768,
    8928,
    512,
    101,
    105,
    3630,
    3645,
    118,
    101,
    114,
    115,
    101,
    69,
    108,
    101,
    109,
    101,
    110,
    116,
    59,
    32768,
    8716,
    103,
    104,
    116,
    84,
    114,
    105,
    97,
    110,
    103,
    108,
    101,
    768,
    59,
    66,
    69,
    3663,
    3665,
    3671,
    32768,
    8939,
    97,
    114,
    59,
    32896,
    10704,
    824,
    113,
    117,
    97,
    108,
    59,
    32768,
    8941,
    512,
    113,
    117,
    3683,
    3732,
    117,
    97,
    114,
    101,
    83,
    117,
    512,
    98,
    112,
    3694,
    3712,
    115,
    101,
    116,
    512,
    59,
    69,
    3702,
    3705,
    32896,
    8847,
    824,
    113,
    117,
    97,
    108,
    59,
    32768,
    8930,
    101,
    114,
    115,
    101,
    116,
    512,
    59,
    69,
    3722,
    3725,
    32896,
    8848,
    824,
    113,
    117,
    97,
    108,
    59,
    32768,
    8931,
    768,
    98,
    99,
    112,
    3739,
    3757,
    3801,
    115,
    101,
    116,
    512,
    59,
    69,
    3747,
    3750,
    32896,
    8834,
    8402,
    113,
    117,
    97,
    108,
    59,
    32768,
    8840,
    99,
    101,
    101,
    100,
    115,
    1024,
    59,
    69,
    83,
    84,
    3771,
    3773,
    3781,
    3793,
    32768,
    8833,
    113,
    117,
    97,
    108,
    59,
    32896,
    10928,
    824,
    108,
    97,
    110,
    116,
    69,
    113,
    117,
    97,
    108,
    59,
    32768,
    8929,
    105,
    108,
    100,
    101,
    59,
    32896,
    8831,
    824,
    101,
    114,
    115,
    101,
    116,
    512,
    59,
    69,
    3811,
    3814,
    32896,
    8835,
    8402,
    113,
    117,
    97,
    108,
    59,
    32768,
    8841,
    105,
    108,
    100,
    101,
    1024,
    59,
    69,
    70,
    84,
    3834,
    3836,
    3843,
    3854,
    32768,
    8769,
    113,
    117,
    97,
    108,
    59,
    32768,
    8772,
    117,
    108,
    108,
    69,
    113,
    117,
    97,
    108,
    59,
    32768,
    8775,
    105,
    108,
    100,
    101,
    59,
    32768,
    8777,
    101,
    114,
    116,
    105,
    99,
    97,
    108,
    66,
    97,
    114,
    59,
    32768,
    8740,
    99,
    114,
    59,
    32896,
    55349,
    56489,
    105,
    108,
    100,
    101,
    33024,
    209,
    59,
    32768,
    209,
    59,
    32768,
    925,
    3584,
    69,
    97,
    99,
    100,
    102,
    103,
    109,
    111,
    112,
    114,
    115,
    116,
    117,
    118,
    3921,
    3927,
    3936,
    3951,
    3958,
    3963,
    3972,
    3996,
    4002,
    4034,
    4037,
    4055,
    4071,
    4078,
    108,
    105,
    103,
    59,
    32768,
    338,
    99,
    117,
    116,
    101,
    33024,
    211,
    59,
    32768,
    211,
    512,
    105,
    121,
    3941,
    3948,
    114,
    99,
    33024,
    212,
    59,
    32768,
    212,
    59,
    32768,
    1054,
    98,
    108,
    97,
    99,
    59,
    32768,
    336,
    114,
    59,
    32896,
    55349,
    56594,
    114,
    97,
    118,
    101,
    33024,
    210,
    59,
    32768,
    210,
    768,
    97,
    101,
    105,
    3979,
    3984,
    3989,
    99,
    114,
    59,
    32768,
    332,
    103,
    97,
    59,
    32768,
    937,
    99,
    114,
    111,
    110,
    59,
    32768,
    927,
    112,
    102,
    59,
    32896,
    55349,
    56646,
    101,
    110,
    67,
    117,
    114,
    108,
    121,
    512,
    68,
    81,
    4014,
    4027,
    111,
    117,
    98,
    108,
    101,
    81,
    117,
    111,
    116,
    101,
    59,
    32768,
    8220,
    117,
    111,
    116,
    101,
    59,
    32768,
    8216,
    59,
    32768,
    10836,
    512,
    99,
    108,
    4042,
    4047,
    114,
    59,
    32896,
    55349,
    56490,
    97,
    115,
    104,
    33024,
    216,
    59,
    32768,
    216,
    105,
    573,
    4060,
    4067,
    100,
    101,
    33024,
    213,
    59,
    32768,
    213,
    101,
    115,
    59,
    32768,
    10807,
    109,
    108,
    33024,
    214,
    59,
    32768,
    214,
    101,
    114,
    512,
    66,
    80,
    4085,
    4109,
    512,
    97,
    114,
    4090,
    4094,
    114,
    59,
    32768,
    8254,
    97,
    99,
    512,
    101,
    107,
    4101,
    4104,
    59,
    32768,
    9182,
    101,
    116,
    59,
    32768,
    9140,
    97,
    114,
    101,
    110,
    116,
    104,
    101,
    115,
    105,
    115,
    59,
    32768,
    9180,
    2304,
    97,
    99,
    102,
    104,
    105,
    108,
    111,
    114,
    115,
    4141,
    4150,
    4154,
    4159,
    4163,
    4166,
    4176,
    4198,
    4284,
    114,
    116,
    105,
    97,
    108,
    68,
    59,
    32768,
    8706,
    121,
    59,
    32768,
    1055,
    114,
    59,
    32896,
    55349,
    56595,
    105,
    59,
    32768,
    934,
    59,
    32768,
    928,
    117,
    115,
    77,
    105,
    110,
    117,
    115,
    59,
    32768,
    177,
    512,
    105,
    112,
    4181,
    4194,
    110,
    99,
    97,
    114,
    101,
    112,
    108,
    97,
    110,
    101,
    59,
    32768,
    8460,
    102,
    59,
    32768,
    8473,
    1024,
    59,
    101,
    105,
    111,
    4207,
    4209,
    4251,
    4256,
    32768,
    10939,
    99,
    101,
    100,
    101,
    115,
    1024,
    59,
    69,
    83,
    84,
    4223,
    4225,
    4232,
    4244,
    32768,
    8826,
    113,
    117,
    97,
    108,
    59,
    32768,
    10927,
    108,
    97,
    110,
    116,
    69,
    113,
    117,
    97,
    108,
    59,
    32768,
    8828,
    105,
    108,
    100,
    101,
    59,
    32768,
    8830,
    109,
    101,
    59,
    32768,
    8243,
    512,
    100,
    112,
    4261,
    4267,
    117,
    99,
    116,
    59,
    32768,
    8719,
    111,
    114,
    116,
    105,
    111,
    110,
    512,
    59,
    97,
    4278,
    4280,
    32768,
    8759,
    108,
    59,
    32768,
    8733,
    512,
    99,
    105,
    4289,
    4294,
    114,
    59,
    32896,
    55349,
    56491,
    59,
    32768,
    936,
    1024,
    85,
    102,
    111,
    115,
    4306,
    4313,
    4318,
    4323,
    79,
    84,
    33024,
    34,
    59,
    32768,
    34,
    114,
    59,
    32896,
    55349,
    56596,
    112,
    102,
    59,
    32768,
    8474,
    99,
    114,
    59,
    32896,
    55349,
    56492,
    3072,
    66,
    69,
    97,
    99,
    101,
    102,
    104,
    105,
    111,
    114,
    115,
    117,
    4354,
    4360,
    4366,
    4395,
    4417,
    4473,
    4477,
    4481,
    4743,
    4764,
    4776,
    4788,
    97,
    114,
    114,
    59,
    32768,
    10512,
    71,
    33024,
    174,
    59,
    32768,
    174,
    768,
    99,
    110,
    114,
    4373,
    4379,
    4383,
    117,
    116,
    101,
    59,
    32768,
    340,
    103,
    59,
    32768,
    10219,
    114,
    512,
    59,
    116,
    4389,
    4391,
    32768,
    8608,
    108,
    59,
    32768,
    10518,
    768,
    97,
    101,
    121,
    4402,
    4408,
    4414,
    114,
    111,
    110,
    59,
    32768,
    344,
    100,
    105,
    108,
    59,
    32768,
    342,
    59,
    32768,
    1056,
    512,
    59,
    118,
    4422,
    4424,
    32768,
    8476,
    101,
    114,
    115,
    101,
    512,
    69,
    85,
    4433,
    4458,
    512,
    108,
    113,
    4438,
    4446,
    101,
    109,
    101,
    110,
    116,
    59,
    32768,
    8715,
    117,
    105,
    108,
    105,
    98,
    114,
    105,
    117,
    109,
    59,
    32768,
    8651,
    112,
    69,
    113,
    117,
    105,
    108,
    105,
    98,
    114,
    105,
    117,
    109,
    59,
    32768,
    10607,
    114,
    59,
    32768,
    8476,
    111,
    59,
    32768,
    929,
    103,
    104,
    116,
    2048,
    65,
    67,
    68,
    70,
    84,
    85,
    86,
    97,
    4501,
    4547,
    4556,
    4607,
    4614,
    4671,
    4719,
    4736,
    512,
    110,
    114,
    4506,
    4519,
    103,
    108,
    101,
    66,
    114,
    97,
    99,
    107,
    101,
    116,
    59,
    32768,
    10217,
    114,
    111,
    119,
    768,
    59,
    66,
    76,
    4529,
    4531,
    4536,
    32768,
    8594,
    97,
    114,
    59,
    32768,
    8677,
    101,
    102,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8644,
    101,
    105,
    108,
    105,
    110,
    103,
    59,
    32768,
    8969,
    111,
    838,
    4562,
    0,
    4575,
    98,
    108,
    101,
    66,
    114,
    97,
    99,
    107,
    101,
    116,
    59,
    32768,
    10215,
    110,
    805,
    4580,
    0,
    4591,
    101,
    101,
    86,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10589,
    101,
    99,
    116,
    111,
    114,
    512,
    59,
    66,
    4600,
    4602,
    32768,
    8642,
    97,
    114,
    59,
    32768,
    10581,
    108,
    111,
    111,
    114,
    59,
    32768,
    8971,
    512,
    101,
    114,
    4619,
    4644,
    101,
    768,
    59,
    65,
    86,
    4627,
    4629,
    4636,
    32768,
    8866,
    114,
    114,
    111,
    119,
    59,
    32768,
    8614,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10587,
    105,
    97,
    110,
    103,
    108,
    101,
    768,
    59,
    66,
    69,
    4657,
    4659,
    4664,
    32768,
    8883,
    97,
    114,
    59,
    32768,
    10704,
    113,
    117,
    97,
    108,
    59,
    32768,
    8885,
    112,
    768,
    68,
    84,
    86,
    4679,
    4691,
    4702,
    111,
    119,
    110,
    86,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10575,
    101,
    101,
    86,
    101,
    99,
    116,
    111,
    114,
    59,
    32768,
    10588,
    101,
    99,
    116,
    111,
    114,
    512,
    59,
    66,
    4712,
    4714,
    32768,
    8638,
    97,
    114,
    59,
    32768,
    10580,
    101,
    99,
    116,
    111,
    114,
    512,
    59,
    66,
    4729,
    4731,
    32768,
    8640,
    97,
    114,
    59,
    32768,
    10579,
    114,
    114,
    111,
    119,
    59,
    32768,
    8658,
    512,
    112,
    117,
    4748,
    4752,
    102,
    59,
    32768,
    8477,
    110,
    100,
    73,
    109,
    112,
    108,
    105,
    101,
    115,
    59,
    32768,
    10608,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8667,
    512,
    99,
    104,
    4781,
    4785,
    114,
    59,
    32768,
    8475,
    59,
    32768,
    8625,
    108,
    101,
    68,
    101,
    108,
    97,
    121,
    101,
    100,
    59,
    32768,
    10740,
    3328,
    72,
    79,
    97,
    99,
    102,
    104,
    105,
    109,
    111,
    113,
    115,
    116,
    117,
    4827,
    4842,
    4849,
    4856,
    4889,
    4894,
    4949,
    4955,
    4967,
    4973,
    5059,
    5065,
    5070,
    512,
    67,
    99,
    4832,
    4838,
    72,
    99,
    121,
    59,
    32768,
    1065,
    121,
    59,
    32768,
    1064,
    70,
    84,
    99,
    121,
    59,
    32768,
    1068,
    99,
    117,
    116,
    101,
    59,
    32768,
    346,
    1280,
    59,
    97,
    101,
    105,
    121,
    4867,
    4869,
    4875,
    4881,
    4886,
    32768,
    10940,
    114,
    111,
    110,
    59,
    32768,
    352,
    100,
    105,
    108,
    59,
    32768,
    350,
    114,
    99,
    59,
    32768,
    348,
    59,
    32768,
    1057,
    114,
    59,
    32896,
    55349,
    56598,
    111,
    114,
    116,
    1024,
    68,
    76,
    82,
    85,
    4906,
    4917,
    4928,
    4940,
    111,
    119,
    110,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8595,
    101,
    102,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8592,
    105,
    103,
    104,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8594,
    112,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8593,
    103,
    109,
    97,
    59,
    32768,
    931,
    97,
    108,
    108,
    67,
    105,
    114,
    99,
    108,
    101,
    59,
    32768,
    8728,
    112,
    102,
    59,
    32896,
    55349,
    56650,
    1091,
    4979,
    0,
    0,
    4983,
    116,
    59,
    32768,
    8730,
    97,
    114,
    101,
    1024,
    59,
    73,
    83,
    85,
    4994,
    4996,
    5010,
    5052,
    32768,
    9633,
    110,
    116,
    101,
    114,
    115,
    101,
    99,
    116,
    105,
    111,
    110,
    59,
    32768,
    8851,
    117,
    512,
    98,
    112,
    5016,
    5033,
    115,
    101,
    116,
    512,
    59,
    69,
    5024,
    5026,
    32768,
    8847,
    113,
    117,
    97,
    108,
    59,
    32768,
    8849,
    101,
    114,
    115,
    101,
    116,
    512,
    59,
    69,
    5043,
    5045,
    32768,
    8848,
    113,
    117,
    97,
    108,
    59,
    32768,
    8850,
    110,
    105,
    111,
    110,
    59,
    32768,
    8852,
    99,
    114,
    59,
    32896,
    55349,
    56494,
    97,
    114,
    59,
    32768,
    8902,
    1024,
    98,
    99,
    109,
    112,
    5079,
    5102,
    5155,
    5158,
    512,
    59,
    115,
    5084,
    5086,
    32768,
    8912,
    101,
    116,
    512,
    59,
    69,
    5093,
    5095,
    32768,
    8912,
    113,
    117,
    97,
    108,
    59,
    32768,
    8838,
    512,
    99,
    104,
    5107,
    5148,
    101,
    101,
    100,
    115,
    1024,
    59,
    69,
    83,
    84,
    5120,
    5122,
    5129,
    5141,
    32768,
    8827,
    113,
    117,
    97,
    108,
    59,
    32768,
    10928,
    108,
    97,
    110,
    116,
    69,
    113,
    117,
    97,
    108,
    59,
    32768,
    8829,
    105,
    108,
    100,
    101,
    59,
    32768,
    8831,
    84,
    104,
    97,
    116,
    59,
    32768,
    8715,
    59,
    32768,
    8721,
    768,
    59,
    101,
    115,
    5165,
    5167,
    5185,
    32768,
    8913,
    114,
    115,
    101,
    116,
    512,
    59,
    69,
    5176,
    5178,
    32768,
    8835,
    113,
    117,
    97,
    108,
    59,
    32768,
    8839,
    101,
    116,
    59,
    32768,
    8913,
    2816,
    72,
    82,
    83,
    97,
    99,
    102,
    104,
    105,
    111,
    114,
    115,
    5213,
    5221,
    5227,
    5241,
    5252,
    5274,
    5279,
    5323,
    5362,
    5368,
    5378,
    79,
    82,
    78,
    33024,
    222,
    59,
    32768,
    222,
    65,
    68,
    69,
    59,
    32768,
    8482,
    512,
    72,
    99,
    5232,
    5237,
    99,
    121,
    59,
    32768,
    1035,
    121,
    59,
    32768,
    1062,
    512,
    98,
    117,
    5246,
    5249,
    59,
    32768,
    9,
    59,
    32768,
    932,
    768,
    97,
    101,
    121,
    5259,
    5265,
    5271,
    114,
    111,
    110,
    59,
    32768,
    356,
    100,
    105,
    108,
    59,
    32768,
    354,
    59,
    32768,
    1058,
    114,
    59,
    32896,
    55349,
    56599,
    512,
    101,
    105,
    5284,
    5300,
    835,
    5289,
    0,
    5297,
    101,
    102,
    111,
    114,
    101,
    59,
    32768,
    8756,
    97,
    59,
    32768,
    920,
    512,
    99,
    110,
    5305,
    5315,
    107,
    83,
    112,
    97,
    99,
    101,
    59,
    32896,
    8287,
    8202,
    83,
    112,
    97,
    99,
    101,
    59,
    32768,
    8201,
    108,
    100,
    101,
    1024,
    59,
    69,
    70,
    84,
    5335,
    5337,
    5344,
    5355,
    32768,
    8764,
    113,
    117,
    97,
    108,
    59,
    32768,
    8771,
    117,
    108,
    108,
    69,
    113,
    117,
    97,
    108,
    59,
    32768,
    8773,
    105,
    108,
    100,
    101,
    59,
    32768,
    8776,
    112,
    102,
    59,
    32896,
    55349,
    56651,
    105,
    112,
    108,
    101,
    68,
    111,
    116,
    59,
    32768,
    8411,
    512,
    99,
    116,
    5383,
    5388,
    114,
    59,
    32896,
    55349,
    56495,
    114,
    111,
    107,
    59,
    32768,
    358,
    5426,
    5417,
    5444,
    5458,
    5473,
    0,
    5480,
    5485,
    0,
    0,
    0,
    0,
    0,
    5494,
    5500,
    5564,
    5579,
    0,
    5726,
    5732,
    5738,
    5745,
    512,
    99,
    114,
    5421,
    5429,
    117,
    116,
    101,
    33024,
    218,
    59,
    32768,
    218,
    114,
    512,
    59,
    111,
    5435,
    5437,
    32768,
    8607,
    99,
    105,
    114,
    59,
    32768,
    10569,
    114,
    820,
    5449,
    0,
    5453,
    121,
    59,
    32768,
    1038,
    118,
    101,
    59,
    32768,
    364,
    512,
    105,
    121,
    5462,
    5469,
    114,
    99,
    33024,
    219,
    59,
    32768,
    219,
    59,
    32768,
    1059,
    98,
    108,
    97,
    99,
    59,
    32768,
    368,
    114,
    59,
    32896,
    55349,
    56600,
    114,
    97,
    118,
    101,
    33024,
    217,
    59,
    32768,
    217,
    97,
    99,
    114,
    59,
    32768,
    362,
    512,
    100,
    105,
    5504,
    5548,
    101,
    114,
    512,
    66,
    80,
    5511,
    5535,
    512,
    97,
    114,
    5516,
    5520,
    114,
    59,
    32768,
    95,
    97,
    99,
    512,
    101,
    107,
    5527,
    5530,
    59,
    32768,
    9183,
    101,
    116,
    59,
    32768,
    9141,
    97,
    114,
    101,
    110,
    116,
    104,
    101,
    115,
    105,
    115,
    59,
    32768,
    9181,
    111,
    110,
    512,
    59,
    80,
    5555,
    5557,
    32768,
    8899,
    108,
    117,
    115,
    59,
    32768,
    8846,
    512,
    103,
    112,
    5568,
    5573,
    111,
    110,
    59,
    32768,
    370,
    102,
    59,
    32896,
    55349,
    56652,
    2048,
    65,
    68,
    69,
    84,
    97,
    100,
    112,
    115,
    5595,
    5624,
    5635,
    5648,
    5664,
    5671,
    5682,
    5712,
    114,
    114,
    111,
    119,
    768,
    59,
    66,
    68,
    5606,
    5608,
    5613,
    32768,
    8593,
    97,
    114,
    59,
    32768,
    10514,
    111,
    119,
    110,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8645,
    111,
    119,
    110,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8597,
    113,
    117,
    105,
    108,
    105,
    98,
    114,
    105,
    117,
    109,
    59,
    32768,
    10606,
    101,
    101,
    512,
    59,
    65,
    5655,
    5657,
    32768,
    8869,
    114,
    114,
    111,
    119,
    59,
    32768,
    8613,
    114,
    114,
    111,
    119,
    59,
    32768,
    8657,
    111,
    119,
    110,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8661,
    101,
    114,
    512,
    76,
    82,
    5689,
    5700,
    101,
    102,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8598,
    105,
    103,
    104,
    116,
    65,
    114,
    114,
    111,
    119,
    59,
    32768,
    8599,
    105,
    512,
    59,
    108,
    5718,
    5720,
    32768,
    978,
    111,
    110,
    59,
    32768,
    933,
    105,
    110,
    103,
    59,
    32768,
    366,
    99,
    114,
    59,
    32896,
    55349,
    56496,
    105,
    108,
    100,
    101,
    59,
    32768,
    360,
    109,
    108,
    33024,
    220,
    59,
    32768,
    220,
    2304,
    68,
    98,
    99,
    100,
    101,
    102,
    111,
    115,
    118,
    5770,
    5776,
    5781,
    5785,
    5798,
    5878,
    5883,
    5889,
    5895,
    97,
    115,
    104,
    59,
    32768,
    8875,
    97,
    114,
    59,
    32768,
    10987,
    121,
    59,
    32768,
    1042,
    97,
    115,
    104,
    512,
    59,
    108,
    5793,
    5795,
    32768,
    8873,
    59,
    32768,
    10982,
    512,
    101,
    114,
    5803,
    5806,
    59,
    32768,
    8897,
    768,
    98,
    116,
    121,
    5813,
    5818,
    5866,
    97,
    114,
    59,
    32768,
    8214,
    512,
    59,
    105,
    5823,
    5825,
    32768,
    8214,
    99,
    97,
    108,
    1024,
    66,
    76,
    83,
    84,
    5837,
    5842,
    5848,
    5859,
    97,
    114,
    59,
    32768,
    8739,
    105,
    110,
    101,
    59,
    32768,
    124,
    101,
    112,
    97,
    114,
    97,
    116,
    111,
    114,
    59,
    32768,
    10072,
    105,
    108,
    100,
    101,
    59,
    32768,
    8768,
    84,
    104,
    105,
    110,
    83,
    112,
    97,
    99,
    101,
    59,
    32768,
    8202,
    114,
    59,
    32896,
    55349,
    56601,
    112,
    102,
    59,
    32896,
    55349,
    56653,
    99,
    114,
    59,
    32896,
    55349,
    56497,
    100,
    97,
    115,
    104,
    59,
    32768,
    8874,
    1280,
    99,
    101,
    102,
    111,
    115,
    5913,
    5919,
    5925,
    5930,
    5936,
    105,
    114,
    99,
    59,
    32768,
    372,
    100,
    103,
    101,
    59,
    32768,
    8896,
    114,
    59,
    32896,
    55349,
    56602,
    112,
    102,
    59,
    32896,
    55349,
    56654,
    99,
    114,
    59,
    32896,
    55349,
    56498,
    1024,
    102,
    105,
    111,
    115,
    5951,
    5956,
    5959,
    5965,
    114,
    59,
    32896,
    55349,
    56603,
    59,
    32768,
    926,
    112,
    102,
    59,
    32896,
    55349,
    56655,
    99,
    114,
    59,
    32896,
    55349,
    56499,
    2304,
    65,
    73,
    85,
    97,
    99,
    102,
    111,
    115,
    117,
    5990,
    5995,
    6000,
    6005,
    6014,
    6027,
    6032,
    6038,
    6044,
    99,
    121,
    59,
    32768,
    1071,
    99,
    121,
    59,
    32768,
    1031,
    99,
    121,
    59,
    32768,
    1070,
    99,
    117,
    116,
    101,
    33024,
    221,
    59,
    32768,
    221,
    512,
    105,
    121,
    6019,
    6024,
    114,
    99,
    59,
    32768,
    374,
    59,
    32768,
    1067,
    114,
    59,
    32896,
    55349,
    56604,
    112,
    102,
    59,
    32896,
    55349,
    56656,
    99,
    114,
    59,
    32896,
    55349,
    56500,
    109,
    108,
    59,
    32768,
    376,
    2048,
    72,
    97,
    99,
    100,
    101,
    102,
    111,
    115,
    6066,
    6071,
    6078,
    6092,
    6097,
    6119,
    6123,
    6128,
    99,
    121,
    59,
    32768,
    1046,
    99,
    117,
    116,
    101,
    59,
    32768,
    377,
    512,
    97,
    121,
    6083,
    6089,
    114,
    111,
    110,
    59,
    32768,
    381,
    59,
    32768,
    1047,
    111,
    116,
    59,
    32768,
    379,
    835,
    6102,
    0,
    6116,
    111,
    87,
    105,
    100,
    116,
    104,
    83,
    112,
    97,
    99,
    101,
    59,
    32768,
    8203,
    97,
    59,
    32768,
    918,
    114,
    59,
    32768,
    8488,
    112,
    102,
    59,
    32768,
    8484,
    99,
    114,
    59,
    32896,
    55349,
    56501,
    5938,
    6159,
    6168,
    6175,
    0,
    6214,
    6222,
    6233,
    0,
    0,
    0,
    0,
    6242,
    6267,
    6290,
    6429,
    6444,
    0,
    6495,
    6503,
    6531,
    6540,
    0,
    6547,
    99,
    117,
    116,
    101,
    33024,
    225,
    59,
    32768,
    225,
    114,
    101,
    118,
    101,
    59,
    32768,
    259,
    1536,
    59,
    69,
    100,
    105,
    117,
    121,
    6187,
    6189,
    6193,
    6196,
    6203,
    6210,
    32768,
    8766,
    59,
    32896,
    8766,
    819,
    59,
    32768,
    8767,
    114,
    99,
    33024,
    226,
    59,
    32768,
    226,
    116,
    101,
    33024,
    180,
    59,
    32768,
    180,
    59,
    32768,
    1072,
    108,
    105,
    103,
    33024,
    230,
    59,
    32768,
    230,
    512,
    59,
    114,
    6226,
    6228,
    32768,
    8289,
    59,
    32896,
    55349,
    56606,
    114,
    97,
    118,
    101,
    33024,
    224,
    59,
    32768,
    224,
    512,
    101,
    112,
    6246,
    6261,
    512,
    102,
    112,
    6251,
    6257,
    115,
    121,
    109,
    59,
    32768,
    8501,
    104,
    59,
    32768,
    8501,
    104,
    97,
    59,
    32768,
    945,
    512,
    97,
    112,
    6271,
    6284,
    512,
    99,
    108,
    6276,
    6280,
    114,
    59,
    32768,
    257,
    103,
    59,
    32768,
    10815,
    33024,
    38,
    59,
    32768,
    38,
    1077,
    6295,
    0,
    0,
    6326,
    1280,
    59,
    97,
    100,
    115,
    118,
    6305,
    6307,
    6312,
    6315,
    6322,
    32768,
    8743,
    110,
    100,
    59,
    32768,
    10837,
    59,
    32768,
    10844,
    108,
    111,
    112,
    101,
    59,
    32768,
    10840,
    59,
    32768,
    10842,
    1792,
    59,
    101,
    108,
    109,
    114,
    115,
    122,
    6340,
    6342,
    6345,
    6349,
    6391,
    6410,
    6422,
    32768,
    8736,
    59,
    32768,
    10660,
    101,
    59,
    32768,
    8736,
    115,
    100,
    512,
    59,
    97,
    6356,
    6358,
    32768,
    8737,
    2098,
    6368,
    6371,
    6374,
    6377,
    6380,
    6383,
    6386,
    6389,
    59,
    32768,
    10664,
    59,
    32768,
    10665,
    59,
    32768,
    10666,
    59,
    32768,
    10667,
    59,
    32768,
    10668,
    59,
    32768,
    10669,
    59,
    32768,
    10670,
    59,
    32768,
    10671,
    116,
    512,
    59,
    118,
    6397,
    6399,
    32768,
    8735,
    98,
    512,
    59,
    100,
    6405,
    6407,
    32768,
    8894,
    59,
    32768,
    10653,
    512,
    112,
    116,
    6415,
    6419,
    104,
    59,
    32768,
    8738,
    59,
    32768,
    197,
    97,
    114,
    114,
    59,
    32768,
    9084,
    512,
    103,
    112,
    6433,
    6438,
    111,
    110,
    59,
    32768,
    261,
    102,
    59,
    32896,
    55349,
    56658,
    1792,
    59,
    69,
    97,
    101,
    105,
    111,
    112,
    6458,
    6460,
    6463,
    6469,
    6472,
    6476,
    6480,
    32768,
    8776,
    59,
    32768,
    10864,
    99,
    105,
    114,
    59,
    32768,
    10863,
    59,
    32768,
    8778,
    100,
    59,
    32768,
    8779,
    115,
    59,
    32768,
    39,
    114,
    111,
    120,
    512,
    59,
    101,
    6488,
    6490,
    32768,
    8776,
    113,
    59,
    32768,
    8778,
    105,
    110,
    103,
    33024,
    229,
    59,
    32768,
    229,
    768,
    99,
    116,
    121,
    6509,
    6514,
    6517,
    114,
    59,
    32896,
    55349,
    56502,
    59,
    32768,
    42,
    109,
    112,
    512,
    59,
    101,
    6524,
    6526,
    32768,
    8776,
    113,
    59,
    32768,
    8781,
    105,
    108,
    100,
    101,
    33024,
    227,
    59,
    32768,
    227,
    109,
    108,
    33024,
    228,
    59,
    32768,
    228,
    512,
    99,
    105,
    6551,
    6559,
    111,
    110,
    105,
    110,
    116,
    59,
    32768,
    8755,
    110,
    116,
    59,
    32768,
    10769,
    4096,
    78,
    97,
    98,
    99,
    100,
    101,
    102,
    105,
    107,
    108,
    110,
    111,
    112,
    114,
    115,
    117,
    6597,
    6602,
    6673,
    6688,
    6701,
    6707,
    6768,
    6773,
    6891,
    6898,
    6999,
    7023,
    7309,
    7316,
    7334,
    7383,
    111,
    116,
    59,
    32768,
    10989,
    512,
    99,
    114,
    6607,
    6652,
    107,
    1024,
    99,
    101,
    112,
    115,
    6617,
    6623,
    6632,
    6639,
    111,
    110,
    103,
    59,
    32768,
    8780,
    112,
    115,
    105,
    108,
    111,
    110,
    59,
    32768,
    1014,
    114,
    105,
    109,
    101,
    59,
    32768,
    8245,
    105,
    109,
    512,
    59,
    101,
    6646,
    6648,
    32768,
    8765,
    113,
    59,
    32768,
    8909,
    583,
    6656,
    6661,
    101,
    101,
    59,
    32768,
    8893,
    101,
    100,
    512,
    59,
    103,
    6667,
    6669,
    32768,
    8965,
    101,
    59,
    32768,
    8965,
    114,
    107,
    512,
    59,
    116,
    6680,
    6682,
    32768,
    9141,
    98,
    114,
    107,
    59,
    32768,
    9142,
    512,
    111,
    121,
    6693,
    6698,
    110,
    103,
    59,
    32768,
    8780,
    59,
    32768,
    1073,
    113,
    117,
    111,
    59,
    32768,
    8222,
    1280,
    99,
    109,
    112,
    114,
    116,
    6718,
    6731,
    6738,
    6743,
    6749,
    97,
    117,
    115,
    512,
    59,
    101,
    6726,
    6728,
    32768,
    8757,
    59,
    32768,
    8757,
    112,
    116,
    121,
    118,
    59,
    32768,
    10672,
    115,
    105,
    59,
    32768,
    1014,
    110,
    111,
    117,
    59,
    32768,
    8492,
    768,
    97,
    104,
    119,
    6756,
    6759,
    6762,
    59,
    32768,
    946,
    59,
    32768,
    8502,
    101,
    101,
    110,
    59,
    32768,
    8812,
    114,
    59,
    32896,
    55349,
    56607,
    103,
    1792,
    99,
    111,
    115,
    116,
    117,
    118,
    119,
    6789,
    6809,
    6834,
    6850,
    6872,
    6879,
    6884,
    768,
    97,
    105,
    117,
    6796,
    6800,
    6805,
    112,
    59,
    32768,
    8898,
    114,
    99,
    59,
    32768,
    9711,
    112,
    59,
    32768,
    8899,
    768,
    100,
    112,
    116,
    6816,
    6821,
    6827,
    111,
    116,
    59,
    32768,
    10752,
    108,
    117,
    115,
    59,
    32768,
    10753,
    105,
    109,
    101,
    115,
    59,
    32768,
    10754,
    1090,
    6840,
    0,
    0,
    6846,
    99,
    117,
    112,
    59,
    32768,
    10758,
    97,
    114,
    59,
    32768,
    9733,
    114,
    105,
    97,
    110,
    103,
    108,
    101,
    512,
    100,
    117,
    6862,
    6868,
    111,
    119,
    110,
    59,
    32768,
    9661,
    112,
    59,
    32768,
    9651,
    112,
    108,
    117,
    115,
    59,
    32768,
    10756,
    101,
    101,
    59,
    32768,
    8897,
    101,
    100,
    103,
    101,
    59,
    32768,
    8896,
    97,
    114,
    111,
    119,
    59,
    32768,
    10509,
    768,
    97,
    107,
    111,
    6905,
    6976,
    6994,
    512,
    99,
    110,
    6910,
    6972,
    107,
    768,
    108,
    115,
    116,
    6918,
    6927,
    6935,
    111,
    122,
    101,
    110,
    103,
    101,
    59,
    32768,
    10731,
    113,
    117,
    97,
    114,
    101,
    59,
    32768,
    9642,
    114,
    105,
    97,
    110,
    103,
    108,
    101,
    1024,
    59,
    100,
    108,
    114,
    6951,
    6953,
    6959,
    6965,
    32768,
    9652,
    111,
    119,
    110,
    59,
    32768,
    9662,
    101,
    102,
    116,
    59,
    32768,
    9666,
    105,
    103,
    104,
    116,
    59,
    32768,
    9656,
    107,
    59,
    32768,
    9251,
    770,
    6981,
    0,
    6991,
    771,
    6985,
    0,
    6988,
    59,
    32768,
    9618,
    59,
    32768,
    9617,
    52,
    59,
    32768,
    9619,
    99,
    107,
    59,
    32768,
    9608,
    512,
    101,
    111,
    7004,
    7019,
    512,
    59,
    113,
    7009,
    7012,
    32896,
    61,
    8421,
    117,
    105,
    118,
    59,
    32896,
    8801,
    8421,
    116,
    59,
    32768,
    8976,
    1024,
    112,
    116,
    119,
    120,
    7032,
    7037,
    7049,
    7055,
    102,
    59,
    32896,
    55349,
    56659,
    512,
    59,
    116,
    7042,
    7044,
    32768,
    8869,
    111,
    109,
    59,
    32768,
    8869,
    116,
    105,
    101,
    59,
    32768,
    8904,
    3072,
    68,
    72,
    85,
    86,
    98,
    100,
    104,
    109,
    112,
    116,
    117,
    118,
    7080,
    7101,
    7126,
    7147,
    7182,
    7187,
    7208,
    7233,
    7240,
    7246,
    7253,
    7274,
    1024,
    76,
    82,
    108,
    114,
    7089,
    7092,
    7095,
    7098,
    59,
    32768,
    9559,
    59,
    32768,
    9556,
    59,
    32768,
    9558,
    59,
    32768,
    9555,
    1280,
    59,
    68,
    85,
    100,
    117,
    7112,
    7114,
    7117,
    7120,
    7123,
    32768,
    9552,
    59,
    32768,
    9574,
    59,
    32768,
    9577,
    59,
    32768,
    9572,
    59,
    32768,
    9575,
    1024,
    76,
    82,
    108,
    114,
    7135,
    7138,
    7141,
    7144,
    59,
    32768,
    9565,
    59,
    32768,
    9562,
    59,
    32768,
    9564,
    59,
    32768,
    9561,
    1792,
    59,
    72,
    76,
    82,
    104,
    108,
    114,
    7162,
    7164,
    7167,
    7170,
    7173,
    7176,
    7179,
    32768,
    9553,
    59,
    32768,
    9580,
    59,
    32768,
    9571,
    59,
    32768,
    9568,
    59,
    32768,
    9579,
    59,
    32768,
    9570,
    59,
    32768,
    9567,
    111,
    120,
    59,
    32768,
    10697,
    1024,
    76,
    82,
    108,
    114,
    7196,
    7199,
    7202,
    7205,
    59,
    32768,
    9557,
    59,
    32768,
    9554,
    59,
    32768,
    9488,
    59,
    32768,
    9484,
    1280,
    59,
    68,
    85,
    100,
    117,
    7219,
    7221,
    7224,
    7227,
    7230,
    32768,
    9472,
    59,
    32768,
    9573,
    59,
    32768,
    9576,
    59,
    32768,
    9516,
    59,
    32768,
    9524,
    105,
    110,
    117,
    115,
    59,
    32768,
    8863,
    108,
    117,
    115,
    59,
    32768,
    8862,
    105,
    109,
    101,
    115,
    59,
    32768,
    8864,
    1024,
    76,
    82,
    108,
    114,
    7262,
    7265,
    7268,
    7271,
    59,
    32768,
    9563,
    59,
    32768,
    9560,
    59,
    32768,
    9496,
    59,
    32768,
    9492,
    1792,
    59,
    72,
    76,
    82,
    104,
    108,
    114,
    7289,
    7291,
    7294,
    7297,
    7300,
    7303,
    7306,
    32768,
    9474,
    59,
    32768,
    9578,
    59,
    32768,
    9569,
    59,
    32768,
    9566,
    59,
    32768,
    9532,
    59,
    32768,
    9508,
    59,
    32768,
    9500,
    114,
    105,
    109,
    101,
    59,
    32768,
    8245,
    512,
    101,
    118,
    7321,
    7326,
    118,
    101,
    59,
    32768,
    728,
    98,
    97,
    114,
    33024,
    166,
    59,
    32768,
    166,
    1024,
    99,
    101,
    105,
    111,
    7343,
    7348,
    7353,
    7364,
    114,
    59,
    32896,
    55349,
    56503,
    109,
    105,
    59,
    32768,
    8271,
    109,
    512,
    59,
    101,
    7359,
    7361,
    32768,
    8765,
    59,
    32768,
    8909,
    108,
    768,
    59,
    98,
    104,
    7372,
    7374,
    7377,
    32768,
    92,
    59,
    32768,
    10693,
    115,
    117,
    98,
    59,
    32768,
    10184,
    573,
    7387,
    7399,
    108,
    512,
    59,
    101,
    7392,
    7394,
    32768,
    8226,
    116,
    59,
    32768,
    8226,
    112,
    768,
    59,
    69,
    101,
    7406,
    7408,
    7411,
    32768,
    8782,
    59,
    32768,
    10926,
    512,
    59,
    113,
    7416,
    7418,
    32768,
    8783,
    59,
    32768,
    8783,
    6450,
    7448,
    0,
    7523,
    7571,
    7576,
    7613,
    0,
    7618,
    7647,
    0,
    0,
    7764,
    0,
    0,
    7779,
    0,
    0,
    7899,
    7914,
    7949,
    7955,
    0,
    8158,
    0,
    8176,
    768,
    99,
    112,
    114,
    7454,
    7460,
    7509,
    117,
    116,
    101,
    59,
    32768,
    263,
    1536,
    59,
    97,
    98,
    99,
    100,
    115,
    7473,
    7475,
    7480,
    7487,
    7500,
    7505,
    32768,
    8745,
    110,
    100,
    59,
    32768,
    10820,
    114,
    99,
    117,
    112,
    59,
    32768,
    10825,
    512,
    97,
    117,
    7492,
    7496,
    112,
    59,
    32768,
    10827,
    112,
    59,
    32768,
    10823,
    111,
    116,
    59,
    32768,
    10816,
    59,
    32896,
    8745,
    65024,
    512,
    101,
    111,
    7514,
    7518,
    116,
    59,
    32768,
    8257,
    110,
    59,
    32768,
    711,
    1024,
    97,
    101,
    105,
    117,
    7531,
    7544,
    7552,
    7557,
    833,
    7536,
    0,
    7540,
    115,
    59,
    32768,
    10829,
    111,
    110,
    59,
    32768,
    269,
    100,
    105,
    108,
    33024,
    231,
    59,
    32768,
    231,
    114,
    99,
    59,
    32768,
    265,
    112,
    115,
    512,
    59,
    115,
    7564,
    7566,
    32768,
    10828,
    109,
    59,
    32768,
    10832,
    111,
    116,
    59,
    32768,
    267,
    768,
    100,
    109,
    110,
    7582,
    7589,
    7596,
    105,
    108,
    33024,
    184,
    59,
    32768,
    184,
    112,
    116,
    121,
    118,
    59,
    32768,
    10674,
    116,
    33280,
    162,
    59,
    101,
    7603,
    7605,
    32768,
    162,
    114,
    100,
    111,
    116,
    59,
    32768,
    183,
    114,
    59,
    32896,
    55349,
    56608,
    768,
    99,
    101,
    105,
    7624,
    7628,
    7643,
    121,
    59,
    32768,
    1095,
    99,
    107,
    512,
    59,
    109,
    7635,
    7637,
    32768,
    10003,
    97,
    114,
    107,
    59,
    32768,
    10003,
    59,
    32768,
    967,
    114,
    1792,
    59,
    69,
    99,
    101,
    102,
    109,
    115,
    7662,
    7664,
    7667,
    7742,
    7745,
    7752,
    7757,
    32768,
    9675,
    59,
    32768,
    10691,
    768,
    59,
    101,
    108,
    7674,
    7676,
    7680,
    32768,
    710,
    113,
    59,
    32768,
    8791,
    101,
    1074,
    7687,
    0,
    0,
    7709,
    114,
    114,
    111,
    119,
    512,
    108,
    114,
    7695,
    7701,
    101,
    102,
    116,
    59,
    32768,
    8634,
    105,
    103,
    104,
    116,
    59,
    32768,
    8635,
    1280,
    82,
    83,
    97,
    99,
    100,
    7719,
    7722,
    7725,
    7730,
    7736,
    59,
    32768,
    174,
    59,
    32768,
    9416,
    115,
    116,
    59,
    32768,
    8859,
    105,
    114,
    99,
    59,
    32768,
    8858,
    97,
    115,
    104,
    59,
    32768,
    8861,
    59,
    32768,
    8791,
    110,
    105,
    110,
    116,
    59,
    32768,
    10768,
    105,
    100,
    59,
    32768,
    10991,
    99,
    105,
    114,
    59,
    32768,
    10690,
    117,
    98,
    115,
    512,
    59,
    117,
    7771,
    7773,
    32768,
    9827,
    105,
    116,
    59,
    32768,
    9827,
    1341,
    7785,
    7804,
    7850,
    0,
    7871,
    111,
    110,
    512,
    59,
    101,
    7791,
    7793,
    32768,
    58,
    512,
    59,
    113,
    7798,
    7800,
    32768,
    8788,
    59,
    32768,
    8788,
    1086,
    7809,
    0,
    0,
    7820,
    97,
    512,
    59,
    116,
    7814,
    7816,
    32768,
    44,
    59,
    32768,
    64,
    768,
    59,
    102,
    108,
    7826,
    7828,
    7832,
    32768,
    8705,
    110,
    59,
    32768,
    8728,
    101,
    512,
    109,
    120,
    7838,
    7844,
    101,
    110,
    116,
    59,
    32768,
    8705,
    101,
    115,
    59,
    32768,
    8450,
    824,
    7854,
    0,
    7866,
    512,
    59,
    100,
    7858,
    7860,
    32768,
    8773,
    111,
    116,
    59,
    32768,
    10861,
    110,
    116,
    59,
    32768,
    8750,
    768,
    102,
    114,
    121,
    7877,
    7881,
    7886,
    59,
    32896,
    55349,
    56660,
    111,
    100,
    59,
    32768,
    8720,
    33280,
    169,
    59,
    115,
    7892,
    7894,
    32768,
    169,
    114,
    59,
    32768,
    8471,
    512,
    97,
    111,
    7903,
    7908,
    114,
    114,
    59,
    32768,
    8629,
    115,
    115,
    59,
    32768,
    10007,
    512,
    99,
    117,
    7918,
    7923,
    114,
    59,
    32896,
    55349,
    56504,
    512,
    98,
    112,
    7928,
    7938,
    512,
    59,
    101,
    7933,
    7935,
    32768,
    10959,
    59,
    32768,
    10961,
    512,
    59,
    101,
    7943,
    7945,
    32768,
    10960,
    59,
    32768,
    10962,
    100,
    111,
    116,
    59,
    32768,
    8943,
    1792,
    100,
    101,
    108,
    112,
    114,
    118,
    119,
    7969,
    7983,
    7996,
    8009,
    8057,
    8147,
    8152,
    97,
    114,
    114,
    512,
    108,
    114,
    7977,
    7980,
    59,
    32768,
    10552,
    59,
    32768,
    10549,
    1089,
    7989,
    0,
    0,
    7993,
    114,
    59,
    32768,
    8926,
    99,
    59,
    32768,
    8927,
    97,
    114,
    114,
    512,
    59,
    112,
    8004,
    8006,
    32768,
    8630,
    59,
    32768,
    10557,
    1536,
    59,
    98,
    99,
    100,
    111,
    115,
    8022,
    8024,
    8031,
    8044,
    8049,
    8053,
    32768,
    8746,
    114,
    99,
    97,
    112,
    59,
    32768,
    10824,
    512,
    97,
    117,
    8036,
    8040,
    112,
    59,
    32768,
    10822,
    112,
    59,
    32768,
    10826,
    111,
    116,
    59,
    32768,
    8845,
    114,
    59,
    32768,
    10821,
    59,
    32896,
    8746,
    65024,
    1024,
    97,
    108,
    114,
    118,
    8066,
    8078,
    8116,
    8123,
    114,
    114,
    512,
    59,
    109,
    8073,
    8075,
    32768,
    8631,
    59,
    32768,
    10556,
    121,
    768,
    101,
    118,
    119,
    8086,
    8104,
    8109,
    113,
    1089,
    8093,
    0,
    0,
    8099,
    114,
    101,
    99,
    59,
    32768,
    8926,
    117,
    99,
    99,
    59,
    32768,
    8927,
    101,
    101,
    59,
    32768,
    8910,
    101,
    100,
    103,
    101,
    59,
    32768,
    8911,
    101,
    110,
    33024,
    164,
    59,
    32768,
    164,
    101,
    97,
    114,
    114,
    111,
    119,
    512,
    108,
    114,
    8134,
    8140,
    101,
    102,
    116,
    59,
    32768,
    8630,
    105,
    103,
    104,
    116,
    59,
    32768,
    8631,
    101,
    101,
    59,
    32768,
    8910,
    101,
    100,
    59,
    32768,
    8911,
    512,
    99,
    105,
    8162,
    8170,
    111,
    110,
    105,
    110,
    116,
    59,
    32768,
    8754,
    110,
    116,
    59,
    32768,
    8753,
    108,
    99,
    116,
    121,
    59,
    32768,
    9005,
    4864,
    65,
    72,
    97,
    98,
    99,
    100,
    101,
    102,
    104,
    105,
    106,
    108,
    111,
    114,
    115,
    116,
    117,
    119,
    122,
    8221,
    8226,
    8231,
    8267,
    8282,
    8296,
    8327,
    8351,
    8366,
    8379,
    8466,
    8471,
    8487,
    8621,
    8647,
    8676,
    8697,
    8712,
    8720,
    114,
    114,
    59,
    32768,
    8659,
    97,
    114,
    59,
    32768,
    10597,
    1024,
    103,
    108,
    114,
    115,
    8240,
    8246,
    8252,
    8256,
    103,
    101,
    114,
    59,
    32768,
    8224,
    101,
    116,
    104,
    59,
    32768,
    8504,
    114,
    59,
    32768,
    8595,
    104,
    512,
    59,
    118,
    8262,
    8264,
    32768,
    8208,
    59,
    32768,
    8867,
    572,
    8271,
    8278,
    97,
    114,
    111,
    119,
    59,
    32768,
    10511,
    97,
    99,
    59,
    32768,
    733,
    512,
    97,
    121,
    8287,
    8293,
    114,
    111,
    110,
    59,
    32768,
    271,
    59,
    32768,
    1076,
    768,
    59,
    97,
    111,
    8303,
    8305,
    8320,
    32768,
    8518,
    512,
    103,
    114,
    8310,
    8316,
    103,
    101,
    114,
    59,
    32768,
    8225,
    114,
    59,
    32768,
    8650,
    116,
    115,
    101,
    113,
    59,
    32768,
    10871,
    768,
    103,
    108,
    109,
    8334,
    8339,
    8344,
    33024,
    176,
    59,
    32768,
    176,
    116,
    97,
    59,
    32768,
    948,
    112,
    116,
    121,
    118,
    59,
    32768,
    10673,
    512,
    105,
    114,
    8356,
    8362,
    115,
    104,
    116,
    59,
    32768,
    10623,
    59,
    32896,
    55349,
    56609,
    97,
    114,
    512,
    108,
    114,
    8373,
    8376,
    59,
    32768,
    8643,
    59,
    32768,
    8642,
    1280,
    97,
    101,
    103,
    115,
    118,
    8390,
    8418,
    8421,
    8428,
    8433,
    109,
    768,
    59,
    111,
    115,
    8398,
    8400,
    8415,
    32768,
    8900,
    110,
    100,
    512,
    59,
    115,
    8407,
    8409,
    32768,
    8900,
    117,
    105,
    116,
    59,
    32768,
    9830,
    59,
    32768,
    9830,
    59,
    32768,
    168,
    97,
    109,
    109,
    97,
    59,
    32768,
    989,
    105,
    110,
    59,
    32768,
    8946,
    768,
    59,
    105,
    111,
    8440,
    8442,
    8461,
    32768,
    247,
    100,
    101,
    33280,
    247,
    59,
    111,
    8450,
    8452,
    32768,
    247,
    110,
    116,
    105,
    109,
    101,
    115,
    59,
    32768,
    8903,
    110,
    120,
    59,
    32768,
    8903,
    99,
    121,
    59,
    32768,
    1106,
    99,
    1088,
    8478,
    0,
    0,
    8483,
    114,
    110,
    59,
    32768,
    8990,
    111,
    112,
    59,
    32768,
    8973,
    1280,
    108,
    112,
    116,
    117,
    119,
    8498,
    8504,
    8509,
    8556,
    8570,
    108,
    97,
    114,
    59,
    32768,
    36,
    102,
    59,
    32896,
    55349,
    56661,
    1280,
    59,
    101,
    109,
    112,
    115,
    8520,
    8522,
    8535,
    8542,
    8548,
    32768,
    729,
    113,
    512,
    59,
    100,
    8528,
    8530,
    32768,
    8784,
    111,
    116,
    59,
    32768,
    8785,
    105,
    110,
    117,
    115,
    59,
    32768,
    8760,
    108,
    117,
    115,
    59,
    32768,
    8724,
    113,
    117,
    97,
    114,
    101,
    59,
    32768,
    8865,
    98,
    108,
    101,
    98,
    97,
    114,
    119,
    101,
    100,
    103,
    101,
    59,
    32768,
    8966,
    110,
    768,
    97,
    100,
    104,
    8578,
    8585,
    8597,
    114,
    114,
    111,
    119,
    59,
    32768,
    8595,
    111,
    119,
    110,
    97,
    114,
    114,
    111,
    119,
    115,
    59,
    32768,
    8650,
    97,
    114,
    112,
    111,
    111,
    110,
    512,
    108,
    114,
    8608,
    8614,
    101,
    102,
    116,
    59,
    32768,
    8643,
    105,
    103,
    104,
    116,
    59,
    32768,
    8642,
    563,
    8625,
    8633,
    107,
    97,
    114,
    111,
    119,
    59,
    32768,
    10512,
    1088,
    8638,
    0,
    0,
    8643,
    114,
    110,
    59,
    32768,
    8991,
    111,
    112,
    59,
    32768,
    8972,
    768,
    99,
    111,
    116,
    8654,
    8666,
    8670,
    512,
    114,
    121,
    8659,
    8663,
    59,
    32896,
    55349,
    56505,
    59,
    32768,
    1109,
    108,
    59,
    32768,
    10742,
    114,
    111,
    107,
    59,
    32768,
    273,
    512,
    100,
    114,
    8681,
    8686,
    111,
    116,
    59,
    32768,
    8945,
    105,
    512,
    59,
    102,
    8692,
    8694,
    32768,
    9663,
    59,
    32768,
    9662,
    512,
    97,
    104,
    8702,
    8707,
    114,
    114,
    59,
    32768,
    8693,
    97,
    114,
    59,
    32768,
    10607,
    97,
    110,
    103,
    108,
    101,
    59,
    32768,
    10662,
    512,
    99,
    105,
    8725,
    8729,
    121,
    59,
    32768,
    1119,
    103,
    114,
    97,
    114,
    114,
    59,
    32768,
    10239,
    4608,
    68,
    97,
    99,
    100,
    101,
    102,
    103,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    120,
    8774,
    8788,
    8807,
    8844,
    8849,
    8852,
    8866,
    8895,
    8929,
    8977,
    8989,
    9004,
    9046,
    9136,
    9151,
    9171,
    9184,
    9199,
    512,
    68,
    111,
    8779,
    8784,
    111,
    116,
    59,
    32768,
    10871,
    116,
    59,
    32768,
    8785,
    512,
    99,
    115,
    8793,
    8801,
    117,
    116,
    101,
    33024,
    233,
    59,
    32768,
    233,
    116,
    101,
    114,
    59,
    32768,
    10862,
    1024,
    97,
    105,
    111,
    121,
    8816,
    8822,
    8835,
    8841,
    114,
    111,
    110,
    59,
    32768,
    283,
    114,
    512,
    59,
    99,
    8828,
    8830,
    32768,
    8790,
    33024,
    234,
    59,
    32768,
    234,
    108,
    111,
    110,
    59,
    32768,
    8789,
    59,
    32768,
    1101,
    111,
    116,
    59,
    32768,
    279,
    59,
    32768,
    8519,
    512,
    68,
    114,
    8857,
    8862,
    111,
    116,
    59,
    32768,
    8786,
    59,
    32896,
    55349,
    56610,
    768,
    59,
    114,
    115,
    8873,
    8875,
    8883,
    32768,
    10906,
    97,
    118,
    101,
    33024,
    232,
    59,
    32768,
    232,
    512,
    59,
    100,
    8888,
    8890,
    32768,
    10902,
    111,
    116,
    59,
    32768,
    10904,
    1024,
    59,
    105,
    108,
    115,
    8904,
    8906,
    8914,
    8917,
    32768,
    10905,
    110,
    116,
    101,
    114,
    115,
    59,
    32768,
    9191,
    59,
    32768,
    8467,
    512,
    59,
    100,
    8922,
    8924,
    32768,
    10901,
    111,
    116,
    59,
    32768,
    10903,
    768,
    97,
    112,
    115,
    8936,
    8941,
    8960,
    99,
    114,
    59,
    32768,
    275,
    116,
    121,
    768,
    59,
    115,
    118,
    8950,
    8952,
    8957,
    32768,
    8709,
    101,
    116,
    59,
    32768,
    8709,
    59,
    32768,
    8709,
    112,
    512,
    49,
    59,
    8966,
    8975,
    516,
    8970,
    8973,
    59,
    32768,
    8196,
    59,
    32768,
    8197,
    32768,
    8195,
    512,
    103,
    115,
    8982,
    8985,
    59,
    32768,
    331,
    112,
    59,
    32768,
    8194,
    512,
    103,
    112,
    8994,
    8999,
    111,
    110,
    59,
    32768,
    281,
    102,
    59,
    32896,
    55349,
    56662,
    768,
    97,
    108,
    115,
    9011,
    9023,
    9028,
    114,
    512,
    59,
    115,
    9017,
    9019,
    32768,
    8917,
    108,
    59,
    32768,
    10723,
    117,
    115,
    59,
    32768,
    10865,
    105,
    768,
    59,
    108,
    118,
    9036,
    9038,
    9043,
    32768,
    949,
    111,
    110,
    59,
    32768,
    949,
    59,
    32768,
    1013,
    1024,
    99,
    115,
    117,
    118,
    9055,
    9071,
    9099,
    9128,
    512,
    105,
    111,
    9060,
    9065,
    114,
    99,
    59,
    32768,
    8790,
    108,
    111,
    110,
    59,
    32768,
    8789,
    1082,
    9077,
    0,
    0,
    9081,
    109,
    59,
    32768,
    8770,
    97,
    110,
    116,
    512,
    103,
    108,
    9088,
    9093,
    116,
    114,
    59,
    32768,
    10902,
    101,
    115,
    115,
    59,
    32768,
    10901,
    768,
    97,
    101,
    105,
    9106,
    9111,
    9116,
    108,
    115,
    59,
    32768,
    61,
    115,
    116,
    59,
    32768,
    8799,
    118,
    512,
    59,
    68,
    9122,
    9124,
    32768,
    8801,
    68,
    59,
    32768,
    10872,
    112,
    97,
    114,
    115,
    108,
    59,
    32768,
    10725,
    512,
    68,
    97,
    9141,
    9146,
    111,
    116,
    59,
    32768,
    8787,
    114,
    114,
    59,
    32768,
    10609,
    768,
    99,
    100,
    105,
    9158,
    9162,
    9167,
    114,
    59,
    32768,
    8495,
    111,
    116,
    59,
    32768,
    8784,
    109,
    59,
    32768,
    8770,
    512,
    97,
    104,
    9176,
    9179,
    59,
    32768,
    951,
    33024,
    240,
    59,
    32768,
    240,
    512,
    109,
    114,
    9189,
    9195,
    108,
    33024,
    235,
    59,
    32768,
    235,
    111,
    59,
    32768,
    8364,
    768,
    99,
    105,
    112,
    9206,
    9210,
    9215,
    108,
    59,
    32768,
    33,
    115,
    116,
    59,
    32768,
    8707,
    512,
    101,
    111,
    9220,
    9230,
    99,
    116,
    97,
    116,
    105,
    111,
    110,
    59,
    32768,
    8496,
    110,
    101,
    110,
    116,
    105,
    97,
    108,
    101,
    59,
    32768,
    8519,
    4914,
    9262,
    0,
    9276,
    0,
    9280,
    9287,
    0,
    0,
    9318,
    9324,
    0,
    9331,
    0,
    9352,
    9357,
    9386,
    0,
    9395,
    9497,
    108,
    108,
    105,
    110,
    103,
    100,
    111,
    116,
    115,
    101,
    113,
    59,
    32768,
    8786,
    121,
    59,
    32768,
    1092,
    109,
    97,
    108,
    101,
    59,
    32768,
    9792,
    768,
    105,
    108,
    114,
    9293,
    9299,
    9313,
    108,
    105,
    103,
    59,
    32768,
    64259,
    1082,
    9305,
    0,
    0,
    9309,
    103,
    59,
    32768,
    64256,
    105,
    103,
    59,
    32768,
    64260,
    59,
    32896,
    55349,
    56611,
    108,
    105,
    103,
    59,
    32768,
    64257,
    108,
    105,
    103,
    59,
    32896,
    102,
    106,
    768,
    97,
    108,
    116,
    9337,
    9341,
    9346,
    116,
    59,
    32768,
    9837,
    105,
    103,
    59,
    32768,
    64258,
    110,
    115,
    59,
    32768,
    9649,
    111,
    102,
    59,
    32768,
    402,
    833,
    9361,
    0,
    9366,
    102,
    59,
    32896,
    55349,
    56663,
    512,
    97,
    107,
    9370,
    9375,
    108,
    108,
    59,
    32768,
    8704,
    512,
    59,
    118,
    9380,
    9382,
    32768,
    8916,
    59,
    32768,
    10969,
    97,
    114,
    116,
    105,
    110,
    116,
    59,
    32768,
    10765,
    512,
    97,
    111,
    9399,
    9491,
    512,
    99,
    115,
    9404,
    9487,
    1794,
    9413,
    9443,
    9453,
    9470,
    9474,
    0,
    9484,
    1795,
    9421,
    9426,
    9429,
    9434,
    9437,
    0,
    9440,
    33024,
    189,
    59,
    32768,
    189,
    59,
    32768,
    8531,
    33024,
    188,
    59,
    32768,
    188,
    59,
    32768,
    8533,
    59,
    32768,
    8537,
    59,
    32768,
    8539,
    772,
    9447,
    0,
    9450,
    59,
    32768,
    8532,
    59,
    32768,
    8534,
    1285,
    9459,
    9464,
    0,
    0,
    9467,
    33024,
    190,
    59,
    32768,
    190,
    59,
    32768,
    8535,
    59,
    32768,
    8540,
    53,
    59,
    32768,
    8536,
    775,
    9478,
    0,
    9481,
    59,
    32768,
    8538,
    59,
    32768,
    8541,
    56,
    59,
    32768,
    8542,
    108,
    59,
    32768,
    8260,
    119,
    110,
    59,
    32768,
    8994,
    99,
    114,
    59,
    32896,
    55349,
    56507,
    4352,
    69,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    105,
    106,
    108,
    110,
    111,
    114,
    115,
    116,
    118,
    9537,
    9547,
    9575,
    9582,
    9595,
    9600,
    9679,
    9684,
    9694,
    9700,
    9705,
    9725,
    9773,
    9779,
    9785,
    9810,
    9917,
    512,
    59,
    108,
    9542,
    9544,
    32768,
    8807,
    59,
    32768,
    10892,
    768,
    99,
    109,
    112,
    9554,
    9560,
    9572,
    117,
    116,
    101,
    59,
    32768,
    501,
    109,
    97,
    512,
    59,
    100,
    9567,
    9569,
    32768,
    947,
    59,
    32768,
    989,
    59,
    32768,
    10886,
    114,
    101,
    118,
    101,
    59,
    32768,
    287,
    512,
    105,
    121,
    9587,
    9592,
    114,
    99,
    59,
    32768,
    285,
    59,
    32768,
    1075,
    111,
    116,
    59,
    32768,
    289,
    1024,
    59,
    108,
    113,
    115,
    9609,
    9611,
    9614,
    9633,
    32768,
    8805,
    59,
    32768,
    8923,
    768,
    59,
    113,
    115,
    9621,
    9623,
    9626,
    32768,
    8805,
    59,
    32768,
    8807,
    108,
    97,
    110,
    116,
    59,
    32768,
    10878,
    1024,
    59,
    99,
    100,
    108,
    9642,
    9644,
    9648,
    9667,
    32768,
    10878,
    99,
    59,
    32768,
    10921,
    111,
    116,
    512,
    59,
    111,
    9655,
    9657,
    32768,
    10880,
    512,
    59,
    108,
    9662,
    9664,
    32768,
    10882,
    59,
    32768,
    10884,
    512,
    59,
    101,
    9672,
    9675,
    32896,
    8923,
    65024,
    115,
    59,
    32768,
    10900,
    114,
    59,
    32896,
    55349,
    56612,
    512,
    59,
    103,
    9689,
    9691,
    32768,
    8811,
    59,
    32768,
    8921,
    109,
    101,
    108,
    59,
    32768,
    8503,
    99,
    121,
    59,
    32768,
    1107,
    1024,
    59,
    69,
    97,
    106,
    9714,
    9716,
    9719,
    9722,
    32768,
    8823,
    59,
    32768,
    10898,
    59,
    32768,
    10917,
    59,
    32768,
    10916,
    1024,
    69,
    97,
    101,
    115,
    9734,
    9737,
    9751,
    9768,
    59,
    32768,
    8809,
    112,
    512,
    59,
    112,
    9743,
    9745,
    32768,
    10890,
    114,
    111,
    120,
    59,
    32768,
    10890,
    512,
    59,
    113,
    9756,
    9758,
    32768,
    10888,
    512,
    59,
    113,
    9763,
    9765,
    32768,
    10888,
    59,
    32768,
    8809,
    105,
    109,
    59,
    32768,
    8935,
    112,
    102,
    59,
    32896,
    55349,
    56664,
    97,
    118,
    101,
    59,
    32768,
    96,
    512,
    99,
    105,
    9790,
    9794,
    114,
    59,
    32768,
    8458,
    109,
    768,
    59,
    101,
    108,
    9802,
    9804,
    9807,
    32768,
    8819,
    59,
    32768,
    10894,
    59,
    32768,
    10896,
    34304,
    62,
    59,
    99,
    100,
    108,
    113,
    114,
    9824,
    9826,
    9838,
    9843,
    9849,
    9856,
    32768,
    62,
    512,
    99,
    105,
    9831,
    9834,
    59,
    32768,
    10919,
    114,
    59,
    32768,
    10874,
    111,
    116,
    59,
    32768,
    8919,
    80,
    97,
    114,
    59,
    32768,
    10645,
    117,
    101,
    115,
    116,
    59,
    32768,
    10876,
    1280,
    97,
    100,
    101,
    108,
    115,
    9867,
    9882,
    9887,
    9906,
    9912,
    833,
    9872,
    0,
    9879,
    112,
    114,
    111,
    120,
    59,
    32768,
    10886,
    114,
    59,
    32768,
    10616,
    111,
    116,
    59,
    32768,
    8919,
    113,
    512,
    108,
    113,
    9893,
    9899,
    101,
    115,
    115,
    59,
    32768,
    8923,
    108,
    101,
    115,
    115,
    59,
    32768,
    10892,
    101,
    115,
    115,
    59,
    32768,
    8823,
    105,
    109,
    59,
    32768,
    8819,
    512,
    101,
    110,
    9922,
    9932,
    114,
    116,
    110,
    101,
    113,
    113,
    59,
    32896,
    8809,
    65024,
    69,
    59,
    32896,
    8809,
    65024,
    2560,
    65,
    97,
    98,
    99,
    101,
    102,
    107,
    111,
    115,
    121,
    9958,
    9963,
    10015,
    10020,
    10026,
    10060,
    10065,
    10085,
    10147,
    10171,
    114,
    114,
    59,
    32768,
    8660,
    1024,
    105,
    108,
    109,
    114,
    9972,
    9978,
    9982,
    9988,
    114,
    115,
    112,
    59,
    32768,
    8202,
    102,
    59,
    32768,
    189,
    105,
    108,
    116,
    59,
    32768,
    8459,
    512,
    100,
    114,
    9993,
    9998,
    99,
    121,
    59,
    32768,
    1098,
    768,
    59,
    99,
    119,
    10005,
    10007,
    10012,
    32768,
    8596,
    105,
    114,
    59,
    32768,
    10568,
    59,
    32768,
    8621,
    97,
    114,
    59,
    32768,
    8463,
    105,
    114,
    99,
    59,
    32768,
    293,
    768,
    97,
    108,
    114,
    10033,
    10048,
    10054,
    114,
    116,
    115,
    512,
    59,
    117,
    10041,
    10043,
    32768,
    9829,
    105,
    116,
    59,
    32768,
    9829,
    108,
    105,
    112,
    59,
    32768,
    8230,
    99,
    111,
    110,
    59,
    32768,
    8889,
    114,
    59,
    32896,
    55349,
    56613,
    115,
    512,
    101,
    119,
    10071,
    10078,
    97,
    114,
    111,
    119,
    59,
    32768,
    10533,
    97,
    114,
    111,
    119,
    59,
    32768,
    10534,
    1280,
    97,
    109,
    111,
    112,
    114,
    10096,
    10101,
    10107,
    10136,
    10141,
    114,
    114,
    59,
    32768,
    8703,
    116,
    104,
    116,
    59,
    32768,
    8763,
    107,
    512,
    108,
    114,
    10113,
    10124,
    101,
    102,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8617,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8618,
    102,
    59,
    32896,
    55349,
    56665,
    98,
    97,
    114,
    59,
    32768,
    8213,
    768,
    99,
    108,
    116,
    10154,
    10159,
    10165,
    114,
    59,
    32896,
    55349,
    56509,
    97,
    115,
    104,
    59,
    32768,
    8463,
    114,
    111,
    107,
    59,
    32768,
    295,
    512,
    98,
    112,
    10176,
    10182,
    117,
    108,
    108,
    59,
    32768,
    8259,
    104,
    101,
    110,
    59,
    32768,
    8208,
    5426,
    10211,
    0,
    10220,
    0,
    10239,
    10255,
    10267,
    0,
    10276,
    10312,
    0,
    0,
    10318,
    10371,
    10458,
    10485,
    10491,
    0,
    10500,
    10545,
    10558,
    99,
    117,
    116,
    101,
    33024,
    237,
    59,
    32768,
    237,
    768,
    59,
    105,
    121,
    10226,
    10228,
    10235,
    32768,
    8291,
    114,
    99,
    33024,
    238,
    59,
    32768,
    238,
    59,
    32768,
    1080,
    512,
    99,
    120,
    10243,
    10247,
    121,
    59,
    32768,
    1077,
    99,
    108,
    33024,
    161,
    59,
    32768,
    161,
    512,
    102,
    114,
    10259,
    10262,
    59,
    32768,
    8660,
    59,
    32896,
    55349,
    56614,
    114,
    97,
    118,
    101,
    33024,
    236,
    59,
    32768,
    236,
    1024,
    59,
    105,
    110,
    111,
    10284,
    10286,
    10300,
    10306,
    32768,
    8520,
    512,
    105,
    110,
    10291,
    10296,
    110,
    116,
    59,
    32768,
    10764,
    116,
    59,
    32768,
    8749,
    102,
    105,
    110,
    59,
    32768,
    10716,
    116,
    97,
    59,
    32768,
    8489,
    108,
    105,
    103,
    59,
    32768,
    307,
    768,
    97,
    111,
    112,
    10324,
    10361,
    10365,
    768,
    99,
    103,
    116,
    10331,
    10335,
    10357,
    114,
    59,
    32768,
    299,
    768,
    101,
    108,
    112,
    10342,
    10345,
    10351,
    59,
    32768,
    8465,
    105,
    110,
    101,
    59,
    32768,
    8464,
    97,
    114,
    116,
    59,
    32768,
    8465,
    104,
    59,
    32768,
    305,
    102,
    59,
    32768,
    8887,
    101,
    100,
    59,
    32768,
    437,
    1280,
    59,
    99,
    102,
    111,
    116,
    10381,
    10383,
    10389,
    10403,
    10409,
    32768,
    8712,
    97,
    114,
    101,
    59,
    32768,
    8453,
    105,
    110,
    512,
    59,
    116,
    10396,
    10398,
    32768,
    8734,
    105,
    101,
    59,
    32768,
    10717,
    100,
    111,
    116,
    59,
    32768,
    305,
    1280,
    59,
    99,
    101,
    108,
    112,
    10420,
    10422,
    10427,
    10444,
    10451,
    32768,
    8747,
    97,
    108,
    59,
    32768,
    8890,
    512,
    103,
    114,
    10432,
    10438,
    101,
    114,
    115,
    59,
    32768,
    8484,
    99,
    97,
    108,
    59,
    32768,
    8890,
    97,
    114,
    104,
    107,
    59,
    32768,
    10775,
    114,
    111,
    100,
    59,
    32768,
    10812,
    1024,
    99,
    103,
    112,
    116,
    10466,
    10470,
    10475,
    10480,
    121,
    59,
    32768,
    1105,
    111,
    110,
    59,
    32768,
    303,
    102,
    59,
    32896,
    55349,
    56666,
    97,
    59,
    32768,
    953,
    114,
    111,
    100,
    59,
    32768,
    10812,
    117,
    101,
    115,
    116,
    33024,
    191,
    59,
    32768,
    191,
    512,
    99,
    105,
    10504,
    10509,
    114,
    59,
    32896,
    55349,
    56510,
    110,
    1280,
    59,
    69,
    100,
    115,
    118,
    10521,
    10523,
    10526,
    10531,
    10541,
    32768,
    8712,
    59,
    32768,
    8953,
    111,
    116,
    59,
    32768,
    8949,
    512,
    59,
    118,
    10536,
    10538,
    32768,
    8948,
    59,
    32768,
    8947,
    59,
    32768,
    8712,
    512,
    59,
    105,
    10549,
    10551,
    32768,
    8290,
    108,
    100,
    101,
    59,
    32768,
    297,
    828,
    10562,
    0,
    10567,
    99,
    121,
    59,
    32768,
    1110,
    108,
    33024,
    239,
    59,
    32768,
    239,
    1536,
    99,
    102,
    109,
    111,
    115,
    117,
    10585,
    10598,
    10603,
    10609,
    10615,
    10630,
    512,
    105,
    121,
    10590,
    10595,
    114,
    99,
    59,
    32768,
    309,
    59,
    32768,
    1081,
    114,
    59,
    32896,
    55349,
    56615,
    97,
    116,
    104,
    59,
    32768,
    567,
    112,
    102,
    59,
    32896,
    55349,
    56667,
    820,
    10620,
    0,
    10625,
    114,
    59,
    32896,
    55349,
    56511,
    114,
    99,
    121,
    59,
    32768,
    1112,
    107,
    99,
    121,
    59,
    32768,
    1108,
    2048,
    97,
    99,
    102,
    103,
    104,
    106,
    111,
    115,
    10653,
    10666,
    10680,
    10685,
    10692,
    10697,
    10702,
    10708,
    112,
    112,
    97,
    512,
    59,
    118,
    10661,
    10663,
    32768,
    954,
    59,
    32768,
    1008,
    512,
    101,
    121,
    10671,
    10677,
    100,
    105,
    108,
    59,
    32768,
    311,
    59,
    32768,
    1082,
    114,
    59,
    32896,
    55349,
    56616,
    114,
    101,
    101,
    110,
    59,
    32768,
    312,
    99,
    121,
    59,
    32768,
    1093,
    99,
    121,
    59,
    32768,
    1116,
    112,
    102,
    59,
    32896,
    55349,
    56668,
    99,
    114,
    59,
    32896,
    55349,
    56512,
    5888,
    65,
    66,
    69,
    72,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    106,
    108,
    109,
    110,
    111,
    112,
    114,
    115,
    116,
    117,
    118,
    10761,
    10783,
    10789,
    10799,
    10804,
    10957,
    11011,
    11047,
    11094,
    11349,
    11372,
    11382,
    11409,
    11414,
    11451,
    11478,
    11526,
    11698,
    11711,
    11755,
    11823,
    11910,
    11929,
    768,
    97,
    114,
    116,
    10768,
    10773,
    10777,
    114,
    114,
    59,
    32768,
    8666,
    114,
    59,
    32768,
    8656,
    97,
    105,
    108,
    59,
    32768,
    10523,
    97,
    114,
    114,
    59,
    32768,
    10510,
    512,
    59,
    103,
    10794,
    10796,
    32768,
    8806,
    59,
    32768,
    10891,
    97,
    114,
    59,
    32768,
    10594,
    4660,
    10824,
    0,
    10830,
    0,
    10838,
    0,
    0,
    0,
    0,
    0,
    10844,
    10850,
    0,
    10867,
    10870,
    10877,
    0,
    10933,
    117,
    116,
    101,
    59,
    32768,
    314,
    109,
    112,
    116,
    121,
    118,
    59,
    32768,
    10676,
    114,
    97,
    110,
    59,
    32768,
    8466,
    98,
    100,
    97,
    59,
    32768,
    955,
    103,
    768,
    59,
    100,
    108,
    10857,
    10859,
    10862,
    32768,
    10216,
    59,
    32768,
    10641,
    101,
    59,
    32768,
    10216,
    59,
    32768,
    10885,
    117,
    111,
    33024,
    171,
    59,
    32768,
    171,
    114,
    2048,
    59,
    98,
    102,
    104,
    108,
    112,
    115,
    116,
    10894,
    10896,
    10907,
    10911,
    10915,
    10919,
    10923,
    10928,
    32768,
    8592,
    512,
    59,
    102,
    10901,
    10903,
    32768,
    8676,
    115,
    59,
    32768,
    10527,
    115,
    59,
    32768,
    10525,
    107,
    59,
    32768,
    8617,
    112,
    59,
    32768,
    8619,
    108,
    59,
    32768,
    10553,
    105,
    109,
    59,
    32768,
    10611,
    108,
    59,
    32768,
    8610,
    768,
    59,
    97,
    101,
    10939,
    10941,
    10946,
    32768,
    10923,
    105,
    108,
    59,
    32768,
    10521,
    512,
    59,
    115,
    10951,
    10953,
    32768,
    10925,
    59,
    32896,
    10925,
    65024,
    768,
    97,
    98,
    114,
    10964,
    10969,
    10974,
    114,
    114,
    59,
    32768,
    10508,
    114,
    107,
    59,
    32768,
    10098,
    512,
    97,
    107,
    10979,
    10991,
    99,
    512,
    101,
    107,
    10985,
    10988,
    59,
    32768,
    123,
    59,
    32768,
    91,
    512,
    101,
    115,
    10996,
    10999,
    59,
    32768,
    10635,
    108,
    512,
    100,
    117,
    11005,
    11008,
    59,
    32768,
    10639,
    59,
    32768,
    10637,
    1024,
    97,
    101,
    117,
    121,
    11020,
    11026,
    11040,
    11044,
    114,
    111,
    110,
    59,
    32768,
    318,
    512,
    100,
    105,
    11031,
    11036,
    105,
    108,
    59,
    32768,
    316,
    108,
    59,
    32768,
    8968,
    98,
    59,
    32768,
    123,
    59,
    32768,
    1083,
    1024,
    99,
    113,
    114,
    115,
    11056,
    11060,
    11072,
    11090,
    97,
    59,
    32768,
    10550,
    117,
    111,
    512,
    59,
    114,
    11067,
    11069,
    32768,
    8220,
    59,
    32768,
    8222,
    512,
    100,
    117,
    11077,
    11083,
    104,
    97,
    114,
    59,
    32768,
    10599,
    115,
    104,
    97,
    114,
    59,
    32768,
    10571,
    104,
    59,
    32768,
    8626,
    1280,
    59,
    102,
    103,
    113,
    115,
    11105,
    11107,
    11228,
    11231,
    11250,
    32768,
    8804,
    116,
    1280,
    97,
    104,
    108,
    114,
    116,
    11119,
    11136,
    11157,
    11169,
    11216,
    114,
    114,
    111,
    119,
    512,
    59,
    116,
    11128,
    11130,
    32768,
    8592,
    97,
    105,
    108,
    59,
    32768,
    8610,
    97,
    114,
    112,
    111,
    111,
    110,
    512,
    100,
    117,
    11147,
    11153,
    111,
    119,
    110,
    59,
    32768,
    8637,
    112,
    59,
    32768,
    8636,
    101,
    102,
    116,
    97,
    114,
    114,
    111,
    119,
    115,
    59,
    32768,
    8647,
    105,
    103,
    104,
    116,
    768,
    97,
    104,
    115,
    11180,
    11194,
    11204,
    114,
    114,
    111,
    119,
    512,
    59,
    115,
    11189,
    11191,
    32768,
    8596,
    59,
    32768,
    8646,
    97,
    114,
    112,
    111,
    111,
    110,
    115,
    59,
    32768,
    8651,
    113,
    117,
    105,
    103,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8621,
    104,
    114,
    101,
    101,
    116,
    105,
    109,
    101,
    115,
    59,
    32768,
    8907,
    59,
    32768,
    8922,
    768,
    59,
    113,
    115,
    11238,
    11240,
    11243,
    32768,
    8804,
    59,
    32768,
    8806,
    108,
    97,
    110,
    116,
    59,
    32768,
    10877,
    1280,
    59,
    99,
    100,
    103,
    115,
    11261,
    11263,
    11267,
    11286,
    11298,
    32768,
    10877,
    99,
    59,
    32768,
    10920,
    111,
    116,
    512,
    59,
    111,
    11274,
    11276,
    32768,
    10879,
    512,
    59,
    114,
    11281,
    11283,
    32768,
    10881,
    59,
    32768,
    10883,
    512,
    59,
    101,
    11291,
    11294,
    32896,
    8922,
    65024,
    115,
    59,
    32768,
    10899,
    1280,
    97,
    100,
    101,
    103,
    115,
    11309,
    11317,
    11322,
    11339,
    11344,
    112,
    112,
    114,
    111,
    120,
    59,
    32768,
    10885,
    111,
    116,
    59,
    32768,
    8918,
    113,
    512,
    103,
    113,
    11328,
    11333,
    116,
    114,
    59,
    32768,
    8922,
    103,
    116,
    114,
    59,
    32768,
    10891,
    116,
    114,
    59,
    32768,
    8822,
    105,
    109,
    59,
    32768,
    8818,
    768,
    105,
    108,
    114,
    11356,
    11362,
    11368,
    115,
    104,
    116,
    59,
    32768,
    10620,
    111,
    111,
    114,
    59,
    32768,
    8970,
    59,
    32896,
    55349,
    56617,
    512,
    59,
    69,
    11377,
    11379,
    32768,
    8822,
    59,
    32768,
    10897,
    562,
    11386,
    11405,
    114,
    512,
    100,
    117,
    11391,
    11394,
    59,
    32768,
    8637,
    512,
    59,
    108,
    11399,
    11401,
    32768,
    8636,
    59,
    32768,
    10602,
    108,
    107,
    59,
    32768,
    9604,
    99,
    121,
    59,
    32768,
    1113,
    1280,
    59,
    97,
    99,
    104,
    116,
    11425,
    11427,
    11432,
    11440,
    11446,
    32768,
    8810,
    114,
    114,
    59,
    32768,
    8647,
    111,
    114,
    110,
    101,
    114,
    59,
    32768,
    8990,
    97,
    114,
    100,
    59,
    32768,
    10603,
    114,
    105,
    59,
    32768,
    9722,
    512,
    105,
    111,
    11456,
    11462,
    100,
    111,
    116,
    59,
    32768,
    320,
    117,
    115,
    116,
    512,
    59,
    97,
    11470,
    11472,
    32768,
    9136,
    99,
    104,
    101,
    59,
    32768,
    9136,
    1024,
    69,
    97,
    101,
    115,
    11487,
    11490,
    11504,
    11521,
    59,
    32768,
    8808,
    112,
    512,
    59,
    112,
    11496,
    11498,
    32768,
    10889,
    114,
    111,
    120,
    59,
    32768,
    10889,
    512,
    59,
    113,
    11509,
    11511,
    32768,
    10887,
    512,
    59,
    113,
    11516,
    11518,
    32768,
    10887,
    59,
    32768,
    8808,
    105,
    109,
    59,
    32768,
    8934,
    2048,
    97,
    98,
    110,
    111,
    112,
    116,
    119,
    122,
    11543,
    11556,
    11561,
    11616,
    11640,
    11660,
    11667,
    11680,
    512,
    110,
    114,
    11548,
    11552,
    103,
    59,
    32768,
    10220,
    114,
    59,
    32768,
    8701,
    114,
    107,
    59,
    32768,
    10214,
    103,
    768,
    108,
    109,
    114,
    11569,
    11596,
    11604,
    101,
    102,
    116,
    512,
    97,
    114,
    11577,
    11584,
    114,
    114,
    111,
    119,
    59,
    32768,
    10229,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    10231,
    97,
    112,
    115,
    116,
    111,
    59,
    32768,
    10236,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    10230,
    112,
    97,
    114,
    114,
    111,
    119,
    512,
    108,
    114,
    11627,
    11633,
    101,
    102,
    116,
    59,
    32768,
    8619,
    105,
    103,
    104,
    116,
    59,
    32768,
    8620,
    768,
    97,
    102,
    108,
    11647,
    11651,
    11655,
    114,
    59,
    32768,
    10629,
    59,
    32896,
    55349,
    56669,
    117,
    115,
    59,
    32768,
    10797,
    105,
    109,
    101,
    115,
    59,
    32768,
    10804,
    562,
    11671,
    11676,
    115,
    116,
    59,
    32768,
    8727,
    97,
    114,
    59,
    32768,
    95,
    768,
    59,
    101,
    102,
    11687,
    11689,
    11695,
    32768,
    9674,
    110,
    103,
    101,
    59,
    32768,
    9674,
    59,
    32768,
    10731,
    97,
    114,
    512,
    59,
    108,
    11705,
    11707,
    32768,
    40,
    116,
    59,
    32768,
    10643,
    1280,
    97,
    99,
    104,
    109,
    116,
    11722,
    11727,
    11735,
    11747,
    11750,
    114,
    114,
    59,
    32768,
    8646,
    111,
    114,
    110,
    101,
    114,
    59,
    32768,
    8991,
    97,
    114,
    512,
    59,
    100,
    11742,
    11744,
    32768,
    8651,
    59,
    32768,
    10605,
    59,
    32768,
    8206,
    114,
    105,
    59,
    32768,
    8895,
    1536,
    97,
    99,
    104,
    105,
    113,
    116,
    11768,
    11774,
    11779,
    11782,
    11798,
    11817,
    113,
    117,
    111,
    59,
    32768,
    8249,
    114,
    59,
    32896,
    55349,
    56513,
    59,
    32768,
    8624,
    109,
    768,
    59,
    101,
    103,
    11790,
    11792,
    11795,
    32768,
    8818,
    59,
    32768,
    10893,
    59,
    32768,
    10895,
    512,
    98,
    117,
    11803,
    11806,
    59,
    32768,
    91,
    111,
    512,
    59,
    114,
    11812,
    11814,
    32768,
    8216,
    59,
    32768,
    8218,
    114,
    111,
    107,
    59,
    32768,
    322,
    34816,
    60,
    59,
    99,
    100,
    104,
    105,
    108,
    113,
    114,
    11841,
    11843,
    11855,
    11860,
    11866,
    11872,
    11878,
    11885,
    32768,
    60,
    512,
    99,
    105,
    11848,
    11851,
    59,
    32768,
    10918,
    114,
    59,
    32768,
    10873,
    111,
    116,
    59,
    32768,
    8918,
    114,
    101,
    101,
    59,
    32768,
    8907,
    109,
    101,
    115,
    59,
    32768,
    8905,
    97,
    114,
    114,
    59,
    32768,
    10614,
    117,
    101,
    115,
    116,
    59,
    32768,
    10875,
    512,
    80,
    105,
    11890,
    11895,
    97,
    114,
    59,
    32768,
    10646,
    768,
    59,
    101,
    102,
    11902,
    11904,
    11907,
    32768,
    9667,
    59,
    32768,
    8884,
    59,
    32768,
    9666,
    114,
    512,
    100,
    117,
    11916,
    11923,
    115,
    104,
    97,
    114,
    59,
    32768,
    10570,
    104,
    97,
    114,
    59,
    32768,
    10598,
    512,
    101,
    110,
    11934,
    11944,
    114,
    116,
    110,
    101,
    113,
    113,
    59,
    32896,
    8808,
    65024,
    69,
    59,
    32896,
    8808,
    65024,
    3584,
    68,
    97,
    99,
    100,
    101,
    102,
    104,
    105,
    108,
    110,
    111,
    112,
    115,
    117,
    11978,
    11984,
    12061,
    12075,
    12081,
    12095,
    12100,
    12104,
    12170,
    12181,
    12188,
    12204,
    12207,
    12223,
    68,
    111,
    116,
    59,
    32768,
    8762,
    1024,
    99,
    108,
    112,
    114,
    11993,
    11999,
    12019,
    12055,
    114,
    33024,
    175,
    59,
    32768,
    175,
    512,
    101,
    116,
    12004,
    12007,
    59,
    32768,
    9794,
    512,
    59,
    101,
    12012,
    12014,
    32768,
    10016,
    115,
    101,
    59,
    32768,
    10016,
    512,
    59,
    115,
    12024,
    12026,
    32768,
    8614,
    116,
    111,
    1024,
    59,
    100,
    108,
    117,
    12037,
    12039,
    12045,
    12051,
    32768,
    8614,
    111,
    119,
    110,
    59,
    32768,
    8615,
    101,
    102,
    116,
    59,
    32768,
    8612,
    112,
    59,
    32768,
    8613,
    107,
    101,
    114,
    59,
    32768,
    9646,
    512,
    111,
    121,
    12066,
    12072,
    109,
    109,
    97,
    59,
    32768,
    10793,
    59,
    32768,
    1084,
    97,
    115,
    104,
    59,
    32768,
    8212,
    97,
    115,
    117,
    114,
    101,
    100,
    97,
    110,
    103,
    108,
    101,
    59,
    32768,
    8737,
    114,
    59,
    32896,
    55349,
    56618,
    111,
    59,
    32768,
    8487,
    768,
    99,
    100,
    110,
    12111,
    12118,
    12146,
    114,
    111,
    33024,
    181,
    59,
    32768,
    181,
    1024,
    59,
    97,
    99,
    100,
    12127,
    12129,
    12134,
    12139,
    32768,
    8739,
    115,
    116,
    59,
    32768,
    42,
    105,
    114,
    59,
    32768,
    10992,
    111,
    116,
    33024,
    183,
    59,
    32768,
    183,
    117,
    115,
    768,
    59,
    98,
    100,
    12155,
    12157,
    12160,
    32768,
    8722,
    59,
    32768,
    8863,
    512,
    59,
    117,
    12165,
    12167,
    32768,
    8760,
    59,
    32768,
    10794,
    564,
    12174,
    12178,
    112,
    59,
    32768,
    10971,
    114,
    59,
    32768,
    8230,
    112,
    108,
    117,
    115,
    59,
    32768,
    8723,
    512,
    100,
    112,
    12193,
    12199,
    101,
    108,
    115,
    59,
    32768,
    8871,
    102,
    59,
    32896,
    55349,
    56670,
    59,
    32768,
    8723,
    512,
    99,
    116,
    12212,
    12217,
    114,
    59,
    32896,
    55349,
    56514,
    112,
    111,
    115,
    59,
    32768,
    8766,
    768,
    59,
    108,
    109,
    12230,
    12232,
    12240,
    32768,
    956,
    116,
    105,
    109,
    97,
    112,
    59,
    32768,
    8888,
    97,
    112,
    59,
    32768,
    8888,
    6144,
    71,
    76,
    82,
    86,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    108,
    109,
    111,
    112,
    114,
    115,
    116,
    117,
    118,
    119,
    12294,
    12315,
    12364,
    12376,
    12393,
    12472,
    12496,
    12547,
    12553,
    12636,
    12641,
    12703,
    12725,
    12747,
    12752,
    12876,
    12881,
    12957,
    13033,
    13089,
    13294,
    13359,
    13384,
    13499,
    512,
    103,
    116,
    12299,
    12303,
    59,
    32896,
    8921,
    824,
    512,
    59,
    118,
    12308,
    12311,
    32896,
    8811,
    8402,
    59,
    32896,
    8811,
    824,
    768,
    101,
    108,
    116,
    12322,
    12348,
    12352,
    102,
    116,
    512,
    97,
    114,
    12329,
    12336,
    114,
    114,
    111,
    119,
    59,
    32768,
    8653,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8654,
    59,
    32896,
    8920,
    824,
    512,
    59,
    118,
    12357,
    12360,
    32896,
    8810,
    8402,
    59,
    32896,
    8810,
    824,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8655,
    512,
    68,
    100,
    12381,
    12387,
    97,
    115,
    104,
    59,
    32768,
    8879,
    97,
    115,
    104,
    59,
    32768,
    8878,
    1280,
    98,
    99,
    110,
    112,
    116,
    12404,
    12409,
    12415,
    12420,
    12452,
    108,
    97,
    59,
    32768,
    8711,
    117,
    116,
    101,
    59,
    32768,
    324,
    103,
    59,
    32896,
    8736,
    8402,
    1280,
    59,
    69,
    105,
    111,
    112,
    12431,
    12433,
    12437,
    12442,
    12446,
    32768,
    8777,
    59,
    32896,
    10864,
    824,
    100,
    59,
    32896,
    8779,
    824,
    115,
    59,
    32768,
    329,
    114,
    111,
    120,
    59,
    32768,
    8777,
    117,
    114,
    512,
    59,
    97,
    12459,
    12461,
    32768,
    9838,
    108,
    512,
    59,
    115,
    12467,
    12469,
    32768,
    9838,
    59,
    32768,
    8469,
    836,
    12477,
    0,
    12483,
    112,
    33024,
    160,
    59,
    32768,
    160,
    109,
    112,
    512,
    59,
    101,
    12489,
    12492,
    32896,
    8782,
    824,
    59,
    32896,
    8783,
    824,
    1280,
    97,
    101,
    111,
    117,
    121,
    12507,
    12519,
    12525,
    12540,
    12544,
    833,
    12512,
    0,
    12515,
    59,
    32768,
    10819,
    111,
    110,
    59,
    32768,
    328,
    100,
    105,
    108,
    59,
    32768,
    326,
    110,
    103,
    512,
    59,
    100,
    12532,
    12534,
    32768,
    8775,
    111,
    116,
    59,
    32896,
    10861,
    824,
    112,
    59,
    32768,
    10818,
    59,
    32768,
    1085,
    97,
    115,
    104,
    59,
    32768,
    8211,
    1792,
    59,
    65,
    97,
    100,
    113,
    115,
    120,
    12568,
    12570,
    12575,
    12596,
    12602,
    12608,
    12623,
    32768,
    8800,
    114,
    114,
    59,
    32768,
    8663,
    114,
    512,
    104,
    114,
    12581,
    12585,
    107,
    59,
    32768,
    10532,
    512,
    59,
    111,
    12590,
    12592,
    32768,
    8599,
    119,
    59,
    32768,
    8599,
    111,
    116,
    59,
    32896,
    8784,
    824,
    117,
    105,
    118,
    59,
    32768,
    8802,
    512,
    101,
    105,
    12613,
    12618,
    97,
    114,
    59,
    32768,
    10536,
    109,
    59,
    32896,
    8770,
    824,
    105,
    115,
    116,
    512,
    59,
    115,
    12631,
    12633,
    32768,
    8708,
    59,
    32768,
    8708,
    114,
    59,
    32896,
    55349,
    56619,
    1024,
    69,
    101,
    115,
    116,
    12650,
    12654,
    12688,
    12693,
    59,
    32896,
    8807,
    824,
    768,
    59,
    113,
    115,
    12661,
    12663,
    12684,
    32768,
    8817,
    768,
    59,
    113,
    115,
    12670,
    12672,
    12676,
    32768,
    8817,
    59,
    32896,
    8807,
    824,
    108,
    97,
    110,
    116,
    59,
    32896,
    10878,
    824,
    59,
    32896,
    10878,
    824,
    105,
    109,
    59,
    32768,
    8821,
    512,
    59,
    114,
    12698,
    12700,
    32768,
    8815,
    59,
    32768,
    8815,
    768,
    65,
    97,
    112,
    12710,
    12715,
    12720,
    114,
    114,
    59,
    32768,
    8654,
    114,
    114,
    59,
    32768,
    8622,
    97,
    114,
    59,
    32768,
    10994,
    768,
    59,
    115,
    118,
    12732,
    12734,
    12744,
    32768,
    8715,
    512,
    59,
    100,
    12739,
    12741,
    32768,
    8956,
    59,
    32768,
    8954,
    59,
    32768,
    8715,
    99,
    121,
    59,
    32768,
    1114,
    1792,
    65,
    69,
    97,
    100,
    101,
    115,
    116,
    12767,
    12772,
    12776,
    12781,
    12785,
    12853,
    12858,
    114,
    114,
    59,
    32768,
    8653,
    59,
    32896,
    8806,
    824,
    114,
    114,
    59,
    32768,
    8602,
    114,
    59,
    32768,
    8229,
    1024,
    59,
    102,
    113,
    115,
    12794,
    12796,
    12821,
    12842,
    32768,
    8816,
    116,
    512,
    97,
    114,
    12802,
    12809,
    114,
    114,
    111,
    119,
    59,
    32768,
    8602,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8622,
    768,
    59,
    113,
    115,
    12828,
    12830,
    12834,
    32768,
    8816,
    59,
    32896,
    8806,
    824,
    108,
    97,
    110,
    116,
    59,
    32896,
    10877,
    824,
    512,
    59,
    115,
    12847,
    12850,
    32896,
    10877,
    824,
    59,
    32768,
    8814,
    105,
    109,
    59,
    32768,
    8820,
    512,
    59,
    114,
    12863,
    12865,
    32768,
    8814,
    105,
    512,
    59,
    101,
    12871,
    12873,
    32768,
    8938,
    59,
    32768,
    8940,
    105,
    100,
    59,
    32768,
    8740,
    512,
    112,
    116,
    12886,
    12891,
    102,
    59,
    32896,
    55349,
    56671,
    33536,
    172,
    59,
    105,
    110,
    12899,
    12901,
    12936,
    32768,
    172,
    110,
    1024,
    59,
    69,
    100,
    118,
    12911,
    12913,
    12917,
    12923,
    32768,
    8713,
    59,
    32896,
    8953,
    824,
    111,
    116,
    59,
    32896,
    8949,
    824,
    818,
    12928,
    12931,
    12934,
    59,
    32768,
    8713,
    59,
    32768,
    8951,
    59,
    32768,
    8950,
    105,
    512,
    59,
    118,
    12942,
    12944,
    32768,
    8716,
    818,
    12949,
    12952,
    12955,
    59,
    32768,
    8716,
    59,
    32768,
    8958,
    59,
    32768,
    8957,
    768,
    97,
    111,
    114,
    12964,
    12992,
    12999,
    114,
    1024,
    59,
    97,
    115,
    116,
    12974,
    12976,
    12983,
    12988,
    32768,
    8742,
    108,
    108,
    101,
    108,
    59,
    32768,
    8742,
    108,
    59,
    32896,
    11005,
    8421,
    59,
    32896,
    8706,
    824,
    108,
    105,
    110,
    116,
    59,
    32768,
    10772,
    768,
    59,
    99,
    101,
    13006,
    13008,
    13013,
    32768,
    8832,
    117,
    101,
    59,
    32768,
    8928,
    512,
    59,
    99,
    13018,
    13021,
    32896,
    10927,
    824,
    512,
    59,
    101,
    13026,
    13028,
    32768,
    8832,
    113,
    59,
    32896,
    10927,
    824,
    1024,
    65,
    97,
    105,
    116,
    13042,
    13047,
    13066,
    13077,
    114,
    114,
    59,
    32768,
    8655,
    114,
    114,
    768,
    59,
    99,
    119,
    13056,
    13058,
    13062,
    32768,
    8603,
    59,
    32896,
    10547,
    824,
    59,
    32896,
    8605,
    824,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8603,
    114,
    105,
    512,
    59,
    101,
    13084,
    13086,
    32768,
    8939,
    59,
    32768,
    8941,
    1792,
    99,
    104,
    105,
    109,
    112,
    113,
    117,
    13104,
    13128,
    13151,
    13169,
    13174,
    13179,
    13194,
    1024,
    59,
    99,
    101,
    114,
    13113,
    13115,
    13120,
    13124,
    32768,
    8833,
    117,
    101,
    59,
    32768,
    8929,
    59,
    32896,
    10928,
    824,
    59,
    32896,
    55349,
    56515,
    111,
    114,
    116,
    1086,
    13137,
    0,
    0,
    13142,
    105,
    100,
    59,
    32768,
    8740,
    97,
    114,
    97,
    108,
    108,
    101,
    108,
    59,
    32768,
    8742,
    109,
    512,
    59,
    101,
    13157,
    13159,
    32768,
    8769,
    512,
    59,
    113,
    13164,
    13166,
    32768,
    8772,
    59,
    32768,
    8772,
    105,
    100,
    59,
    32768,
    8740,
    97,
    114,
    59,
    32768,
    8742,
    115,
    117,
    512,
    98,
    112,
    13186,
    13190,
    101,
    59,
    32768,
    8930,
    101,
    59,
    32768,
    8931,
    768,
    98,
    99,
    112,
    13201,
    13241,
    13254,
    1024,
    59,
    69,
    101,
    115,
    13210,
    13212,
    13216,
    13219,
    32768,
    8836,
    59,
    32896,
    10949,
    824,
    59,
    32768,
    8840,
    101,
    116,
    512,
    59,
    101,
    13226,
    13229,
    32896,
    8834,
    8402,
    113,
    512,
    59,
    113,
    13235,
    13237,
    32768,
    8840,
    59,
    32896,
    10949,
    824,
    99,
    512,
    59,
    101,
    13247,
    13249,
    32768,
    8833,
    113,
    59,
    32896,
    10928,
    824,
    1024,
    59,
    69,
    101,
    115,
    13263,
    13265,
    13269,
    13272,
    32768,
    8837,
    59,
    32896,
    10950,
    824,
    59,
    32768,
    8841,
    101,
    116,
    512,
    59,
    101,
    13279,
    13282,
    32896,
    8835,
    8402,
    113,
    512,
    59,
    113,
    13288,
    13290,
    32768,
    8841,
    59,
    32896,
    10950,
    824,
    1024,
    103,
    105,
    108,
    114,
    13303,
    13307,
    13315,
    13319,
    108,
    59,
    32768,
    8825,
    108,
    100,
    101,
    33024,
    241,
    59,
    32768,
    241,
    103,
    59,
    32768,
    8824,
    105,
    97,
    110,
    103,
    108,
    101,
    512,
    108,
    114,
    13330,
    13344,
    101,
    102,
    116,
    512,
    59,
    101,
    13338,
    13340,
    32768,
    8938,
    113,
    59,
    32768,
    8940,
    105,
    103,
    104,
    116,
    512,
    59,
    101,
    13353,
    13355,
    32768,
    8939,
    113,
    59,
    32768,
    8941,
    512,
    59,
    109,
    13364,
    13366,
    32768,
    957,
    768,
    59,
    101,
    115,
    13373,
    13375,
    13380,
    32768,
    35,
    114,
    111,
    59,
    32768,
    8470,
    112,
    59,
    32768,
    8199,
    2304,
    68,
    72,
    97,
    100,
    103,
    105,
    108,
    114,
    115,
    13403,
    13409,
    13415,
    13420,
    13426,
    13439,
    13446,
    13476,
    13493,
    97,
    115,
    104,
    59,
    32768,
    8877,
    97,
    114,
    114,
    59,
    32768,
    10500,
    112,
    59,
    32896,
    8781,
    8402,
    97,
    115,
    104,
    59,
    32768,
    8876,
    512,
    101,
    116,
    13431,
    13435,
    59,
    32896,
    8805,
    8402,
    59,
    32896,
    62,
    8402,
    110,
    102,
    105,
    110,
    59,
    32768,
    10718,
    768,
    65,
    101,
    116,
    13453,
    13458,
    13462,
    114,
    114,
    59,
    32768,
    10498,
    59,
    32896,
    8804,
    8402,
    512,
    59,
    114,
    13467,
    13470,
    32896,
    60,
    8402,
    105,
    101,
    59,
    32896,
    8884,
    8402,
    512,
    65,
    116,
    13481,
    13486,
    114,
    114,
    59,
    32768,
    10499,
    114,
    105,
    101,
    59,
    32896,
    8885,
    8402,
    105,
    109,
    59,
    32896,
    8764,
    8402,
    768,
    65,
    97,
    110,
    13506,
    13511,
    13532,
    114,
    114,
    59,
    32768,
    8662,
    114,
    512,
    104,
    114,
    13517,
    13521,
    107,
    59,
    32768,
    10531,
    512,
    59,
    111,
    13526,
    13528,
    32768,
    8598,
    119,
    59,
    32768,
    8598,
    101,
    97,
    114,
    59,
    32768,
    10535,
    9252,
    13576,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    13579,
    0,
    13596,
    13617,
    13653,
    13659,
    13673,
    13695,
    13708,
    0,
    0,
    13713,
    13750,
    0,
    13788,
    13794,
    0,
    13815,
    13890,
    13913,
    13937,
    13944,
    59,
    32768,
    9416,
    512,
    99,
    115,
    13583,
    13591,
    117,
    116,
    101,
    33024,
    243,
    59,
    32768,
    243,
    116,
    59,
    32768,
    8859,
    512,
    105,
    121,
    13600,
    13613,
    114,
    512,
    59,
    99,
    13606,
    13608,
    32768,
    8858,
    33024,
    244,
    59,
    32768,
    244,
    59,
    32768,
    1086,
    1280,
    97,
    98,
    105,
    111,
    115,
    13627,
    13632,
    13638,
    13642,
    13646,
    115,
    104,
    59,
    32768,
    8861,
    108,
    97,
    99,
    59,
    32768,
    337,
    118,
    59,
    32768,
    10808,
    116,
    59,
    32768,
    8857,
    111,
    108,
    100,
    59,
    32768,
    10684,
    108,
    105,
    103,
    59,
    32768,
    339,
    512,
    99,
    114,
    13663,
    13668,
    105,
    114,
    59,
    32768,
    10687,
    59,
    32896,
    55349,
    56620,
    1600,
    13680,
    0,
    0,
    13684,
    0,
    13692,
    110,
    59,
    32768,
    731,
    97,
    118,
    101,
    33024,
    242,
    59,
    32768,
    242,
    59,
    32768,
    10689,
    512,
    98,
    109,
    13699,
    13704,
    97,
    114,
    59,
    32768,
    10677,
    59,
    32768,
    937,
    110,
    116,
    59,
    32768,
    8750,
    1024,
    97,
    99,
    105,
    116,
    13721,
    13726,
    13741,
    13746,
    114,
    114,
    59,
    32768,
    8634,
    512,
    105,
    114,
    13731,
    13735,
    114,
    59,
    32768,
    10686,
    111,
    115,
    115,
    59,
    32768,
    10683,
    110,
    101,
    59,
    32768,
    8254,
    59,
    32768,
    10688,
    768,
    97,
    101,
    105,
    13756,
    13761,
    13766,
    99,
    114,
    59,
    32768,
    333,
    103,
    97,
    59,
    32768,
    969,
    768,
    99,
    100,
    110,
    13773,
    13779,
    13782,
    114,
    111,
    110,
    59,
    32768,
    959,
    59,
    32768,
    10678,
    117,
    115,
    59,
    32768,
    8854,
    112,
    102,
    59,
    32896,
    55349,
    56672,
    768,
    97,
    101,
    108,
    13800,
    13804,
    13809,
    114,
    59,
    32768,
    10679,
    114,
    112,
    59,
    32768,
    10681,
    117,
    115,
    59,
    32768,
    8853,
    1792,
    59,
    97,
    100,
    105,
    111,
    115,
    118,
    13829,
    13831,
    13836,
    13869,
    13875,
    13879,
    13886,
    32768,
    8744,
    114,
    114,
    59,
    32768,
    8635,
    1024,
    59,
    101,
    102,
    109,
    13845,
    13847,
    13859,
    13864,
    32768,
    10845,
    114,
    512,
    59,
    111,
    13853,
    13855,
    32768,
    8500,
    102,
    59,
    32768,
    8500,
    33024,
    170,
    59,
    32768,
    170,
    33024,
    186,
    59,
    32768,
    186,
    103,
    111,
    102,
    59,
    32768,
    8886,
    114,
    59,
    32768,
    10838,
    108,
    111,
    112,
    101,
    59,
    32768,
    10839,
    59,
    32768,
    10843,
    768,
    99,
    108,
    111,
    13896,
    13900,
    13908,
    114,
    59,
    32768,
    8500,
    97,
    115,
    104,
    33024,
    248,
    59,
    32768,
    248,
    108,
    59,
    32768,
    8856,
    105,
    573,
    13917,
    13924,
    100,
    101,
    33024,
    245,
    59,
    32768,
    245,
    101,
    115,
    512,
    59,
    97,
    13930,
    13932,
    32768,
    8855,
    115,
    59,
    32768,
    10806,
    109,
    108,
    33024,
    246,
    59,
    32768,
    246,
    98,
    97,
    114,
    59,
    32768,
    9021,
    5426,
    13972,
    0,
    14013,
    0,
    14017,
    14053,
    0,
    14058,
    14086,
    0,
    0,
    14107,
    14199,
    0,
    14202,
    0,
    0,
    14229,
    14425,
    0,
    14438,
    114,
    1024,
    59,
    97,
    115,
    116,
    13981,
    13983,
    13997,
    14009,
    32768,
    8741,
    33280,
    182,
    59,
    108,
    13989,
    13991,
    32768,
    182,
    108,
    101,
    108,
    59,
    32768,
    8741,
    1082,
    14003,
    0,
    0,
    14007,
    109,
    59,
    32768,
    10995,
    59,
    32768,
    11005,
    59,
    32768,
    8706,
    121,
    59,
    32768,
    1087,
    114,
    1280,
    99,
    105,
    109,
    112,
    116,
    14028,
    14033,
    14038,
    14043,
    14046,
    110,
    116,
    59,
    32768,
    37,
    111,
    100,
    59,
    32768,
    46,
    105,
    108,
    59,
    32768,
    8240,
    59,
    32768,
    8869,
    101,
    110,
    107,
    59,
    32768,
    8241,
    114,
    59,
    32896,
    55349,
    56621,
    768,
    105,
    109,
    111,
    14064,
    14074,
    14080,
    512,
    59,
    118,
    14069,
    14071,
    32768,
    966,
    59,
    32768,
    981,
    109,
    97,
    116,
    59,
    32768,
    8499,
    110,
    101,
    59,
    32768,
    9742,
    768,
    59,
    116,
    118,
    14092,
    14094,
    14103,
    32768,
    960,
    99,
    104,
    102,
    111,
    114,
    107,
    59,
    32768,
    8916,
    59,
    32768,
    982,
    512,
    97,
    117,
    14111,
    14132,
    110,
    512,
    99,
    107,
    14117,
    14128,
    107,
    512,
    59,
    104,
    14123,
    14125,
    32768,
    8463,
    59,
    32768,
    8462,
    118,
    59,
    32768,
    8463,
    115,
    2304,
    59,
    97,
    98,
    99,
    100,
    101,
    109,
    115,
    116,
    14152,
    14154,
    14160,
    14163,
    14168,
    14179,
    14182,
    14188,
    14193,
    32768,
    43,
    99,
    105,
    114,
    59,
    32768,
    10787,
    59,
    32768,
    8862,
    105,
    114,
    59,
    32768,
    10786,
    512,
    111,
    117,
    14173,
    14176,
    59,
    32768,
    8724,
    59,
    32768,
    10789,
    59,
    32768,
    10866,
    110,
    33024,
    177,
    59,
    32768,
    177,
    105,
    109,
    59,
    32768,
    10790,
    119,
    111,
    59,
    32768,
    10791,
    59,
    32768,
    177,
    768,
    105,
    112,
    117,
    14208,
    14216,
    14221,
    110,
    116,
    105,
    110,
    116,
    59,
    32768,
    10773,
    102,
    59,
    32896,
    55349,
    56673,
    110,
    100,
    33024,
    163,
    59,
    32768,
    163,
    2560,
    59,
    69,
    97,
    99,
    101,
    105,
    110,
    111,
    115,
    117,
    14249,
    14251,
    14254,
    14258,
    14263,
    14336,
    14348,
    14367,
    14413,
    14418,
    32768,
    8826,
    59,
    32768,
    10931,
    112,
    59,
    32768,
    10935,
    117,
    101,
    59,
    32768,
    8828,
    512,
    59,
    99,
    14268,
    14270,
    32768,
    10927,
    1536,
    59,
    97,
    99,
    101,
    110,
    115,
    14283,
    14285,
    14293,
    14302,
    14306,
    14331,
    32768,
    8826,
    112,
    112,
    114,
    111,
    120,
    59,
    32768,
    10935,
    117,
    114,
    108,
    121,
    101,
    113,
    59,
    32768,
    8828,
    113,
    59,
    32768,
    10927,
    768,
    97,
    101,
    115,
    14313,
    14321,
    14326,
    112,
    112,
    114,
    111,
    120,
    59,
    32768,
    10937,
    113,
    113,
    59,
    32768,
    10933,
    105,
    109,
    59,
    32768,
    8936,
    105,
    109,
    59,
    32768,
    8830,
    109,
    101,
    512,
    59,
    115,
    14343,
    14345,
    32768,
    8242,
    59,
    32768,
    8473,
    768,
    69,
    97,
    115,
    14355,
    14358,
    14362,
    59,
    32768,
    10933,
    112,
    59,
    32768,
    10937,
    105,
    109,
    59,
    32768,
    8936,
    768,
    100,
    102,
    112,
    14374,
    14377,
    14402,
    59,
    32768,
    8719,
    768,
    97,
    108,
    115,
    14384,
    14390,
    14396,
    108,
    97,
    114,
    59,
    32768,
    9006,
    105,
    110,
    101,
    59,
    32768,
    8978,
    117,
    114,
    102,
    59,
    32768,
    8979,
    512,
    59,
    116,
    14407,
    14409,
    32768,
    8733,
    111,
    59,
    32768,
    8733,
    105,
    109,
    59,
    32768,
    8830,
    114,
    101,
    108,
    59,
    32768,
    8880,
    512,
    99,
    105,
    14429,
    14434,
    114,
    59,
    32896,
    55349,
    56517,
    59,
    32768,
    968,
    110,
    99,
    115,
    112,
    59,
    32768,
    8200,
    1536,
    102,
    105,
    111,
    112,
    115,
    117,
    14457,
    14462,
    14467,
    14473,
    14480,
    14486,
    114,
    59,
    32896,
    55349,
    56622,
    110,
    116,
    59,
    32768,
    10764,
    112,
    102,
    59,
    32896,
    55349,
    56674,
    114,
    105,
    109,
    101,
    59,
    32768,
    8279,
    99,
    114,
    59,
    32896,
    55349,
    56518,
    768,
    97,
    101,
    111,
    14493,
    14513,
    14526,
    116,
    512,
    101,
    105,
    14499,
    14508,
    114,
    110,
    105,
    111,
    110,
    115,
    59,
    32768,
    8461,
    110,
    116,
    59,
    32768,
    10774,
    115,
    116,
    512,
    59,
    101,
    14520,
    14522,
    32768,
    63,
    113,
    59,
    32768,
    8799,
    116,
    33024,
    34,
    59,
    32768,
    34,
    5376,
    65,
    66,
    72,
    97,
    98,
    99,
    100,
    101,
    102,
    104,
    105,
    108,
    109,
    110,
    111,
    112,
    114,
    115,
    116,
    117,
    120,
    14575,
    14597,
    14603,
    14608,
    14775,
    14829,
    14865,
    14901,
    14943,
    14966,
    15000,
    15139,
    15159,
    15176,
    15182,
    15236,
    15261,
    15267,
    15309,
    15352,
    15360,
    768,
    97,
    114,
    116,
    14582,
    14587,
    14591,
    114,
    114,
    59,
    32768,
    8667,
    114,
    59,
    32768,
    8658,
    97,
    105,
    108,
    59,
    32768,
    10524,
    97,
    114,
    114,
    59,
    32768,
    10511,
    97,
    114,
    59,
    32768,
    10596,
    1792,
    99,
    100,
    101,
    110,
    113,
    114,
    116,
    14623,
    14637,
    14642,
    14650,
    14672,
    14679,
    14751,
    512,
    101,
    117,
    14628,
    14632,
    59,
    32896,
    8765,
    817,
    116,
    101,
    59,
    32768,
    341,
    105,
    99,
    59,
    32768,
    8730,
    109,
    112,
    116,
    121,
    118,
    59,
    32768,
    10675,
    103,
    1024,
    59,
    100,
    101,
    108,
    14660,
    14662,
    14665,
    14668,
    32768,
    10217,
    59,
    32768,
    10642,
    59,
    32768,
    10661,
    101,
    59,
    32768,
    10217,
    117,
    111,
    33024,
    187,
    59,
    32768,
    187,
    114,
    2816,
    59,
    97,
    98,
    99,
    102,
    104,
    108,
    112,
    115,
    116,
    119,
    14703,
    14705,
    14709,
    14720,
    14723,
    14727,
    14731,
    14735,
    14739,
    14744,
    14748,
    32768,
    8594,
    112,
    59,
    32768,
    10613,
    512,
    59,
    102,
    14714,
    14716,
    32768,
    8677,
    115,
    59,
    32768,
    10528,
    59,
    32768,
    10547,
    115,
    59,
    32768,
    10526,
    107,
    59,
    32768,
    8618,
    112,
    59,
    32768,
    8620,
    108,
    59,
    32768,
    10565,
    105,
    109,
    59,
    32768,
    10612,
    108,
    59,
    32768,
    8611,
    59,
    32768,
    8605,
    512,
    97,
    105,
    14756,
    14761,
    105,
    108,
    59,
    32768,
    10522,
    111,
    512,
    59,
    110,
    14767,
    14769,
    32768,
    8758,
    97,
    108,
    115,
    59,
    32768,
    8474,
    768,
    97,
    98,
    114,
    14782,
    14787,
    14792,
    114,
    114,
    59,
    32768,
    10509,
    114,
    107,
    59,
    32768,
    10099,
    512,
    97,
    107,
    14797,
    14809,
    99,
    512,
    101,
    107,
    14803,
    14806,
    59,
    32768,
    125,
    59,
    32768,
    93,
    512,
    101,
    115,
    14814,
    14817,
    59,
    32768,
    10636,
    108,
    512,
    100,
    117,
    14823,
    14826,
    59,
    32768,
    10638,
    59,
    32768,
    10640,
    1024,
    97,
    101,
    117,
    121,
    14838,
    14844,
    14858,
    14862,
    114,
    111,
    110,
    59,
    32768,
    345,
    512,
    100,
    105,
    14849,
    14854,
    105,
    108,
    59,
    32768,
    343,
    108,
    59,
    32768,
    8969,
    98,
    59,
    32768,
    125,
    59,
    32768,
    1088,
    1024,
    99,
    108,
    113,
    115,
    14874,
    14878,
    14885,
    14897,
    97,
    59,
    32768,
    10551,
    100,
    104,
    97,
    114,
    59,
    32768,
    10601,
    117,
    111,
    512,
    59,
    114,
    14892,
    14894,
    32768,
    8221,
    59,
    32768,
    8221,
    104,
    59,
    32768,
    8627,
    768,
    97,
    99,
    103,
    14908,
    14934,
    14938,
    108,
    1024,
    59,
    105,
    112,
    115,
    14918,
    14920,
    14925,
    14931,
    32768,
    8476,
    110,
    101,
    59,
    32768,
    8475,
    97,
    114,
    116,
    59,
    32768,
    8476,
    59,
    32768,
    8477,
    116,
    59,
    32768,
    9645,
    33024,
    174,
    59,
    32768,
    174,
    768,
    105,
    108,
    114,
    14950,
    14956,
    14962,
    115,
    104,
    116,
    59,
    32768,
    10621,
    111,
    111,
    114,
    59,
    32768,
    8971,
    59,
    32896,
    55349,
    56623,
    512,
    97,
    111,
    14971,
    14990,
    114,
    512,
    100,
    117,
    14977,
    14980,
    59,
    32768,
    8641,
    512,
    59,
    108,
    14985,
    14987,
    32768,
    8640,
    59,
    32768,
    10604,
    512,
    59,
    118,
    14995,
    14997,
    32768,
    961,
    59,
    32768,
    1009,
    768,
    103,
    110,
    115,
    15007,
    15123,
    15127,
    104,
    116,
    1536,
    97,
    104,
    108,
    114,
    115,
    116,
    15022,
    15039,
    15060,
    15086,
    15099,
    15111,
    114,
    114,
    111,
    119,
    512,
    59,
    116,
    15031,
    15033,
    32768,
    8594,
    97,
    105,
    108,
    59,
    32768,
    8611,
    97,
    114,
    112,
    111,
    111,
    110,
    512,
    100,
    117,
    15050,
    15056,
    111,
    119,
    110,
    59,
    32768,
    8641,
    112,
    59,
    32768,
    8640,
    101,
    102,
    116,
    512,
    97,
    104,
    15068,
    15076,
    114,
    114,
    111,
    119,
    115,
    59,
    32768,
    8644,
    97,
    114,
    112,
    111,
    111,
    110,
    115,
    59,
    32768,
    8652,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    115,
    59,
    32768,
    8649,
    113,
    117,
    105,
    103,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8605,
    104,
    114,
    101,
    101,
    116,
    105,
    109,
    101,
    115,
    59,
    32768,
    8908,
    103,
    59,
    32768,
    730,
    105,
    110,
    103,
    100,
    111,
    116,
    115,
    101,
    113,
    59,
    32768,
    8787,
    768,
    97,
    104,
    109,
    15146,
    15151,
    15156,
    114,
    114,
    59,
    32768,
    8644,
    97,
    114,
    59,
    32768,
    8652,
    59,
    32768,
    8207,
    111,
    117,
    115,
    116,
    512,
    59,
    97,
    15168,
    15170,
    32768,
    9137,
    99,
    104,
    101,
    59,
    32768,
    9137,
    109,
    105,
    100,
    59,
    32768,
    10990,
    1024,
    97,
    98,
    112,
    116,
    15191,
    15204,
    15209,
    15229,
    512,
    110,
    114,
    15196,
    15200,
    103,
    59,
    32768,
    10221,
    114,
    59,
    32768,
    8702,
    114,
    107,
    59,
    32768,
    10215,
    768,
    97,
    102,
    108,
    15216,
    15220,
    15224,
    114,
    59,
    32768,
    10630,
    59,
    32896,
    55349,
    56675,
    117,
    115,
    59,
    32768,
    10798,
    105,
    109,
    101,
    115,
    59,
    32768,
    10805,
    512,
    97,
    112,
    15241,
    15253,
    114,
    512,
    59,
    103,
    15247,
    15249,
    32768,
    41,
    116,
    59,
    32768,
    10644,
    111,
    108,
    105,
    110,
    116,
    59,
    32768,
    10770,
    97,
    114,
    114,
    59,
    32768,
    8649,
    1024,
    97,
    99,
    104,
    113,
    15276,
    15282,
    15287,
    15290,
    113,
    117,
    111,
    59,
    32768,
    8250,
    114,
    59,
    32896,
    55349,
    56519,
    59,
    32768,
    8625,
    512,
    98,
    117,
    15295,
    15298,
    59,
    32768,
    93,
    111,
    512,
    59,
    114,
    15304,
    15306,
    32768,
    8217,
    59,
    32768,
    8217,
    768,
    104,
    105,
    114,
    15316,
    15322,
    15328,
    114,
    101,
    101,
    59,
    32768,
    8908,
    109,
    101,
    115,
    59,
    32768,
    8906,
    105,
    1024,
    59,
    101,
    102,
    108,
    15338,
    15340,
    15343,
    15346,
    32768,
    9657,
    59,
    32768,
    8885,
    59,
    32768,
    9656,
    116,
    114,
    105,
    59,
    32768,
    10702,
    108,
    117,
    104,
    97,
    114,
    59,
    32768,
    10600,
    59,
    32768,
    8478,
    6706,
    15391,
    15398,
    15404,
    15499,
    15516,
    15592,
    0,
    15606,
    15660,
    0,
    0,
    15752,
    15758,
    0,
    15827,
    15863,
    15886,
    16000,
    16006,
    16038,
    16086,
    0,
    16467,
    0,
    0,
    16506,
    99,
    117,
    116,
    101,
    59,
    32768,
    347,
    113,
    117,
    111,
    59,
    32768,
    8218,
    2560,
    59,
    69,
    97,
    99,
    101,
    105,
    110,
    112,
    115,
    121,
    15424,
    15426,
    15429,
    15441,
    15446,
    15458,
    15463,
    15482,
    15490,
    15495,
    32768,
    8827,
    59,
    32768,
    10932,
    833,
    15434,
    0,
    15437,
    59,
    32768,
    10936,
    111,
    110,
    59,
    32768,
    353,
    117,
    101,
    59,
    32768,
    8829,
    512,
    59,
    100,
    15451,
    15453,
    32768,
    10928,
    105,
    108,
    59,
    32768,
    351,
    114,
    99,
    59,
    32768,
    349,
    768,
    69,
    97,
    115,
    15470,
    15473,
    15477,
    59,
    32768,
    10934,
    112,
    59,
    32768,
    10938,
    105,
    109,
    59,
    32768,
    8937,
    111,
    108,
    105,
    110,
    116,
    59,
    32768,
    10771,
    105,
    109,
    59,
    32768,
    8831,
    59,
    32768,
    1089,
    111,
    116,
    768,
    59,
    98,
    101,
    15507,
    15509,
    15512,
    32768,
    8901,
    59,
    32768,
    8865,
    59,
    32768,
    10854,
    1792,
    65,
    97,
    99,
    109,
    115,
    116,
    120,
    15530,
    15535,
    15556,
    15562,
    15566,
    15572,
    15587,
    114,
    114,
    59,
    32768,
    8664,
    114,
    512,
    104,
    114,
    15541,
    15545,
    107,
    59,
    32768,
    10533,
    512,
    59,
    111,
    15550,
    15552,
    32768,
    8600,
    119,
    59,
    32768,
    8600,
    116,
    33024,
    167,
    59,
    32768,
    167,
    105,
    59,
    32768,
    59,
    119,
    97,
    114,
    59,
    32768,
    10537,
    109,
    512,
    105,
    110,
    15578,
    15584,
    110,
    117,
    115,
    59,
    32768,
    8726,
    59,
    32768,
    8726,
    116,
    59,
    32768,
    10038,
    114,
    512,
    59,
    111,
    15597,
    15600,
    32896,
    55349,
    56624,
    119,
    110,
    59,
    32768,
    8994,
    1024,
    97,
    99,
    111,
    121,
    15614,
    15619,
    15632,
    15654,
    114,
    112,
    59,
    32768,
    9839,
    512,
    104,
    121,
    15624,
    15629,
    99,
    121,
    59,
    32768,
    1097,
    59,
    32768,
    1096,
    114,
    116,
    1086,
    15640,
    0,
    0,
    15645,
    105,
    100,
    59,
    32768,
    8739,
    97,
    114,
    97,
    108,
    108,
    101,
    108,
    59,
    32768,
    8741,
    33024,
    173,
    59,
    32768,
    173,
    512,
    103,
    109,
    15664,
    15681,
    109,
    97,
    768,
    59,
    102,
    118,
    15673,
    15675,
    15678,
    32768,
    963,
    59,
    32768,
    962,
    59,
    32768,
    962,
    2048,
    59,
    100,
    101,
    103,
    108,
    110,
    112,
    114,
    15698,
    15700,
    15705,
    15715,
    15725,
    15735,
    15739,
    15745,
    32768,
    8764,
    111,
    116,
    59,
    32768,
    10858,
    512,
    59,
    113,
    15710,
    15712,
    32768,
    8771,
    59,
    32768,
    8771,
    512,
    59,
    69,
    15720,
    15722,
    32768,
    10910,
    59,
    32768,
    10912,
    512,
    59,
    69,
    15730,
    15732,
    32768,
    10909,
    59,
    32768,
    10911,
    101,
    59,
    32768,
    8774,
    108,
    117,
    115,
    59,
    32768,
    10788,
    97,
    114,
    114,
    59,
    32768,
    10610,
    97,
    114,
    114,
    59,
    32768,
    8592,
    1024,
    97,
    101,
    105,
    116,
    15766,
    15788,
    15796,
    15808,
    512,
    108,
    115,
    15771,
    15783,
    108,
    115,
    101,
    116,
    109,
    105,
    110,
    117,
    115,
    59,
    32768,
    8726,
    104,
    112,
    59,
    32768,
    10803,
    112,
    97,
    114,
    115,
    108,
    59,
    32768,
    10724,
    512,
    100,
    108,
    15801,
    15804,
    59,
    32768,
    8739,
    101,
    59,
    32768,
    8995,
    512,
    59,
    101,
    15813,
    15815,
    32768,
    10922,
    512,
    59,
    115,
    15820,
    15822,
    32768,
    10924,
    59,
    32896,
    10924,
    65024,
    768,
    102,
    108,
    112,
    15833,
    15839,
    15857,
    116,
    99,
    121,
    59,
    32768,
    1100,
    512,
    59,
    98,
    15844,
    15846,
    32768,
    47,
    512,
    59,
    97,
    15851,
    15853,
    32768,
    10692,
    114,
    59,
    32768,
    9023,
    102,
    59,
    32896,
    55349,
    56676,
    97,
    512,
    100,
    114,
    15868,
    15882,
    101,
    115,
    512,
    59,
    117,
    15875,
    15877,
    32768,
    9824,
    105,
    116,
    59,
    32768,
    9824,
    59,
    32768,
    8741,
    768,
    99,
    115,
    117,
    15892,
    15921,
    15977,
    512,
    97,
    117,
    15897,
    15909,
    112,
    512,
    59,
    115,
    15903,
    15905,
    32768,
    8851,
    59,
    32896,
    8851,
    65024,
    112,
    512,
    59,
    115,
    15915,
    15917,
    32768,
    8852,
    59,
    32896,
    8852,
    65024,
    117,
    512,
    98,
    112,
    15927,
    15952,
    768,
    59,
    101,
    115,
    15934,
    15936,
    15939,
    32768,
    8847,
    59,
    32768,
    8849,
    101,
    116,
    512,
    59,
    101,
    15946,
    15948,
    32768,
    8847,
    113,
    59,
    32768,
    8849,
    768,
    59,
    101,
    115,
    15959,
    15961,
    15964,
    32768,
    8848,
    59,
    32768,
    8850,
    101,
    116,
    512,
    59,
    101,
    15971,
    15973,
    32768,
    8848,
    113,
    59,
    32768,
    8850,
    768,
    59,
    97,
    102,
    15984,
    15986,
    15996,
    32768,
    9633,
    114,
    566,
    15991,
    15994,
    59,
    32768,
    9633,
    59,
    32768,
    9642,
    59,
    32768,
    9642,
    97,
    114,
    114,
    59,
    32768,
    8594,
    1024,
    99,
    101,
    109,
    116,
    16014,
    16019,
    16025,
    16031,
    114,
    59,
    32896,
    55349,
    56520,
    116,
    109,
    110,
    59,
    32768,
    8726,
    105,
    108,
    101,
    59,
    32768,
    8995,
    97,
    114,
    102,
    59,
    32768,
    8902,
    512,
    97,
    114,
    16042,
    16053,
    114,
    512,
    59,
    102,
    16048,
    16050,
    32768,
    9734,
    59,
    32768,
    9733,
    512,
    97,
    110,
    16058,
    16081,
    105,
    103,
    104,
    116,
    512,
    101,
    112,
    16067,
    16076,
    112,
    115,
    105,
    108,
    111,
    110,
    59,
    32768,
    1013,
    104,
    105,
    59,
    32768,
    981,
    115,
    59,
    32768,
    175,
    1280,
    98,
    99,
    109,
    110,
    112,
    16096,
    16221,
    16288,
    16291,
    16295,
    2304,
    59,
    69,
    100,
    101,
    109,
    110,
    112,
    114,
    115,
    16115,
    16117,
    16120,
    16125,
    16137,
    16143,
    16154,
    16160,
    16166,
    32768,
    8834,
    59,
    32768,
    10949,
    111,
    116,
    59,
    32768,
    10941,
    512,
    59,
    100,
    16130,
    16132,
    32768,
    8838,
    111,
    116,
    59,
    32768,
    10947,
    117,
    108,
    116,
    59,
    32768,
    10945,
    512,
    69,
    101,
    16148,
    16151,
    59,
    32768,
    10955,
    59,
    32768,
    8842,
    108,
    117,
    115,
    59,
    32768,
    10943,
    97,
    114,
    114,
    59,
    32768,
    10617,
    768,
    101,
    105,
    117,
    16173,
    16206,
    16210,
    116,
    768,
    59,
    101,
    110,
    16181,
    16183,
    16194,
    32768,
    8834,
    113,
    512,
    59,
    113,
    16189,
    16191,
    32768,
    8838,
    59,
    32768,
    10949,
    101,
    113,
    512,
    59,
    113,
    16201,
    16203,
    32768,
    8842,
    59,
    32768,
    10955,
    109,
    59,
    32768,
    10951,
    512,
    98,
    112,
    16215,
    16218,
    59,
    32768,
    10965,
    59,
    32768,
    10963,
    99,
    1536,
    59,
    97,
    99,
    101,
    110,
    115,
    16235,
    16237,
    16245,
    16254,
    16258,
    16283,
    32768,
    8827,
    112,
    112,
    114,
    111,
    120,
    59,
    32768,
    10936,
    117,
    114,
    108,
    121,
    101,
    113,
    59,
    32768,
    8829,
    113,
    59,
    32768,
    10928,
    768,
    97,
    101,
    115,
    16265,
    16273,
    16278,
    112,
    112,
    114,
    111,
    120,
    59,
    32768,
    10938,
    113,
    113,
    59,
    32768,
    10934,
    105,
    109,
    59,
    32768,
    8937,
    105,
    109,
    59,
    32768,
    8831,
    59,
    32768,
    8721,
    103,
    59,
    32768,
    9834,
    3328,
    49,
    50,
    51,
    59,
    69,
    100,
    101,
    104,
    108,
    109,
    110,
    112,
    115,
    16322,
    16327,
    16332,
    16337,
    16339,
    16342,
    16356,
    16368,
    16382,
    16388,
    16394,
    16405,
    16411,
    33024,
    185,
    59,
    32768,
    185,
    33024,
    178,
    59,
    32768,
    178,
    33024,
    179,
    59,
    32768,
    179,
    32768,
    8835,
    59,
    32768,
    10950,
    512,
    111,
    115,
    16347,
    16351,
    116,
    59,
    32768,
    10942,
    117,
    98,
    59,
    32768,
    10968,
    512,
    59,
    100,
    16361,
    16363,
    32768,
    8839,
    111,
    116,
    59,
    32768,
    10948,
    115,
    512,
    111,
    117,
    16374,
    16378,
    108,
    59,
    32768,
    10185,
    98,
    59,
    32768,
    10967,
    97,
    114,
    114,
    59,
    32768,
    10619,
    117,
    108,
    116,
    59,
    32768,
    10946,
    512,
    69,
    101,
    16399,
    16402,
    59,
    32768,
    10956,
    59,
    32768,
    8843,
    108,
    117,
    115,
    59,
    32768,
    10944,
    768,
    101,
    105,
    117,
    16418,
    16451,
    16455,
    116,
    768,
    59,
    101,
    110,
    16426,
    16428,
    16439,
    32768,
    8835,
    113,
    512,
    59,
    113,
    16434,
    16436,
    32768,
    8839,
    59,
    32768,
    10950,
    101,
    113,
    512,
    59,
    113,
    16446,
    16448,
    32768,
    8843,
    59,
    32768,
    10956,
    109,
    59,
    32768,
    10952,
    512,
    98,
    112,
    16460,
    16463,
    59,
    32768,
    10964,
    59,
    32768,
    10966,
    768,
    65,
    97,
    110,
    16473,
    16478,
    16499,
    114,
    114,
    59,
    32768,
    8665,
    114,
    512,
    104,
    114,
    16484,
    16488,
    107,
    59,
    32768,
    10534,
    512,
    59,
    111,
    16493,
    16495,
    32768,
    8601,
    119,
    59,
    32768,
    8601,
    119,
    97,
    114,
    59,
    32768,
    10538,
    108,
    105,
    103,
    33024,
    223,
    59,
    32768,
    223,
    5938,
    16538,
    16552,
    16557,
    16579,
    16584,
    16591,
    0,
    16596,
    16692,
    0,
    0,
    0,
    0,
    0,
    16731,
    16780,
    0,
    16787,
    16908,
    0,
    0,
    0,
    16938,
    1091,
    16543,
    0,
    0,
    16549,
    103,
    101,
    116,
    59,
    32768,
    8982,
    59,
    32768,
    964,
    114,
    107,
    59,
    32768,
    9140,
    768,
    97,
    101,
    121,
    16563,
    16569,
    16575,
    114,
    111,
    110,
    59,
    32768,
    357,
    100,
    105,
    108,
    59,
    32768,
    355,
    59,
    32768,
    1090,
    111,
    116,
    59,
    32768,
    8411,
    108,
    114,
    101,
    99,
    59,
    32768,
    8981,
    114,
    59,
    32896,
    55349,
    56625,
    1024,
    101,
    105,
    107,
    111,
    16604,
    16641,
    16670,
    16684,
    835,
    16609,
    0,
    16624,
    101,
    512,
    52,
    102,
    16614,
    16617,
    59,
    32768,
    8756,
    111,
    114,
    101,
    59,
    32768,
    8756,
    97,
    768,
    59,
    115,
    118,
    16631,
    16633,
    16638,
    32768,
    952,
    121,
    109,
    59,
    32768,
    977,
    59,
    32768,
    977,
    512,
    99,
    110,
    16646,
    16665,
    107,
    512,
    97,
    115,
    16652,
    16660,
    112,
    112,
    114,
    111,
    120,
    59,
    32768,
    8776,
    105,
    109,
    59,
    32768,
    8764,
    115,
    112,
    59,
    32768,
    8201,
    512,
    97,
    115,
    16675,
    16679,
    112,
    59,
    32768,
    8776,
    105,
    109,
    59,
    32768,
    8764,
    114,
    110,
    33024,
    254,
    59,
    32768,
    254,
    829,
    16696,
    16701,
    16727,
    100,
    101,
    59,
    32768,
    732,
    101,
    115,
    33536,
    215,
    59,
    98,
    100,
    16710,
    16712,
    16723,
    32768,
    215,
    512,
    59,
    97,
    16717,
    16719,
    32768,
    8864,
    114,
    59,
    32768,
    10801,
    59,
    32768,
    10800,
    116,
    59,
    32768,
    8749,
    768,
    101,
    112,
    115,
    16737,
    16741,
    16775,
    97,
    59,
    32768,
    10536,
    1024,
    59,
    98,
    99,
    102,
    16750,
    16752,
    16757,
    16762,
    32768,
    8868,
    111,
    116,
    59,
    32768,
    9014,
    105,
    114,
    59,
    32768,
    10993,
    512,
    59,
    111,
    16767,
    16770,
    32896,
    55349,
    56677,
    114,
    107,
    59,
    32768,
    10970,
    97,
    59,
    32768,
    10537,
    114,
    105,
    109,
    101,
    59,
    32768,
    8244,
    768,
    97,
    105,
    112,
    16793,
    16798,
    16899,
    100,
    101,
    59,
    32768,
    8482,
    1792,
    97,
    100,
    101,
    109,
    112,
    115,
    116,
    16813,
    16868,
    16873,
    16876,
    16883,
    16889,
    16893,
    110,
    103,
    108,
    101,
    1280,
    59,
    100,
    108,
    113,
    114,
    16828,
    16830,
    16836,
    16850,
    16853,
    32768,
    9653,
    111,
    119,
    110,
    59,
    32768,
    9663,
    101,
    102,
    116,
    512,
    59,
    101,
    16844,
    16846,
    32768,
    9667,
    113,
    59,
    32768,
    8884,
    59,
    32768,
    8796,
    105,
    103,
    104,
    116,
    512,
    59,
    101,
    16862,
    16864,
    32768,
    9657,
    113,
    59,
    32768,
    8885,
    111,
    116,
    59,
    32768,
    9708,
    59,
    32768,
    8796,
    105,
    110,
    117,
    115,
    59,
    32768,
    10810,
    108,
    117,
    115,
    59,
    32768,
    10809,
    98,
    59,
    32768,
    10701,
    105,
    109,
    101,
    59,
    32768,
    10811,
    101,
    122,
    105,
    117,
    109,
    59,
    32768,
    9186,
    768,
    99,
    104,
    116,
    16914,
    16926,
    16931,
    512,
    114,
    121,
    16919,
    16923,
    59,
    32896,
    55349,
    56521,
    59,
    32768,
    1094,
    99,
    121,
    59,
    32768,
    1115,
    114,
    111,
    107,
    59,
    32768,
    359,
    512,
    105,
    111,
    16942,
    16947,
    120,
    116,
    59,
    32768,
    8812,
    104,
    101,
    97,
    100,
    512,
    108,
    114,
    16956,
    16967,
    101,
    102,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8606,
    105,
    103,
    104,
    116,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8608,
    4608,
    65,
    72,
    97,
    98,
    99,
    100,
    102,
    103,
    104,
    108,
    109,
    111,
    112,
    114,
    115,
    116,
    117,
    119,
    17016,
    17021,
    17026,
    17043,
    17057,
    17072,
    17095,
    17110,
    17119,
    17139,
    17172,
    17187,
    17202,
    17290,
    17330,
    17336,
    17365,
    17381,
    114,
    114,
    59,
    32768,
    8657,
    97,
    114,
    59,
    32768,
    10595,
    512,
    99,
    114,
    17031,
    17039,
    117,
    116,
    101,
    33024,
    250,
    59,
    32768,
    250,
    114,
    59,
    32768,
    8593,
    114,
    820,
    17049,
    0,
    17053,
    121,
    59,
    32768,
    1118,
    118,
    101,
    59,
    32768,
    365,
    512,
    105,
    121,
    17062,
    17069,
    114,
    99,
    33024,
    251,
    59,
    32768,
    251,
    59,
    32768,
    1091,
    768,
    97,
    98,
    104,
    17079,
    17084,
    17090,
    114,
    114,
    59,
    32768,
    8645,
    108,
    97,
    99,
    59,
    32768,
    369,
    97,
    114,
    59,
    32768,
    10606,
    512,
    105,
    114,
    17100,
    17106,
    115,
    104,
    116,
    59,
    32768,
    10622,
    59,
    32896,
    55349,
    56626,
    114,
    97,
    118,
    101,
    33024,
    249,
    59,
    32768,
    249,
    562,
    17123,
    17135,
    114,
    512,
    108,
    114,
    17128,
    17131,
    59,
    32768,
    8639,
    59,
    32768,
    8638,
    108,
    107,
    59,
    32768,
    9600,
    512,
    99,
    116,
    17144,
    17167,
    1088,
    17150,
    0,
    0,
    17163,
    114,
    110,
    512,
    59,
    101,
    17156,
    17158,
    32768,
    8988,
    114,
    59,
    32768,
    8988,
    111,
    112,
    59,
    32768,
    8975,
    114,
    105,
    59,
    32768,
    9720,
    512,
    97,
    108,
    17177,
    17182,
    99,
    114,
    59,
    32768,
    363,
    33024,
    168,
    59,
    32768,
    168,
    512,
    103,
    112,
    17192,
    17197,
    111,
    110,
    59,
    32768,
    371,
    102,
    59,
    32896,
    55349,
    56678,
    1536,
    97,
    100,
    104,
    108,
    115,
    117,
    17215,
    17222,
    17233,
    17257,
    17262,
    17280,
    114,
    114,
    111,
    119,
    59,
    32768,
    8593,
    111,
    119,
    110,
    97,
    114,
    114,
    111,
    119,
    59,
    32768,
    8597,
    97,
    114,
    112,
    111,
    111,
    110,
    512,
    108,
    114,
    17244,
    17250,
    101,
    102,
    116,
    59,
    32768,
    8639,
    105,
    103,
    104,
    116,
    59,
    32768,
    8638,
    117,
    115,
    59,
    32768,
    8846,
    105,
    768,
    59,
    104,
    108,
    17270,
    17272,
    17275,
    32768,
    965,
    59,
    32768,
    978,
    111,
    110,
    59,
    32768,
    965,
    112,
    97,
    114,
    114,
    111,
    119,
    115,
    59,
    32768,
    8648,
    768,
    99,
    105,
    116,
    17297,
    17320,
    17325,
    1088,
    17303,
    0,
    0,
    17316,
    114,
    110,
    512,
    59,
    101,
    17309,
    17311,
    32768,
    8989,
    114,
    59,
    32768,
    8989,
    111,
    112,
    59,
    32768,
    8974,
    110,
    103,
    59,
    32768,
    367,
    114,
    105,
    59,
    32768,
    9721,
    99,
    114,
    59,
    32896,
    55349,
    56522,
    768,
    100,
    105,
    114,
    17343,
    17348,
    17354,
    111,
    116,
    59,
    32768,
    8944,
    108,
    100,
    101,
    59,
    32768,
    361,
    105,
    512,
    59,
    102,
    17360,
    17362,
    32768,
    9653,
    59,
    32768,
    9652,
    512,
    97,
    109,
    17370,
    17375,
    114,
    114,
    59,
    32768,
    8648,
    108,
    33024,
    252,
    59,
    32768,
    252,
    97,
    110,
    103,
    108,
    101,
    59,
    32768,
    10663,
    3840,
    65,
    66,
    68,
    97,
    99,
    100,
    101,
    102,
    108,
    110,
    111,
    112,
    114,
    115,
    122,
    17420,
    17425,
    17437,
    17443,
    17613,
    17617,
    17623,
    17667,
    17672,
    17678,
    17693,
    17699,
    17705,
    17711,
    17754,
    114,
    114,
    59,
    32768,
    8661,
    97,
    114,
    512,
    59,
    118,
    17432,
    17434,
    32768,
    10984,
    59,
    32768,
    10985,
    97,
    115,
    104,
    59,
    32768,
    8872,
    512,
    110,
    114,
    17448,
    17454,
    103,
    114,
    116,
    59,
    32768,
    10652,
    1792,
    101,
    107,
    110,
    112,
    114,
    115,
    116,
    17469,
    17478,
    17485,
    17494,
    17515,
    17526,
    17578,
    112,
    115,
    105,
    108,
    111,
    110,
    59,
    32768,
    1013,
    97,
    112,
    112,
    97,
    59,
    32768,
    1008,
    111,
    116,
    104,
    105,
    110,
    103,
    59,
    32768,
    8709,
    768,
    104,
    105,
    114,
    17501,
    17505,
    17508,
    105,
    59,
    32768,
    981,
    59,
    32768,
    982,
    111,
    112,
    116,
    111,
    59,
    32768,
    8733,
    512,
    59,
    104,
    17520,
    17522,
    32768,
    8597,
    111,
    59,
    32768,
    1009,
    512,
    105,
    117,
    17531,
    17537,
    103,
    109,
    97,
    59,
    32768,
    962,
    512,
    98,
    112,
    17542,
    17560,
    115,
    101,
    116,
    110,
    101,
    113,
    512,
    59,
    113,
    17553,
    17556,
    32896,
    8842,
    65024,
    59,
    32896,
    10955,
    65024,
    115,
    101,
    116,
    110,
    101,
    113,
    512,
    59,
    113,
    17571,
    17574,
    32896,
    8843,
    65024,
    59,
    32896,
    10956,
    65024,
    512,
    104,
    114,
    17583,
    17589,
    101,
    116,
    97,
    59,
    32768,
    977,
    105,
    97,
    110,
    103,
    108,
    101,
    512,
    108,
    114,
    17600,
    17606,
    101,
    102,
    116,
    59,
    32768,
    8882,
    105,
    103,
    104,
    116,
    59,
    32768,
    8883,
    121,
    59,
    32768,
    1074,
    97,
    115,
    104,
    59,
    32768,
    8866,
    768,
    101,
    108,
    114,
    17630,
    17648,
    17654,
    768,
    59,
    98,
    101,
    17637,
    17639,
    17644,
    32768,
    8744,
    97,
    114,
    59,
    32768,
    8891,
    113,
    59,
    32768,
    8794,
    108,
    105,
    112,
    59,
    32768,
    8942,
    512,
    98,
    116,
    17659,
    17664,
    97,
    114,
    59,
    32768,
    124,
    59,
    32768,
    124,
    114,
    59,
    32896,
    55349,
    56627,
    116,
    114,
    105,
    59,
    32768,
    8882,
    115,
    117,
    512,
    98,
    112,
    17685,
    17689,
    59,
    32896,
    8834,
    8402,
    59,
    32896,
    8835,
    8402,
    112,
    102,
    59,
    32896,
    55349,
    56679,
    114,
    111,
    112,
    59,
    32768,
    8733,
    116,
    114,
    105,
    59,
    32768,
    8883,
    512,
    99,
    117,
    17716,
    17721,
    114,
    59,
    32896,
    55349,
    56523,
    512,
    98,
    112,
    17726,
    17740,
    110,
    512,
    69,
    101,
    17732,
    17736,
    59,
    32896,
    10955,
    65024,
    59,
    32896,
    8842,
    65024,
    110,
    512,
    69,
    101,
    17746,
    17750,
    59,
    32896,
    10956,
    65024,
    59,
    32896,
    8843,
    65024,
    105,
    103,
    122,
    97,
    103,
    59,
    32768,
    10650,
    1792,
    99,
    101,
    102,
    111,
    112,
    114,
    115,
    17777,
    17783,
    17815,
    17820,
    17826,
    17829,
    17842,
    105,
    114,
    99,
    59,
    32768,
    373,
    512,
    100,
    105,
    17788,
    17809,
    512,
    98,
    103,
    17793,
    17798,
    97,
    114,
    59,
    32768,
    10847,
    101,
    512,
    59,
    113,
    17804,
    17806,
    32768,
    8743,
    59,
    32768,
    8793,
    101,
    114,
    112,
    59,
    32768,
    8472,
    114,
    59,
    32896,
    55349,
    56628,
    112,
    102,
    59,
    32896,
    55349,
    56680,
    59,
    32768,
    8472,
    512,
    59,
    101,
    17834,
    17836,
    32768,
    8768,
    97,
    116,
    104,
    59,
    32768,
    8768,
    99,
    114,
    59,
    32896,
    55349,
    56524,
    5428,
    17871,
    17891,
    0,
    17897,
    0,
    17902,
    17917,
    0,
    0,
    17920,
    17935,
    17940,
    17945,
    0,
    0,
    17977,
    17992,
    0,
    18008,
    18024,
    18029,
    768,
    97,
    105,
    117,
    17877,
    17881,
    17886,
    112,
    59,
    32768,
    8898,
    114,
    99,
    59,
    32768,
    9711,
    112,
    59,
    32768,
    8899,
    116,
    114,
    105,
    59,
    32768,
    9661,
    114,
    59,
    32896,
    55349,
    56629,
    512,
    65,
    97,
    17906,
    17911,
    114,
    114,
    59,
    32768,
    10234,
    114,
    114,
    59,
    32768,
    10231,
    59,
    32768,
    958,
    512,
    65,
    97,
    17924,
    17929,
    114,
    114,
    59,
    32768,
    10232,
    114,
    114,
    59,
    32768,
    10229,
    97,
    112,
    59,
    32768,
    10236,
    105,
    115,
    59,
    32768,
    8955,
    768,
    100,
    112,
    116,
    17951,
    17956,
    17970,
    111,
    116,
    59,
    32768,
    10752,
    512,
    102,
    108,
    17961,
    17965,
    59,
    32896,
    55349,
    56681,
    117,
    115,
    59,
    32768,
    10753,
    105,
    109,
    101,
    59,
    32768,
    10754,
    512,
    65,
    97,
    17981,
    17986,
    114,
    114,
    59,
    32768,
    10233,
    114,
    114,
    59,
    32768,
    10230,
    512,
    99,
    113,
    17996,
    18001,
    114,
    59,
    32896,
    55349,
    56525,
    99,
    117,
    112,
    59,
    32768,
    10758,
    512,
    112,
    116,
    18012,
    18018,
    108,
    117,
    115,
    59,
    32768,
    10756,
    114,
    105,
    59,
    32768,
    9651,
    101,
    101,
    59,
    32768,
    8897,
    101,
    100,
    103,
    101,
    59,
    32768,
    8896,
    2048,
    97,
    99,
    101,
    102,
    105,
    111,
    115,
    117,
    18052,
    18068,
    18081,
    18087,
    18092,
    18097,
    18103,
    18109,
    99,
    512,
    117,
    121,
    18058,
    18065,
    116,
    101,
    33024,
    253,
    59,
    32768,
    253,
    59,
    32768,
    1103,
    512,
    105,
    121,
    18073,
    18078,
    114,
    99,
    59,
    32768,
    375,
    59,
    32768,
    1099,
    110,
    33024,
    165,
    59,
    32768,
    165,
    114,
    59,
    32896,
    55349,
    56630,
    99,
    121,
    59,
    32768,
    1111,
    112,
    102,
    59,
    32896,
    55349,
    56682,
    99,
    114,
    59,
    32896,
    55349,
    56526,
    512,
    99,
    109,
    18114,
    18118,
    121,
    59,
    32768,
    1102,
    108,
    33024,
    255,
    59,
    32768,
    255,
    2560,
    97,
    99,
    100,
    101,
    102,
    104,
    105,
    111,
    115,
    119,
    18145,
    18152,
    18166,
    18171,
    18186,
    18191,
    18196,
    18204,
    18210,
    18216,
    99,
    117,
    116,
    101,
    59,
    32768,
    378,
    512,
    97,
    121,
    18157,
    18163,
    114,
    111,
    110,
    59,
    32768,
    382,
    59,
    32768,
    1079,
    111,
    116,
    59,
    32768,
    380,
    512,
    101,
    116,
    18176,
    18182,
    116,
    114,
    102,
    59,
    32768,
    8488,
    97,
    59,
    32768,
    950,
    114,
    59,
    32896,
    55349,
    56631,
    99,
    121,
    59,
    32768,
    1078,
    103,
    114,
    97,
    114,
    114,
    59,
    32768,
    8669,
    112,
    102,
    59,
    32896,
    55349,
    56683,
    99,
    114,
    59,
    32896,
    55349,
    56527,
    512,
    106,
    110,
    18221,
    18224,
    59,
    32768,
    8205,
    106,
    59,
    32768,
    8204
]);

},{}],"4rSYu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
// Generated using scripts/write-decode-map.ts
// prettier-ignore
exports.default = new Uint16Array([
    1024,
    97,
    103,
    108,
    113,
    9,
    23,
    27,
    31,
    1086,
    15,
    0,
    0,
    19,
    112,
    59,
    32768,
    38,
    111,
    115,
    59,
    32768,
    39,
    116,
    59,
    32768,
    62,
    116,
    59,
    32768,
    60,
    117,
    111,
    116,
    59,
    32768,
    34
]);

},{}],"fQBlo":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DomHandler = void 0;
var domelementtype_1 = require("domelementtype");
var node_1 = require("./node");
__exportStar(require("./node"), exports);
var reWhitespace = /\s+/g;
// Default options
var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
};
var DomHandler = /** @class */ function() {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ function DomHandler1(callback, options, elementCB) {
        /** The elements of the DOM */ this.dom = [];
        /** The root element for the DOM */ this.root = new node_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */ this.done = false;
        /** Stack of open tags. */ this.tagStack = [
            this.root
        ];
        /** A data node that is still being written to. */ this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */ this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler1.prototype.onparserinit = function(parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler1.prototype.onreset = function() {
        this.dom = [];
        this.root = new node_1.Document(this.dom);
        this.done = false;
        this.tagStack = [
            this.root
        ];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler1.prototype.onend = function() {
        if (this.done) return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler1.prototype.onerror = function(error) {
        this.handleCallback(error);
    };
    DomHandler1.prototype.onclosetag = function() {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) elem.endIndex = this.parser.endIndex;
        if (this.elementCB) this.elementCB(elem);
    };
    DomHandler1.prototype.onopentag = function(name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler1.prototype.ontext = function(data) {
        var normalizeWhitespace = this.options.normalizeWhitespace;
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            else lastNode.data += data;
            if (this.options.withEndIndices) lastNode.endIndex = this.parser.endIndex;
        } else {
            if (normalizeWhitespace) data = data.replace(reWhitespace, " ");
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler1.prototype.oncomment = function(data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler1.prototype.oncommentend = function() {
        this.lastNode = null;
    };
    DomHandler1.prototype.oncdatastart = function() {
        var text = new node_1.Text("");
        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler1.prototype.oncdataend = function() {
        this.lastNode = null;
    };
    DomHandler1.prototype.onprocessinginstruction = function(name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler1.prototype.handleCallback = function(error) {
        if (typeof this.callback === "function") this.callback(error, this.dom);
        else if (error) throw error;
    };
    DomHandler1.prototype.addNode = function(node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) node.startIndex = this.parser.startIndex;
        if (this.options.withEndIndices) node.endIndex = this.parser.endIndex;
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler1;
}();
exports.DomHandler = DomHandler;
exports.default = DomHandler;

},{"domelementtype":"isPKn","./node":"eD9pp"}],"isPKn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ElementType", ()=>ElementType);
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */ parcelHelpers.export(exports, "isTag", ()=>isTag);
parcelHelpers.export(exports, "Root", ()=>Root);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "Directive", ()=>Directive);
parcelHelpers.export(exports, "Comment", ()=>Comment);
parcelHelpers.export(exports, "Script", ()=>Script);
parcelHelpers.export(exports, "Style", ()=>Style);
parcelHelpers.export(exports, "Tag", ()=>Tag);
parcelHelpers.export(exports, "CDATA", ()=>CDATA);
parcelHelpers.export(exports, "Doctype", ()=>Doctype);
var ElementType;
(function(ElementType1) {
    /** Type for the root element of a document */ ElementType1["Root"] = "root";
    /** Type for Text */ ElementType1["Text"] = "text";
    /** Type for <? ... ?> */ ElementType1["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType1["Comment"] = "comment";
    /** Type for <script> tags */ ElementType1["Script"] = "script";
    /** Type for <style> tags */ ElementType1["Style"] = "style";
    /** Type for Any tag */ ElementType1["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType1["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType1["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
const Root = ElementType.Root;
const Text = ElementType.Text;
const Directive = ElementType.Directive;
const Comment = ElementType.Comment;
const Script = ElementType.Script;
const Style = ElementType.Style;
const Tag = ElementType.Tag;
const CDATA = ElementType.CDATA;
const Doctype = ElementType.Doctype;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"eD9pp":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = require("domelementtype");
var nodeTypes = new Map([
    [
        domelementtype_1.ElementType.Tag,
        1
    ],
    [
        domelementtype_1.ElementType.Script,
        1
    ],
    [
        domelementtype_1.ElementType.Style,
        1
    ],
    [
        domelementtype_1.ElementType.Directive,
        1
    ],
    [
        domelementtype_1.ElementType.Text,
        3
    ],
    [
        domelementtype_1.ElementType.CDATA,
        4
    ],
    [
        domelementtype_1.ElementType.Comment,
        8
    ],
    [
        domelementtype_1.ElementType.Root,
        9
    ], 
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */ var Node = /** @class */ function() {
    /**
     *
     * @param type The type of the node.
     */ function Node1(type) {
        this.type = type;
        /** Parent of the node */ this.parent = null;
        /** Previous sibling */ this.prev = null;
        /** Next sibling */ this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ this.endIndex = null;
    }
    Object.defineProperty(Node1.prototype, "nodeType", {
        // Read-only aliases
        /**
         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
         * node {@link type}.
         */ get: function() {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node1.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.parent;
        },
        set: function(parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node1.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.prev;
        },
        set: function(prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node1.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.next;
        },
        set: function(next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ Node1.prototype.cloneNode = function(recursive) {
        if (recursive === void 0) recursive = false;
        return cloneNode(this, recursive);
    };
    return Node1;
}();
exports.Node = Node;
/**
 * A node that contains some data.
 */ var DataNode = /** @class */ function(_super) {
    __extends(DataNode1, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */ function DataNode1(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode1.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.data;
        },
        set: function(data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode1;
}(Node);
exports.DataNode = DataNode;
/**
 * Text within the document.
 */ var Text = /** @class */ function(_super) {
    __extends(Text1, _super);
    function Text1(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
    }
    return Text1;
}(DataNode);
exports.Text = Text;
/**
 * Comments within the document.
 */ var Comment = /** @class */ function(_super) {
    __extends(Comment1, _super);
    function Comment1(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
    }
    return Comment1;
}(DataNode);
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */ var ProcessingInstruction = /** @class */ function(_super) {
    __extends(ProcessingInstruction1, _super);
    function ProcessingInstruction1(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction1;
}(DataNode);
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */ var NodeWithChildren = /** @class */ function(_super) {
    __extends(NodeWithChildren1, _super);
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */ function NodeWithChildren1(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren1.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */ get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren1.prototype, "lastChild", {
        /** Last child of the node. */ get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren1.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.children;
        },
        set: function(children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren1;
}(Node);
exports.NodeWithChildren = NodeWithChildren;
/**
 * The root node of the document.
 */ var Document = /** @class */ function(_super) {
    __extends(Document1, _super);
    function Document1(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
    }
    return Document1;
}(NodeWithChildren);
exports.Document = Document;
/**
 * An element within the DOM.
 */ var Element = /** @class */ function(_super) {
    __extends(Element1, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */ function Element1(name, attribs, children, type) {
        if (children === void 0) children = [];
        if (type === void 0) type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element1.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.name;
        },
        set: function(name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element1.prototype, "attributes", {
        get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
                var _a, _b;
                return {
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element1;
}(NodeWithChildren);
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */ function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */ function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */ function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */ function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */ function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */ function cloneNode(node, recursive) {
    if (recursive === void 0) recursive = false;
    var result;
    if (isText(node)) result = new Text(node.data);
    else if (isComment(node)) result = new Comment(node.data);
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function(child) {
            return child.parent = clone_1;
        });
        if (node.namespace != null) clone_1.namespace = node.namespace;
        if (node["x-attribsNamespace"]) clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        if (node["x-attribsPrefix"]) clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        result = clone_1;
    } else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function(child) {
            return child.parent = clone_2;
        });
        result = clone_2;
    } else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function(child) {
            return child.parent = clone_3;
        });
        if (node["x-mode"]) clone_3["x-mode"] = node["x-mode"];
        result = clone_3;
    } else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    } else throw new Error("Not implemented yet: ".concat(node.type));
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) result.sourceCodeLocation = node.sourceCodeLocation;
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function(child) {
        return cloneNode(child, true);
    });
    for(var i = 1; i < children.length; i++){
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}

},{"domelementtype":"isPKn"}],"d4HtC":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseFeed = exports.FeedHandler = exports.getFeed = void 0;
var domhandler_1 = __importDefault(require("domhandler"));
var domutils_1 = require("domutils");
Object.defineProperty(exports, "getFeed", {
    enumerable: true,
    get: function() {
        return domutils_1.getFeed;
    }
});
var Parser_1 = require("./Parser");
/** @deprecated Handler is no longer necessary; use `getFeed` or `parseFeed` instead. */ var FeedHandler = /** @class */ function(_super) {
    __extends(FeedHandler1, _super);
    /**
     *
     * @param callback
     * @param options
     */ function FeedHandler1(callback, options) {
        var _this = this;
        if (typeof callback === "object") {
            callback = undefined;
            options = callback;
        }
        _this = _super.call(this, callback, options) || this;
        return _this;
    }
    FeedHandler1.prototype.onend = function() {
        var feed = (0, domutils_1.getFeed)(this.dom);
        if (feed) {
            this.feed = feed;
            this.handleCallback(null);
        } else this.handleCallback(new Error("couldn't find root of feed"));
    };
    return FeedHandler1;
}(domhandler_1.default);
exports.FeedHandler = FeedHandler;
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
 */ function parseFeed(feed, options) {
    if (options === void 0) options = {
        xmlMode: true
    };
    var handler = new domhandler_1.default(null, options);
    new Parser_1.Parser(handler, options).end(feed);
    return (0, domutils_1.getFeed)(handler.dom);
}
exports.parseFeed = parseFeed;

},{"domhandler":"fQBlo","domutils":"41sL1","./Parser":"hebxp"}],"41sL1":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
__exportStar(require("./stringify"), exports);
__exportStar(require("./traversal"), exports);
__exportStar(require("./manipulation"), exports);
__exportStar(require("./querying"), exports);
__exportStar(require("./legacy"), exports);
__exportStar(require("./helpers"), exports);
__exportStar(require("./feeds"), exports);
/** @deprecated Use these methods from `domhandler` directly. */ var domhandler_1 = require("domhandler");
Object.defineProperty(exports, "isTag", {
    enumerable: true,
    get: function() {
        return domhandler_1.isTag;
    }
});
Object.defineProperty(exports, "isCDATA", {
    enumerable: true,
    get: function() {
        return domhandler_1.isCDATA;
    }
});
Object.defineProperty(exports, "isText", {
    enumerable: true,
    get: function() {
        return domhandler_1.isText;
    }
});
Object.defineProperty(exports, "isComment", {
    enumerable: true,
    get: function() {
        return domhandler_1.isComment;
    }
});
Object.defineProperty(exports, "isDocument", {
    enumerable: true,
    get: function() {
        return domhandler_1.isDocument;
    }
});
Object.defineProperty(exports, "hasChildren", {
    enumerable: true,
    get: function() {
        return domhandler_1.hasChildren;
    }
});

},{"./stringify":"eU3Tn","./traversal":"4eFpl","./manipulation":"1ow81","./querying":"5HdLw","./legacy":"laBra","./helpers":"6iez7","./feeds":"fzwlQ","domhandler":"fQBlo"}],"eU3Tn":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
var domhandler_1 = require("domhandler");
var dom_serializer_1 = __importDefault(require("dom-serializer"));
var domelementtype_1 = require("domelementtype");
/**
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s outer HTML.
 */ function getOuterHTML(node, options) {
    return (0, dom_serializer_1.default)(node, options);
}
exports.getOuterHTML = getOuterHTML;
/**
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s inner HTML.
 */ function getInnerHTML(node1, options) {
    return (0, domhandler_1.hasChildren)(node1) ? node1.children.map(function(node) {
        return getOuterHTML(node, options);
    }).join("") : "";
}
exports.getInnerHTML = getInnerHTML;
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
 *
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */ function getText(node) {
    if (Array.isArray(node)) return node.map(getText).join("");
    if ((0, domhandler_1.isTag)(node)) return node.name === "br" ? "\n" : getText(node.children);
    if ((0, domhandler_1.isCDATA)(node)) return getText(node.children);
    if ((0, domhandler_1.isText)(node)) return node.data;
    return "";
}
exports.getText = getText;
/**
 * Get a node's text content.
 *
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */ function textContent(node) {
    if (Array.isArray(node)) return node.map(textContent).join("");
    if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) return textContent(node.children);
    if ((0, domhandler_1.isText)(node)) return node.data;
    return "";
}
exports.textContent = textContent;
/**
 * Get a node's inner text.
 *
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */ function innerText(node) {
    if (Array.isArray(node)) return node.map(innerText).join("");
    if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) return innerText(node.children);
    if ((0, domhandler_1.isText)(node)) return node.data;
    return "";
}
exports.innerText = innerText;

},{"domhandler":"fQBlo","dom-serializer":"59L3s","domelementtype":"isPKn"}],"59L3s":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Module dependencies
 */ var ElementType = __importStar(require("domelementtype"));
var entities_1 = require("entities");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */ var foreignNames_1 = require("./foreignNames");
var unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript", 
]);
/**
 * Format attributes
 */ function formatAttributes(attributes, opts) {
    if (!attributes) return;
    return Object.keys(attributes).map(function(key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") /* Fix up mixed-case attribute names */ key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") return key;
        return key + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
    }).join(" ");
}
/**
 * Self-enclosing tags
 */ var singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr", 
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */ function render(node, options) {
    if (options === void 0) options = {};
    var nodes = "length" in node ? node : [
        node
    ];
    var output = "";
    for(var i = 0; i < nodes.length; i++)output += renderNode(nodes[i], options);
    return output;
}
exports.default = render;
function renderNode(node, options) {
    switch(node.type){
        case ElementType.Root:
            return render(node.children, options);
        case ElementType.Directive:
        case ElementType.Doctype:
            return renderDirective(node);
        case ElementType.Comment:
            return renderComment(node);
        case ElementType.CDATA:
            return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
            return renderTag(node, options);
        case ElementType.Text:
            return renderText(node, options);
    }
}
var foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title", 
]);
var foreignElements = new Set([
    "svg",
    "math"
]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */ elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */ if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) opts = __assign(__assign({}, opts), {
            xmlMode: false
        });
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) opts = __assign(__assign({}, opts), {
        xmlMode: "foreign"
    });
    var tag = "<" + elem.name;
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) tag += " " + attribs;
    if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode) tag += " ";
        tag += "/>";
    } else {
        tag += ">";
        if (elem.children.length > 0) tag += render(elem.children, opts);
        if (opts.xmlMode || !singleTag.has(elem.name)) tag += "</" + elem.name + ">";
    }
    return tag;
}
function renderDirective(elem) {
    return "<" + elem.data + ">";
}
function renderText(elem, opts) {
    var data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) data = entities_1.encodeXML(data);
    return data;
}
function renderCdata(elem) {
    return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
    return "<!--" + elem.data + "-->";
}

},{"domelementtype":"isPKn","entities":"jp4Mg","./foreignNames":"kUwEA"}],"jp4Mg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
var decode_1 = require("./decode");
var encode_1 = require("./encode");
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */ function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */ function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */ function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = require("./encode");
Object.defineProperty(exports, "encodeXML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeXML;
    }
});
Object.defineProperty(exports, "encodeHTML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
Object.defineProperty(exports, "encodeNonAsciiHTML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeNonAsciiHTML;
    }
});
Object.defineProperty(exports, "escape", {
    enumerable: true,
    get: function() {
        return encode_2.escape;
    }
});
Object.defineProperty(exports, "escapeUTF8", {
    enumerable: true,
    get: function() {
        return encode_2.escapeUTF8;
    }
});
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
Object.defineProperty(exports, "encodeHTML5", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
var decode_2 = require("./decode");
Object.defineProperty(exports, "decodeXML", {
    enumerable: true,
    get: function() {
        return decode_2.decodeXML;
    }
});
Object.defineProperty(exports, "decodeHTML", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTMLStrict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTML5", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTML4Strict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
Object.defineProperty(exports, "decodeHTML5Strict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
Object.defineProperty(exports, "decodeXMLStrict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeXML;
    }
});

},{"./decode":"kWIFC","./encode":"6QLS8"}],"kWIFC":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(require("./maps/entities.json"));
var legacy_json_1 = __importDefault(require("./maps/legacy.json"));
var xml_json_1 = __importDefault(require("./maps/xml.json"));
var decode_codepoint_1 = __importDefault(require("./decode_codepoint"));
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function(str) {
        return String(str).replace(strictEntityRe, replace);
    };
}
var sorter = function(a, b) {
    return a < b ? 1 : -1;
};
exports.decodeHTML = function() {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for(var i = 0, j = 0; i < keys.length; i++)if (legacy[j] === keys[i]) {
        keys[i] += ";?";
        j++;
    } else keys[i] += ";";
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";") str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function(str) {
        return String(str).replace(re, replacer);
    };
}();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}

},{"./maps/entities.json":"44PRp","./maps/legacy.json":"BQogi","./maps/xml.json":"6rBuv","./decode_codepoint":"csv8t"}],"44PRp":[function(require,module,exports) {
module.exports = JSON.parse('{"Aacute":"\xc1","aacute":"\xe1","Abreve":"\u0102","abreve":"\u0103","ac":"\u223E","acd":"\u223F","acE":"\u223E\u0333","Acirc":"\xc2","acirc":"\xe2","acute":"\xb4","Acy":"\u0410","acy":"\u0430","AElig":"\xc6","aelig":"\xe6","af":"\u2061","Afr":"\uD835\uDD04","afr":"\uD835\uDD1E","Agrave":"\xc0","agrave":"\xe0","alefsym":"\u2135","aleph":"\u2135","Alpha":"\u0391","alpha":"\u03B1","Amacr":"\u0100","amacr":"\u0101","amalg":"\u2A3F","amp":"&","AMP":"&","andand":"\u2A55","And":"\u2A53","and":"\u2227","andd":"\u2A5C","andslope":"\u2A58","andv":"\u2A5A","ang":"\u2220","ange":"\u29A4","angle":"\u2220","angmsdaa":"\u29A8","angmsdab":"\u29A9","angmsdac":"\u29AA","angmsdad":"\u29AB","angmsdae":"\u29AC","angmsdaf":"\u29AD","angmsdag":"\u29AE","angmsdah":"\u29AF","angmsd":"\u2221","angrt":"\u221F","angrtvb":"\u22BE","angrtvbd":"\u299D","angsph":"\u2222","angst":"\xc5","angzarr":"\u237C","Aogon":"\u0104","aogon":"\u0105","Aopf":"\uD835\uDD38","aopf":"\uD835\uDD52","apacir":"\u2A6F","ap":"\u2248","apE":"\u2A70","ape":"\u224A","apid":"\u224B","apos":"\'","ApplyFunction":"\u2061","approx":"\u2248","approxeq":"\u224A","Aring":"\xc5","aring":"\xe5","Ascr":"\uD835\uDC9C","ascr":"\uD835\uDCB6","Assign":"\u2254","ast":"*","asymp":"\u2248","asympeq":"\u224D","Atilde":"\xc3","atilde":"\xe3","Auml":"\xc4","auml":"\xe4","awconint":"\u2233","awint":"\u2A11","backcong":"\u224C","backepsilon":"\u03F6","backprime":"\u2035","backsim":"\u223D","backsimeq":"\u22CD","Backslash":"\u2216","Barv":"\u2AE7","barvee":"\u22BD","barwed":"\u2305","Barwed":"\u2306","barwedge":"\u2305","bbrk":"\u23B5","bbrktbrk":"\u23B6","bcong":"\u224C","Bcy":"\u0411","bcy":"\u0431","bdquo":"\u201E","becaus":"\u2235","because":"\u2235","Because":"\u2235","bemptyv":"\u29B0","bepsi":"\u03F6","bernou":"\u212C","Bernoullis":"\u212C","Beta":"\u0392","beta":"\u03B2","beth":"\u2136","between":"\u226C","Bfr":"\uD835\uDD05","bfr":"\uD835\uDD1F","bigcap":"\u22C2","bigcirc":"\u25EF","bigcup":"\u22C3","bigodot":"\u2A00","bigoplus":"\u2A01","bigotimes":"\u2A02","bigsqcup":"\u2A06","bigstar":"\u2605","bigtriangledown":"\u25BD","bigtriangleup":"\u25B3","biguplus":"\u2A04","bigvee":"\u22C1","bigwedge":"\u22C0","bkarow":"\u290D","blacklozenge":"\u29EB","blacksquare":"\u25AA","blacktriangle":"\u25B4","blacktriangledown":"\u25BE","blacktriangleleft":"\u25C2","blacktriangleright":"\u25B8","blank":"\u2423","blk12":"\u2592","blk14":"\u2591","blk34":"\u2593","block":"\u2588","bne":"=\u20E5","bnequiv":"\u2261\u20E5","bNot":"\u2AED","bnot":"\u2310","Bopf":"\uD835\uDD39","bopf":"\uD835\uDD53","bot":"\u22A5","bottom":"\u22A5","bowtie":"\u22C8","boxbox":"\u29C9","boxdl":"\u2510","boxdL":"\u2555","boxDl":"\u2556","boxDL":"\u2557","boxdr":"\u250C","boxdR":"\u2552","boxDr":"\u2553","boxDR":"\u2554","boxh":"\u2500","boxH":"\u2550","boxhd":"\u252C","boxHd":"\u2564","boxhD":"\u2565","boxHD":"\u2566","boxhu":"\u2534","boxHu":"\u2567","boxhU":"\u2568","boxHU":"\u2569","boxminus":"\u229F","boxplus":"\u229E","boxtimes":"\u22A0","boxul":"\u2518","boxuL":"\u255B","boxUl":"\u255C","boxUL":"\u255D","boxur":"\u2514","boxuR":"\u2558","boxUr":"\u2559","boxUR":"\u255A","boxv":"\u2502","boxV":"\u2551","boxvh":"\u253C","boxvH":"\u256A","boxVh":"\u256B","boxVH":"\u256C","boxvl":"\u2524","boxvL":"\u2561","boxVl":"\u2562","boxVL":"\u2563","boxvr":"\u251C","boxvR":"\u255E","boxVr":"\u255F","boxVR":"\u2560","bprime":"\u2035","breve":"\u02D8","Breve":"\u02D8","brvbar":"\xa6","bscr":"\uD835\uDCB7","Bscr":"\u212C","bsemi":"\u204F","bsim":"\u223D","bsime":"\u22CD","bsolb":"\u29C5","bsol":"\\\\","bsolhsub":"\u27C8","bull":"\u2022","bullet":"\u2022","bump":"\u224E","bumpE":"\u2AAE","bumpe":"\u224F","Bumpeq":"\u224E","bumpeq":"\u224F","Cacute":"\u0106","cacute":"\u0107","capand":"\u2A44","capbrcup":"\u2A49","capcap":"\u2A4B","cap":"\u2229","Cap":"\u22D2","capcup":"\u2A47","capdot":"\u2A40","CapitalDifferentialD":"\u2145","caps":"\u2229\uFE00","caret":"\u2041","caron":"\u02C7","Cayleys":"\u212D","ccaps":"\u2A4D","Ccaron":"\u010C","ccaron":"\u010D","Ccedil":"\xc7","ccedil":"\xe7","Ccirc":"\u0108","ccirc":"\u0109","Cconint":"\u2230","ccups":"\u2A4C","ccupssm":"\u2A50","Cdot":"\u010A","cdot":"\u010B","cedil":"\xb8","Cedilla":"\xb8","cemptyv":"\u29B2","cent":"\xa2","centerdot":"\xb7","CenterDot":"\xb7","cfr":"\uD835\uDD20","Cfr":"\u212D","CHcy":"\u0427","chcy":"\u0447","check":"\u2713","checkmark":"\u2713","Chi":"\u03A7","chi":"\u03C7","circ":"\u02C6","circeq":"\u2257","circlearrowleft":"\u21BA","circlearrowright":"\u21BB","circledast":"\u229B","circledcirc":"\u229A","circleddash":"\u229D","CircleDot":"\u2299","circledR":"\xae","circledS":"\u24C8","CircleMinus":"\u2296","CirclePlus":"\u2295","CircleTimes":"\u2297","cir":"\u25CB","cirE":"\u29C3","cire":"\u2257","cirfnint":"\u2A10","cirmid":"\u2AEF","cirscir":"\u29C2","ClockwiseContourIntegral":"\u2232","CloseCurlyDoubleQuote":"\u201D","CloseCurlyQuote":"\u2019","clubs":"\u2663","clubsuit":"\u2663","colon":":","Colon":"\u2237","Colone":"\u2A74","colone":"\u2254","coloneq":"\u2254","comma":",","commat":"@","comp":"\u2201","compfn":"\u2218","complement":"\u2201","complexes":"\u2102","cong":"\u2245","congdot":"\u2A6D","Congruent":"\u2261","conint":"\u222E","Conint":"\u222F","ContourIntegral":"\u222E","copf":"\uD835\uDD54","Copf":"\u2102","coprod":"\u2210","Coproduct":"\u2210","copy":"\xa9","COPY":"\xa9","copysr":"\u2117","CounterClockwiseContourIntegral":"\u2233","crarr":"\u21B5","cross":"\u2717","Cross":"\u2A2F","Cscr":"\uD835\uDC9E","cscr":"\uD835\uDCB8","csub":"\u2ACF","csube":"\u2AD1","csup":"\u2AD0","csupe":"\u2AD2","ctdot":"\u22EF","cudarrl":"\u2938","cudarrr":"\u2935","cuepr":"\u22DE","cuesc":"\u22DF","cularr":"\u21B6","cularrp":"\u293D","cupbrcap":"\u2A48","cupcap":"\u2A46","CupCap":"\u224D","cup":"\u222A","Cup":"\u22D3","cupcup":"\u2A4A","cupdot":"\u228D","cupor":"\u2A45","cups":"\u222A\uFE00","curarr":"\u21B7","curarrm":"\u293C","curlyeqprec":"\u22DE","curlyeqsucc":"\u22DF","curlyvee":"\u22CE","curlywedge":"\u22CF","curren":"\xa4","curvearrowleft":"\u21B6","curvearrowright":"\u21B7","cuvee":"\u22CE","cuwed":"\u22CF","cwconint":"\u2232","cwint":"\u2231","cylcty":"\u232D","dagger":"\u2020","Dagger":"\u2021","daleth":"\u2138","darr":"\u2193","Darr":"\u21A1","dArr":"\u21D3","dash":"\u2010","Dashv":"\u2AE4","dashv":"\u22A3","dbkarow":"\u290F","dblac":"\u02DD","Dcaron":"\u010E","dcaron":"\u010F","Dcy":"\u0414","dcy":"\u0434","ddagger":"\u2021","ddarr":"\u21CA","DD":"\u2145","dd":"\u2146","DDotrahd":"\u2911","ddotseq":"\u2A77","deg":"\xb0","Del":"\u2207","Delta":"\u0394","delta":"\u03B4","demptyv":"\u29B1","dfisht":"\u297F","Dfr":"\uD835\uDD07","dfr":"\uD835\uDD21","dHar":"\u2965","dharl":"\u21C3","dharr":"\u21C2","DiacriticalAcute":"\xb4","DiacriticalDot":"\u02D9","DiacriticalDoubleAcute":"\u02DD","DiacriticalGrave":"`","DiacriticalTilde":"\u02DC","diam":"\u22C4","diamond":"\u22C4","Diamond":"\u22C4","diamondsuit":"\u2666","diams":"\u2666","die":"\xa8","DifferentialD":"\u2146","digamma":"\u03DD","disin":"\u22F2","div":"\xf7","divide":"\xf7","divideontimes":"\u22C7","divonx":"\u22C7","DJcy":"\u0402","djcy":"\u0452","dlcorn":"\u231E","dlcrop":"\u230D","dollar":"$","Dopf":"\uD835\uDD3B","dopf":"\uD835\uDD55","Dot":"\xa8","dot":"\u02D9","DotDot":"\u20DC","doteq":"\u2250","doteqdot":"\u2251","DotEqual":"\u2250","dotminus":"\u2238","dotplus":"\u2214","dotsquare":"\u22A1","doublebarwedge":"\u2306","DoubleContourIntegral":"\u222F","DoubleDot":"\xa8","DoubleDownArrow":"\u21D3","DoubleLeftArrow":"\u21D0","DoubleLeftRightArrow":"\u21D4","DoubleLeftTee":"\u2AE4","DoubleLongLeftArrow":"\u27F8","DoubleLongLeftRightArrow":"\u27FA","DoubleLongRightArrow":"\u27F9","DoubleRightArrow":"\u21D2","DoubleRightTee":"\u22A8","DoubleUpArrow":"\u21D1","DoubleUpDownArrow":"\u21D5","DoubleVerticalBar":"\u2225","DownArrowBar":"\u2913","downarrow":"\u2193","DownArrow":"\u2193","Downarrow":"\u21D3","DownArrowUpArrow":"\u21F5","DownBreve":"\u0311","downdownarrows":"\u21CA","downharpoonleft":"\u21C3","downharpoonright":"\u21C2","DownLeftRightVector":"\u2950","DownLeftTeeVector":"\u295E","DownLeftVectorBar":"\u2956","DownLeftVector":"\u21BD","DownRightTeeVector":"\u295F","DownRightVectorBar":"\u2957","DownRightVector":"\u21C1","DownTeeArrow":"\u21A7","DownTee":"\u22A4","drbkarow":"\u2910","drcorn":"\u231F","drcrop":"\u230C","Dscr":"\uD835\uDC9F","dscr":"\uD835\uDCB9","DScy":"\u0405","dscy":"\u0455","dsol":"\u29F6","Dstrok":"\u0110","dstrok":"\u0111","dtdot":"\u22F1","dtri":"\u25BF","dtrif":"\u25BE","duarr":"\u21F5","duhar":"\u296F","dwangle":"\u29A6","DZcy":"\u040F","dzcy":"\u045F","dzigrarr":"\u27FF","Eacute":"\xc9","eacute":"\xe9","easter":"\u2A6E","Ecaron":"\u011A","ecaron":"\u011B","Ecirc":"\xca","ecirc":"\xea","ecir":"\u2256","ecolon":"\u2255","Ecy":"\u042D","ecy":"\u044D","eDDot":"\u2A77","Edot":"\u0116","edot":"\u0117","eDot":"\u2251","ee":"\u2147","efDot":"\u2252","Efr":"\uD835\uDD08","efr":"\uD835\uDD22","eg":"\u2A9A","Egrave":"\xc8","egrave":"\xe8","egs":"\u2A96","egsdot":"\u2A98","el":"\u2A99","Element":"\u2208","elinters":"\u23E7","ell":"\u2113","els":"\u2A95","elsdot":"\u2A97","Emacr":"\u0112","emacr":"\u0113","empty":"\u2205","emptyset":"\u2205","EmptySmallSquare":"\u25FB","emptyv":"\u2205","EmptyVerySmallSquare":"\u25AB","emsp13":"\u2004","emsp14":"\u2005","emsp":"\u2003","ENG":"\u014A","eng":"\u014B","ensp":"\u2002","Eogon":"\u0118","eogon":"\u0119","Eopf":"\uD835\uDD3C","eopf":"\uD835\uDD56","epar":"\u22D5","eparsl":"\u29E3","eplus":"\u2A71","epsi":"\u03B5","Epsilon":"\u0395","epsilon":"\u03B5","epsiv":"\u03F5","eqcirc":"\u2256","eqcolon":"\u2255","eqsim":"\u2242","eqslantgtr":"\u2A96","eqslantless":"\u2A95","Equal":"\u2A75","equals":"=","EqualTilde":"\u2242","equest":"\u225F","Equilibrium":"\u21CC","equiv":"\u2261","equivDD":"\u2A78","eqvparsl":"\u29E5","erarr":"\u2971","erDot":"\u2253","escr":"\u212F","Escr":"\u2130","esdot":"\u2250","Esim":"\u2A73","esim":"\u2242","Eta":"\u0397","eta":"\u03B7","ETH":"\xd0","eth":"\xf0","Euml":"\xcb","euml":"\xeb","euro":"\u20AC","excl":"!","exist":"\u2203","Exists":"\u2203","expectation":"\u2130","exponentiale":"\u2147","ExponentialE":"\u2147","fallingdotseq":"\u2252","Fcy":"\u0424","fcy":"\u0444","female":"\u2640","ffilig":"\uFB03","fflig":"\uFB00","ffllig":"\uFB04","Ffr":"\uD835\uDD09","ffr":"\uD835\uDD23","filig":"\uFB01","FilledSmallSquare":"\u25FC","FilledVerySmallSquare":"\u25AA","fjlig":"fj","flat":"\u266D","fllig":"\uFB02","fltns":"\u25B1","fnof":"\u0192","Fopf":"\uD835\uDD3D","fopf":"\uD835\uDD57","forall":"\u2200","ForAll":"\u2200","fork":"\u22D4","forkv":"\u2AD9","Fouriertrf":"\u2131","fpartint":"\u2A0D","frac12":"\xbd","frac13":"\u2153","frac14":"\xbc","frac15":"\u2155","frac16":"\u2159","frac18":"\u215B","frac23":"\u2154","frac25":"\u2156","frac34":"\xbe","frac35":"\u2157","frac38":"\u215C","frac45":"\u2158","frac56":"\u215A","frac58":"\u215D","frac78":"\u215E","frasl":"\u2044","frown":"\u2322","fscr":"\uD835\uDCBB","Fscr":"\u2131","gacute":"\u01F5","Gamma":"\u0393","gamma":"\u03B3","Gammad":"\u03DC","gammad":"\u03DD","gap":"\u2A86","Gbreve":"\u011E","gbreve":"\u011F","Gcedil":"\u0122","Gcirc":"\u011C","gcirc":"\u011D","Gcy":"\u0413","gcy":"\u0433","Gdot":"\u0120","gdot":"\u0121","ge":"\u2265","gE":"\u2267","gEl":"\u2A8C","gel":"\u22DB","geq":"\u2265","geqq":"\u2267","geqslant":"\u2A7E","gescc":"\u2AA9","ges":"\u2A7E","gesdot":"\u2A80","gesdoto":"\u2A82","gesdotol":"\u2A84","gesl":"\u22DB\uFE00","gesles":"\u2A94","Gfr":"\uD835\uDD0A","gfr":"\uD835\uDD24","gg":"\u226B","Gg":"\u22D9","ggg":"\u22D9","gimel":"\u2137","GJcy":"\u0403","gjcy":"\u0453","gla":"\u2AA5","gl":"\u2277","glE":"\u2A92","glj":"\u2AA4","gnap":"\u2A8A","gnapprox":"\u2A8A","gne":"\u2A88","gnE":"\u2269","gneq":"\u2A88","gneqq":"\u2269","gnsim":"\u22E7","Gopf":"\uD835\uDD3E","gopf":"\uD835\uDD58","grave":"`","GreaterEqual":"\u2265","GreaterEqualLess":"\u22DB","GreaterFullEqual":"\u2267","GreaterGreater":"\u2AA2","GreaterLess":"\u2277","GreaterSlantEqual":"\u2A7E","GreaterTilde":"\u2273","Gscr":"\uD835\uDCA2","gscr":"\u210A","gsim":"\u2273","gsime":"\u2A8E","gsiml":"\u2A90","gtcc":"\u2AA7","gtcir":"\u2A7A","gt":">","GT":">","Gt":"\u226B","gtdot":"\u22D7","gtlPar":"\u2995","gtquest":"\u2A7C","gtrapprox":"\u2A86","gtrarr":"\u2978","gtrdot":"\u22D7","gtreqless":"\u22DB","gtreqqless":"\u2A8C","gtrless":"\u2277","gtrsim":"\u2273","gvertneqq":"\u2269\uFE00","gvnE":"\u2269\uFE00","Hacek":"\u02C7","hairsp":"\u200A","half":"\xbd","hamilt":"\u210B","HARDcy":"\u042A","hardcy":"\u044A","harrcir":"\u2948","harr":"\u2194","hArr":"\u21D4","harrw":"\u21AD","Hat":"^","hbar":"\u210F","Hcirc":"\u0124","hcirc":"\u0125","hearts":"\u2665","heartsuit":"\u2665","hellip":"\u2026","hercon":"\u22B9","hfr":"\uD835\uDD25","Hfr":"\u210C","HilbertSpace":"\u210B","hksearow":"\u2925","hkswarow":"\u2926","hoarr":"\u21FF","homtht":"\u223B","hookleftarrow":"\u21A9","hookrightarrow":"\u21AA","hopf":"\uD835\uDD59","Hopf":"\u210D","horbar":"\u2015","HorizontalLine":"\u2500","hscr":"\uD835\uDCBD","Hscr":"\u210B","hslash":"\u210F","Hstrok":"\u0126","hstrok":"\u0127","HumpDownHump":"\u224E","HumpEqual":"\u224F","hybull":"\u2043","hyphen":"\u2010","Iacute":"\xcd","iacute":"\xed","ic":"\u2063","Icirc":"\xce","icirc":"\xee","Icy":"\u0418","icy":"\u0438","Idot":"\u0130","IEcy":"\u0415","iecy":"\u0435","iexcl":"\xa1","iff":"\u21D4","ifr":"\uD835\uDD26","Ifr":"\u2111","Igrave":"\xcc","igrave":"\xec","ii":"\u2148","iiiint":"\u2A0C","iiint":"\u222D","iinfin":"\u29DC","iiota":"\u2129","IJlig":"\u0132","ijlig":"\u0133","Imacr":"\u012A","imacr":"\u012B","image":"\u2111","ImaginaryI":"\u2148","imagline":"\u2110","imagpart":"\u2111","imath":"\u0131","Im":"\u2111","imof":"\u22B7","imped":"\u01B5","Implies":"\u21D2","incare":"\u2105","in":"\u2208","infin":"\u221E","infintie":"\u29DD","inodot":"\u0131","intcal":"\u22BA","int":"\u222B","Int":"\u222C","integers":"\u2124","Integral":"\u222B","intercal":"\u22BA","Intersection":"\u22C2","intlarhk":"\u2A17","intprod":"\u2A3C","InvisibleComma":"\u2063","InvisibleTimes":"\u2062","IOcy":"\u0401","iocy":"\u0451","Iogon":"\u012E","iogon":"\u012F","Iopf":"\uD835\uDD40","iopf":"\uD835\uDD5A","Iota":"\u0399","iota":"\u03B9","iprod":"\u2A3C","iquest":"\xbf","iscr":"\uD835\uDCBE","Iscr":"\u2110","isin":"\u2208","isindot":"\u22F5","isinE":"\u22F9","isins":"\u22F4","isinsv":"\u22F3","isinv":"\u2208","it":"\u2062","Itilde":"\u0128","itilde":"\u0129","Iukcy":"\u0406","iukcy":"\u0456","Iuml":"\xcf","iuml":"\xef","Jcirc":"\u0134","jcirc":"\u0135","Jcy":"\u0419","jcy":"\u0439","Jfr":"\uD835\uDD0D","jfr":"\uD835\uDD27","jmath":"\u0237","Jopf":"\uD835\uDD41","jopf":"\uD835\uDD5B","Jscr":"\uD835\uDCA5","jscr":"\uD835\uDCBF","Jsercy":"\u0408","jsercy":"\u0458","Jukcy":"\u0404","jukcy":"\u0454","Kappa":"\u039A","kappa":"\u03BA","kappav":"\u03F0","Kcedil":"\u0136","kcedil":"\u0137","Kcy":"\u041A","kcy":"\u043A","Kfr":"\uD835\uDD0E","kfr":"\uD835\uDD28","kgreen":"\u0138","KHcy":"\u0425","khcy":"\u0445","KJcy":"\u040C","kjcy":"\u045C","Kopf":"\uD835\uDD42","kopf":"\uD835\uDD5C","Kscr":"\uD835\uDCA6","kscr":"\uD835\uDCC0","lAarr":"\u21DA","Lacute":"\u0139","lacute":"\u013A","laemptyv":"\u29B4","lagran":"\u2112","Lambda":"\u039B","lambda":"\u03BB","lang":"\u27E8","Lang":"\u27EA","langd":"\u2991","langle":"\u27E8","lap":"\u2A85","Laplacetrf":"\u2112","laquo":"\xab","larrb":"\u21E4","larrbfs":"\u291F","larr":"\u2190","Larr":"\u219E","lArr":"\u21D0","larrfs":"\u291D","larrhk":"\u21A9","larrlp":"\u21AB","larrpl":"\u2939","larrsim":"\u2973","larrtl":"\u21A2","latail":"\u2919","lAtail":"\u291B","lat":"\u2AAB","late":"\u2AAD","lates":"\u2AAD\uFE00","lbarr":"\u290C","lBarr":"\u290E","lbbrk":"\u2772","lbrace":"{","lbrack":"[","lbrke":"\u298B","lbrksld":"\u298F","lbrkslu":"\u298D","Lcaron":"\u013D","lcaron":"\u013E","Lcedil":"\u013B","lcedil":"\u013C","lceil":"\u2308","lcub":"{","Lcy":"\u041B","lcy":"\u043B","ldca":"\u2936","ldquo":"\u201C","ldquor":"\u201E","ldrdhar":"\u2967","ldrushar":"\u294B","ldsh":"\u21B2","le":"\u2264","lE":"\u2266","LeftAngleBracket":"\u27E8","LeftArrowBar":"\u21E4","leftarrow":"\u2190","LeftArrow":"\u2190","Leftarrow":"\u21D0","LeftArrowRightArrow":"\u21C6","leftarrowtail":"\u21A2","LeftCeiling":"\u2308","LeftDoubleBracket":"\u27E6","LeftDownTeeVector":"\u2961","LeftDownVectorBar":"\u2959","LeftDownVector":"\u21C3","LeftFloor":"\u230A","leftharpoondown":"\u21BD","leftharpoonup":"\u21BC","leftleftarrows":"\u21C7","leftrightarrow":"\u2194","LeftRightArrow":"\u2194","Leftrightarrow":"\u21D4","leftrightarrows":"\u21C6","leftrightharpoons":"\u21CB","leftrightsquigarrow":"\u21AD","LeftRightVector":"\u294E","LeftTeeArrow":"\u21A4","LeftTee":"\u22A3","LeftTeeVector":"\u295A","leftthreetimes":"\u22CB","LeftTriangleBar":"\u29CF","LeftTriangle":"\u22B2","LeftTriangleEqual":"\u22B4","LeftUpDownVector":"\u2951","LeftUpTeeVector":"\u2960","LeftUpVectorBar":"\u2958","LeftUpVector":"\u21BF","LeftVectorBar":"\u2952","LeftVector":"\u21BC","lEg":"\u2A8B","leg":"\u22DA","leq":"\u2264","leqq":"\u2266","leqslant":"\u2A7D","lescc":"\u2AA8","les":"\u2A7D","lesdot":"\u2A7F","lesdoto":"\u2A81","lesdotor":"\u2A83","lesg":"\u22DA\uFE00","lesges":"\u2A93","lessapprox":"\u2A85","lessdot":"\u22D6","lesseqgtr":"\u22DA","lesseqqgtr":"\u2A8B","LessEqualGreater":"\u22DA","LessFullEqual":"\u2266","LessGreater":"\u2276","lessgtr":"\u2276","LessLess":"\u2AA1","lesssim":"\u2272","LessSlantEqual":"\u2A7D","LessTilde":"\u2272","lfisht":"\u297C","lfloor":"\u230A","Lfr":"\uD835\uDD0F","lfr":"\uD835\uDD29","lg":"\u2276","lgE":"\u2A91","lHar":"\u2962","lhard":"\u21BD","lharu":"\u21BC","lharul":"\u296A","lhblk":"\u2584","LJcy":"\u0409","ljcy":"\u0459","llarr":"\u21C7","ll":"\u226A","Ll":"\u22D8","llcorner":"\u231E","Lleftarrow":"\u21DA","llhard":"\u296B","lltri":"\u25FA","Lmidot":"\u013F","lmidot":"\u0140","lmoustache":"\u23B0","lmoust":"\u23B0","lnap":"\u2A89","lnapprox":"\u2A89","lne":"\u2A87","lnE":"\u2268","lneq":"\u2A87","lneqq":"\u2268","lnsim":"\u22E6","loang":"\u27EC","loarr":"\u21FD","lobrk":"\u27E6","longleftarrow":"\u27F5","LongLeftArrow":"\u27F5","Longleftarrow":"\u27F8","longleftrightarrow":"\u27F7","LongLeftRightArrow":"\u27F7","Longleftrightarrow":"\u27FA","longmapsto":"\u27FC","longrightarrow":"\u27F6","LongRightArrow":"\u27F6","Longrightarrow":"\u27F9","looparrowleft":"\u21AB","looparrowright":"\u21AC","lopar":"\u2985","Lopf":"\uD835\uDD43","lopf":"\uD835\uDD5D","loplus":"\u2A2D","lotimes":"\u2A34","lowast":"\u2217","lowbar":"_","LowerLeftArrow":"\u2199","LowerRightArrow":"\u2198","loz":"\u25CA","lozenge":"\u25CA","lozf":"\u29EB","lpar":"(","lparlt":"\u2993","lrarr":"\u21C6","lrcorner":"\u231F","lrhar":"\u21CB","lrhard":"\u296D","lrm":"\u200E","lrtri":"\u22BF","lsaquo":"\u2039","lscr":"\uD835\uDCC1","Lscr":"\u2112","lsh":"\u21B0","Lsh":"\u21B0","lsim":"\u2272","lsime":"\u2A8D","lsimg":"\u2A8F","lsqb":"[","lsquo":"\u2018","lsquor":"\u201A","Lstrok":"\u0141","lstrok":"\u0142","ltcc":"\u2AA6","ltcir":"\u2A79","lt":"<","LT":"<","Lt":"\u226A","ltdot":"\u22D6","lthree":"\u22CB","ltimes":"\u22C9","ltlarr":"\u2976","ltquest":"\u2A7B","ltri":"\u25C3","ltrie":"\u22B4","ltrif":"\u25C2","ltrPar":"\u2996","lurdshar":"\u294A","luruhar":"\u2966","lvertneqq":"\u2268\uFE00","lvnE":"\u2268\uFE00","macr":"\xaf","male":"\u2642","malt":"\u2720","maltese":"\u2720","Map":"\u2905","map":"\u21A6","mapsto":"\u21A6","mapstodown":"\u21A7","mapstoleft":"\u21A4","mapstoup":"\u21A5","marker":"\u25AE","mcomma":"\u2A29","Mcy":"\u041C","mcy":"\u043C","mdash":"\u2014","mDDot":"\u223A","measuredangle":"\u2221","MediumSpace":"\u205F","Mellintrf":"\u2133","Mfr":"\uD835\uDD10","mfr":"\uD835\uDD2A","mho":"\u2127","micro":"\xb5","midast":"*","midcir":"\u2AF0","mid":"\u2223","middot":"\xb7","minusb":"\u229F","minus":"\u2212","minusd":"\u2238","minusdu":"\u2A2A","MinusPlus":"\u2213","mlcp":"\u2ADB","mldr":"\u2026","mnplus":"\u2213","models":"\u22A7","Mopf":"\uD835\uDD44","mopf":"\uD835\uDD5E","mp":"\u2213","mscr":"\uD835\uDCC2","Mscr":"\u2133","mstpos":"\u223E","Mu":"\u039C","mu":"\u03BC","multimap":"\u22B8","mumap":"\u22B8","nabla":"\u2207","Nacute":"\u0143","nacute":"\u0144","nang":"\u2220\u20D2","nap":"\u2249","napE":"\u2A70\u0338","napid":"\u224B\u0338","napos":"\u0149","napprox":"\u2249","natural":"\u266E","naturals":"\u2115","natur":"\u266E","nbsp":"\xa0","nbump":"\u224E\u0338","nbumpe":"\u224F\u0338","ncap":"\u2A43","Ncaron":"\u0147","ncaron":"\u0148","Ncedil":"\u0145","ncedil":"\u0146","ncong":"\u2247","ncongdot":"\u2A6D\u0338","ncup":"\u2A42","Ncy":"\u041D","ncy":"\u043D","ndash":"\u2013","nearhk":"\u2924","nearr":"\u2197","neArr":"\u21D7","nearrow":"\u2197","ne":"\u2260","nedot":"\u2250\u0338","NegativeMediumSpace":"\u200B","NegativeThickSpace":"\u200B","NegativeThinSpace":"\u200B","NegativeVeryThinSpace":"\u200B","nequiv":"\u2262","nesear":"\u2928","nesim":"\u2242\u0338","NestedGreaterGreater":"\u226B","NestedLessLess":"\u226A","NewLine":"\\n","nexist":"\u2204","nexists":"\u2204","Nfr":"\uD835\uDD11","nfr":"\uD835\uDD2B","ngE":"\u2267\u0338","nge":"\u2271","ngeq":"\u2271","ngeqq":"\u2267\u0338","ngeqslant":"\u2A7E\u0338","nges":"\u2A7E\u0338","nGg":"\u22D9\u0338","ngsim":"\u2275","nGt":"\u226B\u20D2","ngt":"\u226F","ngtr":"\u226F","nGtv":"\u226B\u0338","nharr":"\u21AE","nhArr":"\u21CE","nhpar":"\u2AF2","ni":"\u220B","nis":"\u22FC","nisd":"\u22FA","niv":"\u220B","NJcy":"\u040A","njcy":"\u045A","nlarr":"\u219A","nlArr":"\u21CD","nldr":"\u2025","nlE":"\u2266\u0338","nle":"\u2270","nleftarrow":"\u219A","nLeftarrow":"\u21CD","nleftrightarrow":"\u21AE","nLeftrightarrow":"\u21CE","nleq":"\u2270","nleqq":"\u2266\u0338","nleqslant":"\u2A7D\u0338","nles":"\u2A7D\u0338","nless":"\u226E","nLl":"\u22D8\u0338","nlsim":"\u2274","nLt":"\u226A\u20D2","nlt":"\u226E","nltri":"\u22EA","nltrie":"\u22EC","nLtv":"\u226A\u0338","nmid":"\u2224","NoBreak":"\u2060","NonBreakingSpace":"\xa0","nopf":"\uD835\uDD5F","Nopf":"\u2115","Not":"\u2AEC","not":"\xac","NotCongruent":"\u2262","NotCupCap":"\u226D","NotDoubleVerticalBar":"\u2226","NotElement":"\u2209","NotEqual":"\u2260","NotEqualTilde":"\u2242\u0338","NotExists":"\u2204","NotGreater":"\u226F","NotGreaterEqual":"\u2271","NotGreaterFullEqual":"\u2267\u0338","NotGreaterGreater":"\u226B\u0338","NotGreaterLess":"\u2279","NotGreaterSlantEqual":"\u2A7E\u0338","NotGreaterTilde":"\u2275","NotHumpDownHump":"\u224E\u0338","NotHumpEqual":"\u224F\u0338","notin":"\u2209","notindot":"\u22F5\u0338","notinE":"\u22F9\u0338","notinva":"\u2209","notinvb":"\u22F7","notinvc":"\u22F6","NotLeftTriangleBar":"\u29CF\u0338","NotLeftTriangle":"\u22EA","NotLeftTriangleEqual":"\u22EC","NotLess":"\u226E","NotLessEqual":"\u2270","NotLessGreater":"\u2278","NotLessLess":"\u226A\u0338","NotLessSlantEqual":"\u2A7D\u0338","NotLessTilde":"\u2274","NotNestedGreaterGreater":"\u2AA2\u0338","NotNestedLessLess":"\u2AA1\u0338","notni":"\u220C","notniva":"\u220C","notnivb":"\u22FE","notnivc":"\u22FD","NotPrecedes":"\u2280","NotPrecedesEqual":"\u2AAF\u0338","NotPrecedesSlantEqual":"\u22E0","NotReverseElement":"\u220C","NotRightTriangleBar":"\u29D0\u0338","NotRightTriangle":"\u22EB","NotRightTriangleEqual":"\u22ED","NotSquareSubset":"\u228F\u0338","NotSquareSubsetEqual":"\u22E2","NotSquareSuperset":"\u2290\u0338","NotSquareSupersetEqual":"\u22E3","NotSubset":"\u2282\u20D2","NotSubsetEqual":"\u2288","NotSucceeds":"\u2281","NotSucceedsEqual":"\u2AB0\u0338","NotSucceedsSlantEqual":"\u22E1","NotSucceedsTilde":"\u227F\u0338","NotSuperset":"\u2283\u20D2","NotSupersetEqual":"\u2289","NotTilde":"\u2241","NotTildeEqual":"\u2244","NotTildeFullEqual":"\u2247","NotTildeTilde":"\u2249","NotVerticalBar":"\u2224","nparallel":"\u2226","npar":"\u2226","nparsl":"\u2AFD\u20E5","npart":"\u2202\u0338","npolint":"\u2A14","npr":"\u2280","nprcue":"\u22E0","nprec":"\u2280","npreceq":"\u2AAF\u0338","npre":"\u2AAF\u0338","nrarrc":"\u2933\u0338","nrarr":"\u219B","nrArr":"\u21CF","nrarrw":"\u219D\u0338","nrightarrow":"\u219B","nRightarrow":"\u21CF","nrtri":"\u22EB","nrtrie":"\u22ED","nsc":"\u2281","nsccue":"\u22E1","nsce":"\u2AB0\u0338","Nscr":"\uD835\uDCA9","nscr":"\uD835\uDCC3","nshortmid":"\u2224","nshortparallel":"\u2226","nsim":"\u2241","nsime":"\u2244","nsimeq":"\u2244","nsmid":"\u2224","nspar":"\u2226","nsqsube":"\u22E2","nsqsupe":"\u22E3","nsub":"\u2284","nsubE":"\u2AC5\u0338","nsube":"\u2288","nsubset":"\u2282\u20D2","nsubseteq":"\u2288","nsubseteqq":"\u2AC5\u0338","nsucc":"\u2281","nsucceq":"\u2AB0\u0338","nsup":"\u2285","nsupE":"\u2AC6\u0338","nsupe":"\u2289","nsupset":"\u2283\u20D2","nsupseteq":"\u2289","nsupseteqq":"\u2AC6\u0338","ntgl":"\u2279","Ntilde":"\xd1","ntilde":"\xf1","ntlg":"\u2278","ntriangleleft":"\u22EA","ntrianglelefteq":"\u22EC","ntriangleright":"\u22EB","ntrianglerighteq":"\u22ED","Nu":"\u039D","nu":"\u03BD","num":"#","numero":"\u2116","numsp":"\u2007","nvap":"\u224D\u20D2","nvdash":"\u22AC","nvDash":"\u22AD","nVdash":"\u22AE","nVDash":"\u22AF","nvge":"\u2265\u20D2","nvgt":">\u20D2","nvHarr":"\u2904","nvinfin":"\u29DE","nvlArr":"\u2902","nvle":"\u2264\u20D2","nvlt":"<\u20D2","nvltrie":"\u22B4\u20D2","nvrArr":"\u2903","nvrtrie":"\u22B5\u20D2","nvsim":"\u223C\u20D2","nwarhk":"\u2923","nwarr":"\u2196","nwArr":"\u21D6","nwarrow":"\u2196","nwnear":"\u2927","Oacute":"\xd3","oacute":"\xf3","oast":"\u229B","Ocirc":"\xd4","ocirc":"\xf4","ocir":"\u229A","Ocy":"\u041E","ocy":"\u043E","odash":"\u229D","Odblac":"\u0150","odblac":"\u0151","odiv":"\u2A38","odot":"\u2299","odsold":"\u29BC","OElig":"\u0152","oelig":"\u0153","ofcir":"\u29BF","Ofr":"\uD835\uDD12","ofr":"\uD835\uDD2C","ogon":"\u02DB","Ograve":"\xd2","ograve":"\xf2","ogt":"\u29C1","ohbar":"\u29B5","ohm":"\u03A9","oint":"\u222E","olarr":"\u21BA","olcir":"\u29BE","olcross":"\u29BB","oline":"\u203E","olt":"\u29C0","Omacr":"\u014C","omacr":"\u014D","Omega":"\u03A9","omega":"\u03C9","Omicron":"\u039F","omicron":"\u03BF","omid":"\u29B6","ominus":"\u2296","Oopf":"\uD835\uDD46","oopf":"\uD835\uDD60","opar":"\u29B7","OpenCurlyDoubleQuote":"\u201C","OpenCurlyQuote":"\u2018","operp":"\u29B9","oplus":"\u2295","orarr":"\u21BB","Or":"\u2A54","or":"\u2228","ord":"\u2A5D","order":"\u2134","orderof":"\u2134","ordf":"\xaa","ordm":"\xba","origof":"\u22B6","oror":"\u2A56","orslope":"\u2A57","orv":"\u2A5B","oS":"\u24C8","Oscr":"\uD835\uDCAA","oscr":"\u2134","Oslash":"\xd8","oslash":"\xf8","osol":"\u2298","Otilde":"\xd5","otilde":"\xf5","otimesas":"\u2A36","Otimes":"\u2A37","otimes":"\u2297","Ouml":"\xd6","ouml":"\xf6","ovbar":"\u233D","OverBar":"\u203E","OverBrace":"\u23DE","OverBracket":"\u23B4","OverParenthesis":"\u23DC","para":"\xb6","parallel":"\u2225","par":"\u2225","parsim":"\u2AF3","parsl":"\u2AFD","part":"\u2202","PartialD":"\u2202","Pcy":"\u041F","pcy":"\u043F","percnt":"%","period":".","permil":"\u2030","perp":"\u22A5","pertenk":"\u2031","Pfr":"\uD835\uDD13","pfr":"\uD835\uDD2D","Phi":"\u03A6","phi":"\u03C6","phiv":"\u03D5","phmmat":"\u2133","phone":"\u260E","Pi":"\u03A0","pi":"\u03C0","pitchfork":"\u22D4","piv":"\u03D6","planck":"\u210F","planckh":"\u210E","plankv":"\u210F","plusacir":"\u2A23","plusb":"\u229E","pluscir":"\u2A22","plus":"+","plusdo":"\u2214","plusdu":"\u2A25","pluse":"\u2A72","PlusMinus":"\xb1","plusmn":"\xb1","plussim":"\u2A26","plustwo":"\u2A27","pm":"\xb1","Poincareplane":"\u210C","pointint":"\u2A15","popf":"\uD835\uDD61","Popf":"\u2119","pound":"\xa3","prap":"\u2AB7","Pr":"\u2ABB","pr":"\u227A","prcue":"\u227C","precapprox":"\u2AB7","prec":"\u227A","preccurlyeq":"\u227C","Precedes":"\u227A","PrecedesEqual":"\u2AAF","PrecedesSlantEqual":"\u227C","PrecedesTilde":"\u227E","preceq":"\u2AAF","precnapprox":"\u2AB9","precneqq":"\u2AB5","precnsim":"\u22E8","pre":"\u2AAF","prE":"\u2AB3","precsim":"\u227E","prime":"\u2032","Prime":"\u2033","primes":"\u2119","prnap":"\u2AB9","prnE":"\u2AB5","prnsim":"\u22E8","prod":"\u220F","Product":"\u220F","profalar":"\u232E","profline":"\u2312","profsurf":"\u2313","prop":"\u221D","Proportional":"\u221D","Proportion":"\u2237","propto":"\u221D","prsim":"\u227E","prurel":"\u22B0","Pscr":"\uD835\uDCAB","pscr":"\uD835\uDCC5","Psi":"\u03A8","psi":"\u03C8","puncsp":"\u2008","Qfr":"\uD835\uDD14","qfr":"\uD835\uDD2E","qint":"\u2A0C","qopf":"\uD835\uDD62","Qopf":"\u211A","qprime":"\u2057","Qscr":"\uD835\uDCAC","qscr":"\uD835\uDCC6","quaternions":"\u210D","quatint":"\u2A16","quest":"?","questeq":"\u225F","quot":"\\"","QUOT":"\\"","rAarr":"\u21DB","race":"\u223D\u0331","Racute":"\u0154","racute":"\u0155","radic":"\u221A","raemptyv":"\u29B3","rang":"\u27E9","Rang":"\u27EB","rangd":"\u2992","range":"\u29A5","rangle":"\u27E9","raquo":"\xbb","rarrap":"\u2975","rarrb":"\u21E5","rarrbfs":"\u2920","rarrc":"\u2933","rarr":"\u2192","Rarr":"\u21A0","rArr":"\u21D2","rarrfs":"\u291E","rarrhk":"\u21AA","rarrlp":"\u21AC","rarrpl":"\u2945","rarrsim":"\u2974","Rarrtl":"\u2916","rarrtl":"\u21A3","rarrw":"\u219D","ratail":"\u291A","rAtail":"\u291C","ratio":"\u2236","rationals":"\u211A","rbarr":"\u290D","rBarr":"\u290F","RBarr":"\u2910","rbbrk":"\u2773","rbrace":"}","rbrack":"]","rbrke":"\u298C","rbrksld":"\u298E","rbrkslu":"\u2990","Rcaron":"\u0158","rcaron":"\u0159","Rcedil":"\u0156","rcedil":"\u0157","rceil":"\u2309","rcub":"}","Rcy":"\u0420","rcy":"\u0440","rdca":"\u2937","rdldhar":"\u2969","rdquo":"\u201D","rdquor":"\u201D","rdsh":"\u21B3","real":"\u211C","realine":"\u211B","realpart":"\u211C","reals":"\u211D","Re":"\u211C","rect":"\u25AD","reg":"\xae","REG":"\xae","ReverseElement":"\u220B","ReverseEquilibrium":"\u21CB","ReverseUpEquilibrium":"\u296F","rfisht":"\u297D","rfloor":"\u230B","rfr":"\uD835\uDD2F","Rfr":"\u211C","rHar":"\u2964","rhard":"\u21C1","rharu":"\u21C0","rharul":"\u296C","Rho":"\u03A1","rho":"\u03C1","rhov":"\u03F1","RightAngleBracket":"\u27E9","RightArrowBar":"\u21E5","rightarrow":"\u2192","RightArrow":"\u2192","Rightarrow":"\u21D2","RightArrowLeftArrow":"\u21C4","rightarrowtail":"\u21A3","RightCeiling":"\u2309","RightDoubleBracket":"\u27E7","RightDownTeeVector":"\u295D","RightDownVectorBar":"\u2955","RightDownVector":"\u21C2","RightFloor":"\u230B","rightharpoondown":"\u21C1","rightharpoonup":"\u21C0","rightleftarrows":"\u21C4","rightleftharpoons":"\u21CC","rightrightarrows":"\u21C9","rightsquigarrow":"\u219D","RightTeeArrow":"\u21A6","RightTee":"\u22A2","RightTeeVector":"\u295B","rightthreetimes":"\u22CC","RightTriangleBar":"\u29D0","RightTriangle":"\u22B3","RightTriangleEqual":"\u22B5","RightUpDownVector":"\u294F","RightUpTeeVector":"\u295C","RightUpVectorBar":"\u2954","RightUpVector":"\u21BE","RightVectorBar":"\u2953","RightVector":"\u21C0","ring":"\u02DA","risingdotseq":"\u2253","rlarr":"\u21C4","rlhar":"\u21CC","rlm":"\u200F","rmoustache":"\u23B1","rmoust":"\u23B1","rnmid":"\u2AEE","roang":"\u27ED","roarr":"\u21FE","robrk":"\u27E7","ropar":"\u2986","ropf":"\uD835\uDD63","Ropf":"\u211D","roplus":"\u2A2E","rotimes":"\u2A35","RoundImplies":"\u2970","rpar":")","rpargt":"\u2994","rppolint":"\u2A12","rrarr":"\u21C9","Rrightarrow":"\u21DB","rsaquo":"\u203A","rscr":"\uD835\uDCC7","Rscr":"\u211B","rsh":"\u21B1","Rsh":"\u21B1","rsqb":"]","rsquo":"\u2019","rsquor":"\u2019","rthree":"\u22CC","rtimes":"\u22CA","rtri":"\u25B9","rtrie":"\u22B5","rtrif":"\u25B8","rtriltri":"\u29CE","RuleDelayed":"\u29F4","ruluhar":"\u2968","rx":"\u211E","Sacute":"\u015A","sacute":"\u015B","sbquo":"\u201A","scap":"\u2AB8","Scaron":"\u0160","scaron":"\u0161","Sc":"\u2ABC","sc":"\u227B","sccue":"\u227D","sce":"\u2AB0","scE":"\u2AB4","Scedil":"\u015E","scedil":"\u015F","Scirc":"\u015C","scirc":"\u015D","scnap":"\u2ABA","scnE":"\u2AB6","scnsim":"\u22E9","scpolint":"\u2A13","scsim":"\u227F","Scy":"\u0421","scy":"\u0441","sdotb":"\u22A1","sdot":"\u22C5","sdote":"\u2A66","searhk":"\u2925","searr":"\u2198","seArr":"\u21D8","searrow":"\u2198","sect":"\xa7","semi":";","seswar":"\u2929","setminus":"\u2216","setmn":"\u2216","sext":"\u2736","Sfr":"\uD835\uDD16","sfr":"\uD835\uDD30","sfrown":"\u2322","sharp":"\u266F","SHCHcy":"\u0429","shchcy":"\u0449","SHcy":"\u0428","shcy":"\u0448","ShortDownArrow":"\u2193","ShortLeftArrow":"\u2190","shortmid":"\u2223","shortparallel":"\u2225","ShortRightArrow":"\u2192","ShortUpArrow":"\u2191","shy":"\xad","Sigma":"\u03A3","sigma":"\u03C3","sigmaf":"\u03C2","sigmav":"\u03C2","sim":"\u223C","simdot":"\u2A6A","sime":"\u2243","simeq":"\u2243","simg":"\u2A9E","simgE":"\u2AA0","siml":"\u2A9D","simlE":"\u2A9F","simne":"\u2246","simplus":"\u2A24","simrarr":"\u2972","slarr":"\u2190","SmallCircle":"\u2218","smallsetminus":"\u2216","smashp":"\u2A33","smeparsl":"\u29E4","smid":"\u2223","smile":"\u2323","smt":"\u2AAA","smte":"\u2AAC","smtes":"\u2AAC\uFE00","SOFTcy":"\u042C","softcy":"\u044C","solbar":"\u233F","solb":"\u29C4","sol":"/","Sopf":"\uD835\uDD4A","sopf":"\uD835\uDD64","spades":"\u2660","spadesuit":"\u2660","spar":"\u2225","sqcap":"\u2293","sqcaps":"\u2293\uFE00","sqcup":"\u2294","sqcups":"\u2294\uFE00","Sqrt":"\u221A","sqsub":"\u228F","sqsube":"\u2291","sqsubset":"\u228F","sqsubseteq":"\u2291","sqsup":"\u2290","sqsupe":"\u2292","sqsupset":"\u2290","sqsupseteq":"\u2292","square":"\u25A1","Square":"\u25A1","SquareIntersection":"\u2293","SquareSubset":"\u228F","SquareSubsetEqual":"\u2291","SquareSuperset":"\u2290","SquareSupersetEqual":"\u2292","SquareUnion":"\u2294","squarf":"\u25AA","squ":"\u25A1","squf":"\u25AA","srarr":"\u2192","Sscr":"\uD835\uDCAE","sscr":"\uD835\uDCC8","ssetmn":"\u2216","ssmile":"\u2323","sstarf":"\u22C6","Star":"\u22C6","star":"\u2606","starf":"\u2605","straightepsilon":"\u03F5","straightphi":"\u03D5","strns":"\xaf","sub":"\u2282","Sub":"\u22D0","subdot":"\u2ABD","subE":"\u2AC5","sube":"\u2286","subedot":"\u2AC3","submult":"\u2AC1","subnE":"\u2ACB","subne":"\u228A","subplus":"\u2ABF","subrarr":"\u2979","subset":"\u2282","Subset":"\u22D0","subseteq":"\u2286","subseteqq":"\u2AC5","SubsetEqual":"\u2286","subsetneq":"\u228A","subsetneqq":"\u2ACB","subsim":"\u2AC7","subsub":"\u2AD5","subsup":"\u2AD3","succapprox":"\u2AB8","succ":"\u227B","succcurlyeq":"\u227D","Succeeds":"\u227B","SucceedsEqual":"\u2AB0","SucceedsSlantEqual":"\u227D","SucceedsTilde":"\u227F","succeq":"\u2AB0","succnapprox":"\u2ABA","succneqq":"\u2AB6","succnsim":"\u22E9","succsim":"\u227F","SuchThat":"\u220B","sum":"\u2211","Sum":"\u2211","sung":"\u266A","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","sup":"\u2283","Sup":"\u22D1","supdot":"\u2ABE","supdsub":"\u2AD8","supE":"\u2AC6","supe":"\u2287","supedot":"\u2AC4","Superset":"\u2283","SupersetEqual":"\u2287","suphsol":"\u27C9","suphsub":"\u2AD7","suplarr":"\u297B","supmult":"\u2AC2","supnE":"\u2ACC","supne":"\u228B","supplus":"\u2AC0","supset":"\u2283","Supset":"\u22D1","supseteq":"\u2287","supseteqq":"\u2AC6","supsetneq":"\u228B","supsetneqq":"\u2ACC","supsim":"\u2AC8","supsub":"\u2AD4","supsup":"\u2AD6","swarhk":"\u2926","swarr":"\u2199","swArr":"\u21D9","swarrow":"\u2199","swnwar":"\u292A","szlig":"\xdf","Tab":"\\t","target":"\u2316","Tau":"\u03A4","tau":"\u03C4","tbrk":"\u23B4","Tcaron":"\u0164","tcaron":"\u0165","Tcedil":"\u0162","tcedil":"\u0163","Tcy":"\u0422","tcy":"\u0442","tdot":"\u20DB","telrec":"\u2315","Tfr":"\uD835\uDD17","tfr":"\uD835\uDD31","there4":"\u2234","therefore":"\u2234","Therefore":"\u2234","Theta":"\u0398","theta":"\u03B8","thetasym":"\u03D1","thetav":"\u03D1","thickapprox":"\u2248","thicksim":"\u223C","ThickSpace":"\u205F\u200A","ThinSpace":"\u2009","thinsp":"\u2009","thkap":"\u2248","thksim":"\u223C","THORN":"\xde","thorn":"\xfe","tilde":"\u02DC","Tilde":"\u223C","TildeEqual":"\u2243","TildeFullEqual":"\u2245","TildeTilde":"\u2248","timesbar":"\u2A31","timesb":"\u22A0","times":"\xd7","timesd":"\u2A30","tint":"\u222D","toea":"\u2928","topbot":"\u2336","topcir":"\u2AF1","top":"\u22A4","Topf":"\uD835\uDD4B","topf":"\uD835\uDD65","topfork":"\u2ADA","tosa":"\u2929","tprime":"\u2034","trade":"\u2122","TRADE":"\u2122","triangle":"\u25B5","triangledown":"\u25BF","triangleleft":"\u25C3","trianglelefteq":"\u22B4","triangleq":"\u225C","triangleright":"\u25B9","trianglerighteq":"\u22B5","tridot":"\u25EC","trie":"\u225C","triminus":"\u2A3A","TripleDot":"\u20DB","triplus":"\u2A39","trisb":"\u29CD","tritime":"\u2A3B","trpezium":"\u23E2","Tscr":"\uD835\uDCAF","tscr":"\uD835\uDCC9","TScy":"\u0426","tscy":"\u0446","TSHcy":"\u040B","tshcy":"\u045B","Tstrok":"\u0166","tstrok":"\u0167","twixt":"\u226C","twoheadleftarrow":"\u219E","twoheadrightarrow":"\u21A0","Uacute":"\xda","uacute":"\xfa","uarr":"\u2191","Uarr":"\u219F","uArr":"\u21D1","Uarrocir":"\u2949","Ubrcy":"\u040E","ubrcy":"\u045E","Ubreve":"\u016C","ubreve":"\u016D","Ucirc":"\xdb","ucirc":"\xfb","Ucy":"\u0423","ucy":"\u0443","udarr":"\u21C5","Udblac":"\u0170","udblac":"\u0171","udhar":"\u296E","ufisht":"\u297E","Ufr":"\uD835\uDD18","ufr":"\uD835\uDD32","Ugrave":"\xd9","ugrave":"\xf9","uHar":"\u2963","uharl":"\u21BF","uharr":"\u21BE","uhblk":"\u2580","ulcorn":"\u231C","ulcorner":"\u231C","ulcrop":"\u230F","ultri":"\u25F8","Umacr":"\u016A","umacr":"\u016B","uml":"\xa8","UnderBar":"_","UnderBrace":"\u23DF","UnderBracket":"\u23B5","UnderParenthesis":"\u23DD","Union":"\u22C3","UnionPlus":"\u228E","Uogon":"\u0172","uogon":"\u0173","Uopf":"\uD835\uDD4C","uopf":"\uD835\uDD66","UpArrowBar":"\u2912","uparrow":"\u2191","UpArrow":"\u2191","Uparrow":"\u21D1","UpArrowDownArrow":"\u21C5","updownarrow":"\u2195","UpDownArrow":"\u2195","Updownarrow":"\u21D5","UpEquilibrium":"\u296E","upharpoonleft":"\u21BF","upharpoonright":"\u21BE","uplus":"\u228E","UpperLeftArrow":"\u2196","UpperRightArrow":"\u2197","upsi":"\u03C5","Upsi":"\u03D2","upsih":"\u03D2","Upsilon":"\u03A5","upsilon":"\u03C5","UpTeeArrow":"\u21A5","UpTee":"\u22A5","upuparrows":"\u21C8","urcorn":"\u231D","urcorner":"\u231D","urcrop":"\u230E","Uring":"\u016E","uring":"\u016F","urtri":"\u25F9","Uscr":"\uD835\uDCB0","uscr":"\uD835\uDCCA","utdot":"\u22F0","Utilde":"\u0168","utilde":"\u0169","utri":"\u25B5","utrif":"\u25B4","uuarr":"\u21C8","Uuml":"\xdc","uuml":"\xfc","uwangle":"\u29A7","vangrt":"\u299C","varepsilon":"\u03F5","varkappa":"\u03F0","varnothing":"\u2205","varphi":"\u03D5","varpi":"\u03D6","varpropto":"\u221D","varr":"\u2195","vArr":"\u21D5","varrho":"\u03F1","varsigma":"\u03C2","varsubsetneq":"\u228A\uFE00","varsubsetneqq":"\u2ACB\uFE00","varsupsetneq":"\u228B\uFE00","varsupsetneqq":"\u2ACC\uFE00","vartheta":"\u03D1","vartriangleleft":"\u22B2","vartriangleright":"\u22B3","vBar":"\u2AE8","Vbar":"\u2AEB","vBarv":"\u2AE9","Vcy":"\u0412","vcy":"\u0432","vdash":"\u22A2","vDash":"\u22A8","Vdash":"\u22A9","VDash":"\u22AB","Vdashl":"\u2AE6","veebar":"\u22BB","vee":"\u2228","Vee":"\u22C1","veeeq":"\u225A","vellip":"\u22EE","verbar":"|","Verbar":"\u2016","vert":"|","Vert":"\u2016","VerticalBar":"\u2223","VerticalLine":"|","VerticalSeparator":"\u2758","VerticalTilde":"\u2240","VeryThinSpace":"\u200A","Vfr":"\uD835\uDD19","vfr":"\uD835\uDD33","vltri":"\u22B2","vnsub":"\u2282\u20D2","vnsup":"\u2283\u20D2","Vopf":"\uD835\uDD4D","vopf":"\uD835\uDD67","vprop":"\u221D","vrtri":"\u22B3","Vscr":"\uD835\uDCB1","vscr":"\uD835\uDCCB","vsubnE":"\u2ACB\uFE00","vsubne":"\u228A\uFE00","vsupnE":"\u2ACC\uFE00","vsupne":"\u228B\uFE00","Vvdash":"\u22AA","vzigzag":"\u299A","Wcirc":"\u0174","wcirc":"\u0175","wedbar":"\u2A5F","wedge":"\u2227","Wedge":"\u22C0","wedgeq":"\u2259","weierp":"\u2118","Wfr":"\uD835\uDD1A","wfr":"\uD835\uDD34","Wopf":"\uD835\uDD4E","wopf":"\uD835\uDD68","wp":"\u2118","wr":"\u2240","wreath":"\u2240","Wscr":"\uD835\uDCB2","wscr":"\uD835\uDCCC","xcap":"\u22C2","xcirc":"\u25EF","xcup":"\u22C3","xdtri":"\u25BD","Xfr":"\uD835\uDD1B","xfr":"\uD835\uDD35","xharr":"\u27F7","xhArr":"\u27FA","Xi":"\u039E","xi":"\u03BE","xlarr":"\u27F5","xlArr":"\u27F8","xmap":"\u27FC","xnis":"\u22FB","xodot":"\u2A00","Xopf":"\uD835\uDD4F","xopf":"\uD835\uDD69","xoplus":"\u2A01","xotime":"\u2A02","xrarr":"\u27F6","xrArr":"\u27F9","Xscr":"\uD835\uDCB3","xscr":"\uD835\uDCCD","xsqcup":"\u2A06","xuplus":"\u2A04","xutri":"\u25B3","xvee":"\u22C1","xwedge":"\u22C0","Yacute":"\xdd","yacute":"\xfd","YAcy":"\u042F","yacy":"\u044F","Ycirc":"\u0176","ycirc":"\u0177","Ycy":"\u042B","ycy":"\u044B","yen":"\xa5","Yfr":"\uD835\uDD1C","yfr":"\uD835\uDD36","YIcy":"\u0407","yicy":"\u0457","Yopf":"\uD835\uDD50","yopf":"\uD835\uDD6A","Yscr":"\uD835\uDCB4","yscr":"\uD835\uDCCE","YUcy":"\u042E","yucy":"\u044E","yuml":"\xff","Yuml":"\u0178","Zacute":"\u0179","zacute":"\u017A","Zcaron":"\u017D","zcaron":"\u017E","Zcy":"\u0417","zcy":"\u0437","Zdot":"\u017B","zdot":"\u017C","zeetrf":"\u2128","ZeroWidthSpace":"\u200B","Zeta":"\u0396","zeta":"\u03B6","zfr":"\uD835\uDD37","Zfr":"\u2128","ZHcy":"\u0416","zhcy":"\u0436","zigrarr":"\u21DD","zopf":"\uD835\uDD6B","Zopf":"\u2124","Zscr":"\uD835\uDCB5","zscr":"\uD835\uDCCF","zwj":"\u200D","zwnj":"\u200C"}');

},{}],"BQogi":[function(require,module,exports) {
module.exports = JSON.parse('{"Aacute":"\xc1","aacute":"\xe1","Acirc":"\xc2","acirc":"\xe2","acute":"\xb4","AElig":"\xc6","aelig":"\xe6","Agrave":"\xc0","agrave":"\xe0","amp":"&","AMP":"&","Aring":"\xc5","aring":"\xe5","Atilde":"\xc3","atilde":"\xe3","Auml":"\xc4","auml":"\xe4","brvbar":"\xa6","Ccedil":"\xc7","ccedil":"\xe7","cedil":"\xb8","cent":"\xa2","copy":"\xa9","COPY":"\xa9","curren":"\xa4","deg":"\xb0","divide":"\xf7","Eacute":"\xc9","eacute":"\xe9","Ecirc":"\xca","ecirc":"\xea","Egrave":"\xc8","egrave":"\xe8","ETH":"\xd0","eth":"\xf0","Euml":"\xcb","euml":"\xeb","frac12":"\xbd","frac14":"\xbc","frac34":"\xbe","gt":">","GT":">","Iacute":"\xcd","iacute":"\xed","Icirc":"\xce","icirc":"\xee","iexcl":"\xa1","Igrave":"\xcc","igrave":"\xec","iquest":"\xbf","Iuml":"\xcf","iuml":"\xef","laquo":"\xab","lt":"<","LT":"<","macr":"\xaf","micro":"\xb5","middot":"\xb7","nbsp":"\xa0","not":"\xac","Ntilde":"\xd1","ntilde":"\xf1","Oacute":"\xd3","oacute":"\xf3","Ocirc":"\xd4","ocirc":"\xf4","Ograve":"\xd2","ograve":"\xf2","ordf":"\xaa","ordm":"\xba","Oslash":"\xd8","oslash":"\xf8","Otilde":"\xd5","otilde":"\xf5","Ouml":"\xd6","ouml":"\xf6","para":"\xb6","plusmn":"\xb1","pound":"\xa3","quot":"\\"","QUOT":"\\"","raquo":"\xbb","reg":"\xae","REG":"\xae","sect":"\xa7","shy":"\xad","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","szlig":"\xdf","THORN":"\xde","thorn":"\xfe","times":"\xd7","Uacute":"\xda","uacute":"\xfa","Ucirc":"\xdb","ucirc":"\xfb","Ugrave":"\xd9","ugrave":"\xf9","uml":"\xa8","Uuml":"\xdc","uuml":"\xfc","Yacute":"\xdd","yacute":"\xfd","yen":"\xa5","yuml":"\xff"}');

},{}],"6rBuv":[function(require,module,exports) {
module.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}');

},{}],"csv8t":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var decode_json_1 = __importDefault(require("./maps/decode.json"));
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint || function(codePoint) {
    var output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(codePoint >>> 10 & 0x3ff | 0xd800);
        codePoint = 0xdc00 | codePoint & 0x3ff;
    }
    output += String.fromCharCode(codePoint);
    return output;
};
function decodeCodePoint(codePoint) {
    if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) return "\uFFFD";
    if (codePoint in decode_json_1.default) codePoint = decode_json_1.default[codePoint];
    return fromCodePoint(codePoint);
}
exports.default = decodeCodePoint;

},{"./maps/decode.json":"1NeVF"}],"1NeVF":[function(require,module,exports) {
module.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}');

},{}],"6QLS8":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(require("./maps/xml.json"));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(require("./maps/entities.json"));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj).sort().reduce(function(inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for(var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++){
        var k = _a[_i];
        if (k.length === 1) // Add value to single array
        single.push("\\" + k);
        else // Add value to multiple array
        multiple.push(k);
    }
    // Add ranges to single characters.
    single.sort();
    for(var start = 0; start < single.length - 1; start++){
        // Find the end of a run of characters
        var end = start;
        while(end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1))end += 1;
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3) continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null ? function(str) {
    return str.codePointAt(0);
} : function(c) {
    return (c.charCodeAt(0) - 0xd800) * 0x400 + c.charCodeAt(1) - 0xdc00 + 0x10000;
};
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function(data) {
        return data.replace(re, function(name) {
            return inverse[name];
        }).replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */ function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */ function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function(data) {
        return data.replace(reEscapeChars, function(c) {
            return obj[c] || singleCharReplacer(c);
        });
    };
}

},{"./maps/xml.json":"6rBuv","./maps/entities.json":"44PRp"}],"kUwEA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attributeNames = exports.elementNames = void 0;
exports.elementNames = new Map([
    [
        "altglyph",
        "altGlyph"
    ],
    [
        "altglyphdef",
        "altGlyphDef"
    ],
    [
        "altglyphitem",
        "altGlyphItem"
    ],
    [
        "animatecolor",
        "animateColor"
    ],
    [
        "animatemotion",
        "animateMotion"
    ],
    [
        "animatetransform",
        "animateTransform"
    ],
    [
        "clippath",
        "clipPath"
    ],
    [
        "feblend",
        "feBlend"
    ],
    [
        "fecolormatrix",
        "feColorMatrix"
    ],
    [
        "fecomponenttransfer",
        "feComponentTransfer"
    ],
    [
        "fecomposite",
        "feComposite"
    ],
    [
        "feconvolvematrix",
        "feConvolveMatrix"
    ],
    [
        "fediffuselighting",
        "feDiffuseLighting"
    ],
    [
        "fedisplacementmap",
        "feDisplacementMap"
    ],
    [
        "fedistantlight",
        "feDistantLight"
    ],
    [
        "fedropshadow",
        "feDropShadow"
    ],
    [
        "feflood",
        "feFlood"
    ],
    [
        "fefunca",
        "feFuncA"
    ],
    [
        "fefuncb",
        "feFuncB"
    ],
    [
        "fefuncg",
        "feFuncG"
    ],
    [
        "fefuncr",
        "feFuncR"
    ],
    [
        "fegaussianblur",
        "feGaussianBlur"
    ],
    [
        "feimage",
        "feImage"
    ],
    [
        "femerge",
        "feMerge"
    ],
    [
        "femergenode",
        "feMergeNode"
    ],
    [
        "femorphology",
        "feMorphology"
    ],
    [
        "feoffset",
        "feOffset"
    ],
    [
        "fepointlight",
        "fePointLight"
    ],
    [
        "fespecularlighting",
        "feSpecularLighting"
    ],
    [
        "fespotlight",
        "feSpotLight"
    ],
    [
        "fetile",
        "feTile"
    ],
    [
        "feturbulence",
        "feTurbulence"
    ],
    [
        "foreignobject",
        "foreignObject"
    ],
    [
        "glyphref",
        "glyphRef"
    ],
    [
        "lineargradient",
        "linearGradient"
    ],
    [
        "radialgradient",
        "radialGradient"
    ],
    [
        "textpath",
        "textPath"
    ], 
]);
exports.attributeNames = new Map([
    [
        "definitionurl",
        "definitionURL"
    ],
    [
        "attributename",
        "attributeName"
    ],
    [
        "attributetype",
        "attributeType"
    ],
    [
        "basefrequency",
        "baseFrequency"
    ],
    [
        "baseprofile",
        "baseProfile"
    ],
    [
        "calcmode",
        "calcMode"
    ],
    [
        "clippathunits",
        "clipPathUnits"
    ],
    [
        "diffuseconstant",
        "diffuseConstant"
    ],
    [
        "edgemode",
        "edgeMode"
    ],
    [
        "filterunits",
        "filterUnits"
    ],
    [
        "glyphref",
        "glyphRef"
    ],
    [
        "gradienttransform",
        "gradientTransform"
    ],
    [
        "gradientunits",
        "gradientUnits"
    ],
    [
        "kernelmatrix",
        "kernelMatrix"
    ],
    [
        "kernelunitlength",
        "kernelUnitLength"
    ],
    [
        "keypoints",
        "keyPoints"
    ],
    [
        "keysplines",
        "keySplines"
    ],
    [
        "keytimes",
        "keyTimes"
    ],
    [
        "lengthadjust",
        "lengthAdjust"
    ],
    [
        "limitingconeangle",
        "limitingConeAngle"
    ],
    [
        "markerheight",
        "markerHeight"
    ],
    [
        "markerunits",
        "markerUnits"
    ],
    [
        "markerwidth",
        "markerWidth"
    ],
    [
        "maskcontentunits",
        "maskContentUnits"
    ],
    [
        "maskunits",
        "maskUnits"
    ],
    [
        "numoctaves",
        "numOctaves"
    ],
    [
        "pathlength",
        "pathLength"
    ],
    [
        "patterncontentunits",
        "patternContentUnits"
    ],
    [
        "patterntransform",
        "patternTransform"
    ],
    [
        "patternunits",
        "patternUnits"
    ],
    [
        "pointsatx",
        "pointsAtX"
    ],
    [
        "pointsaty",
        "pointsAtY"
    ],
    [
        "pointsatz",
        "pointsAtZ"
    ],
    [
        "preservealpha",
        "preserveAlpha"
    ],
    [
        "preserveaspectratio",
        "preserveAspectRatio"
    ],
    [
        "primitiveunits",
        "primitiveUnits"
    ],
    [
        "refx",
        "refX"
    ],
    [
        "refy",
        "refY"
    ],
    [
        "repeatcount",
        "repeatCount"
    ],
    [
        "repeatdur",
        "repeatDur"
    ],
    [
        "requiredextensions",
        "requiredExtensions"
    ],
    [
        "requiredfeatures",
        "requiredFeatures"
    ],
    [
        "specularconstant",
        "specularConstant"
    ],
    [
        "specularexponent",
        "specularExponent"
    ],
    [
        "spreadmethod",
        "spreadMethod"
    ],
    [
        "startoffset",
        "startOffset"
    ],
    [
        "stddeviation",
        "stdDeviation"
    ],
    [
        "stitchtiles",
        "stitchTiles"
    ],
    [
        "surfacescale",
        "surfaceScale"
    ],
    [
        "systemlanguage",
        "systemLanguage"
    ],
    [
        "tablevalues",
        "tableValues"
    ],
    [
        "targetx",
        "targetX"
    ],
    [
        "targety",
        "targetY"
    ],
    [
        "textlength",
        "textLength"
    ],
    [
        "viewbox",
        "viewBox"
    ],
    [
        "viewtarget",
        "viewTarget"
    ],
    [
        "xchannelselector",
        "xChannelSelector"
    ],
    [
        "ychannelselector",
        "yChannelSelector"
    ],
    [
        "zoomandpan",
        "zoomAndPan"
    ], 
]);

},{}],"4eFpl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
var domhandler_1 = require("domhandler");
var emptyArray = [];
/**
 * Get a node's children.
 *
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */ function getChildren(elem) {
    var _a;
    return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
}
exports.getChildren = getChildren;
/**
 * Get a node's parent.
 *
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node.
 */ function getParent(elem) {
    return elem.parent || null;
}
exports.getParent = getParent;
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first.
 * If we don't have a parent (the element is a root node),
 * we walk the element's `prev` & `next` to get all remaining nodes.
 *
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings.
 */ function getSiblings(elem) {
    var _a, _b;
    var parent = getParent(elem);
    if (parent != null) return getChildren(parent);
    var siblings = [
        elem
    ];
    var prev = elem.prev, next = elem.next;
    while(prev != null){
        siblings.unshift(prev);
        _a = prev, prev = _a.prev;
    }
    while(next != null){
        siblings.push(next);
        _b = next, next = _b.next;
    }
    return siblings;
}
exports.getSiblings = getSiblings;
/**
 * Gets an attribute from an element.
 *
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */ function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
exports.getAttributeValue = getAttributeValue;
/**
 * Checks whether an element has an attribute.
 *
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */ function hasAttrib(elem, name) {
    return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
exports.hasAttrib = hasAttrib;
/**
 * Get the tag name of an element.
 *
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */ function getName(elem) {
    return elem.name;
}
exports.getName = getName;
/**
 * Returns the next element sibling of a node.
 *
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag.
 */ function nextElementSibling(elem) {
    var _a;
    var next = elem.next;
    while(next !== null && !(0, domhandler_1.isTag)(next))_a = next, next = _a.next;
    return next;
}
exports.nextElementSibling = nextElementSibling;
/**
 * Returns the previous element sibling of a node.
 *
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag.
 */ function prevElementSibling(elem) {
    var _a;
    var prev = elem.prev;
    while(prev !== null && !(0, domhandler_1.isTag)(prev))_a = prev, prev = _a.prev;
    return prev;
}
exports.prevElementSibling = prevElementSibling;

},{"domhandler":"fQBlo"}],"1ow81":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
/**
 * Remove an element from the dom
 *
 * @param elem The element to be removed
 */ function removeElement(elem) {
    if (elem.prev) elem.prev.next = elem.next;
    if (elem.next) elem.next.prev = elem.prev;
    if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
    }
}
exports.removeElement = removeElement;
/**
 * Replace an element in the dom
 *
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */ function replaceElement(elem, replacement) {
    var prev = replacement.prev = elem.prev;
    if (prev) prev.next = replacement;
    var next = replacement.next = elem.next;
    if (next) next.prev = replacement;
    var parent = replacement.parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
    }
}
exports.replaceElement = replaceElement;
/**
 * Append a child to an element.
 *
 * @param elem The element to append to.
 * @param child The element to be added as a child.
 */ function appendChild(elem, child) {
    removeElement(child);
    child.next = null;
    child.parent = elem;
    if (elem.children.push(child) > 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    } else child.prev = null;
}
exports.appendChild = appendChild;
/**
 * Append an element after another.
 *
 * @param elem The element to append after.
 * @param next The element be added.
 */ function append(elem, next) {
    removeElement(next);
    var parent = elem.parent;
    var currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    } else if (parent) parent.children.push(next);
}
exports.append = append;
/**
 * Prepend a child to an element.
 *
 * @param elem The element to prepend before.
 * @param child The element to be added as a child.
 */ function prependChild(elem, child) {
    removeElement(child);
    child.parent = elem;
    child.prev = null;
    if (elem.children.unshift(child) !== 1) {
        var sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
    } else child.next = null;
}
exports.prependChild = prependChild;
/**
 * Prepend an element before another.
 *
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */ function prepend(elem, prev) {
    removeElement(prev);
    var parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) elem.prev.next = prev;
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
exports.prepend = prepend;

},{}],"5HdLw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
var domhandler_1 = require("domhandler");
/**
 * Search a node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */ function filter(test, node, recurse, limit) {
    if (recurse === void 0) recurse = true;
    if (limit === void 0) limit = Infinity;
    if (!Array.isArray(node)) node = [
        node
    ];
    return find(test, node, recurse, limit);
}
exports.filter = filter;
/**
 * Search an array of node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */ function find(test, nodes, recurse, limit) {
    var result = [];
    for(var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++){
        var elem = nodes_1[_i];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0) break;
        }
        if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
            var children = find(test, elem.children, recurse, limit);
            result.push.apply(result, children);
            limit -= children.length;
            if (limit <= 0) break;
        }
    }
    return result;
}
exports.find = find;
/**
 * Finds the first element inside of an array that matches a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 */ function findOneChild(test, nodes) {
    return nodes.find(test);
}
exports.findOneChild = findOneChild;
/**
 * Finds one element in a tree that passes a test.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first child node that passes `test`.
 */ function findOne(test, nodes, recurse) {
    if (recurse === void 0) recurse = true;
    var elem = null;
    for(var i = 0; i < nodes.length && !elem; i++){
        var checked = nodes[i];
        if (!(0, domhandler_1.isTag)(checked)) continue;
        else if (test(checked)) elem = checked;
        else if (recurse && checked.children.length > 0) elem = findOne(test, checked.children);
    }
    return elem;
}
exports.findOne = findOne;
/**
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing a test.
 */ function existsOne(test, nodes) {
    return nodes.some(function(checked) {
        return (0, domhandler_1.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
    });
}
exports.existsOne = existsOne;
/**
 * Search and array of nodes and its children for nodes passing a test function.
 *
 * Same as `find`, only with less options, leading to reduced complexity.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */ function findAll(test, nodes) {
    var _a;
    var result = [];
    var stack = nodes.filter(domhandler_1.isTag);
    var elem;
    while(elem = stack.shift()){
        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
        if (children && children.length > 0) stack.unshift.apply(stack, children);
        if (test(elem)) result.push(elem);
    }
    return result;
}
exports.findAll = findAll;

},{"domhandler":"fQBlo"}],"laBra":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
var domhandler_1 = require("domhandler");
var querying_1 = require("./querying");
var Checks = {
    tag_name: function(name) {
        if (typeof name === "function") return function(elem) {
            return (0, domhandler_1.isTag)(elem) && name(elem.name);
        };
        else if (name === "*") return domhandler_1.isTag;
        return function(elem) {
            return (0, domhandler_1.isTag)(elem) && elem.name === name;
        };
    },
    tag_type: function(type) {
        if (typeof type === "function") return function(elem) {
            return type(elem.type);
        };
        return function(elem) {
            return elem.type === type;
        };
    },
    tag_contains: function(data) {
        if (typeof data === "function") return function(elem) {
            return (0, domhandler_1.isText)(elem) && data(elem.data);
        };
        return function(elem) {
            return (0, domhandler_1.isText)(elem) && elem.data === data;
        };
    }
};
/**
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a particular value.
 */ function getAttribCheck(attrib, value) {
    if (typeof value === "function") return function(elem) {
        return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
    };
    return function(elem) {
        return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
    };
}
/**
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either
 * of the input functions returns `true` for the node.
 */ function combineFuncs(a, b) {
    return function(elem) {
        return a(elem) || b(elem);
    };
}
/**
 * @param options An object describing nodes to look for.
 * @returns A function executing all checks in `options` and returning `true`
 * if any of them match a node.
 */ function compileTest(options) {
    var funcs = Object.keys(options).map(function(key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */ function testElement(options, node) {
    var test = compileTest(options);
    return test ? test(node) : true;
}
exports.testElement = testElement;
/**
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */ function getElements(options, nodes, recurse, limit) {
    if (limit === void 0) limit = Infinity;
    var test = compileTest(options);
    return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
}
exports.getElements = getElements;
/**
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */ function getElementById(id, nodes, recurse) {
    if (recurse === void 0) recurse = true;
    if (!Array.isArray(nodes)) nodes = [
        nodes
    ];
    return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
}
exports.getElementById = getElementById;
/**
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */ function getElementsByTagName(tagName, nodes, recurse, limit) {
    if (recurse === void 0) recurse = true;
    if (limit === void 0) limit = Infinity;
    return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
}
exports.getElementsByTagName = getElementsByTagName;
/**
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */ function getElementsByTagType(type, nodes, recurse, limit) {
    if (recurse === void 0) recurse = true;
    if (limit === void 0) limit = Infinity;
    return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
}
exports.getElementsByTagType = getElementsByTagType;

},{"domhandler":"fQBlo","./querying":"5HdLw"}],"6iez7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uniqueSort = exports.compareDocumentPosition = exports.removeSubsets = void 0;
var domhandler_1 = require("domhandler");
/**
 * Given an array of nodes, remove any member that is contained by another.
 *
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't subtrees of each other.
 */ function removeSubsets(nodes) {
    var idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */ while(--idx >= 0){
        var node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */ if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for(var ancestor = node.parent; ancestor; ancestor = ancestor.parent)if (nodes.includes(ancestor)) {
            nodes.splice(idx, 1);
            break;
        }
    }
    return nodes;
}
exports.removeSubsets = removeSubsets;
/**
 * Compare the position of one node against another node in any other document.
 * The return value is a bitmask with the following values:
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent./
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */ function compareDocumentPosition(nodeA, nodeB) {
    var aParents = [];
    var bParents = [];
    if (nodeA === nodeB) return 0;
    var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
    while(current){
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
    while(current){
        bParents.unshift(current);
        current = current.parent;
    }
    var maxIdx = Math.min(aParents.length, bParents.length);
    var idx = 0;
    while(idx < maxIdx && aParents[idx] === bParents[idx])idx++;
    if (idx === 0) return 1 /* DISCONNECTED */ ;
    var sharedParent = aParents[idx - 1];
    var siblings = sharedParent.children;
    var aSibling = aParents[idx];
    var bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) return 20 /* CONTAINED_BY */ ;
        return 4 /* FOLLOWING */ ;
    }
    if (sharedParent === nodeA) return 10 /* CONTAINS */ ;
    return 2 /* PRECEDING */ ;
}
exports.compareDocumentPosition = compareDocumentPosition;
/**
 * Sort an array of nodes based on their relative position in the document and
 * remove any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */ function uniqueSort(nodes) {
    nodes = nodes.filter(function(node, i, arr) {
        return !arr.includes(node, i + 1);
    });
    nodes.sort(function(a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & 2 /* PRECEDING */ ) return -1;
        else if (relative & 4 /* FOLLOWING */ ) return 1;
        return 0;
    });
    return nodes;
}
exports.uniqueSort = uniqueSort;

},{"domhandler":"fQBlo"}],"fzwlQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFeed = void 0;
var stringify_1 = require("./stringify");
var legacy_1 = require("./legacy");
/**
 * Get the feed object from the root of a DOM tree.
 *
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */ function getFeed(doc) {
    var feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
exports.getFeed = getFeed;
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getAtomFeed(feedRoot) {
    var _a1;
    var childs = feedRoot.children;
    var feed = {
        type: "atom",
        items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function(item) {
            var _a;
            var children = item.children;
            var entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs.href;
            if (href) entry.link = href;
            var description = fetch("summary", children) || fetch("content", children);
            if (description) entry.description = description;
            var pubDate = fetch("updated", children);
            if (pubDate) entry.pubDate = new Date(pubDate);
            return entry;
        })
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    var href1 = (_a1 = getOneElement("link", childs)) === null || _a1 === void 0 ? void 0 : _a1.attribs.href;
    if (href1) feed.link = href1;
    addConditionally(feed, "description", "subtitle", childs);
    var updated = fetch("updated", childs);
    if (updated) feed.updated = new Date(updated);
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getRssFeed(feedRoot) {
    var _a, _b;
    var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
            var children = item.children;
            var entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch("pubDate", children);
            if (pubDate) entry.pubDate = new Date(pubDate);
            return entry;
        })
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    var updated = fetch("lastBuildDate", childs);
    if (updated) feed.updated = new Date(updated);
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
var MEDIA_KEYS_STRING = [
    "url",
    "type",
    "lang"
];
var MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width", 
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */ function getMediaElements(where) {
    return (0, legacy_1.getElementsByTagName)("media:content", where).map(function(elem) {
        var attribs = elem.attribs;
        var media = {
            medium: attribs.medium,
            isDefault: !!attribs.isDefault
        };
        for(var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++){
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) media[attrib] = attribs[attrib];
        }
        for(var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++){
            var attrib = MEDIA_KEYS_INT_1[_a];
            if (attribs[attrib]) media[attrib] = parseInt(attribs[attrib], 10);
        }
        if (attribs.expression) media.expression = attribs.expression;
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */ function getOneElement(tagName, node) {
    return (0, legacy_1.getElementsByTagName)(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where  Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */ function fetch(tagName, where, recurse) {
    if (recurse === void 0) recurse = false;
    return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */ function addConditionally(obj, prop, tagName, where, recurse) {
    if (recurse === void 0) recurse = false;
    var val = fetch(tagName, where, recurse);
    if (val) obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */ function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}

},{"./stringify":"eU3Tn","./legacy":"laBra"}],"llg2c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var I = Object.defineProperty, U = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var j = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var g = (o, r, n)=>r in o ? I(o, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : o[r] = n, b = (o, r)=>{
    for(var n in r || (r = {}))j.call(r, n) && g(o, n, r[n]);
    if (N) for (var n of N(r))v.call(r, n) && g(o, n, r[n]);
    return o;
}, R = (o, r)=>U(o, _(r));
var _isjson = require("is-json");
var _isjson2 = _interopRequireDefault(_isjson);
var $;
(function(s) {
    s[s.Smart = 0] = "Smart", s[s.Single = 1] = "Single", s[s.Double = 2] = "Double";
})($ || ($ = exports.quoteStyleEnum = {}));
var d;
(function(c) {
    c.tag = "tag", c.slash = "slash", c.default = "default", c.closeAs = "closeAs";
})(d || (d = exports.closingSingleTagOptionEnum = {}));
var i;
(function(s) {
    s.tag = "tag", s.slash = "slash", s.default = "default";
})(i || (i = exports.closingSingleTagTypeEnum = {}));
var y = [
    "area",
    "base",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
], L = /[\t\n\f\r "'`=<>]/, B = {
    closingSingleTag: void 0,
    quoteAllAttributes: !0,
    replaceQuote: !0,
    quoteStyle: 2
};
function q(o, r = {}) {
    var x;
    let n = y;
    r.singleTags && (n = [
        ...new Set([
            ...y,
            ...r.singleTags
        ])
    ]), r = R(b(b({}, B), r), {
        singleTags: n
    });
    let { singleTags: s , closingSingleTag: c , quoteAllAttributes: k , replaceQuote: Q , quoteStyle: p  } = r, h = (x = s == null ? void 0 : s.filter((a)=>a instanceof RegExp)) != null ? x : [];
    return Array.isArray(o) || (o || (o = ""), o = [
        o
    ]), u(o);
    function u(a) {
        let t = "";
        for (let e of a){
            if (e === !1 || e === void 0 || e === null || typeof e == "string" && e.length === 0 || Number.isNaN(e)) continue;
            if (Array.isArray(e)) {
                if (e.length === 0) continue;
                t += u(e);
                continue;
            }
            if (typeof e == "string" || typeof e == "number") {
                t += e;
                continue;
            }
            if (Array.isArray(e.content) || (e.content || (e.content = ""), e.content = [
                e.content
            ]), e.tag === !1) {
                t += u(e.content);
                continue;
            }
            let f = typeof e.tag == "string" ? e.tag : "div";
            t += `<${f}`, e.attrs && (t += w(e.attrs));
            let l = {
                [i.tag]: `></${f}>`,
                [i.slash]: " />",
                [i.default]: ">"
            };
            if (m(f)) {
                switch(c){
                    case d.tag:
                        t += l[i.tag];
                        break;
                    case d.slash:
                        t += l[i.slash];
                        break;
                    case d.closeAs:
                        t += l[e.closeAs ? i[e.closeAs] : i.default];
                        break;
                    default:
                        t += l[i.default];
                }
                e.content && (t += u(e.content));
            } else if (c === d.closeAs && e.closeAs) {
                let D = e.closeAs ? i[e.closeAs] : i.default;
                t += `${l[D]}${u(e.content)}`;
            } else t += `>${u(e.content)}</${f}>`;
        }
        return t;
    }
    function m(a) {
        return h.length > 0 ? h.some((t)=>t.test(a)) : !!(s == null ? void 0 : s.includes(a.toLowerCase()));
    }
    function w(a) {
        let t = "";
        for (let [e, f] of Object.entries(a))if (typeof f == "string") if (_isjson2.default.call(void 0, f)) t += A(e, f);
        else if (k || L.test(f)) {
            let l = f;
            Q && (l = f.replace(/"/g, "&quot;")), t += A(e, l, p);
        } else f === "" ? t += ` ${e}` : t += ` ${e}=${f}`;
        else f === !0 ? t += ` ${e}` : typeof f == "number" && (t += A(e, f, p));
        return t;
    }
    function A(a, t, e = 1) {
        return e === 1 ? ` ${a}='${t}'` : e === 2 ? ` ${a}="${t}"` : typeof t == "string" && t.includes('"') ? ` ${a}='${t}'` : ` ${a}="${t}"`;
    }
}
exports.closingSingleTagOptionEnum = d;
exports.closingSingleTagTypeEnum = i;
exports.quoteStyleEnum = $;
exports.render = q;

},{"is-json":"6Oztj"}],"6Oztj":[function(require,module,exports) {
"use strict";
module.exports = isJSON;
isJSON.strict = strict;
function isJSON(str, pass_object) {
    if (pass_object && isObject(str)) return true;
    if (!isString(str)) return false;
    str = str.replace(/\s/g, "").replace(/\n|\r/, "");
    if (/^\{(.*?)\}$/.test(str)) return /"(.*?)":(.*?)/g.test(str);
    if (/^\[(.*?)\]$/.test(str)) return str.replace(/^\[/, "").replace(/\]$/, "").replace(/},{/g, "}\n{").split(/\n/).map(function(s) {
        return isJSON(s);
    }).reduce(function(prev, curr) {
        return !!curr;
    });
    return false;
}
function strict(str) {
    if (isObject(str)) return true;
    try {
        return JSON.parse(str) && true;
    } catch (ex) {
        return false;
    }
}
function isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}

},{}],"5KHsz":[function(require,module,exports) {
module.exports = require("./lib/cssModules").default;

},{"./lib/cssModules":"9TVFl"}],"9TVFl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _fs = require("fs");
var _fs2 = _interopRequireDefault(_fs);
var _path = require("path");
var _path2 = _interopRequireDefault(_path);
var _lodash = require("lodash.get");
var _lodash2 = _interopRequireDefault(_lodash);
var _posthtmlAttrsParser = require("posthtml-attrs-parser");
var _posthtmlAttrsParser2 = _interopRequireDefault(_posthtmlAttrsParser);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var cssModulesCache = {};
exports.default = function(cssModulesPath) {
    return function cssModules(tree) {
        // If the plugin is used in gulp watch or another similar tool, files with CSS modules
        // might change between runs. Therefore we purge the cache before each run.
        cssModulesCache = {};
        tree.match({
            attrs: {
                "css-module": /\w+/
            }
        }, function(node) {
            var attrs = (0, _posthtmlAttrsParser2.default)(node.attrs);
            var cssModuleName = attrs["css-module"];
            delete attrs["css-module"];
            attrs.class = attrs.class || [];
            attrs.class.push(getCssClassName(cssModulesPath, cssModuleName));
            node.attrs = attrs.compose();
            return node;
        });
    };
};
function getCssClassName(cssModulesPath, cssModuleName) {
    if (typeof cssModulesPath === "string") return getCssClassNameFromPath(cssModulesPath, cssModuleName);
    else return getCssClassNameFromObject(cssModulesPath, cssModuleName);
}
function getCssClassNameFromPath(cssModulesPath, cssModuleName) {
    if (_fs2.default.lstatSync(cssModulesPath).isDirectory()) {
        var cssModulesDir = cssModulesPath;
        var cssModuleNameParts = cssModuleName.split(".");
        var cssModulesFile = cssModuleNameParts.shift();
        cssModuleName = cssModuleNameParts.join(".");
        cssModulesPath = _path2.default.join(cssModulesDir, cssModulesFile);
    }
    var cssModules = getCssModules(_path2.default.resolve(cssModulesPath));
    return getCssClassNameFromObject(cssModules, cssModuleName);
}
function getCssClassNameFromObject(cssModules, cssModuleName1) {
    return cssModuleName1.trim().split(" ").map(function(cssModuleName) {
        var cssClassName = (0, _lodash2.default)(cssModules, cssModuleName);
        if (!cssClassName) throw getError('CSS module "' + cssModuleName + '" is not found');
        else if (typeof cssClassName !== "string") throw getError('CSS module "' + cssModuleName + '" is not a string');
        return cssClassName;
    }).join(" ");
}
function getCssModules(cssModulesPath) {
    var fullPath = undefined(cssModulesPath);
    if (!cssModulesCache[fullPath]) {
        delete undefined[fullPath];
        cssModulesCache[fullPath] = require(fullPath);
    }
    return cssModulesCache[fullPath];
}
function getError(message) {
    var fullMessage = "[posthtml-css-modules] " + message;
    return new Error(fullMessage);
}

},{"fs":"jhUEF","path":"loE3o","lodash.get":"80Ipq","posthtml-attrs-parser":"k6bfM"}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var process = require("process");
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"80Ipq":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = "Expected a function";
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** `Object#toString` result references. */ var funcTag = "[object Function]", genTag = "[object GeneratorFunction]", symbolTag = "[object Symbol]";
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != "function") try {
        result = !!(value + "");
    } catch (e) {}
    return result;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/** Built-in value references. */ var Symbol = root.Symbol, splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */ var Map = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) data.push([
        key,
        value
    ]);
    else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.__data__ = {
        "hash": new Hash,
        "map": new (Map || ListCache),
        "string": new Hash
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    return getMapData(this, key)["delete"](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = isKey(path, object) ? [
        path
    ] : castPath(path);
    var index = 0, length = path.length;
    while(object != null && index < length)object = object[toKey(path[index++])];
    return index && index == length ? object : undefined;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value) {
    return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) return false;
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoize(function(string1) {
    string1 = toString(string1);
    var result = [];
    if (reLeadingDot.test(string1)) result.push("");
    string1.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) return value;
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e1) {}
    }
    return "";
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != "function" || resolver && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Assign cache to `_.memoize`.
memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == "object";
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? "" : baseToString(value);
}
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
module.exports = get;

},{}],"k6bfM":[function(require,module,exports) {
module.exports = require("./lib/parser").default;

},{"./lib/parser":"fTEEf"}],"fTEEf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parseAttrs;
var _objectAssign = require("object-assign");
var _objectAssign2 = _interopRequireDefault(_objectAssign);
var _parseRules = require("./parseRules");
var _parseRules2 = _interopRequireDefault(_parseRules);
var _attr = require("./attr");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function parseAttrs() {
    var posthtmlAttrs = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var parseRules = (0, _objectAssign2.default)({}, _parseRules2.default, options.rules || {});
    var attrs = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(posthtmlAttrs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var attrName = _step.value;
            attrs[attrName] = (0, _attr.parseAttr)(posthtmlAttrs[attrName], parseRules[attrName]);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return) _iterator.return();
        } finally{
            if (_didIteratorError) throw _iteratorError;
        }
    }
    attrs.compose = function() {
        return composeAttrs(this, parseRules);
    };
    return attrs;
}
function composeAttrs(attrs, parseRules) {
    delete attrs.compose;
    var posthtmlAttrs = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
    try {
        for(var _iterator2 = Object.keys(attrs)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var attrName = _step2.value;
            posthtmlAttrs[attrName] = (0, _attr.stringifyAttr)(attrs[attrName], parseRules[attrName]);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) _iterator2.return();
        } finally{
            if (_didIteratorError2) throw _iteratorError2;
        }
    }
    return posthtmlAttrs;
}

},{"object-assign":"7OXxh","./parseRules":"b3N4G","./attr":"bcrhl"}],"7OXxh":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ "use strict";
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++)test2["_" + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join("") !== "0123456789") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};

},{}],"b3N4G":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    class: {
        delimiter: /\s+/,
        glue: " "
    },
    style: {
        delimiter: /\s*;\s*/,
        keyDelimiter: /\s*:\s*/,
        glue: "; ",
        keyGlue: ": "
    }
};

},{}],"bcrhl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAttr = parseAttr;
exports.stringifyAttr = stringifyAttr;
function parseAttr(attrStr, rule) {
    rule = rule || {};
    var delimiter = rule.delimiter;
    var keyDelimiter = rule.keyDelimiter;
    if (!delimiter && !keyDelimiter) return attrStr;
    var attrValues = delimiter ? attrStr.split(delimiter) : [
        attrStr
    ];
    if (!keyDelimiter) return attrValues;
    var attrDict = {};
    attrValues.forEach(function(attrKeyValue) {
        // We need to split attrKeyValue by keyDelimiter only once.
        // Therefore we use match() + slice() instead of split()
        var match = attrKeyValue.match(keyDelimiter);
        if (!match) return;
        var attrKey = attrKeyValue.slice(0, match.index);
        if (!attrKey) return;
        var attrValue = attrKeyValue.slice(match.index + match[0].length) || "";
        var attrCombinedValue = attrDict[attrKey];
        if (attrCombinedValue) {
            if (!Array.isArray(attrCombinedValue)) attrCombinedValue = [
                attrCombinedValue
            ];
            attrCombinedValue.push(attrValue);
        } else attrCombinedValue = attrValue;
        attrDict[attrKey] = attrCombinedValue;
    });
    return attrDict;
}
function stringifyAttr(attr, rule) {
    rule = rule || {};
    var delimiter = (rule.glue || rule.delimiter || "").toString();
    var keyDelimiter = (rule.keyGlue || rule.keyDelimiter || "").toString();
    if (typeof attr === "string") return attr;
    if (Array.isArray(attr)) return attr.join(delimiter);
    var attrKeyValues = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        var _loop = function _loop() {
            var attrName = _step.value;
            var attrCombinedValue = Array.isArray(attr[attrName]) ? attr[attrName] : [
                attr[attrName]
            ];
            attrCombinedValue.forEach(function(attrValue) {
                attrKeyValues.push(attrName + keyDelimiter + attrValue);
            });
        };
        for(var _iterator = Object.keys(attr)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return) _iterator.return();
        } finally{
            if (_didIteratorError) throw _iteratorError;
        }
    }
    return attrKeyValues.join(delimiter);
}

},{}]},["7TnVg","ldbFK"], "ldbFK", "parcelRequired784")

//# sourceMappingURL=index.70fab110.js.map
