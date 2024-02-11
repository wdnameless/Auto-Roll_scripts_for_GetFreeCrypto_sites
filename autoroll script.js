// ==UserScript==
// @name         Auto-Roll script for coins crane
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically clicks the roll button when it becomes available
// @author       Your Name
// @match        https://app.freeethereum.com/*
// @match        https://app.free-ltc.com/*
// @match        https://app.freebinancecoin.com/*
// @match        https://app.free-tron.com/*
// @match        https://app.freebitcoin.io/*
// @match        https://app.coinfaucet.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Функция для проверки доступности кнопки "ROLL" и нажатия на нее
    function clickRollButtonWhenAvailable() {
        var rollButton = document.querySelector('button.p-button-lg[data-pc-name="button"][data-pc-section="root"]'); // Выбираем кнопку "ROLL" по атрибутам данных
        if (rollButton && !rollButton.disabled) {
            rollButton.click(); // Нажимаем на кнопку "ROLL"
            console.log("Roll button clicked...");
        }
    }

    // Вызываем функцию каждые 5 секунд для проверки доступности кнопки "ROLL"
    setInterval(clickRollButtonWhenAvailable, 5000);
})();
