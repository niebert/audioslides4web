<!-- BEGIN: src/readme/usage.md -->

## Usage
First of all try to run the basic online tool to create a ZIP file with folders and HTML file that embeds a images (PNG-Files) in an HTML presentation. As underlying HTML presentation framework DZSlides was used to have a light weight framework with a single file.
* Start the Online Tool `___PKG_EXPORTVAR___` with https://___PKG_GITHUBUSER___.github.io/___PKG_EXPORTVAR___
* Fill out the Slide Info - take care about the number of slides - First slide number is by default 0 and last slide is by default 40. Slide 0 is the title page, but you can alter the slide number to 1.
* Adapt the presentation name. The presentation name will be used as basename for the HTML-presentation and for the ZIP file too.
* The ZIP file contains two folders `audio` and `image`.
* The  folder `audio` contains all the audio comments for the slides. The file `audio/audio0.mp3` is the audio comment for the slide `images/img0.png` and e.g. `audio/audio15.mp3` is the audio comment for the slide `images/img15.png`.
* You can record the audio comments with Open Source software [Audacity](https://www.audacityteam.org/), which you should store in MP3 format.
* Press Download ZIP and you will get the ZIP folder structure with the presentation as `audio_slides.zip`.

## Quick Start for Offline Use
Download the `https://www.github.com/___PKG_GITHUBUSER___/___PKG_EXPORTVAR___/archive/master.zip` and unzip the file. The unzipped folder contains a `docs/`-folder.
Just copy the `docs/`-folder, rename the folder to `___PKG_NAME___` and adapt the JSON-schema `docs/schema` and the JSON data in the folder `docs/db/` to the schema for your requirements. If you want to create your own JSON schema use the [JSON2Schema tool](https://niebert/github.io/JSON2Schema).

<!-- END:   src/readme/usage.md -->
