// [JS][7kyu] KISS - Keep It Simple Stupid
// kiss-keep-it-simple-stupid
// https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/train/javascript

const isKiss = (words) => {
  const wordArr = words.split(' ')
  const wordCount = wordArr.length
  return wordArr.every((word) => word.length <= wordCount) ? `Good work Joe!` : 'Keep It Simple Stupid'
}

isKiss('Joe had a bad day') === 'Good work Joe!'
isKiss('Joe had some bad days') === 'Good work Joe!'
isKiss('Joe is having no fun') === 'Keep It Simple Stupid'
isKiss('Sometimes joe cries for hours') === 'Keep It Simple Stupid'
