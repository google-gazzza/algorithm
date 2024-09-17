// what-s-up-next
// What's up next?
// difficulty: 8kyu
// https://www.codewars.com/kata/542ebbdb494db239f8000046/

const nextItem = (list, target) => {
  let flag = false;
  
  for (const e of list) {
    if (flag) {
      return e;
    }
    if (e === target) {
      flag = true;
    }
  }
};


console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
console.log(nextItem(['a', 'b', 'c'], 'd'), undefined);
console.log(nextItem(['a', 'b', 'c'], 'c'), undefined);
console.log(nextItem("testing", "t"), "e");

function* countFrom(n) {
  for (let i = n; ; ++i) yield i;
}

console.log(nextItem(countFrom(1), 12), 13);
