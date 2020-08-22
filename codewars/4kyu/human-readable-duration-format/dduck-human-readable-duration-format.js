// human-readable-duration-format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/

const formatDuration = (input) => {
  if (input === 0) {
    return 'now';
  }
  
  const second = input % 60;
  const minute = (input - second) / 60 % 60;
  const hour = Math.floor(input / (60 * 60)) % 24;
  const day = Math.floor(input / (3600 * 24)) % 365;
  const year = Math.floor(input / (3600 * 24 * 365));
  
  const result = [];
  if (second) {
    result.unshift(second > 1 ? `${second} seconds` : '1 second');
  }
  if (minute) {
    result.unshift(minute > 1 ? `${minute} minutes` : '1 minute');
  }
  if (hour) {
    result.unshift(hour > 1 ? `${hour} hours` : '1 hour');
  }
  if (day) {
    result.unshift(day > 1 ? `${day} days` : '1 day');
  }
  if (year) {
    result.unshift(year > 1 ? `${year} years` : '1 year');
  }
  
  if (result.length > 1) {
    return result.slice(0, result.length - 1).join(', ') + ` and ${result.pop()}`;
  }
  return result.join('');
};


console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
