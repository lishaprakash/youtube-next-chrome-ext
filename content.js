// content.js
var firstHref = $('.content-wrapper a:first').attr('href');     
chrome.runtime.sendMessage({"message": "update_tab", "url": firstHref});