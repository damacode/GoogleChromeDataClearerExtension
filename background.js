/**
chrome.tabs.query({}, setup)
chrome.tabs.onCreated.addListener(function() {
	chrome.tabs.query({}, setup);
});
chrome.tabs.onRemoved.addListener(function() {
	chrome.tabs.query({}, setup);
});
function setup(tabs){
	if(tabs.length == 0 && localStorage["closeclear"] == 'true'){
		clear();
	}
}
**/
if(localStorage["startclear"] == 'true'){
	clear();
}

function clear() {
	chrome.browsingData.remove({ "since" : 0 }, {
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "serverBoundCertificates": true,
        "pluginData": true,
        "passwords": false,
        "webSQL": true,
      }, null);
}