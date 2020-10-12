// remove-anchor-from-url
// Remove anchor from URL
// difficulty: 7kyu
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/

const removeUrlAnchor = (url) => url.replace(/#.+/, '');


console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
//?
