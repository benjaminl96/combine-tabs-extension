document.addEventListener('DOMContentLoaded', function () {
  const combineBtn = document.getElementById('combineBtn');

  combineBtn.addEventListener('click', function () {
    chrome.extension.getBackgroundPage().chrome.browserAction.onClicked.dispatch();
  });
});
