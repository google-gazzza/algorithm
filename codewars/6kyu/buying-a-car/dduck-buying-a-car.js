// https://www.codewars.com/kata/554a44516729e4d80b000012

const nbMonths = (
  oldCarValue,
  newCarValue,
  savingPerMonth,
  percentLossByMonth,
  month = 1,
  savedMoney = 0,
) => {
  const totalValue = oldCarValue + savedMoney;
  
  if (newCarValue <= totalValue) {
    return [month - 1, Math.round(totalValue - newCarValue)];
  }
  
  const lossLate = 1 - (percentLossByMonth + (0.5 * Math.floor(month / 2))) / 100;
  
  return nbMonths(
    oldCarValue * lossLate,
    newCarValue * lossLate,
    savingPerMonth,
    percentLossByMonth,
    month + 1,
    savedMoney + savingPerMonth,
  );
};

console.log(nbMonths(2000, 8000, 1000, 1.5), [6, 766]);
// console.log(nbMonths(12000, 8000, 1000, 1.5), [0, 4000]);
