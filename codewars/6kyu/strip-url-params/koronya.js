// [JS][6kyu] Strip Url Params
// strip-url-params
// https://www.codewars.com/kata/51646de80fd67f442c000013/train/javascript

const stripUrlParams = (url, paramsToStrip = []) => {
  const [beforeQuery, queryParams] = url.split('?')
  const queryArr = queryParams ? queryParams.split('&') : []
  const keySet = new Set()
  const filteredArr = queryArr.filter((item) => {
    const [key, _] = item.split('=')
    if (paramsToStrip.includes(key)) {
      return false
    }
    if (keySet.has(key) === false) {
      keySet.add(key)
      return true
    }
    return false
  })
  return `${beforeQuery}${filteredArr.length > 0 ? '?' : ''}${filteredArr.join('&')}`
}

let url1 = 'www.codewars.com?a=1&b=2'
let url2 = 'www.codewars.com?a=1&b=2&a=1&b=3'
let url3 = 'www.codewars.com?a=1'
let url4 = 'www.codewars.com'

stripUrlParams(url1) === url1
stripUrlParams(url2) === url1
stripUrlParams(url2, ['b']) === url3
stripUrlParams(url4, ['b']) === url4
stripUrlParams(url1, ['a', 'b']) === url4
