var phpjs = (function () {
	return {
		setup: function(libs) {
			var self = this;
			for(var i = 0; i < libs.length; i++) {
				var libName = libs[i];
				var xhttp = new XMLHttpRequest();
				xhttp.open("GET", 'dist/scripts/'+libName+'.min.js', true);
				xhttp.send();
				xhttp.libName = libName;
				xhttp.onreadystatechange = function() {
				  if (this.readyState == 4 && this.status == 200) {
					eval(this.responseText);
					self[xhttp.libName] = eval(xhttp.libName + '()');
				  }
				};
			}
		}
	};
})();

