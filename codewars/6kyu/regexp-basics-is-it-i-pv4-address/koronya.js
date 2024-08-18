// [JS][6kyu] Regexp Basics - is it IPv4 address?
// regexp-basics-is-it-i-pv4-address
// https://www.codewars.com/kata/567fe8b50c201947bc000056/train/javascript

const REGEX = /^((25[0-5]|2[0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])$/

String.prototype.ipv4Address = function () {
  return REGEX.test(this)
}

// true
'127.0.0.1'.ipv4Address()
'0.0.0.0'.ipv4Address()
'255.255.255.255'.ipv4Address()
'10.20.30.40'.ipv4Address()

// false
''.ipv4Address()
'10.256.30.40'.ipv4Address()
'10.20.030.40'.ipv4Address()
'127.0.1'.ipv4Address()
'127.0.0.0.1'.ipv4Address()
'..255.255'.ipv4Address()
'127.0.0.1\n'.ipv4Address()
'\n127.0.0.1'.ipv4Address()
' 127.0.0.1'.ipv4Address()
'127.0.0.1 '.ipv4Address()
' 127.0.0.1 '.ipv4Address()
'127.0.0.1.'.ipv4Address()
'.127.0.0.1'.ipv4Address()
'127..0.1'.ipv4Address()

'00.124.146.193'.ipv4Address()
