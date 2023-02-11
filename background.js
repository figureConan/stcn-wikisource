function setSimplifiedChinese() {
    chrome.action.setTitle({title: '简体'});
    chrome.action.setBadgeText({ text: '简' });
}

function setTradionnalChinese() {
    chrome.action.setTitle({title: '繁体'});
    chrome.action.setBadgeText({ text: '繁' });
}

function setDefaultChinese() {
    chrome.action.setTitle({title: '不转换'});
    chrome.action.setBadgeText({ text: '' });
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log('onUpdated tabId ' + tabId);
    console.log(`onUpdated changeInfo ${JSON.stringify(changeInfo)}`);
    console.log(`onUpdated tab ${JSON.stringify(tab)}`);

    if (tab.url.indexOf('zh-hans') !== -1) {
        setSimplifiedChinese();
    } else if (tab.url.indexOf('zh-hant') !== -1) {
        setTradionnalChinese();
    } else {
        setDefaultChinese();
    }
});
