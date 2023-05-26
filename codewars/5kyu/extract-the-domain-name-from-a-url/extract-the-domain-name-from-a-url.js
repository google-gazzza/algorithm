/*
extract-the-domain-name-from-a-url

# codewars/5kyu/Extract the domain name from a URL
Difficulty: 5kyu
URL: https://www.codewars.com/kata/514a024011ea4fb54200004b/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const domainName = (url) => url.replace(/^(http|https):\/\//, '')
  .replace(/^www\./, '')
  .split('.')
  .shift();

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
