// [JS][6kyu] IPv4 to int32
// ipv4-to-int32
// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/javascript

const ipToInt32 = (ip) => ip.split('.').reduce((acc, cur, index) => acc + cur * 2 ** (24 - index * 8), 0)

ipToInt32('128.32.10.1') === 2149583361
