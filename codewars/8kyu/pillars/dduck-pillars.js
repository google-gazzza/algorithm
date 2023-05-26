// pillars
// Pillars
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d

const pillars = (pillCount, distance, diameter) => pillCount > 1 ? ((distance * 100 + diameter) * (pillCount - 1)) - diameter : 0;



console.log(pillars(1, 10, 10), 0);
console.log(pillars(2, 20, 25), 2000);
console.log(pillars(11, 15, 30), 15270);
