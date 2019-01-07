

## Extension of Library `Handlebars`
The library `AudioSlides4Web` extends the library `Handlebars` with additional feature and an extended API, so  `AudioSlides4Web` inherits all attributes and methods from `Handlebars` 
The extension for `AudioSlides4Web`  from `Handlebars` can defined with the following code:
```javascript
AudioSlides4Web.prototype = new Handlebars();
// Constructor for instances of 'AudioSlides4Web' must be updated.
// Otherwise constructor of 'Handlebars' is called
AudioSlides4Web.prototype.constructor=AudioSlides4Web;
```
For further details see http://phrogz.net/js/classes/OOPinJS2.html and explanation for inheritance with JavaScript.
