//Ticket count handler
function handleTicketCount(item, isIncrease) {
    const ticketCount = getStringToNum(item);// store  ticket count
    let ticketNewCount = ticketCount;
    console.log(typeof (ticketCount));
    if (isIncrease) {
        ticketNewCount = ticketCount + 1;
    } else {
        if (ticketNewCount > 0) {
            ticketNewCount = ticketCount - 1;
        }
    }
    getElementId(item + '-count').value = ticketNewCount;//display ticket count

    calculateAmount(); // calculate the amount
}

//calculate all type amount
function calculateAmount() {
    const firstClassAmount = getTotalAmount('firstClass');
    const economyAmount = getTotalAmount('economy');

    const subTotalAmount = firstClassAmount + economyAmount;
    getElementId('subtotal-amount').innerText = subTotalAmount;

    const vatAmount = subTotalAmount * 0.1;// charge for 10% vat
    getElementId('vat-amount').innerText = vatAmount;//display vet

    const totalAmount = subTotalAmount + vatAmount;//calculate total amount
    getElementId('total-amount').innerText = totalAmount;
}

// get total amount
function getTotalAmount(item) {
    const ticketCount = getStringToNum(item);
    let ticketAmount = 0;
    if (item == 'firstClass') {
        ticketAmount = ticketCount * 150;
    } else {
        ticketAmount = ticketCount * 100;
    }
    return ticketAmount;
}

//get number from string 
function getStringToNum(string) {
    let inputId = getElementId(string + '-count');
    return parseInt(inputId.value);
}

// bonus
function bookNow() {
    //  traveling place
    getElementId('display-from').innerText = getElementId('traveling-from').value;
    getElementId('display-to').innerText = getElementId('traveling-to').value;

    //  traveling date
    getElementId('display-departure-date').innerText = getElementId('departure').value;
    getElementId('display-return-date').innerText = getElementId('return').value;

    // first class information
    getElementId('firsts-class').innerText = getElementId('firstClass-count').value
    getElementId('fist-class-price').innerText = getElementId('firstClass-count').value * 150;

    //  economy information
    getElementId('economy-class').innerText = getElementId('economy-count').value;
    getElementId('economy-class-price').innerText = getElementId('economy-count').value * 100;

    //  subtotal information
    getElementId('subtotal-price').innerText = getElementId('subtotal-amount').innerText;

    //  vat information
    getElementId('vat').innerText = getElementId('vat-amount').innerText;

    //  total information
    getElementId('total-count').innerText = parseInt(getElementId('firstClass-count').value) + parseInt(getElementId('economy-count').value);
    getElementId('total-price').innerText = getElementId('total-amount').innerText;
}

// get element id 
function getElementId(id) {
    return document.getElementById(id);
}