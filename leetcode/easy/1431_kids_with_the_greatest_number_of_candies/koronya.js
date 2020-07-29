// [Easy] 1431. Kids With the Greatest Number of Candies
// 1431_kids_with_the_greatest_number_of_candies

// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
// Runtime: 72 ms, faster than 68.06% of JavaScript online submissions for Kids With the Greatest Number of Candies.
// Memory Usage: 36.7 MB, less than 8.46% of JavaScript online submissions for Kids With the Greatest Number of Candies.
const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies)
  return candies.map(candy => candy + extraCandies >= max ? true : false)
}
