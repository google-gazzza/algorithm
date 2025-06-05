// [JS][7kyu] Minimum Percentage of Visitors that Ate All Foods
// minimum-percentage-of-visitors-that-ate-all-foods
// https://www.codewars.com/kata/657e578bdc80170abd4dca79/train/javascript

const minimumPercentage = (foods) => {
  const sum = foods.reduce((acc, cur) => acc + cur, 0) / 100
  return Math.round(Math.max(0, sum - foods.length + 1) * 100)
}

minimumPercentage([76]) === 76.0
minimumPercentage([50, 100]) === 50.0
minimumPercentage([50, 50]) === 0.0
minimumPercentage([100, 100, 100]) === 100.0
minimumPercentage([65, 80, 80, 90]) === 15.0
