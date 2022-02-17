// Calculate income and expenses
document.getElementById('calculate').addEventListener('click', function() {
  // Income
  const incomeInput = document.getElementById('income-value');
  const incomeAmount = parseFloat(incomeInput.value);
  if (incomeInput.value == 0) {
    console.log('opps! income field is empty.');
  } else if (incomeInput.value > 0) {
    // Expenses
    const foodCost = document.getElementById('food-value');
    const foodCostAmount = parseFloat(foodCost.value);
    const rentCost = document.getElementById('rent-value');
    const rentCostAmount = parseFloat(rentCost.value);
    const clotheCosts = document.getElementById('clothe-values');
    const clotheCostsAmount = parseFloat(clotheCosts.value);
    if (foodCost.value == 0 && rentCost.value == 0 && clotheCosts.value == 0) {
      console.log('opps! expenses fields are empty.')
    } else if (foodCost.value > 0 && rentCost.value == 0 && clotheCosts.value == 0) {
      console.log('opps! rent and clothes fields are empty.');
    } else if (foodCost.value > 0 && rentCost.value > 0 && clotheCosts.value == 0) {
      console.log('opps! clothes field is empty.');
    } else if (foodCost.value == 0 && rentCost.value > 0 && clotheCosts.value > 0) {
      console.log('opps! food field is empty.')
    } else if (foodCost.value > 0 && rentCost.value == 0 && clotheCosts.value > 0) {
      console.log('opps! rent field is empty.')
    } else if (foodCost.value > 0 && rentCost.value > 0 && clotheCosts.value > 0) {
      const calcExpenses = foodCostAmount + rentCostAmount + clotheCostsAmount;
      const totalBalance = incomeAmount - calcExpenses;
      const expense = document.getElementById('expenses');
      const displayExpense = parseFloat(expense.innerText);
      if (calcExpenses > incomeAmount) {
        console.log('opps! over expenses. Reduce your expenses.')
      } else {
        expense.innerText = calcExpenses;
        const balance = document.getElementById('balance');
        const displayBalance = parseFloat(balance.innerText);
        balance.innerText = totalBalance;
      }
      // Clear expenses fields
      foodCost.value = '';
      rentCost.value = '';
      clotheCosts.value = '';
    } else {
      console.log('opps! negative or string value is not allow expense field.')
    }
  } else {
    console.log('opps! negative or string value is not allow in income field.');
  }
});

