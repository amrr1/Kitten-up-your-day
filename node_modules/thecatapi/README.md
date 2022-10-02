The Cat Api
=========

Browserify module for [thecatapi.com](thecatapi.com)

It will put a random cat to your document.body or target div's background image. 


Usage
-----

```javascript
var thecatapi = require('thecatapi');
var cat = new thecatapi();
```

or 

```javascript
var thecatapi = require('thecatapi');
var cat = new thecatapi({target: 'catDivId'});
```

Example Cat
-----------

![alt text](http://thecatapi.com/api/images/get?format=src "Example Cat")