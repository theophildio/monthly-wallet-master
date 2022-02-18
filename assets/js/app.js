// Function to get input id
function getInputValue(inputId) {
  const getInput = document.getElementById(inputId);
  const inputAmount = getInput;
  return inputAmount;
}

// Function to show error message
function showErrorMsg(err) {
  const getError = document.getElementById(err);
  getError.style.display = 'block';
}

// Function to hide error message
function hideErrorMsg(err) {
  const getError = document.getElementById(err);
  getError.style.display = 'none';
}

// Calculate income and expenses
getInputValue('calculate').addEventListener('click', function() {
  // Get income amount
  const getIncomeAmount = getInputValue('income-value');
  const calcIncome = parseFloat(getIncomeAmount.value);
  if (getIncomeAmount.value == 0) {
    // Empty error msg
    showErrorMsg('income-empty');
    hideErrorMsg('income-nan');
    // Clear income fields
    getIncomeAmount.value = '';
  } 
  else if (calcIncome > 0) {
    // Expenses calculation
    const foodCost = getInputValue('food-value');
    const foodCostValue = parseFloat(foodCost.value);
    const rentCost = getInputValue('rent-value');
    const rentCostValue = parseFloat(rentCost.value);
    const clotheCosts = getInputValue('clothe-values');
    const clotheCostsValue = parseFloat(clotheCosts.value);
    // Error message for income field
    hideErrorMsg('income-empty');
    hideErrorMsg('income-nan');
    // Error message for expenses empty fields
    if (foodCost.value == 0 && rentCost.value == 0 && clotheCosts.value == 0) {
      showErrorMsg('expenses-empty');
      hideErrorMsg('food-empty');
      hideErrorMsg('rent-empty');
      hideErrorMsg('clothe-empty');
      hideErrorMsg('rent-clothe-empty');
      hideErrorMsg('food-clothe-empty');
      hideErrorMsg('food-rent-empty');
      hideErrorMsg('expenses-nan');
    } // Error message for food empty field
      else if (foodCost.value == 0 && rentCost.value > 0 && clotheCosts.value > 0) {
        showErrorMsg('food-empty');
        hideErrorMsg('expenses-empty');
        hideErrorMsg('rent-empty');
        hideErrorMsg('clothe-empty');
        hideErrorMsg('rent-clothe-empty');
        hideErrorMsg('food-clothe-empty');
        hideErrorMsg('food-rent-empty');
        hideErrorMsg('expenses-nan');
      } // Error message for rent empty filed
      else if (foodCost.value > 0 && rentCost.value == 0 && clotheCosts.value > 0) {
        showErrorMsg('rent-empty');
        hideErrorMsg('expenses-empty');
        hideErrorMsg('food-empty');
        hideErrorMsg('clothe-empty');
        hideErrorMsg('rent-clothe-empty');
        hideErrorMsg('food-clothe-empty');
        hideErrorMsg('food-rent-empty');
        hideErrorMsg('expenses-nan');
      } // Error message for clothe empty field
      else if (foodCost.value > 0 && rentCost.value > 0 && clotheCosts.value == 0) {
        showErrorMsg('clothe-empty');
        hideErrorMsg('expenses-empty');
        hideErrorMsg('food-empty');
        hideErrorMsg('rent-empty');
        hideErrorMsg('rent-clothe-empty');
        hideErrorMsg('food-clothe-empty');
        hideErrorMsg('food-rent-empty');
        hideErrorMsg('expenses-nan');
      } // Error message for rent and clothes empty fields
      else if (foodCost.value > 0 && rentCost.value == 0 && clotheCosts.value == 0) {
        showErrorMsg('rent-clothe-empty');
        hideErrorMsg('expenses-empty');
        hideErrorMsg('food-empty');
        hideErrorMsg('rent-empty');
        hideErrorMsg('clothe-empty');
        hideErrorMsg('food-clothe-empty');
        hideErrorMsg('food-rent-empty');
        hideErrorMsg('expenses-nan');
    } // Error message for food clothe empty fields
      else if (foodCost.value == 0 && rentCost.value > 0 && clotheCosts.value == 0) {
        showErrorMsg('food-clothe-empty');
        hideErrorMsg('expenses-empty');
        hideErrorMsg('food-empty');
        hideErrorMsg('rent-empty');
        hideErrorMsg('clothe-empty');
        hideErrorMsg('rent-clothe-empty');
        hideErrorMsg('food-rent-empty');
        hideErrorMsg('expenses-nan');
    } // Error message for food rent empty fields
      else if (foodCost.value == 0 && rentCost.value == 0 && clotheCosts.value > 0) {
        showErrorMsg('food-rent-empty');
        hideErrorMsg('expenses-empty');
        hideErrorMsg('food-empty');
        hideErrorMsg('rent-empty');
        hideErrorMsg('clothe-empty');
        hideErrorMsg('rent-clothe-empty');
        hideErrorMsg('food-clothe-empty');
        hideErrorMsg('expenses-nan');
    } // Hide all error messages
      else if (foodCost.value > 0 && rentCost.value > 0 && clotheCosts.value > 0) {
        hideErrorMsg('expenses-empty');
        hideErrorMsg('food-empty');
        hideErrorMsg('rent-empty');
        hideErrorMsg('clothe-empty');
        hideErrorMsg('rent-clothe-empty');
        hideErrorMsg('food-rent-empty');
        hideErrorMsg('food-clothe-empty');
        // Expenses calculation
        const calcExpenses = foodCostValue + rentCostValue + clotheCostsValue;
        const totalBalance = calcIncome - calcExpenses;
        const expense = getInputValue('expenses');
        const displayExpense = parseFloat(expense.innerText);
        if (calcExpenses > calcIncome) {
          window.alert('Opps! Over expenses. Reduce your expenses.'); 
          // Clear expenses fields
          foodCost.value = '';
          rentCost.value = '';
          clotheCosts.value = '';
      } 
      else {
        expense.innerText = calcExpenses;
        const balance = getInputValue('balance');
        const displayBalance = parseFloat(balance.innerText);
        balance.innerText = totalBalance;
        // Hide nan error message
        hideErrorMsg('expenses-nan');
        // Clear expenses fields
        foodCost.value = '';
        rentCost.value = '';
        clotheCosts.value = '';
      }
    } // Error message for expenses nan
    else {
      showErrorMsg('expenses-nan');
      hideErrorMsg('expenses-empty');
      hideErrorMsg('food-empty');
      hideErrorMsg('rent-empty');
      hideErrorMsg('clothe-empty');
      hideErrorMsg('rent-clothe-empty');
      hideErrorMsg('food-rent-empty');
      hideErrorMsg('food-clothe-empty');
    }
  } // Error message for income nan
  else {
    hideErrorMsg('income-empty');
    showErrorMsg('income-nan');
    // Clear income fields
    getIncomeAmount.value = '';
  }
});

// Saving percentage 
getInputValue('saving').addEventListener('click', function() {
  // Income amount
  const incomeInput = getInputValue('income-value');
  const incomeAmount = parseFloat(incomeInput.value);
  // Percentage amount
  const inputPerc = getInputValue('perc-value');
  const inputPercValue = inputPerc.value;
  if (inputPerc.value == 0) {
    // Error message for empty perc filed
    showErrorMsg('perc-empty');
    hideErrorMsg('income-amount-empty');
    hideErrorMsg('income-amount-invalid');
    hideErrorMsg('invalid-perc');
    // Clear percentage
    inputPerc.value = '';
  } else if (inputPerc.value > 0) {
    const getPerc = (incomeAmount / 100) * inputPercValue;
    // Show saving amount
    if (incomeInput.value == 0) {
      // Error message for Income field empty
      showErrorMsg('income-amount-empty')
      hideErrorMsg('perc-empty');
      hideErrorMsg('income-amount-invalid');
      hideErrorMsg('invalid-perc');
    } else if (incomeInput.value > 0) {
      // Hide all error messages
      hideErrorMsg('income-amount-invalid')
      hideErrorMsg('income-amount-empty')
      hideErrorMsg('perc-empty');
      hideErrorMsg('invalid-perc');
      // Ends
      const savimgAmount = getInputValue('saving-amount');
      const displayTotalSavingAmount = parseFloat(savimgAmount.innerText);
      const previousBalance = getInputValue('balance');
      const displayPreviousBalance = parseFloat(previousBalance.innerText);
      // Remaining balance
      const remainingBalance = getInputValue('remaining-amount');
      const displayRemainingBalance = parseFloat(remainingBalance.innerText);
      if (getPerc > displayPreviousBalance) {
        window.alert("Opps! You don't have enough balance to save money.");
      } else {
        savimgAmount.innerText = getPerc;
        remainingBalance.innerText = displayPreviousBalance - getPerc;
        // Clear percentage
        inputPerc.value = '';
        // Clear income fields
        incomeInput.value = '';
      }
    } else {
      // Invalid income amount error msg
      showErrorMsg('income-amount-invalid')
      hideErrorMsg('perc-empty');
      hideErrorMsg('income-amount-empty');
      hideErrorMsg('invalid-perc');
    } 
    } else {
        // Error msg for ivalid percentage
        showErrorMsg('invalid-perc')
        hideErrorMsg('perc-empty');
        hideErrorMsg('income-amount-empty');
        hideErrorMsg('income-amount-invalid');
        // Clear percentage
        inputPerc.value = '';
    }
});