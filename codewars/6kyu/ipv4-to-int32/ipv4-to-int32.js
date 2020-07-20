// ipv4-to-int32
// IPv4 to int32
// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/
// https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/ipv4-to-int32

const ipToInt32 = (ip) => parseInt(
  ip.split('.')
    .map((v) => parseInt(v).toString(2).padStart(8, 0))
    .join(''),
  2
);



console.log(ipToInt32("128.32.10.1"), 2149583361, "wrong integer for ip: 128.32.10.1");
