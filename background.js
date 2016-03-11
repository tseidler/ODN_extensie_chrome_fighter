chrome.browserAction.onClicked.addListener(function () {
  chrome.browserAction.getBadgeText({}, function (text) {
    var badgeText = text ? '' : 'Go!';
    chrome.browserAction.setBadgeText({'text': badgeText});
  });
});
