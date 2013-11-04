'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

(function() {


    (function() {


        function Smile() {
            chrome.tabs.onUpdated.addListener(this.tabUpdated);
        }

        Smile.prototype.tabUpdated = function (tabID, changeInfo, tab) {
            if (tab.url && tab.url.match('www.amazon.com')) {
                chrome.tabs.update(tabID, {
                    url: tab.url.replace('www.amazon.com', 'smile.amazon.com')
                });
            }
        };

        new Smile();
    })();

})();
