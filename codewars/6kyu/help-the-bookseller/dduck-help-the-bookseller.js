// https://www.codewars.com/kata/54dc6f5a224c26032800005c/
// Help the bookseller !

const stockList = (list, index) => {
  let map = new Map(index.map((v) => [v, 0]));
  list.forEach((v) => {
    if (map.has(v[0])) {
      map.set(v[0], (map.get(v[0]) || 0) + parseInt(v.split(' ')[1], 10));
    }
  });
  
  if ([...map.values()].reduce((a, c) => a + c, 0) <= 0) {
    return '';
  }
  
  return [...map].map((v) => `(${v[0]} : ${v[1]})`).join(' - ');
};

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
c = ["A", "B"];
res = "(A : 200) - (B : 1140)";
console.log(stockList(b, c), res);

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
c = ["A", "B", "C", "W"];
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)";
console.log(stockList(b, c), res);
