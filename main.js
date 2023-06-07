/*DOM Elments*/
const buttons = document.getElementById('buttons');
const inputBill = document.getElementById('bill');
const inputTip = document.getElementById('tip');
const inputNumberOfPeople = document.getElementById('number');
const resultsTipAmoun = document.getElementById('tipAmoun');
const resultsTotal = document.getElementById('total');
const reset = document.getElementById('reset');

/*Vars*/
let selectedInput;
let bill = 0.00, tip = 0.00, numberOfPeople = 0, tipAmount = 0.00, total = 0.00;

/*Events*/
//buttons event  
buttons.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    selectedInput && selectedInput.classList.remove('selected');
    selectedInput = e.target;

    if (selectedInput.type === 'button') {

        inputTip.value = "";

        selectedInput.name === 'tip' && (selectedInput.value = '')

        selectedInput.classList.add('selected');
        tip = parseInt(selectedInput.value) / 100;

        calculateTip();
    }

});

// bill event
inputBill.addEventListener('input', () => {

    bill = parseFloat(inputBill.value).toFixed(2)

    handleErrors(inputBill);

    calculateTip();
})
// tip event
inputTip.addEventListener('input', () => {

    tip = parseFloat(inputTip.value) / 100

    calculateTip();

})
// number of peple event
inputNumberOfPeople.addEventListener('input', () => {

    numberOfPeople = parseInt(inputNumberOfPeople.value);

    handleErrors(inputNumberOfPeople);

    calculateTip();
})
// buttom reset
reset.addEventListener('click', resetAll);

/*functions*/
// evitar cero en los inputs bill and people
function handleErrors(input) {

    let container = input.parentNode.classList;

    parseFloat(input.value) === 0 ?
        container.add('error') :
        container.remove('error');
}

// calcular las propinas
function calculateTip() {

    if (bill > 0 && tip > 0 && numberOfPeople > 0) {

        tipAmount = (bill * tip) / numberOfPeople;

        total = (bill / numberOfPeople) + tipAmount;

        resultsTipAmoun.innerHTML = `$${tipAmount.toFixed(2)}`;
        resultsTotal.innerHTML = `$${total.toFixed(2)}`;
    }

}

// reset app
function resetAll() {
    inputBill.value = "";
    inputTip.value = "";
    inputNumberOfPeople.value = "";
    resultsTipAmoun.innerHTML = `$0.00`;
    resultsTotal.innerHTML = `$0.00`;
    bill = 0.00;
    tip = 0.00;
    numberOfPeople = 0;
    tipAmount = 0.00;
    total = 0.00;
}



