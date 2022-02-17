// Calculate income and expenses
document.getElementById('calculate').addEventListener('click', function() {
  // Income
  const incomeInput = document.getElementById('income-value');
  const incomeAmount = parseFloat(incomeInput.value);
  if (incomeInput.value == 0) {
    const incomeEmptyError = document.getElementById('income-empty');
    incomeEmptyError.style.display = 'block';
    // Clear income fields
    incomeInput.value = '';
  } else if (incomeInput.value > 0) {
    // Expenses
    const foodCost = document.getElementById('food-value');
    const foodCostAmount = parseFloat(foodCost.value);
    const rentCost = document.getElementById('rent-value');
    const rentCostAmount = parseFloat(rentCost.value);
    const clotheCosts = document.getElementById('clothe-values');
    const clotheCostsAmount = parseFloat(clotheCosts.value);
    // Error message hide
    const incomeEmptyError = document.getElementById('income-empty');
    incomeEmptyError.style.display = 'none';
    const incomeNanError = document.getElementById('income-nan');
    incomeNanError.style.display = 'none';
    if (foodCost.value == 0 && rentCost.value == 0 && clotheCosts.value == 0) {
      const expensesEmptyError = document.getElementById('expenses-empty');
      expensesEmptyError.style.display = 'block';
      const foodEmptyError = document.getElementById('food-empty');
      foodEmptyError.style.display = 'none';
      const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
      rentClotheEmptyError.style.display = 'none';
      const rentEmptyError = document.getElementById('rent-empty');
      rentEmptyError.style.display = 'none';
      const clotheEmptyError = document.getElementById('clothe-empty');
      clotheEmptyError.style.display = 'none';
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'none';
    } else if (foodCost.value > 0 && rentCost.value == 0 && clotheCosts.value == 0) {
      const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
      rentClotheEmptyError.style.display = 'block';
      const expensesEmptyError = document.getElementById('expenses-empty');
      expensesEmptyError.style.display = 'none';
      const foodEmptyError = document.getElementById('food-empty');
      foodEmptyError.style.display = 'none';
      const rentEmptyError = document.getElementById('rent-empty');
      rentEmptyError.style.display = 'none';
      const clotheEmptyError = document.getElementById('clothe-empty');
      clotheEmptyError.style.display = 'none';
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'none';
    } else if (foodCost.value == 0 && rentCost.value > 0 && clotheCosts.value == 0) {
      const foodClotheEmptyError = document.getElementById('food-clothe-empty');
      foodClotheEmptyError.style.display = 'block';
      const expensesEmptyError = document.getElementById('expenses-empty');
      expensesEmptyError.style.display = 'none';
      const foodEmptyError = document.getElementById('food-empty');
      foodEmptyError.style.display = 'none';
      const rentEmptyError = document.getElementById('rent-empty');
      rentEmptyError.style.display = 'none';
      const clotheEmptyError = document.getElementById('clothe-empty');
      clotheEmptyError.style.display = 'none';
      const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
      rentClotheEmptyError.style.display = 'none';
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'none';
    } else if (foodCost.value > 0 && rentCost.value > 0 && clotheCosts.value == 0) {
      const clotheEmptyError = document.getElementById('clothe-empty');
      clotheEmptyError.style.display = 'block';
      const expensesEmptyError = document.getElementById('expenses-empty');
      expensesEmptyError.style.display = 'none';
      const foodEmptyError = document.getElementById('food-empty');
      foodEmptyError.style.display = 'none';
      const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
      rentClotheEmptyError.style.display = 'none';
      const rentEmptyError = document.getElementById('rent-empty');
      rentEmptyError.style.display = 'none';
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'none';
    } else if (foodCost.value == 0 && rentCost.value > 0 && clotheCosts.value > 0) {
      const foodEmptyError = document.getElementById('food-empty');
      foodEmptyError.style.display = 'block';
      const expensesEmptyError = document.getElementById('expenses-empty');
      expensesEmptyError.style.display = 'none';
      const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
      rentClotheEmptyError.style.display = 'none';
      const rentEmptyError = document.getElementById('rent-empty');
      rentEmptyError.style.display = 'none';
      const clotheEmptyError = document.getElementById('clothe-empty');
      clotheEmptyError.style.display = 'none';
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'none';
    } else if (foodCost.value > 0 && rentCost.value == 0 && clotheCosts.value > 0) {
      const rentEmptyError = document.getElementById('rent-empty');
      rentEmptyError.style.display = 'block';
      const expensesEmptyError = document.getElementById('expenses-empty');
      expensesEmptyError.style.display = 'none';
      const foodEmptyError = document.getElementById('food-empty');
      foodEmptyError.style.display = 'none';
      const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
      rentClotheEmptyError.style.display = 'none';
      const clotheEmptyError = document.getElementById('clothe-empty');
      clotheEmptyError.style.display = 'none';
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'none';
    } else if (foodCost.value > 0 && rentCost.value > 0 && clotheCosts.value > 0) {
      const expenseNanError = document.getElementById('expenses-empty');
      expenseNanError.style.display = 'none';
      const foodEmptyError = document.getElementById('food-empty');
      foodEmptyError.style.display = 'none';
      const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
      rentClotheEmptyError.style.display = 'none';
      const rentEmptyError = document.getElementById('rent-empty');
      rentEmptyError.style.display = 'none';
      const clotheEmptyError = document.getElementById('clothe-empty');
      clotheEmptyError.style.display = 'none';
      const calcExpenses = foodCostAmount + rentCostAmount + clotheCostsAmount;
      const totalBalance = incomeAmount - calcExpenses;
      const expense = document.getElementById('expenses');
      const displayExpense = parseFloat(expense.innerText);
      if (calcExpenses > incomeAmount) {
        window.alert('Opps! Over expenses. Reduce your expenses.'); 
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
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'block';
      const expensesEmptyError = document.getElementById('expenses-empty');
      expensesEmptyError.style.display = 'none';
      const foodEmptyError = document.getElementById('food-empty');
      foodEmptyError.style.display = 'none';
      const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
      rentClotheEmptyError.style.display = 'none';
      const rentEmptyError = document.getElementById('rent-empty');
      rentEmptyError.style.display = 'none';
      const clotheEmptyError = document.getElementById('clothe-empty');
      clotheEmptyError.style.display = 'none';
    }
  } else {
    const incomeEmptyError = document.getElementById('income-empty');
    incomeEmptyError.style.display = 'none';
    const incomeNanError = document.getElementById('income-nan');
    incomeNanError.style.display = 'block';
    // Clear income fields
    incomeInput.value = '';
  }
});

// Saving percentage 
document.getElementById('saving').addEventListener('click', function() {
  // Income amount
  const incomeInput = document.getElementById('income-value');
  const incomeAmount = parseFloat(incomeInput.value);
  // Percentage amount
  const inputPerc = document.getElementById('perc-value');
  const inputPercValue = inputPerc.value;
  if (inputPerc.value == 0) {
    console.log('opps! Empty percentage value.');
    // Clear percentage
    inputPerc.value = '';
  } else if (inputPerc.value > 0) {
    const getPerc = (incomeAmount / 100) * inputPercValue;
    // Show saving amount
    if (incomeInput.value == 0) {
      console.log('Opps! Income input is empty.')
    } else if (incomeInput.value > 0) {
      const savimgAmount = document.getElementById('saving-amount');
      const displayTotalSavingAmount = parseFloat(savimgAmount.innerText);
      const previousBalance = document.getElementById('balance');
      const displayPreviousBalance = parseFloat(previousBalance.innerText);
      // Remaining balance
      const remainingBalance = document.getElementById('remaining-amount');
      const displayRemainingBalance = parseFloat(remainingBalance.innerText);
      if (getPerc > displayPreviousBalance || displayPreviousBalance < getPerc) {
        console.log("Opps! You don't have enough remaining balance.")
      } else {
        savimgAmount.innerText = getPerc;
        remainingBalance.innerText = displayPreviousBalance - getPerc;
        // Clear percentage
        inputPerc.value = '';
        // Clear income fields
        incomeInput.value = '';
      }
    } else {
      console.log('Opps! Invalid income amount.')
    } 
    }else {
      console.log('opps! Negative or string is invalid.')
      // Clear percentage
      inputPerc.value = '';
    }
});