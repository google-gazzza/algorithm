// strip-url-params
// Strip Url Params
// https://www.codewars.com/kata/51646de80fd67f442c000013/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/strip-url-params

const stripUrlParams = (url, paramsToStrip = []) => {
  const domain = url.indexOf('?') !== -1 ? url.substr(0, url.indexOf('?')) : url;
  const query = url.slice(url.indexOf('?') + 1).split('&')
    .reduce((acc, cur) => {
      let [key, value] = cur.split('=');
      if (!acc[key] && !paramsToStrip.includes(key)) {
        acc[key] = value;
      }
      return acc;
    }, {});
  
  return !Object.keys(query).length || url.indexOf('?') === -1 ? domain :
    `${domain}?${Object.entries(query).map((v) => v.join('=')).join('&')}`;
};



let url1 = 'www.codewars.com?a=1&b=2';
let url2 = 'www.codewars.com?a=1&b=2&a=1&b=3';
let url3 = 'www.codewars.com?a=1';
let url4 = 'www.codewars.com';

console.log(stripUrlParams(url1), url1);
console.log(stripUrlParams(url2), url1);
console.log(stripUrlParams(url2, ['b']), url3);
console.log(stripUrlParams(url4, ['b']), url4);
console.log(stripUrlParams(url1, ['a', 'b']), url4);
