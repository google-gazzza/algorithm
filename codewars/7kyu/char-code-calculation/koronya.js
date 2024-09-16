// [JS][7kyu] Char Code Calculation
// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
// char-code-calculation

const calc = (x) => {
  const total1 = x.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), '')
  const total2 = total1.replace(/7/g, '1')
  const sum1 = total1.split('').reduce((acc, cur) => acc + Number(cur), 0)
  const sum2 = total2.split('').reduce((acc, cur) => acc + Number(cur), 0)

  return sum1 - sum2
}

calc('abcdef') === 6
calc('ifkhchlhfd') === 6
calc('aaaaaddddr') === 30
calc('jfmgklf8hglbe') === 6
calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') === 96
