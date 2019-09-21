
/* api configration */
let _ml_js_mode = 'develop';

function loadScript(url, callback) {

    url = '/js/'+_ml_js_mode+url;

	var script = document.createElement('script');
	script.src = url;
	script.onload = callback;
	document.getElementsByTagName('head')[0].appendChild(script);
}