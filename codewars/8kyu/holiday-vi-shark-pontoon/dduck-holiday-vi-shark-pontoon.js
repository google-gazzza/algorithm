// holiday-vi-shark-pontoon
// algorithm-breaking/codewars/8kyu/holiday-vi-shark-pontoon
// Holiday VI - Shark Pontoon
// https://www.codewars.com/kata/57e921d8b36340f1fd000059
// https://algorithm-breaking.blogspot.com/2020/09/algorithm-breakingcodewars8kyuholiday.html

const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
  if ((pontoonDistance / youSpeed) < (sharkDistance / (sharkSpeed * (dolphin ? 0.5 : 1)))) {
    return 'Alive!';
  }
  
  return 'Shark Bait!';
};

console.log(shark(12, 50, 4, 8, true), "Alive!");
console.log(shark(7, 55, 4, 16, true), "Alive!");
console.log(shark(24, 0, 4, 8, true), "Shark Bait!");
