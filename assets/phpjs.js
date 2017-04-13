var phpjs = (function () {
	return {
		__isLoaded: function(name) {
			return (typeof this[name] != 'undefined')
		},
		setup: function(libs) {
			var self = this;
			for(var i = 0; i < libs.length; i++) {
				if(this.__isLoaded(libs[i])) {
						continue;
				}
				
				var xhttp = new XMLHttpRequest();
				xhttp.open("GET", 'dist/scripts/'+libs[i]+'.min.js', true);
				xhttp.send();
				xhttp.libName = libs[i];
				xhttp.onreadystatechange = function() {
				  if (this.readyState == 4 && this.status == 200) {
					var name = this.libName;
					var fn = this.responseText;

					if(fn.substr(0,11) == '"autocall";') {
						eval(fn.substr(11,fn.length - 10));
						self[name] = eval(name + "()");
					} else {
						eval(fn);
						self[name] = eval(name);
					}
				  }
				};
			}
		}
	};
})();
