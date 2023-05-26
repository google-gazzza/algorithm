// correct-the-time-string
// Correct the time-string
// difficulty: 7kyu
// https://www.codewars.com/kata/57873ab5e55533a2890000c7

const timeCorrect = (timestring) => {
  if (timestring === null) {
    return null;
  }
  if (!timestring) {
    return '';
  }
  
  let time = timestring.split(':').map(Number);
  
  const isNan = time.filter((e) => Number.isNaN(e)).length;
  if (isNan || time.length !== 3) {
    return null;
  }
  
  time[1] += Math.floor(time[2] / 60);
  time[2] %= 60;
  
  time[0] += Math.floor(time[1] / 60);
  time[1] %= 60;
  
  time[0] %= 24;
  time = time.map((e) => String(e).padStart(2, '0'));
  
  return `${time[0]}:${time[1]}:${time[2]}`;
};

// Null or Empty
console.log(timeCorrect(null), null);
console.log(timeCorrect(''), '');

// Invalid Format
console.log(timeCorrect('001122'), null);
console.log(timeCorrect('00;11;22'), null);
console.log(timeCorrect('0a:1c:22'), null);

// Correction Tests
console.log(timeCorrect('09:10:01'), '09:10:01');
console.log(timeCorrect('11:70:10'), '12:10:10');
console.log(timeCorrect('19:99:09'), '20:39:09');
console.log(timeCorrect('19:99:99'), '20:40:39');
console.log(timeCorrect('24:01:01'), '00:01:01');
console.log(timeCorrect('52:01:01'), '04:01:01');
