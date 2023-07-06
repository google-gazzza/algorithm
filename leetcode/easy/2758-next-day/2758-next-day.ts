// leetcode/easy/2758. Next Day
// 2758-next-day
// URL: https://leetcode.com/problems/next-day/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

declare global {
  interface Date {
    nextDay(): string;
  }
}

Date.prototype.nextDay = function () {
  const date = new Date(this);
  date.setDate(date.getDate() + 1);

  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = (date.getDate()).toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};


const date = new Date("2014-06-20");
date.nextDay(); // "2014-06-21"

