## Future modifications
The following options are not implemented yet.

### Small Videos instead of Animations
GIF-images can be uploaded into AudioSlides4Web and this allows to use animated slides in the current version.
For this extension of AudioSlides4Web we need to add a button `Add Video` and allow uploading Videos in the `webm` format and embed that as slide with video into AudioSlides4Web.

### Markdown Slides
Instead of uploading an image as slide another option could be the selection of WikiMedia markdown slides as `slide3.wiki` or `slide3.md` as text-based slide, that will be converted by a `markdown2html` converter or by `wtf_wikipedia` into a DZSlides format.

### JSON Schema for Slide Generation
The possible idea of extending AudioSlides4Web will be to use a [JSONEditor](https://github.com/jdorn/json-editor) originally generated and maintained by Jeremy Dorn for storing the generated web-based presentation in a single JSON. With the concept of an [AppLSAC](https://en.wikiversity.org/wiki/AppLSAC) we can load and save this presentation in single JSON and modify single slides.
For this extension we create JSON-schema and store that in`docs/schema` and a sample JSON data in the folder `docs/db/`. to a JSON schema for storing a generated AudioSlides4Web presentation for future modification. If you want to create your own JSON schema use the [JSON2Schema tool](https://niebert/github.io/JSON2Schema).

So it necessary to adapt the JSON-schema `docs/schema` and the JSON data in the folder `docs/db/` to the schema for the requirements of `___PKG_EXPORTVAR___`. If you want to create your own JSON schema use the [JSON2Schema tool](https://niebert/github.io/JSON2Schema) to generate a rapid prototype of a JSON editor.
