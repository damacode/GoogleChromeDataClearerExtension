document.addEventListener('DOMContentLoaded', on_load);
function on_load(){
  restore_options();
  document.getElementById('save').onclick = handle_save;
  document.getElementById('button').onclick = handle_click;
}
function restore_options() {
  if(localStorage["startclear"] == 'true'){
    document.getElementById('startclear').checked = true;
  }else{
    document.getElementById('startclear').checked = false;
  }
  if(localStorage["closeclear"] == 'true'){
    document.getElementById('closeclear').checked = true;
  }else{
    document.getElementById('closeclear').checked = false;
  }
}
function handle_save() {
  save_options();
  overlay('Options saved.', 1000);
}
function save_options() {
  localStorage["startclear"] = document.getElementById('startclear').checked;  
  localStorage["closeclear"] = document.getElementById('closeclear').checked;  
}
function handle_click() {
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
      }, overlay('Data cleared.', 1000));
}
function overlay(message, time) {
    var success = document.createElement('div');
    success.classList.add('overlay');
    success.setAttribute('id', 'success');
    success.setAttribute('role', 'alert');
    success.textContent = message;
    document.body.appendChild(success);

    setTimeout(function() { success.classList.add('visible'); }, 10);
    setTimeout(function() { success.classList.remove('visible'); }, time);
}


