chrome.browserAction.onClicked.addListener(function () {
  chrome.browserAction.getBadgeText({}, function (text) {
    if(text.length) {
      toggleFighting({fighting: false, badge: ''});
    } else {
      toggleFighting({fighting: true, badge: '!!!'});
    }
  });
});

function toggleFighting(status) {
  chrome.browserAction.setBadgeText({text: status.badge});

  // get active tab
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, status);
  });
}
