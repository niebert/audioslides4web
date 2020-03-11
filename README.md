`AudioSlides4Web` is a library and NPM module that was created as a online alternative for one export format of PanDocElectron. The WebApp runs completely in a browser  without contacting a web server for processing for generating a webbased presentation from slide/images and audio comments as MP3.
* **[Demo AudioSlides4Web](https://niebert.github.io/audioslides4web)**

<!-- BEGIN: src/readme/headerinto.md -->
The following table of contents is generated with `node doctoc README.md`.
<!-- END:   src/readme/headerinto.md -->
<hr>
<h2>Table of Contents</h2>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Usage](#usage)
- [Quick Start for Offline Use](#quick-start-for-offline-use)
- [Schema for Slide Generation](#schema-for-slide-generation)
- [Build Process of `npm run build`](#build-process-of-npm-run-build)
- [Build and Compress with Browserify, Watchify, UglifyJS](#build-and-compress-with-browserify-watchify-uglifyjs)
  - [Browserify and Watchify](#browserify-and-watchify)
  - [Global Installation of Browserify, Watchify, UglifyJS and DocToc](#global-installation-of-browserify-watchify-uglifyjs-and-doctoc)
  - [Package Installation of Browserify and Watchify - Alternative](#package-installation-of-browserify-and-watchify---alternative)
  - [Start Watching the Files with Watchify](#start-watching-the-files-with-watchify)
  - [Source JS file and development bundle output](#source-js-file-and-development-bundle-output)
- [Acknowledgement](#acknowledgement)
- [Libraries required for  `AudioSlides4Web`](#libraries-required-for--audioslides4web)
- [Libraries for Building and Developement](#libraries-for-building-and-developement)
- [NPM Library Information](#npm-library-information)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- BEGIN: src/readme/usage.md -->

## Usage
First of all try to run the basic online tool to create a ZIP file with folders and HTML file that embeds a images (PNG-Files) in an HTML presentation. As underlying HTML presentation framework DZSlides was used to have a light weight framework with a single file.
* Start the Online Tool `AudioSlides4Web` with https://niebert.github.io/audioslides4web
* Fill out the Slide Info - take care about the number of slides - First slide number is by default 0 and last slide is by default 40. Slide 0 is the title page, but you can alter the slide number to 1.
* Adapt the presentation name. The presentation name will be used as basename for the HTML-presentation and for the ZIP file too.
* The ZIP file contains two folders `audio` and `image`.
* The  folder `audio` contains all the audio comments for the slides. The file `audio/audio0.mp3` is the audio comment for the slide `images/img0.png` and e.g. `audio/audio15.mp3` is the audio comment for the slide `images/img15.png`.
* You can record the audio comments with Open Source software [Audacity](https://www.audacityteam.org/), which you should store in MP3 format.
* Press Download ZIP and you will get the ZIP folder structure with the presentation as `audio_slides.zip`.

## Quick Start for Offline Use
Download the `https://gitlab.com/niebert/audioslides4web/-/archive/master/audioslides4web-master.zip` and unzip the file. The unzipped folder contains a `docs/`-folder. This folder contains the relevant WebApp ([AppLSAC-2](https://en.wikiversity.org/wiki/AppLSAC)). The other directories are required for building the WebApp (e.g. `src` contains the sources for the build process).
For offline use just copy the `docs/`-folder, rename the folder to `audioslides4web/`. For starting the WebApp load the file `audioslides4web/index.html` in a current version of Firefox, Chrome or Safari.

## Schema for Slide Generation
adapt the JSON-schema `docs/schema` and the JSON data in the folder `docs/db/` to the schema for your requirements. If you want to create your own JSON schema use the [JSON2Schema tool](https://niebert/github.io/JSON2Schema).

<!-- END:   src/readme/usage.md -->
<!-- BEGIN: src/readme/build_process.md -->

## Build Process of `npm run build`
The build process is called by `npm run build` which in turn call `build.js`. If you want to call the build process of `build.js` separately just call `build.js` with `node build.js` from the shell/console.

The templates for building the output are stored in the folder `src/`.

After the build process the `README.md` is generated and if you want to have the table of contents in the file for the concatenation of  files in `src/readme/` listed in `files4build.js` then you must run the DocToc generator for `README.md` by `doctoc README.md` from the shell to update the table of contents in `README.md`.

<!-- END:   src/readme/build_process.md -->
## Build and Compress with Browserify, Watchify, UglifyJS
The NodeJS modules can use `require()`-command. Browsers cannot execute the `require()`-command and other node specific programming features.
* `Browserify` loads the file `src/main.js` as input file and resolves e.g. the `require()`-command and creates an output file in `dist/audioslides4web.brows.js`
* `Watchify` observes any changes in the source files in `src/` and starts on the event of changes the build process of the file `src/main.js` as input file and creates an output file in `dist/audioslides4web.brows.js`.
* `UglifyJS` compresses the code in `dist` and takes the file `dist/audioslides4web.js` and generates the compressed library in `dist/audioslides4web.min.js`. The same is applied for `docs/js/audioslides4web.js` and the output is `docs/js/audioslides4web.min.js`. The compression of the source code can be perform without a total build by `npm run compress`.


### Browserify and Watchify
Browserify and Watchify are used in this repository to control the WebApp-javascript development with the required Javascript libraries installed with [NPM Node.js](https://docs.npmjs.com/getting-started/installing-node) and similar framework world that greatly improve your javascript workflow: Using them, you no longer need to micro-manage your script tags but instead you just declare the libraries each of your client-side modules is using - or you can even create your own reusable modules! Also, installing (or updating) javascript libraries is as easy as running a single command!
* [Additional Information about Browserify and Watchify on GitHub](https://spapas.github.io/2015/05/27/using-browserify-watchify/)
* [Youtube Video about Browserify and Watchify by Kyle Robinson Young 2015/04/16](https://www.youtube.com/watch?v=CTAa8IcQh1U)
In this repository Browserify and Watchify are used for javascript code development with [NPM Node.js](https://docs.npmjs.com/getting-started/installing-node).

### Global Installation of Browserify, Watchify, UglifyJS and DocToc
Requirement: [NPM](https://docs.npmjs.com/getting-started/installing-node) is intalled. Now call for global installation of Browserfy, Watchify, UglifyJS and DocToc by:

`npm install -g browserify watchify uglify-js doctoc`

This is recommended because your will not install Browserfy, Watchify and UglifyJS for all your repositories separately.
* ***Browserfy*** converts `node_modules` in a single library, that can be imported in WebApp. Browserify resolves dependencies and included the required libraries into the bundled javascript code.
* ***Watchify*** watches changes in the source code and runs the build process whenever it detects changes in the your source code.
* ***UglifyJS*** compresses the source code of `dist/class_editor_uml.js` into ```class_editor_uml.min.js``` to reduce download time and WebApp performance during load.
* ***DocToc*** is used to create a helpful table of contents in the README (see [DocToc-Installation]https://github.com/thlorenz/doctoc#installation) for further details on [NPM DocToc](https://www.npmjs.com/package/doctoc) ). Run `doctoc README.md` for updating the table of contents.
* ***jsLint*** is used to check the Javascript code, quality of code can be improved by application of jsLint

### Package Installation of Browserify and Watchify - Alternative
If your prefer that  browserify and watchify is installed with your `npm install` command, save these to modules to your dev-dependecies in your `package.json` by calling

* (Install Browsersify) `npm install browserify --save-dev`
* (Install Watchify) `npm install watchify --save-dev`
* (Install UglifyJS) `npm install uglify-js --save-dev`
* (Install DocToc) `npm install doctoc -g`
* (Install jshint) `npm install jslint -g`

The difference between `--save` and `--save-dev` is, that development dependencies are installed with `npm install` because they are required for the development process of the code but they are not added to the generated Javascript-bundle that are used in the WebApp ClassEditorUML. The `--save-dev` commands for `browserify` and `watchify` will install the two modules with all the the dependencies in `node_modules` and add the dev-dependencies to your `package.json`.
```json
"devDependencies": {
  "browserify": "^14.5.0",
  "watchify": "^3.9.0",
  "uglify-js": "^2.6.2",
  "doctoc":"^1.3.0",
  "lint": "^1.1.2"  
}
```
In the current repository `Browserfy` and `Watchify` are expected to be installed globally, because the `package.json` does not contain the dev-dependencies mentioned above.

### Start Watching the Files with Watchify
Watchify will trigger the `npm run build` process if files were change due to alteration of code. To start watching the files, run the npm-watch script by `npm run watch`, which is defined in `package.json`

### Source JS file and development bundle output
The main JS source file for the build process is `src/main.js`. The output library (resp. output file of build process) is stored in distrubtion library for browser based web-development in `dist/audioslides4web.js`. Compressed code is generated with `UglifyJS`. It takes the `dist/audioslides4web.js` as input file and creates the compressed file `dist/audioslides4web.min.js`.
The compression of `dist/audioslides4web.js` into `dist/audioslides4web.min.js` uses `uglify-js` module and can be started by

  `npm run compress`

## Acknowledgement
Special thanks to the following individual developers and teams of OpenSource JavaScript projects:
* [HandleBars](http://handlebarsjs.com/) the code generation in Javascript was implemented
* [JSON-Editor](https://github.com/jdorn/json-editor) by Jeremy Dorn. The JSON Editor takes a JSON Schema and uses it to generate an HTML form. The JSON-Editor is partially used to edit JSON file of the [JavascriptClassCreator Project](https://niebert.github.io/JavascriptClassCreator) `JSCC`.
The JSON-Editor of Jeremy Dorn has full support for JSON Schema version 3 and 4 and can integrate with several popular CSS frameworks (bootstrap, foundation, and jQueryUI). This would lead to major code reduction of `JSCC` . Refactoring of `JSCC` would make more use of the JSON-Editor features. Check out an interactive demo (demo.html): http://jeremydorn.com/json-editor/
* [Font Awesome Icons - 4.7.0](https://fontawesome.com/v4.7.0/icons/) thanks to [fontawesome.com](https://fontawesome.com) for providing the [free 4.7.0 version](https://fontawesome.com/v4.7.0/icons/) for local application for this WebApp. The [fonts in version 4.7.0](https://fontawesome.com/v4.7.0/icons/) are created by ***[Font Awesome](https://fontawesome.com)*** and
licensed under [SIL OFL 1.1](http://scripts.sil.org/OFL). The javascript-code for injecting the icon into the DOM licensed under [MIT License](http://opensource.org/licenses/mit-license.html). The
[Documentation](https://fontawesome.com/v4.7.0/examples/) for [Font Awesome - 4.7.0](https://fontawesome.com/v4.7.0/icons/) licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).
* Developer [Mihai Bazon](http://lisperator.net/) create UglifyJS, a great tool to handle and parse Javascript Code and minify the Javascript code (see [Source Code of UglifyJS](https://github.com/mishoo/UglifyJS2)).
* The wrapper for UglifyJS is written [Dan Wolff](http://danwolff.se/). His UglifyJS-Online example is used to minify/compress the exported Javascript code of generated JS Classes (For Online Example of the [UglifyJS-Wrapper](https://skalman.github.io/UglifyJS-online/) see source code on https://github.com/Skalman/UglifyJS-online for the Online-Version of the Wrapper.
* Developers of ACE Code Editor https://ace.c9.io (Javascript Editing uses the Editor in iFrames)
* [LoadFile4DOM](https://www.gitlab.com/niehausbert/loadfile4dom) is a library that allows to load files into an application that run completely in a browser without the need to submit data to a server for processing. With this library the users are able load files into your browser application and process the data in the browser and provide the output to the user, without submitting any data to a server. **[Demo LoadFile4DOM](https://niehausbert.gitlab.io/loadfile4dom)**
* [FileSaver.js](https://github.com/eligrey/FileSaver.js) Developer Eli Grey provided the `FileSaver.js` that is used to store created `JSCC` files to the local filesystem. `JSCC` uses the same mechanism of browsers, that allows a `Save as...` in the context menu of a web pages or image. So not uncontrolled write access to your file system is implemented, because users have to select the locations in which the user whats to store the file (e.g. JSON, Javascript or HTML).
* [JointJS](https://github.com/clientIO/joint) JointJS is a JavaScript diagramming library. It can be used to create either static diagrams. JointJS is used in this project to create UML-diagrams, that are interactive diagramming in conjunction and application builder in Javascript.
* [Inheritage for JavaScript with protoypes](http://phrogz.net/js/classes/OOPinJS2.html) by Gavin Kistner
* [3 ways to define a JavaScript class](https://www.phpied.com/3-ways-to-define-a-javascript-class/) by Stoyan Stefanov
* [JQuery](https://jqueryui.com) is used for the theme and standard operations in the Document Object Model (DOM) of HTML-pages. The [JQuery-Themeroller](https://jqueryui.com/themeroller/) was used to create a JQuery theme for JSCC.
* [JSZip](http://stuartk.com/jszip) - LibreOffice files, Geogebra files (Open Source applications) have file extensions that are actually ZIP files. To handle, change and generate those documents in a browser is possible the library JSZIP. Even a small file system for WebApps that can be stored with a folder structure in a ZIP file can be generated in a browser. So [JSZip](http://stuartk.com/jszip) is a multi-functional JavaScript class for generating and reading ZIP files. Thank you for sharing this great library with the Open Source community.

## Libraries required for  `AudioSlides4Web`
The following libraries are necessary for `audioslides4web.js`:


## Libraries for Building and Developement
The following libraries are necessary for building the `audioslides4web`. 
These libraries are not included in `audioslides4web.js`, but e.g. are required in `build.js`.
* Lib: `browserify` Version: `^14.5.0`
* Lib: `build4code` Version: `^0.3.14`
* Lib: `concat-files` Version: `^0.1.1`
* Lib: `doctoc` Version: `^1.3.0`
* Lib: `lint` Version: `^1.1.2`
* Lib: `uglify-js` Version: `^2.6.2`
* Lib: `watchify` Version: `^3.9.0`

## NPM Library Information
* Exported Module Variable: `AudioSlides4Web`
* Package:  `audioslides4web`
* Version:  `1.2.2`   (last build 2020/03/11 9:45:35)
* Homepage: `https://github.com/niebert/audioslides4web#readme`
* License:  MIT
* Date:     2020/03/11 9:45:35
* Require Module with:
```javascript
    const vAudioSlides4Web = require('audioslides4web');
```
* JSHint: installation can be performed with `npm install jshint -g`
<!-- BEGIN: src/readme/tail.md -->
<!-- END:   src/readme/tail.md -->
