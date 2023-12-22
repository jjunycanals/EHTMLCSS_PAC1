let values = document.querySelectorAll(".num");
let interval = 5000;

values.forEach(value => {
    let startValue = 0;
    let endvalue = parseInt(value.getAttribute("data-val"));
    let duration = Math.floor (interval/endvalue);
    let counter = setInterval(function () {
        startValue += 1;
        value.textContent = startValue;
        if (startValue == endvalue) {
            clearInterval(counter);
        }
    }, duration);
})