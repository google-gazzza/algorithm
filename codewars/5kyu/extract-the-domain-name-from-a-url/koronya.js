// [JS][5kyu] Extract the domain name from a URL
// extract-the-domain-name-from-a-url
// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

const domainName = (url) => {
  let target = url
  if (url.includes('http://')) {
    target = target.slice(7)
  } else if (url.includes('https://')) {
    target = target.slice(8)
  }
  const [first, second, ...rest] = target.split('.')

  return first === 'www' ? second : first
}

domainName('http://google.com') === 'google'
domainName('http://google.co.jp') === 'google'
domainName('www.xakep.ru') === 'xakep'
domainName('https://youtube.com') === 'youtube'
