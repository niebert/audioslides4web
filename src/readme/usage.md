<!-- BEGIN: src/readme/usage.md -->

## Usage
First of all try to run the basic online tool to create a ZIP file with folders and HTML file that embeds a images (PNG-Files) in an HTML presentation. As underlying HTML presentation framework DZSlides was used to have a light weight framework with a single file.
* Start the Online Tool `___PKG_EXPORTVAR___` with ___PKG_DEMOLINK___
* Fill out the Slide Info - take care about the number of slides - First slide number is by default 0 and last slide is by default 40. Slide 0 is the title page, but you can alter the slide number to 1.
* Adapt the presentation name. The presentation name will be used as basename for the HTML-presentation and for the ZIP file too.
* The ZIP file contains two folders `audio` and `image`.
* The  folder `audio` contains all the audio comments for the slides. The file `audio/audio0.mp3` is the audio comment for the slide `images/img0.png` and e.g. `audio/audio15.mp3` is the audio comment for the slide `images/img15.png`.
* You can record the audio comments with Open Source software [Audacity](https://www.audacityteam.org/), which you should store in MP3 format.
* Press Download ZIP and you will get the ZIP folder structure with the presentation as `audio_slides.zip`.

## Quick Start
* Generate PNG files of you presentation or create a PDF document of your presentation (e.g. HTML export with [LibreOffice](https://www.libreoffice.org) and you will get the slides as a sequence of image properly enumerated with `img0.png`, `img1.png`, `img2.png`, ....
* Record Audio Comments with [Audacity](https://www.audacityteam.org/) for recording of your comments for the slides and save your audio comments as files `audio0.mp3`, `audio1.mp3`, `audio2.mp3`, ....
* The audio files with `audio2.png` will be mapped to the slide `img2.png`, so save the recorded audio files  according to the slide index 2 with `audio2.mp3`.
* Start [`___PKG_EXPORTVAR___`](___PKG_DEMOLINK___) directly from the server or download the [ZIP-file](___PKG_URL4ZIP___) and unzip the file. The unzipped folder contains a `docs/`-folder. This folder contains the relevant WebApp ([AppLSAC-2](https://en.wikiversity.org/wiki/AppLSAC)). The other directories are required for building the WebApp (e.g. the folder `src/` contains the sources for the build process `npm run build` for developers).
For offline use just copy the `docs/`-folder, rename the folder to `___PKG_NAME___/`. For starting the WebApp load the file `___PKG_NAME___/index.html` in a current version of Firefox, Chrome or Safari.

<!-- END:   src/readme/usage.md -->
