"use strict";
/* eng-disable PRELOAD_JS_CHECK */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
function createWindow(session) {
    // Create the browser window.
    var mainWindow = new electron_1.BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(electron_1.app.getAppPath(), "preload.js"),
            // SECURITY: use a custom session without a cache
            // https://github.com/1password/electron-secure-defaults/#disable-session-cache
            session: session,
            // SECURITY: disable node integration for remote content
            // https://github.com/1password/electron-secure-defaults/#rule-2
            nodeIntegration: false,
            // SECURITY: enable context isolation for remote content
            // https://github.com/1password/electron-secure-defaults/#rule-3
            contextIsolation: true,
            // SECURITY: restrict dev tools access in the packaged app
            // https://github.com/1password/electron-secure-defaults/#restrict-dev-tools
            devTools: !electron_1.app.isPackaged,
            // SECURITY: disable navigation via middle-click
            // https://github.com/1password/electron-secure-defaults/#disable-new-window
            disableBlinkFeatures: "Auxclick",
            // SECURITY: sandbox renderer content
            // https://github.com/1password/electron-secure-defaults/#sandbox
            sandbox: true
        },
        width: 800
    });
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(electron_1.app.getAppPath(), "../renderer/index.html"));
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}
// SECURITY: sandbox all renderer content
// https://github.com/1password/electron-secure-defaults/#sandox
electron_1.app.enableSandbox();
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", function () {
    // SECURITY: use a custom persistent session without a cache
    // https://github.com/1password/electron-secure-defaults/#disable-session-cache
    var secureSession = electron_1.session.fromPartition("persist:app", {
        cache: false
    });
    createWindow(secureSession);
    electron_1.app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow(secureSession);
    });
    // SECURITY: deny permission requests from renderer
    // https://github.com/1password/electron-secure-defaults/#rule-4
    secureSession.setPermissionRequestHandler(function (_webContents, _permission, callback) {
        callback(false);
    });
    // SECURITY: define a strict CSP
    // https://github.com/1password/electron-secure-defaults/#rule-6
    secureSession.webRequest.onHeadersReceived(function (details, callback) {
        callback({
            responseHeaders: __assign(__assign({}, details.responseHeaders), { "Content-Security-Policy": ["default-src: 'self'; object-src: 'none'"] })
        });
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("web-contents-created", function (_ev, contents) {
    // SECURITY: verify webview options before creation
    // https://github.com/1password/electron-secure-defaults/#rule-11
    var preventDefault = function (ev) {
        ev.preventDefault();
    };
    contents.on("will-attach-webview", preventDefault);
    // SECURITY: disable or limit navigation
    // https://github.com/1password/electron-secure-defaults/#rule-12
    contents.on("will-navigate", preventDefault); // eng-disable LIMIT_NAVIGATION_GLOBAL_CHECK
    // SECURITY: disable or limit creation of new windows
    // https://github.com/1password/electron-secure-defaults/#rule-13
    contents.on("new-window", preventDefault); // eng-disable LIMIT_NAVIGATION_GLOBAL_CHECK
    // SECURITY: further prevent new window creation
    // https://github.com/1password/electron-secure-defaults/#prevent-new-window
    contents.setWindowOpenHandler(function () {
        return { action: "deny" };
    });
});
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
// Handle messages and invocations coming from the renderer API
electron_1.ipcMain.on("sayHello", function (_ev, name) {
    console.log("Hello, ".concat(name, ", from the renderer process!"));
});
electron_1.ipcMain.handle("getAppMetrics", function () { return electron_1.app.getAppMetrics(); });
//# sourceMappingURL=main.js.map