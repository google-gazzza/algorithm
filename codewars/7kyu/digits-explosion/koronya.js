// [JS][7kyu] Digits explosion
// digits-explosion
// https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript

const explode = (s) => s.split('').reduce((acc, cur) => acc + cur.repeat(cur), '')

explode('312')
explode('102269')
