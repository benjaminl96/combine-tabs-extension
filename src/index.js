chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.windows.getAll({ populate: true }, function (windows) {
    const targetWindowId = windows[0].id; // Choose the first window as the target window

    for (let i = 1; i < windows.length; i++) {
      const window = windows[i];

      for (let j = 0; j < window.tabs.length; j++) {
        const tab = window.tabs[j];
        chrome.tabs.move(tab.id, { windowId: targetWindowId, index: -1 });
      }
    }
  });
});
