// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

const tickets = (moneys, balance = { 25: 0, 50: 0, 100: 0 }) => {
  if (!moneys.length) {
    return 'YES';
  }
  let receivedMoney = moneys.shift();
  
  if (receivedMoney === 100 && balance[50] && balance[25]) {
    balance[50] -= 1;
    balance[25] -= 1;
    receivedMoney = 0;
  }
  
  if (receivedMoney === 50 && balance[25]) {
    balance[receivedMoney] += 1;
    balance[25] -= 1;
    receivedMoney = 0;
  }
  
  const quantity = receivedMoney / 25;
  if (receivedMoney && balance[25] >= (quantity - 1)) {
    balance[25] -= (quantity - 1);
    balance[receivedMoney] += 1;
    receivedMoney = 0;
  }
  
  return receivedMoney === 0 ? tickets(moneys, balance) : 'NO';
};

const arr = [25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100, 25, 50, 25, 100,];
tickets(arr); //?
//yes

const arr2 = [25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100, 25, 50, 25, 100, 50, 25];
tickets(arr2); //?
// tickets(arr2.slice(0, 5)); //?
// no
