
function TheCatApi(options) {
	var self = this;

	self.options = options;

	if (document.readyState == "complete") {
		self.ready();
	} else {
		window.addEventListener('load', function() {
			self.ready();
		}, false);		
	}
}

TheCatApi.prototype.ready = function() {
	var target = (this.options && this.options.target) ? document.getElementById(this.options.target) : document.body;

	target.style.background = "url(http://thecatapi.com/api/images/get?format=src) no-repeat";
	target.style.backgroundSize = "100%";
	target.style.backgroundPosition = "center";

	if (target.tagName == "DIV" && target.style.height === "") {
		target.style.height = "100%";		
	}
	
}


module.exports = TheCatApi;