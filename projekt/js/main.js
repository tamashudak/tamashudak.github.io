function calcAmount() {
    let price = 1000;
    let transportFee = 500;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    let showAmount = document.querySelector("span.show-amount");
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if (amountNumber > 10) {alert("Maximum 10 db hamburger rendelhető")}
    else if (amountNumber <1) {alert("legalább 1 terméket ki kell választani!")}
    else {
        let amount = price * amountNumber;
        amount = (amount < 5000) ? amount + transportFee : amount;
        showAmount.innerHTML = amount;
    }

    

}