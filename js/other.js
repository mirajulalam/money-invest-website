// // const foodField = document.getElementById('food-Input');
// // const rentField = document.getElementById('rent-Input');
// // const clothesField = document.getElementById('clothes-Input');

// // const totalItem = parseFloat(foodField.value) + parseFloat(rentField.value) + parseFloat(clothesField.value);

// // console.log(totalItem);
// // ID SELECTING
// const incomeField = document.getElementById("income-field");
// const foodField = document.getElementById("food-field");
// const rentField = document.getElementById("rent-field");
// const clothesField = document.getElementById("clothes-field");
// const calculateBtn = document.getElementById("calculate-button");
// const balanceId = document.getElementById("balanceId");

// const totalExpenses = document.getElementById("total-expenses");
// const saveField = document.getElementById("save_field");
// const saveBtn = document.getElementById("save-btn-hero");
// const savingAmount = document.getElementById("saving-amount");
// const totalRemainingBalanece = document.getElementById("remaining-balance");

// // TOTAL EXPENSES
// calculateBtn.addEventListener("click", function () {
//     isEmptyError();
//     handleError();
//     addition();
//     totalBalance();
// });

// // Addition Function
// function addition() {
//     const foodAmount = parseInt(foodField.value);
//     const rentAmount = parseInt(rentField.value);
//     const clothesAmount = parseInt(clothesField.value);

//     const TotalExpense = foodAmount + rentAmount + clothesAmount;
//     console.log(TotalExpense);
//     totalExpenses.innerText = TotalExpense.toFixed(0);
// }

// // BALANCE
// function totalBalance() {
//     const income = parseInt(incomeField.value);
//     const totalExpensesValue = parseInt(totalExpenses.innerText);
//     const balance = income - totalExpensesValue;
//     balanceId.innerText = balance.toFixed(0);
// }

// // Saving Function Click
// saveBtn.addEventListener("click", function () {
//     handleError();
//     savePrice();
// });

// // SAVING
// function savePrice() {
//     var numVal1 = parseInt(balanceId.innerText);
//     var numVal2 = parseInt(saveField.value);

//     var totalValue = numVal1 * (numVal2 / 100);
//     savingAmount.innerText = totalValue.toFixed(0);

//     totalRemainingBalanece.innerText =
//         balanceId.innerText - savingAmount.innerText;
// }

// /* ERROR HANDLING */
// function isEmptyError() {
//     if (incomeField.value === "") {
//         alert("Field Must be not Empty");
//         return;
//     }
// }

// function handleError() {
//     if (
//         (incomeField.value ||
//             foodField.value ||
//             rentField.value ||
//             clothesField.value ||
//             saveField.value) < 0
//     ) {
//         alert("Please Insert only positive Number");
//         return;
//     }
//     else if (
//         isNaN(incomeField.value) ||
//         isNaN(foodField.value) ||
//         isNaN(rentField.value) ||
//         isNaN(clothesField.value) ||
//         isNaN(saveField.value) === true
//     ) {
//         alert("Please insert a valid number");
//         return;
//     }
// }
