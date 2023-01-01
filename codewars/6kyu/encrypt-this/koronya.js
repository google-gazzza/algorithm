// [JS][6kyu] Encrypt this!
// encrypt-this
// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

const encryptThis = (text) => {
  return text
    .split(' ')
    .map((item) => {
      const [first, second, ...rest] = item
      const last = rest.pop()
      return `${first.charCodeAt(0)}${last ? last : ''}${rest ? rest.join('') : ''}${second ? second : ''}`
    })
    .join(' ')
}

// encryptThis('Hello') === '72olle'
// encryptThis('good') === '103doo'
// encryptThis('god') === '103do'
// encryptThis('hello world') === '104olle 119drlo'
// encryptThis('gd') === '103d'
// encryptThis('A') === '65'
