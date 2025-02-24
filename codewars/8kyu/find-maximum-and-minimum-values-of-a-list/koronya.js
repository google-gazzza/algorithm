// https://www.codewars.com/kata/577a98a6ae28071780000989

const min = function (list) {
  list.sort((a, b) => a - b)
  return list[0]
}

const max = function (list) {
  list.sort((a, b) => b - a)
  return list[0]
}

min([-52, 56, 30, 29, -54, 0, -110]) === -110
max([-52, 56, 30, 29, -54, 0, -110]) === 56
