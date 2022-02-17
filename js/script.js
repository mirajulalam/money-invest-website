function calculateItem() {
    // inputId calling
    const mainInput = document.getElementById('income-field').value;

    const foodInput = document.getElementById('food-field').value;

    const rentInput = document.getElementById('rent-field').value;

    const clothInput = document.getElementById('clothes-field').value;
    // total calculation
    const totalItemAmmount = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);
    const totalBalance = document.getElementById('total-balance');
    const expencesBalance = document.getElementById('balanceId');
    const balance = parseFloat(mainInput) - totalItemAmmount
    // error handle
    if (isNaN(mainInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothInput)) {
        alert('Please insert a valid number');
        return alert;
    }
    else if (mainInput == '' || foodInput == '' || rentInput == '' || clothInput == '') {
        alert('Please Enter the number input field')
    }
    else if (
        mainInput < 0 ||
        foodInput < 0 ||
        rentInput < 0 ||
        clothInput < 0) {
        alert('Please Insert only positive Number');
    }
    else {

        totalBalance.innerText = balance
        expencesBalance.innerText = totalItemAmmount;
    }
}


function savingAmmount() {
    // savingAmmount calculation
    const mainInput = document.getElementById('income-field').value;
    const savingInput = document.getElementById('saving-input').value;
    const savingText = document.getElementById('saving-ammount');
    const remaingText = document.getElementById('remaing-balance');
    const savingTotalAmmount = (parseFloat(mainInput) * parseFloat(savingInput)) / 100;
    const totalBalance = document.getElementById('total-balance').innerText;
    const remaingAmmount = totalBalance - savingTotalAmmount;
    savingText.innerText = savingTotalAmmount;
    remaingText.innerText = remaingAmmount;
}
// function calling
document.getElementById('calculate-button').addEventListener('click', function () {
    calculateItem();
});
document.getElementById('saving-btn').addEventListener('click', function () {
    savingAmmount();
});