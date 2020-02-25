const $ = document.querySelector.bind(document);

let binaryField = $('#binaryField');
let errorsLabel = $('#errorsLabel');
let decimalCovertedLabel = $('#decimalCovertedLabel');

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
    
    errorsLabel.textContent = errors;
    binaryField.value = value;
});