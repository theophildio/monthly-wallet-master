// Calculate income and expenses
document.getElementById('calculate').addEventListener('click', function() {
  // Income
  const incomeInput = document.getElementById('income-value');
  const incomeAmount = parseFloat(incomeInput.value);
  // Clear income fields
  incomeInput.value = '';

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
