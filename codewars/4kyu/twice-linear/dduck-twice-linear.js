// twice-linear
// https://www.codewars.com/kata/5672682212c8ecf83e000050

let sequence = [1];

for (let i = 0; i < 300000; i += 1) {
  sequence.push((sequence[i] * 2) + 1);
  sequence.push((sequence[i] * 3) + 1);
}
sequence = [...new Set(sequence)].sort((a, b) => a - b);

const dblLinear = (n) => sequence[n];

console.log(dblLinear(10), 22);
console.log(dblLinear(20), 57);
console.log(dblLinear(30), 91);
console.log(dblLinear(50), 175);
console.log(dblLinear(100), 447);
console.log(dblLinear(100000), 447);

// -------------------------
// best practice in CodeWars
// -------------------------
//
// function formatDuration (seconds) {
//   var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//     res = [];
//
//   if (seconds === 0) return 'now';
//
//   for (var key in time) {
//     if (seconds >= time[key]) {
//       var val = Math.floor(seconds/time[key]);
//       res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//       seconds = seconds % time[key];
//     }
//   }
//
//   return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
// }
