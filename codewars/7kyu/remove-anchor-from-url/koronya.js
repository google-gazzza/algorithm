// [JS][7kyu] Remove anchor from URL
// remove-anchor-from-url
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

const removeUrlAnchor = (url) => url.split('#')[0]

removeUrlAnchor('www.codewars.com#about') === 'www.codewars.com'
removeUrlAnchor('www.codewars.com/katas/?page=1#about') === 'www.codewars.com/katas/?page=1'
removeUrlAnchor('www.codewars.com/katas/') === 'www.codewars.com/katas/'
