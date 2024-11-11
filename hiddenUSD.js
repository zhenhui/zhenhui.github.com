// ==UserScript==
// @name         投放系统-隐藏货币
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Hide elements with the CSS class .ant-typography.ant-typography-secondary by adding display:none style
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to hide elements with the specific class
    function hideElements() {
        const elements = document.querySelectorAll('.ant-typography.ant-typography-secondary');
        elements.forEach(element => {
            element.style.display = 'none';
        });
    }

    // Initial hide for elements present at page load
    hideElements();

    // Set up a MutationObserver to watch for future DOM changes
    const observer = new MutationObserver(hideElements);

    // Observe the entire document for child element changes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
