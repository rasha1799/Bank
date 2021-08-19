//handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;
    //update deposit
    const depositTotal = document.getElementById('deposit-input');
    const previousAmountDeposit = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousAmountDeposit) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;
    // update balance
    const previousBalance = document.getElementById('balance-value');
    const previousBalanceTotal = parseFloat(previousBalance.innerText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
    previousBalance.innerText = newBalanceTotal;


    //clear the input field
    depositInput.value = '';


})

//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-amount');
    const newWithdrawAmount = withdrawInput.value;
    //update deposit
    const withdrawTotal = document.getElementById('withdraw-input');
    const previousAmountwithdraw = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousAmountwithdraw) + parseFloat(newWithdrawAmount);

    withdrawTotal.innerText = newWithdrawTotal;
    // update balance
    const previousBalance = document.getElementById('balance-value');
    const previousBalanceTotal = parseFloat(previousBalance.innerText);
    const newwBalanceTotal = previousBalanceTotal - parseFloat(newWithdrawAmount);
    previousBalance.innerText = newwBalanceTotal;


    //clear the input field
    withdrawInput.value = '';


})

