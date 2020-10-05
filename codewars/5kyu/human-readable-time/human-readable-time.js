// human-readable-time
// Human Readable Time
// difficulty: 5kyu
// https://www.codewars.com/kata/52685f7382004e774f0001f7/

const padWithZero = (num) => num.toString().padStart(2, '0');

const humanReadable = (seconds) => {
  if (seconds > 359999) {
    return '99:59:59';
  }
  
  const hh = padWithZero(Math.floor(seconds / 3600));
  const mm = padWithZero(Math.floor(seconds % 3600 / 60));
  const ss = padWithZero(seconds % 60);
  
  return `${hh}:${mm}:${ss}`;
};


console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
