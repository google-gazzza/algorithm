// apply-offset-to-subtitles
// https://www.codewars.com/kata/5e454bf176551c002ee36486

const parseTimeString = (str) => {
  const [time, ms] = str.split(',');
  const [hh, mm, ss] = time.split(':');
  return [hh, mm, ss, ms].map(Number);
};

const convertToDate = (date) => new Date(0, 0, 0, date[0], date[1], date[2], date[3]);

const paddingWithTwoZero = (num) => num.toString().padStart(2, '0');
const paddingWithThreeZero = (num) => num.toString().padStart(3, '0');

const convertToString = (date) => {
  const dd = date.getDay();
  const hh = date.getHours() + (dd * 24);
  const mm = date.getMinutes();
  const ss = date.getSeconds();
  const sss = date.getMilliseconds();
  return `${paddingWithTwoZero(hh)}:${paddingWithTwoZero(mm)}:${paddingWithTwoZero(ss)},${paddingWithThreeZero(sss)}`;
};

const parseToMillisecond = (date) => {
  const dd = date.getDay() * 1000 * 60 * 60 * 24;
  const hh = date.getHours() * 1000 * 60 * 60;
  const mm = date.getMinutes() * 1000 * 60;
  const ss = date.getSeconds() * 1000;
  const sss = date.getMilliseconds();
  
  return dd + hh + mm + ss + sss;
};

const subsOffsetApply = (str, offset) => {
  const splitedStr = str.split(' ');
  const string = splitedStr.slice(3).join(' ');
  
  let start = splitedStr[0];
  let end = splitedStr[2];
  start = parseTimeString(start);
  
  const estimateTime = parseToMillisecond(convertToDate(start)) + offset;
  if (estimateTime < 0 || estimateTime > (100 * 60 * 60 * 1000) - 1) {
    return 'Invalid offset';
  }
  
  start[3] = start[3] + offset;
  end = parseTimeString(end);
  end[3] = end[3] + offset;
  
  start = convertToString(convertToDate(start));
  end = convertToString(convertToDate(end));
  
  return `${start} ${splitedStr[1]} ${end} ${string}`;
};


let result1 = subsOffsetApply("01:09:02,684 --> 01:09:03,601 Run Forrest, run!", 3663655);
console.log(result1, "02:10:06,339 --> 02:10:07,256 Run Forrest, run!");

let result2 = subsOffsetApply("00:43:22,074 --> 00:43:24,159 I am your father, Luke.", 1789);
console.log(result2, "00:43:23,863 --> 00:43:25,948 I am your father, Luke.");

let result3 = subsOffsetApply("00:03:06,241 --> 00:03:07,618 I'll be back.", -21789);
console.log(result3, "00:02:44,452 --> 00:02:45,829 I'll be back.");

let result4 = subsOffsetApply("00:03:14,917 --> 00:03:16,001 My name is Bond. James Bond.", -195000);
console.log(result4, "Invalid offset");

let result5 = subsOffsetApply("01:00:00,000 --> 01:00:02,000 Let`s start with this.", -3600000);
console.log(result5, "00:00:00,000 --> 00:00:02,000 Let`s start with this.");

let result6 = subsOffsetApply("01:00:00,000 --> 01:00:02,000 Let`s finish this.", 356397999);
console.log(result6, "99:59:57,999 --> 99:59:59,999 Let`s finish this.");
