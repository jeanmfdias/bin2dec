const $ = document.querySelector.bind(document);

let binaryField = $('#binaryField');
let errorsLabel = $('#errorsLabel');
let decimalField = $('#decimalField');
let btnCalculate = $('#btnCalculate');

binaryField.addEventListener('keyup', (event) => {
    let errors = '';
    let value = binaryField.value
        .split("")
        .map((item) => { 
            if (item == '0' || item == '1') {
                return item
            } else {
                errors = `Don't enter with number different of 0 or 1.`
            }
        })
        .join("");
    
    binaryField.value = value;
    errorsLabel.textContent = errors;
    decimalField.value = '';
});

btnCalculate.addEventListener('click', (event) => {
    let value = binaryField.value.split("");
    let total = value.length;
    let decimal = 0;
    let j = 0;
    for (let i = 1; i <= value.length; i++) {
        decimal += parseInt(value[total - i]) * (2 ** j);
        j++;
    }

    decimalField.value = decimal;
    errorsLabel.textContent = '';
});