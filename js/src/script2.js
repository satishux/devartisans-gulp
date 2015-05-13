(function () {
    "use strict";

    var el1 = document.getElementById('main-paragraph'),
        increaseSizeBtn = document.getElementById('size-increase'),
        decreaseSizeBtn = document.getElementById('size-decrease'),
        fontSize = parseFloat(window.getComputedStyle(el1, null).getPropertyValue('font-size'));
        
    increaseSizeBtn.addEventListener('click', function () {

        el1.style.fontSize = ++fontSize + 'px';

    }, false);

    decreaseSizeBtn.addEventListener('click', function () {
        if (fontSize < 10) {
            return;
        }

        el1.style.fontSize = --fontSize + 'px';

    }, false);

}());