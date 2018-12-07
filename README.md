# AudioSlides4Web
Audio Presentation for Web in HTML format.

  https://niebert.github.io/audioslides4web

## Online Tool
* Start the Online Tool `AudioSlides4Web` with https://niebert.github.io/audioslides4web
* Fill out the Slide Info - take care about the number of slides - First slide number is by default 0 and last slide is by default 40. Slide 0 is the title page, but you can alter the slide number to 1.
* Adapt the presentation name. The presentation name will be used as basename for the HTML-presentation and for the ZIP file too.
* The ZIP file contains two folders `audio` and `image`.
* The  folder `audio` contains all the audio comments for the slides. The file `audio/audio0.mp3` is the audio comment for the slide `images/img0.png` and e.g. `audio/audio15.mp3` is the audio comment for the slide `images/img15.png`.
* You can record the audio comments with Open Source software [Audacity](https://www.audacityteam.org/), which you should store in MP3 format.

## Wikiversity
This repository was developed in the context of a Wikiversity course for Audio Slides, i.e. lean webbased presentation with audio comments and images as slides, that can be used in bandwidth limited environments in comparison to Youtube videos (see [Wikiversity AudioSlides4Web](https://en.wikiversity.org/wiki/AudioSlides4Web)).

## Used Libraries
The following libraries are used for the repository:
* [Editor ACE](hhttps://ace.c9.io/)  to edit the generated source code.
* [Handlebars4Code](https://www.github.com/niebert/Handlebars4Code) - see [Demo of Handlebars4Code](https://niebert.github.io/Handlebars4Code)
* [LinkParam](https://www.github.com/niebert/LinkParam) - see [Demo of Handlebars4Code](https://niebert.github.io/LinkParam)


## Acknowledgement
Special thanks to the following individual developers and teams of OpenSource JavaScript projects:
* [JSON-Editor](https://github.com/jdorn/json-editor) by Jeremy Dorn. The JSON Editor takes a JSON Schema and uses it to generate an HTML form. The JSON-Editor is partially used to edit JSON file of the Javascript Project in `JSCC` . The schemes of the JSON subtree are stored in the folder `/tpl` of the JavascriptClassCreator. The full potential of the JSON-Editor was not used in `JSCC` . This can be approved in the future.
The JSON-Editor of Jeremy Dorn has full support for JSON Schema version 3 and 4 and can integrate with several popular CSS frameworks (bootstrap, foundation, and jQueryUI). This would lead to major code reduction of `JSCC` . Refactoring of `JSCC` would make more use of the JSON-Editor features. Check out an interactive demo (demo.html): http://jeremydorn.com/json-editor/
* Developer [Mihai Bazon](http://lisperator.net/) create UglifyJS, a great tool to handle and parse Javascript Code and minify the Javascript code (see [Source Code of UglifyJS](https://github.com/mishoo/UglifyJS2)).
* The wrapper for UglifyJS is written [Dan Wolff](http://danwolff.se/). His UglifyJS-Online example is used to minify/compress the exported Javascript code of generated JS Classes (For Online Example of the [UglifyJS-Wrapper](https://skalman.github.io/UglifyJS-online/) see source code on https://github.com/Skalman/UglifyJS-online for the Online-Version of the Wrapper.
* Developers of ACE Code Editor https://ace.c9.io (Javascript Editing uses the Editor in iFrames)
* [FileSaver.js](https://github.com/eligrey/FileSaver.js) Developer Eli Grey provided the `FileSaver.js` that is used to store created `JSCC` files to the local filesystem. `JSCC` uses the same mechanism of browsers, that allows a `Save as...` in the context menu of a web pages or image. So not uncontrolled write access to your file system is implemented, because users have to select the locations in which the user whats to store the file (e.g. JSON, Javascript or HTML).
* [JointJS](https://github.com/clientIO/joint) JointJS is a JavaScript diagramming library. It can be used to create either static diagrams. JointJS is used in this project to create UML-diagrams, that are interactive diagramming in conjunction and application builder in Javascript.
* [Inheritage for JavaScript with protoypes](http://phrogz.net/js/classes/OOPinJS2.html) by Gavin Kistner
* [3 ways to define a JavaScript class](https://www.phpied.com/3-ways-to-define-a-javascript-class/) by Stoyan Stefanov
* [JQuery](https://jqueryui.com) is used for the theme and standard operations in the Document Object Model (DOM) of HTML-pages. The [JQuery-Themeroller](https://jqueryui.com/themeroller/) was used to create a JQuery theme for JSCC.
