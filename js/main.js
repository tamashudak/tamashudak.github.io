function calcAmount() {
    let price = 1000;
    let transportFee = 500;
    let amountInput = document.querySelector("input[name ='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if ( amountNumber>10) { alert("maximum 10 db hamburger rendelhető")}
    else if ( amountNumber<1) { alert ("Legalább 1 hamburgert kell rendelni")}
    else {

        amount = price * amountNumber;
        amount = (amount <5000) ? amount + transportFee : amount
        showAmount.innerHTML = amount;
    }
}

let toppings = [
    "Szalonna",
    "Sajt",
    "Bacon",
    "Szarvasgomba",
    "Hot chilli szósz"
];

let toppingsSelect = document.querySelector("#top-input");
let i=0
while (i < toppings.length) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = toppings[i];
    toppingsSelect.appendChild(option);
    i++;
    
}