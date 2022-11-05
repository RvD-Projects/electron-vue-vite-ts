"use strict";
exports.__esModule = true;
exports.RendererApi = void 0;
var electron_1 = require("electron");
//import { hello } from "cpu-count";
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", function () {
    var _a;
    var replaceText = function (selector, text) {
        var element = document.getElementById(selector);
        if (element) {
            element.innerText = text;
        }
    };
    for (var _i = 0, _b = ["chrome", "node", "electron"]; _i < _b.length; _i++) {
        var type = _b[_i];
        replaceText("".concat(type, "-version"), (_a = process.versions[type]) !== null && _a !== void 0 ? _a : "unknown");
    }
});
// The API relays method calls to the main process using `ipcRenderer` methods.
// It does not provide direct access to `ipcRenderer` or other Electron or Node APIs.
exports.RendererApi = {
    sayHello: function (name) {
        electron_1.ipcRenderer.send("sayHello", name);
    },
    getAppMetrics: function () {
        return electron_1.ipcRenderer.invoke("getAppMetrics");
    }
};
// SECURITY: expose a limted API to the renderer over the context bridge
// https://github.com/1password/electron-secure-defaults/SECURITY.md#rule-3
electron_1.contextBridge.exposeInMainWorld("api", exports.RendererApi);
//# sourceMappingURL=preload.js.map