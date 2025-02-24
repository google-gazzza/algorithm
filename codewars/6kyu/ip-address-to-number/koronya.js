// [JS][6kyu] IP Address to Number
// ip-address-to-number
// https://www.codewars.com/kata/541a354c39c5efa5fa001372/train/javascript

const integerToBinary = (num) => num.toString(2)
const binaryToInterger = (binary) => parseInt(binary, 2)

const ipToNum = (ip) => {
  return binaryToInterger(
    ip
      .split('.')
      .map((num) => integerToBinary(Number(num)).padStart(8, '0'))
      .join(''),
  )
}

const numToIp = (num) => {
  const str = integerToBinary(num).padStart(32, '0')
  const arr = [binaryToInterger(str.slice(0, 8)), binaryToInterger(str.slice(8, 16)), binaryToInterger(str.slice(16, 24)), binaryToInterger(str.slice(24, 32))]
  return arr.join('.')
}

ipToNum('192.168.1.1') === 3232235777
ipToNum('10.0.0.0') === 167772160
ipToNum('176.16.0.1') === 2953838593
numToIp(3232235777) === '192.168.1.1'
numToIp(167772160) === '10.0.0.0'
numToIp(2953838593) === '176.16.0.1'
numToIp(ipToNum('192.168.1.1')) === '192.168.1.1'
numToIp(ipToNum('10.0.0.0')) === '10.0.0.0'
numToIp(ipToNum('176.16.0.1')) === '176.16.0.1'
ipToNum(numToIp(3232235777)) === 3232235777
ipToNum(numToIp(167772160)) === 167772160
ipToNum(numToIp(2953838593)) === 2953838593
