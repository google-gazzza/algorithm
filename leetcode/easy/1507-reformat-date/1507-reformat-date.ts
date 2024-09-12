/*
1507-reformat-date
leetcode/easy/1507. Reformat Date
Difficulty: easy
URL: https://leetcode.com/problems/reformat-date/

NOTE: Description

NOTE: Constraints
  - The given dates are guaranteed to be valid, so no error handling is necessary.

NOTE: Explanation
*/

function reformatDate(date: string): string {
  const monthsMap: { [key: string]: string } = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };
  const [day, month, year] = date.split(' ');
  let convertedDay = day.match(/\d+/)[0];
  convertedDay = convertedDay.padStart(2, '0');

  return `${year}-${monthsMap[month]}-${convertedDay}`;
}

// Example 1:
let date = '20th Oct 2052';
console.log(reformatDate(date));
// Output: "2052-10-20"
//
// Example 2:
date = '6th Jun 1933';
console.log(reformatDate(date));
// Output: "1933-06-06"
//
// Example 3:
date = '26th May 1960';
console.log(reformatDate(date));
// Output: "1960-05-26"
