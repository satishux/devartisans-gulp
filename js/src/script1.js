(function () {
    "use strict";

    var el = document.getElementById('main-paragraph'),
        textBox = document.getElementById('user-input'),
        defaultValue = el.innerText;


    textBox.addEventListener('keyup', function (event) {
        el.innerText = event.target.value;
        if(event.target.value === "")
        {
            el.innerText = defaultValue;
        }
    }, false);

}());