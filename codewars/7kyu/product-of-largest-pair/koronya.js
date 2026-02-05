// [JS][7kyu] Product of Largest Pair
// product-of-largest-pair
// https://www.codewars.com/kata/5784c89be5553370e000061b/train/javascript

const maxProduct = (a) => {
  const aLen = a.length
  let max = a[0]
  let secondMax = Number.MIN_SAFE_INTEGER
  for (let i = 1; i < aLen; i += 1) {
    const num = a[i]
    if (num > max) {
      secondMax = max
      max = num
    } else if (num > secondMax) {
      secondMax = num
    }
  }
  return max * secondMax
}

maxProduct([56, 335, 195, 443, 6, 494, 252]) === 218842
maxProduct([154, 428, 455, 346]) === 194740
maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]) === 187827
maxProduct([136, 376, 10, 146, 105, 63, 234]) === 87984
maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]) === 218536
maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]) === 192672
maxProduct([134, 320, 266, 299]) === 95680
maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]) === 139496
maxProduct([375, 56, 337, 466, 203]) === 174750
