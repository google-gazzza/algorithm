// [JS][7kyu] Small enough? - Beginner
// small-enough-beginner
// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

const smallEnough = (a, limit) => a.every((item) => item <= limit)

smallEnough([66, 101], 200)
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)
