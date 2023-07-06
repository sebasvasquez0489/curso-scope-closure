function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`Money box: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const myMoneySebas = moneyBox();
myMoneySebas(20);
myMoneySebas(10);
myMoneySebas(15);
