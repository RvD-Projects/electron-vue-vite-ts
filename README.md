
A simple starter template for a **Vue3** + **Electron** TypeScript based application, including **ViteJS**, **Rust-Neon-Bindings** and **Electron Builder**.


<table data-sourcepos="5:1-9:58">
<thead> <strong>THE STACK</strong>
<tr data-sourcepos="5:1-5:13">

<th data-sourcepos="5:2-5:5">Tech</th>
<td data-sourcepos="8:10-8:161">Purpose</td>
<th data-sourcepos="5:7-5:12">Descrption</th>
</tr>
</thead>
<tbody>

<tr data-sourcepos="8:1-8:162">
<td data-sourcepos="8:2-8:8">
<a href="https://electronjs.org" rel="nofollow">
<img src="https://camo.githubusercontent.com/2ef2a441f9eaa1aca489796981cfa851d9388e08209b08e57526a06b4e604a57/68747470733a2f2f656c656374726f6e6a732e6f72672f696d616765732f656c656374726f6e2d6c6f676f2e737667" alt="Electron Logo" data-canonical-src="https://electronjs.org/images/electron-logo.svg" style="max-width: 100%;"></a>
<p><strong style="font-size: xxx-large;">Electron-Builder</strong><p>

<img src="https://camo.githubusercontent.com/9b7e7bc71a56b0cf1f6e48cff088dbc9d4d5ab4dec7a4c7b1d011330b5122e74/68747470733a2f2f636972636c6563692e636f6d2f67682f656c656374726f6e2f656c656374726f6e2f747265652f6d61696e2e7376673f7374796c653d736869656c64" alt="CircleCI Build Status" data-canonical-src="https://circleci.com/gh/electron/electron/tree/main.svg?style=shield" style="max-width: 100%;"></a>
<a href="https://ci.appveyor.com/project/electron-bot/electron-ljo26/branch/main" rel="nofollow"><img src="https://camo.githubusercontent.com/e35668673baa104a689fd9cee4d4381286de6a4b1e338284cdd8d456ee7ca0e5/68747470733a2f2f63692e6170707665796f722e636f6d2f6170692f70726f6a656374732f7374617475732f346c6767693964706a6331716f62376b2f6272616e63682f6d61696e3f7376673d74727565" alt="AppVeyor Build Status" data-canonical-src="https://ci.appveyor.com/api/projects/status/4lggi9dpjc1qob7k/branch/main?svg=true" style="max-width: 100%;"></a>
<a href="https://discord.gg/electronjs" rel="nofollow">
<img src="https://camo.githubusercontent.com/275a8bc8893ac4227fa39a7e8d331b4b1917195255ae24882200f8e7c610973f/68747470733a2f2f696d672e736869656c64732e696f2f646973636f72642f3734353033373335313136333532373138393f636f6c6f723d253233373238394441266c6162656c3d63686174266c6f676f3d646973636f7264266c6f676f436f6c6f723d7768697465" alt="Electron Discord Invite" data-canonical-src="https://img.shields.io/discord/745037351163527189?color=%237289DA&amp;label=chat&amp;logo=discord&amp;logoColor=white" style="max-width: 100%;"></a>
</td>
<td data-sourcepos="8:10-8:161">Bring web like developpement to chrome based application.</td>
<td data-sourcepos="8:10-8:161">The Electron framework lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on Node.js and Chromium and is used by the Atom editor and many other apps.</td>
</tr>

<tr data-sourcepos="8:1-8:162">
<td data-sourcepos="8:2-8:8">
<a href="https://camo.githubusercontent.com/6847f7c501510f31279470d82e8ecc8133c7387514e33414364466b9387f1533/68747470733a2f2f646f337a3765367575616b6e6f2e636c6f756466726f6e742e6e65742f75706c6f6164732f6576656e742f6c6f676f2f313130333531362f32353264306461303164346162623639663631643133323064353830333234622e706e67" rel="nofollow"><img alt="" src="https://camo.githubusercontent.com/6847f7c501510f31279470d82e8ecc8133c7387514e33414364466b9387f1533/68747470733a2f2f646f337a3765367575616b6e6f2e636c6f756466726f6e742e6e65742f75706c6f6164732f6576656e742f6c6f676f2f313130333531362f32353264306461303164346162623639663631643133323064353830333234622e706e67" style="height: 100px; max-width: 100%;"></a>
<p><strong style="font-size: xxx-large;">VueJS/core</strong><p>

<img src="https://camo.githubusercontent.com/72bf57dfe6d4658e21dc36b0c1c2247edd7f0c81d0fd6513a72e419be917e9d5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652e737667" alt="npm" data-canonical-src="https://img.shields.io/npm/v/vue.svg" style="max-width: 100%;"></a> <a href="https://github.com/vuejs/core/actions/workflows/ci.yml"><img src="https://github.com/vuejs/core/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status" style="max-width: 100%;"></a></h1>

</td>
<td data-sourcepos="8:10-8:161">Vue is primarily used to build web interfaces and one-page applications. In saying that, it can also be applied to both desktop and mobile app development thanks to the HTML extensions and JS base working in tandem with an Electron framework – making it a heavily favoured frontend tool.</td>

<td data-sourcepos="8:10-8:161">A type system like TypeScript can detect many common errors via static analysis at build time. This reduces the chance of runtime errors in production, and also allows us to more confidently refactor code in large-scale applications. TypeScript also improves developer ergonomics via type-based auto-completion in IDEs.</td>
</tr>

<tr data-sourcepos="8:1-8:162">
<td data-sourcepos="8:2-8:8">

<a target="_blank" rel="noopener noreferrer nofollow" href="https://user-images.githubusercontent.com/68454661/200180002-90834ec9-fdf4-4a30-a1e6-1bba3532069e.svg"><img src="https://user-images.githubusercontent.com/68454661/200180002-90834ec9-fdf4-4a30-a1e6-1bba3532069e.svg" alt="Neon-Bindigns" style="height: 64px; max-width: 100%;"></a>
<strong style="font-size: xxx-large;">Neon-Bindings</strong>

<p><a href="https://crates.io/crates/neon" rel="nofollow"><img src="https://camo.githubusercontent.com/e453ae9f01d29e491af73a2d33c8b7b20f4cceeb79fe1217e3992beb83a51430/68747470733a2f2f696d672e736869656c64732e696f2f6372617465732f762f6e656f6e2e737667" alt="Cargo" data-canonical-src="https://img.shields.io/crates/v/neon.svg" style="max-width: 100%;"></a>
<a href="https://www.npmjs.com/package/neon-cli" rel="nofollow"><img src="https://camo.githubusercontent.com/ce27c6a7b6b9c145851c57a357fc54c876db7e12d116445ec9ed33aeb29743c7/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6e656f6e2d636c692e737667" alt="npm" data-canonical-src="https://img.shields.io/npm/v/neon-cli.svg" style="max-width: 100%;"></a>
<a href="https://github.com/neon-bindings/neon/actions?query=workflow%3A%22Test+on+Linux%22"><img src="https://github.com/neon-bindings/neon/workflows/Test%20on%20Linux/badge.svg" alt="Linux Build Status" style="max-width: 100%;"></a>
<a href="https://github.com/neon-bindings/neon/actions?query=workflow%3A%22Test+on+MacOS%22"><img src="https://github.com/neon-bindings/neon/workflows/Test%20on%20MacOS/badge.svg" alt="macOS Build Status" style="max-width: 100%;"></a>
<a href="https://github.com/neon-bindings/neon/actions?query=workflow%3A%22Test+on+Windows%22"><img src="https://github.com/neon-bindings/neon/workflows/Test%20on%20Windows/badge.svg" alt="Windows Build Status" style="max-width: 100%;"></a></p>

</td>
<td data-sourcepos="8:10-8:161">
<p>Neon is a library and toolchain for embedding <a href="https://www.rust-lang.org/en-US/" target="_blank" rel="noopener noreferrer">Rust</a> in your <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a> apps and libraries.</p>
</td>
<td data-sourcepos="8:10-8:161">
    <p>With Neon, you can create native Node modules like you might in C or C++, but with none of the headaches and
        anxiety associated with unsafe systems programming. Embedding Rust in Node can be useful for many reasons:</p>
    <ul>
        <li>Raw performance</li>
        <li>Threads and parallel programming</li>
        <li>Access to Rust’s <a href="https://crates.io" target="_blank" rel="noopener noreferrer">package ecosystem</a>
        </li>
        <li>Access to native OS-specific libraries</li>
    </ul>
</td>
</tr>


<tr data-sourcepos="8:1-8:162">
<td data-sourcepos="8:2-8:8">

<a target="_blank" rel="noopener noreferrer nofollow" href="https://user-images.githubusercontent.com/68454661/200181028-08e47d9f-3f87-4381-8192-1c0048ca76c2.png"><img src="https://user-images.githubusercontent.com/68454661/200181028-08e47d9f-3f87-4381-8192-1c0048ca76c2.png" alt="logo-with-shadow" style="height: 100px; max-width: 100%;"></a>
<p><strong style="font-size: xxx-large;">ViteJs</strong></p>


<p dir="auto">
  <a href="https://npmjs.com/package/vite" rel="nofollow"><img src="https://camo.githubusercontent.com/620ed908950942f67375bd9d2ef1a18656e433ec78027a92543763eaec2d62b4/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f766974652e737667" alt="npm package" data-canonical-src="https://img.shields.io/npm/v/vite.svg" style="max-width: 100%;"></a>
  <a href="https://nodejs.org/en/about/releases/" rel="nofollow"><img src="https://camo.githubusercontent.com/8dd65f9ad41e533b3754e1b39c41fd04c42e91426360f79d5b231f285a586b8c/68747470733a2f2f696d672e736869656c64732e696f2f6e6f64652f762f766974652e737667" alt="node compatibility" data-canonical-src="https://img.shields.io/node/v/vite.svg" style="max-width: 100%;"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status" style="max-width: 100%;"></a>
  <a href="https://chat.vitejs.dev" rel="nofollow"><img src="https://camo.githubusercontent.com/a8c43e4c8608a7bac7caeb32738831b95d601cd3fcb1d0a114f1519982f84ee0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636861742d646973636f72642d626c75653f7374796c653d666c6174266c6f676f3d646973636f7264" alt="discord chat" data-canonical-src="https://img.shields.io/badge/chat-discord-blue?style=flat&amp;logo=discord" style="max-width: 100%;"></a>
</p>

</td>

<td data-sourcepos="8:10-8:161">
<p><strong>Bundling:</strong> using tools that crawl, process and concatenate our source modules into files that can run in the browser.</p>
<p><strong>Vite</strong> improves the dev server start time by first dividing the modules in an application into two categories: dependencies and source code.<p>
</td>

<td data-sourcepos="8:10-8:161">
At the very basic level, developing using Vite is not that much different from using a static file server. However, Vite provides many enhancements over native ESM imports to support various features that are typically seen in bundler-based setups.
</td>
</tr>


</tbody>
</table>



<table data-sourcepos="5:1-9:58">
<thead> <strong>RELEASES</strong>
<tr data-sourcepos="5:1-5:13">

<th data-sourcepos="5:2-5:5">Os</th>
<th data-sourcepos="5:7-5:12">Link</th>
</tr>
</thead>
<tbody>

<tr data-sourcepos="8:1-8:162">
<td data-sourcepos="8:2-8:8">Linux</td>
<td data-sourcepos="8:10-8:161"><div align="center">

<a href="https://snapcraft.io/electron-vue-vite-ts-template" rel="nofollow"><img src="https://camo.githubusercontent.com/353bcf397acd2a7663c45bc69cd2b202417a66c24d3b38f861f9cc0fe1a25324/68747470733a2f2f736e617063726166742e696f2f7374617469632f696d616765732f6261646765732f656e2f736e61702d73746f72652d77686974652e737667" alt="Get it from the Snap Store" data-canonical-src="https://snapcraft.io/static/images/badges/en/snap-store-white.svg" style="max-width: 100%;"></a>

<a href="https://snapcraft.io/electron-vue-vite-ts-template">
  <img alt="electron-vue-vite-ts-template" src="https://snapcraft.io/electron-vue-vite-ts-template/badge.svg" />
</a>
<a href="https://snapcraft.io/electron-vue-vite-ts-template">
  <img alt="electron-vue-vite-ts-template" src="https://snapcraft.io/electron-vue-vite-ts-template/trending.svg?name=0" />
</a>
</div>
</td>
</tr>

<tr data-sourcepos="7:1-7:44">
<td data-sourcepos="7:2-7:10">Windows</td>
<td data-sourcepos="7:12-7:43">Not building Yet!</td>

</tr>

<tr data-sourcepos="9:1-9:58">
<td data-sourcepos="9:2-9:8">MacOs</td>
<td data-sourcepos="7:12-7:43">Not building Yet!</td>
</tr>
</tbody>
</table>


## About

This template utilizes [ViteJS](https://vitejs.dev) for building and serving your (Vue powered) front-end process, it provides Hot Reloads (HMR) to make development fast and easy ⚡

Building the Electron (main) process is done with [Electron Builder](https://www.electron.build/), which makes your application easily distributable and supports cross-platform compilation 😎

## Getting started

Click the green **Use this template** button on top of the repository, and clone your own newly created repository.

**Or..**

Clone this repository: `git clone git@github.com:Deluze/electron-vue-template.git`

### Install dependencies ⏬

```bash
npm install
```

### Start developing ⚒️

```bash
npm run dev
```

## Additional Commands

```bash
npm run dev # starts application with hot reload
npm run build # builds application, distributable files can be found in "dist" folder

# OR

npm run build:win # uses windows as build target
npm run build:mac # uses mac as build target
npm run build:linux # uses linux as build target
```

Optional configuration options can be found in the [Electron Builder CLI docs](https://www.electron.build/cli.html).

## Project Structure

```bash
- scripts/ # all the scripts used to build or serve your application, change as you like.
- src/
  - main/ # Main thread (Electron application source)
  - renderer/ # Renderer thread (VueJS application source)
```

## Using static files

If you have any files that you want to copy over to the app directory after installation, you will need to add those files in your `src/main/static` directory.

#### Referencing static files from your main process

```ts
/* Assumes src/main/static/myFile.txt exists */

import { app } from "electron";
import { join } from "path";
import { readFileSync } from "fs";

const path = join(app.getAppPath(), "static", "myFile.txt");
const buffer = readFileSync(path);
```

Releasing
When you want to create a new release, follow these steps:

Update the version in your project's package.json file (e.g. 1.2.3)
Commit that change (git commit -am v1.2.3)
Tag your commit (git tag v1.2.3). Make sure your tag name's format is v*.*.\*. Your workflow will use this tag to detect when to create a release
Push your changes to GitHub (git push && git push --tags)
After building successfully, the action will publish your release artifacts. By default, a new release draft will be created on GitHub with download links for your app. If you want to change this behavior, have a look at the electron-builder docs.
