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
    // Error message for income field
    const incomeEmptyError = document.getElementById('income-empty');
    incomeEmptyError.style.display = 'none';
    const incomeNanError = document.getElementById('income-nan');
    incomeNanError.style.display = 'none';

    // Error message for expenses empty fields
    if (foodCost.value == 0 && rentCost.value == 0 && clotheCosts.value == 0) {
      const expensesEmptyError = document.getElementById('expenses-empty');
      expensesEmptyError.style.display = 'block';
      const foodEmptyError = document.getElementById('food-empty');
      foodEmptyError.style.display = 'none';
      const rentEmptyError = document.getElementById('rent-empty');
      rentEmptyError.style.display = 'none';
      const clotheEmptyError = document.getElementById('clothe-empty');
      clotheEmptyError.style.display = 'none';
      const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
      rentClotheEmptyError.style.display = 'none';
      const foodClotheEmptyError = document.getElementById('food-clothe-empty');
      foodClotheEmptyError.style.display = 'none';
      const foodRentEmptyError = document.getElementById('food-rent-empty');
      foodRentEmptyError.style.display = 'none';
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'none';
    } 

      // Error message for food empty field
      else if (foodCost.value == 0 && rentCost.value > 0 && clotheCosts.value > 0) {
        const foodEmptyError = document.getElementById('food-empty');
        foodEmptyError.style.display = 'block';
        const expensesEmptyError = document.getElementById('expenses-empty');
        expensesEmptyError.style.display = 'none';
        const rentEmptyError = document.getElementById('rent-empty');
        rentEmptyError.style.display = 'none';
        const clotheEmptyError = document.getElementById('clothe-empty');
        clotheEmptyError.style.display = 'none';
        const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
        rentClotheEmptyError.style.display = 'none';
        const foodClotheEmptyError = document.getElementById('food-clothe-empty');
        foodClotheEmptyError.style.display = 'none';
        const foodRentEmptyError = document.getElementById('food-rent-empty');
        foodRentEmptyError.style.display = 'none';
        const expenseNanError = document.getElementById('expenses-nan');
        expenseNanError.style.display = 'none';
      } 
      
        // Error message for rent empty filed
        else if (foodCost.value > 0 && rentCost.value == 0 && clotheCosts.value > 0) {
        const rentEmptyError = document.getElementById('rent-empty');
        rentEmptyError.style.display = 'block';
        const expensesEmptyError = document.getElementById('expenses-empty');
        expensesEmptyError.style.display = 'none';
        const foodEmptyError = document.getElementById('food-empty');
        foodEmptyError.style.display = 'none';
        const clotheEmptyError = document.getElementById('clothe-empty');
        clotheEmptyError.style.display = 'none';
        const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
        rentClotheEmptyError.style.display = 'none';
        const foodClotheEmptyError = document.getElementById('food-clothe-empty');
        foodClotheEmptyError.style.display = 'none';
        const foodRentEmptyError = document.getElementById('food-rent-empty');
        foodRentEmptyError.style.display = 'none';
        const expenseNanError = document.getElementById('expenses-nan');
        expenseNanError.style.display = 'none';
      }

        // Error message for clothe empty field
        else if (foodCost.value > 0 && rentCost.value > 0 && clotheCosts.value == 0) {
        const clotheEmptyError = document.getElementById('clothe-empty');
        clotheEmptyError.style.display = 'block';
        const expensesEmptyError = document.getElementById('expenses-empty');
        expensesEmptyError.style.display = 'none';
        const foodEmptyError = document.getElementById('food-empty');
        foodEmptyError.style.display = 'none';
        const rentEmptyError = document.getElementById('rent-empty');
        rentEmptyError.style.display = 'none';
        const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
        rentClotheEmptyError.style.display = 'none';
        const foodClotheEmptyError = document.getElementById('food-clothe-empty');
        foodClotheEmptyError.style.display = 'none';
        const foodRentEmptyError = document.getElementById('food-rent-empty');
        foodRentEmptyError.style.display = 'none';
        const expenseNanError = document.getElementById('expenses-nan');
        expenseNanError.style.display = 'none';
      } 

      // Error message for rent and clothes empty fields
      else if (foodCost.value > 0 && rentCost.value == 0 && clotheCosts.value == 0) {
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
      const foodClotheEmptyError = document.getElementById('food-clothe-empty');
      foodClotheEmptyError.style.display = 'none';
      const foodRentEmptyError = document.getElementById('food-rent-empty');
      foodRentEmptyError.style.display = 'none';
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'none';
    } 
    
      // Error message for food clothe empty fields
      else if (foodCost.value == 0 && rentCost.value > 0 && clotheCosts.value == 0) {
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
      const foodRentEmptyError = document.getElementById('food-rent-empty');
      foodRentEmptyError.style.display = 'none';
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'none';
    } 

      // Error message for food rent empty fields
      else if (foodCost.value == 0 && rentCost.value == 0 && clotheCosts.value > 0) {
      const foodRentEmptyError = document.getElementById('food-rent-empty');
      foodRentEmptyError.style.display = 'block';
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
      const foodClotheEmptyError = document.getElementById('food-clothe-empty');
      foodClotheEmptyError.style.display = 'none';
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'none';
    } 
     
      // Hide all error messages
      else if (foodCost.value > 0 && rentCost.value > 0 && clotheCosts.value > 0) {
      const expenseNanError = document.getElementById('expenses-empty');
      expenseNanError.style.display = 'none';
      const foodEmptyError = document.getElementById('food-empty');
      foodEmptyError.style.display = 'none';
      const rentEmptyError = document.getElementById('rent-empty');
      rentEmptyError.style.display = 'none';
      const clotheEmptyError = document.getElementById('clothe-empty');
      clotheEmptyError.style.display = 'none';
      const foodRentEmptyError = document.getElementById('food-rent-empty');
      foodRentEmptyError.style.display = 'none';
      const rentClotheEmptyError = document.getElementById('rent-clothe-empty');
      rentClotheEmptyError.style.display = 'none';
      const foodClotheEmptyError = document.getElementById('food-clothe-empty');
      foodClotheEmptyError.style.display = 'none';
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
        // Hide nan error message
        const expenseNanError = document.getElementById('expenses-nan');
        expenseNanError.style.display = 'none';
      }
      // Clear expenses fields
      foodCost.value = '';
      rentCost.value = '';
      clotheCosts.value = '';
    } 
    
      // Error message for expenses nan
      else {
      const expenseNanError = document.getElementById('expenses-nan');
      expenseNanError.style.display = 'block';
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
      const foodRentEmptyError = document.getElementById('food-rent-empty');
      foodRentEmptyError.style.display = 'none';
      const foodClotheEmptyError = document.getElementById('food-clothe-empty');
      foodClotheEmptyError.style.display = 'none';
    }
  } 
  
  // Error message for income nan
  else {
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
    // Error message for empty perc filed
    const percEmpty = document.getElementById('perc-empty');
    percEmpty.style.display = 'block';
    const incomeAmountEmpty = document.getElementById('income-amount-empty');
      incomeAmountEmpty.style.display = 'none';
    const incomeAmountInvalid = document.getElementById('income-amount-invalid');
      incomeAmountInvalid.style.display = 'none';
    const invalidPerc = document.getElementById('invalid-perc');
    invalidPerc.style.display = 'none';
    // Clear percentage
    inputPerc.value = '';
  } else if (inputPerc.value > 0) {
    const getPerc = (incomeAmount / 100) * inputPercValue;
    // Show saving amount
    if (incomeInput.value == 0) {
      // Error message for Income field empty
      const incomeAmountEmpty = document.getElementById('income-amount-empty');
      incomeAmountEmpty.style.display = 'block';
      const percEmpty = document.getElementById('perc-empty');
      percEmpty.style.display = 'none';
      const incomeAmountInvalid = document.getElementById('income-amount-invalid');
      incomeAmountInvalid.style.display = 'none';
      const invalidPerc = document.getElementById('invalid-perc');
      invalidPerc.style.display = 'none';
    } else if (incomeInput.value > 0) {
      // Hide all error messages
      const incomeAmountInvalid = document.getElementById('income-amount-invalid');
      incomeAmountInvalid.style.display = 'none';
      const incomeAmountEmpty = document.getElementById('income-amount-empty');
      incomeAmountEmpty.style.display = 'none';
      const invalidPerc = document.getElementById('invalid-perc');
      invalidPerc.style.display = 'none';
      // Ends
      const percEmpty = document.getElementById('perc-empty');
      percEmpty.style.display = 'none';
      const savimgAmount = document.getElementById('saving-amount');
      const displayTotalSavingAmount = parseFloat(savimgAmount.innerText);
      const previousBalance = document.getElementById('balance');
      const displayPreviousBalance = parseFloat(previousBalance.innerText);
      // Remaining balance
      const remainingBalance = document.getElementById('remaining-amount');
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
      // Invalid income amount
      const incomeAmountInvalid = document.getElementById('income-amount-invalid');
      incomeAmountInvalid.style.display = 'block';
      const incomeAmountEmpty = document.getElementById('income-amount-empty');
      incomeAmountEmpty.style.display = 'none';
      const percEmpty = document.getElementById('perc-empty');
      percEmpty.style.display = 'none';
      const invalidPerc = document.getElementById('invalid-perc');
      invalidPerc.style.display = 'none';
    } 
    }else {
      const invalidPerc = document.getElementById('invalid-perc');
      invalidPerc.style.display = 'block';
      const incomeAmountEmpty = document.getElementById('income-amount-empty');
      incomeAmountEmpty.style.display = 'none';
      const percEmpty = document.getElementById('perc-empty');
      percEmpty.style.display = 'none';
      const incomeAmountInvalid = document.getElementById('income-amount-invalid');
      incomeAmountInvalid.style.display = 'none';

      // Clear percentage
      inputPerc.value = '';
    }
});