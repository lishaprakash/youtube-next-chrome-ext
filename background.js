// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query( { 'url' : "https://www.youtube.com/*"}, function(tabs) {
    //extract data
    chrome.tabs.executeScript(tabs[0].id, { file: "jquery-2.2.0.min.js" }, function() {
    chrome.tabs.executeScript(tabs[0].id, { file: "content.js" });
    });
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "update_tab" ) {
      newtab = "https://www.youtube.com" + request.url 
      chrome.tabs.query( { 'url' : "https://www.youtube.com/*"}, function(tabs) {
      tabid = tabs[0].id;
      });
      console.log(newtab);
      chrome.tabs.update(tabid, {"url": newtab});
    }
  }
);