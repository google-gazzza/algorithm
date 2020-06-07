// statistics-for-an-athletic-association
// https://www.codewars.com/kata/55b3425df71c1201a800009c/

const parseToSecond = (str) => {
  const [hh, mm, ss] = str.split('|').map(Number);
  return hh * 3600 + mm * 60 + ss;
};

const paddingZero = (num) => String(num).padStart(2, 0);

const parseToHHMMSS = (num) => {
  const hh = paddingZero(Math.floor(num / 3600));
  const mm = paddingZero(Math.floor((num % 3600) / 60));
  const ss = paddingZero(num % 60);
  
  return `${paddingZero(hh)}|${paddingZero(mm)}|${paddingZero(ss)}`;
};

const stat = (strg) => {
  if (!strg) {
    return '';
  }
  
  const sortedResult = strg.split(',')
    .map(parseToSecond)
    .sort((a, b) => a - b);
  const range = sortedResult[sortedResult.length - 1] - sortedResult[0];
  const average = Math.floor(sortedResult.reduce((a, c) => a + c) / sortedResult.length);
  
  let median = 0;
  
  if (sortedResult.length % 2 === 1) {
    median = sortedResult[Math.floor(sortedResult.length / 2)];
  } else {
    median += sortedResult[Math.floor(sortedResult.length / 2) - 1];
    median += sortedResult[Math.floor(sortedResult.length / 2)];
    median = Math.floor(median / 2);
  }
  
  return `Range: ${parseToHHMMSS(range)} Average: ${parseToHHMMSS(average)} Median: ${parseToHHMMSS(median)}`;
};

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"),
  "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34");
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"),
  "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00");
console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17'));
// Expected: 'Range: 00|31|17 Average: 02|27|10 Median: 02|24|57',
// instead got: 'Range: 00|31|17 Average: 02|27|10 Median: 02|32|34'
