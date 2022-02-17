// Calculate income and expenses
document.getElementById('calculate').addEventListener('click', function() {
  // Income
  const incomeInput = document.getElementById('income-value');
  const incomeAmount = parseFloat(incomeInput.value);

  // Expenses
  const foodCost = document.getElementById('food-value');
  const foodCostAmount = parseFloat(foodCost.value);
  const rentCost = document.getElementById('rent-value');
  const rentCostAmount = parseFloat(rentCost.value);
  const clotheCosts = document.getElementById('clothe-values');
  const clotheCostsAmount = parseFloat(clotheCosts.value);
  const calcExpenses = foodCostAmount + rentCostAmount + clotheCostsAmount;
  console.log(calcExpenses)
  // Clear expenses fields
  foodCost.value = '';
  rentCost.value = '';
  clotheCosts.value = '';

  // Total Expenses and Balance
  const totalBalance = incomeAmount - calcExpenses;
  console.log(totalBalance);
  const expense = document.getElementById('expenses');
  const displayExpense = parseFloat(expense.innerText);
  expense.innerText = calcExpenses;
  const balance = document.getElementById('balance');
  const displayBalance = parseFloat(balance.innerText);
  balance.innerText = totalBalance;
});

// Saving percentage 
document.getElementById('saving').addEventListener('click', function() {
  // Income amount
  const incomeInput = document.getElementById('income-value');
  const incomeAmount = parseFloat(incomeInput.value);
  // Percentage amount
  const inputPerc = document.getElementById('perc-value');
  const inputPercValue = inputPerc.value;
  const getPerc = (incomeAmount / 100) * inputPercValue;
  // Show saving amount
  const getSavingAmount =document.getElementById('saving-amount');
  const displaySavingAmount = parseFloat(getSavingAmount.innerText);
  const savimgAmount = document.getElementById('saving-amount');
  const displayTotalSavingAmount = parseFloat(savimgAmount.innerText);
  savimgAmount.innerText = getPerc;
  // Clear percentage
  inputPerc.value = '';
  // Remaining previous balance
  const previousBalance = document.getElementById('balance');
  const displayPreviousBalance = parseFloat(previousBalance.innerText);
  // Remaining balance
  const remainingBalance = document.getElementById('remaining-amount');
  const displayRemainingBalance = parseFloat(remainingBalance.innerText);
  remainingBalance.innerText = displayPreviousBalance - getPerc;

  // Clear income fields
  incomeInput.value = '';
});
