// [JS][5kyu] int32 to IPv4
// int32-to-i-pv4
// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript

const arr = [256 ** 3, 256 ** 2, 256, 1]

const int32ToIp = (int32) => {
  const result = []
  arr.reduce((acc, cur) => {
    result.push(Math.floor(acc / cur))
    return acc % cur
  }, int32)

  return result.join('.')
}

int32ToIp(2154959208)
int32ToIp(0)
int32ToIp(2149583361)
int32ToIp(2 ** 32 - 1)
