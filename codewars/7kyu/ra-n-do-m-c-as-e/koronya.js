// [JS][7kyu] RaNDoM CAsE
// ra-n-do-m-c-as-e
// https://www.codewars.com/kata/57073869924f34185100036d/train/javascript

const randomCase = (x) => x.split('').reduce((acc, curr) => acc + (Math.random() > 0.5 ? curr.toUpperCase() : curr.toLowerCase()), '')

randomCase('Lorem ipsum dolor sit amet, consectetur adipiscing elit')
