const logInBtn = document.getElementById("logInButton").addEventListener("click", function () {
    document.getElementById("loginArea").style.display = "none";
    document.getElementById("transitionArea").style.display = "block";
});

const depositBtn = document.getElementById("depositBtn").addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const addDeposit = document.getElementById("addDeposit").innerText;
    const addDepositNumber = parseFloat(addDeposit);
    const totalDeposit = depositNumber + addDepositNumber;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentNumber = parseFloat(currentBalance);
    const totalBalance = currentNumber + depositNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("addDeposit").innerText = totalDeposit;
    document.getElementById("depositAmount").value = "";
})

const withdrawBtn = document.getElementById("withdrawBtn").addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const addWithdraw = document.getElementById("addWithdraw").innerText;
    const addWithdrawNumber = parseFloat(addWithdraw);
    const totalWithdraw = withdrawNumber + addWithdrawNumber;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentNumber = parseFloat(currentBalance);
    const totalBalance = currentNumber + (- withdrawNumber);
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("addWithdraw").innerText = totalWithdraw;
    document.getElementById("withdrawAmount").value = "";
})

