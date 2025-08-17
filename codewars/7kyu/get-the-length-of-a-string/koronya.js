// [JS][7kyu] Get the 𝑟𝑒𝑎𝑙 length of a string
// get-the-length-of-a-string
// https://www.codewars.com/kata/599c4b69eb8e49effa000079/train/javascript

const getRealLength = (string) => [...string].length

getRealLength('') === 0
getRealLength('abcd') === 4
getRealLength('中国') === 2
getRealLength('𝓪𝓫𝓬𝓭') === 4
getRealLength('𨭎𩷶') === 2
getRealLength('😸🦌🚀') === 3
getRealLength('↓→↑←') === 4
getRealLength('\nabc\ndef\n') === 9
