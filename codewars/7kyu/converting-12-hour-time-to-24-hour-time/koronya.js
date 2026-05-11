// [JS][7kyu] Converting 12-hour time to 24-hour time
// converting-12-hour-time-to-24-hour-time
// https://www.codewars.com/kata/59b0a6da44a4b7080300008a/train/javascript

const to24hourtime = (hour, minute, period) => {
  // prettier-ignore
  const hourStr = hour === 12 
    ? period === 'am' 
      ? '00' 
      : '12' 
    : period === 'am' 
      ? String(hour).padStart(2, '0')
      : String(hour + 12).padStart(2, '0');
  const minuteStr = String(minute).padStart(2, '0')
  return hourStr + minuteStr
}

to24hourtime(1, 0, 'am') === '0100'
to24hourtime(1, 0, 'pm') === '1300'
to24hourtime(12, 0, 'am') === '0000'
to24hourtime(12, 0, 'pm') === '1200'
to24hourtime(6, 30, 'am') === '0630'
to24hourtime(9, 45, 'pm') === '2145'
