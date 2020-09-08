// small-enough-beginner
// Small enough? - Beginner
// difficulty: 7kyu
// https://www.codewars.com/kata/57cc981a58da9e302a000214/

const smallEnough = (a, limit) => !a.some((e) => e > limit);



console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
