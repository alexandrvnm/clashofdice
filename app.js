const appBalance = document.querySelector(".user__balance-num");
const appBalanceBtn = document.querySelector(".user__balance-btn");
const userPoint = document.querySelector(".user__points-num");
const enemyPoint = document.querySelector(".enemy__points-num");
const userButtonGame = document.querySelector(".user__button");
const gameHistoryUser = document.querySelector(".game__history-list");
const gameHistoryEnemy = document.querySelector(".game__history-list-enemy");

let balanceValue = 0;

let userPointValue = 0;
let enemyPointValue = 0;

appBalance.textContent = balanceValue;
userPoint.textContent = userPointValue;
enemyPoint.textContent = enemyPointValue;

appBalanceBtn.onclick = function () {
  balanceValue = 100;
  appBalance.textContent = balanceValue;
};

userButtonGame.onclick = function () {
  userPointValueTmp = Math.floor(Math.random() * 6) + 1;
  userPointValue += userPointValueTmp;
  userPoint.textContent = userPointValue;

  enemyPointValueTmp = Math.floor(Math.random() * 6) + 1;
  enemyPointValue += enemyPointValueTmp;
  enemyPoint.textContent = enemyPointValue;

  gameHistoryUser.insertAdjacentHTML(
    "beforeend",
    `
    <li class="game__history-item">${userPointValueTmp}</li>  
    `
  );

  gameHistoryEnemy.insertAdjacentHTML(
    "beforeend",
    `
    <li class="game__history-item">${enemyPointValueTmp}</li>  
    `
  );

  if (userPointValue >= 30) {
    alert("Ты выиграл!");

    gameHistoryEnemy.innerHTML = "";
    gameHistoryUser.innerHTML = "";

    userPointValue = 0;
    enemyPointValue = 0;

    userPoint.textContent = userPointValue;
    enemyPoint.textContent = enemyPointValue;
  }

  if (enemyPointValue >= 30) {
    alert("Ты проиграл!");

    gameHistoryEnemy.innerHTML = "";
    gameHistoryUser.innerHTML = "";

    userPointValue = 0;
    enemyPointValue = 0;

    userPoint.textContent = userPointValue;
    enemyPoint.textContent = enemyPointValue;
  }
};
