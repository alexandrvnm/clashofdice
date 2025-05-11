const appBalance = document.querySelector(".user__balance-num");
const appBalanceBtn = document.querySelector(".user__balance-btn");

let balanceValue = 0;

appBalance.textContent = balanceValue;

appBalanceBtn.onclick = function () {
  balanceValue = 100;
  appBalance.textContent = balanceValue;
};
