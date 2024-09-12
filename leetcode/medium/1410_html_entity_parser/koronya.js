// [Medium] 1410. HTML Entity Parser
// 1410_html_entity_parser

// https://leetcode.com/problems/html-entity-parser
// Runtime: 120 ms, faster than 66.67% of JavaScript online submissions for HTML Entity Parser.
// Memory Usage: 46.2 MB, less than 81.25% of JavaScript online submissions for HTML Entity Parser.

const MATCHED_OBJ = {
  '&quot;': '"',
  '&apos;': "'",
  '&amp;': '&',
  '&gt;': '>',
  '&lt;': '<',
  '&frasl;': '/',
}

const getEntityStr = (str) => (MATCHED_OBJ[str] ? MATCHED_OBJ[str] : str)

/**
 * @param {string} text
 * @return {string}
 */
const entityParser = function (text) {
  let entityStr = ''
  let resultStr = ''
  const textLen = text.length
  for (let i = 0; i < textLen; i += 1 || 0) {
    const str = text[i]
    if (entityStr !== '') {
      if (str === '&') {
        resultStr += entityStr
        entityStr = str
      } else {
        entityStr += str
        if (str === ';') {
          resultStr += getEntityStr(entityStr)
          entityStr = ''
        }
      }
    } else {
      if (str === '&') {
        entityStr = str
      } else {
        resultStr += str
      }
    }
  }
  return resultStr
}

entityParser('&amp; is an HTML entity but &ambassador; is not.') //?
entityParser('&&gt;') //?
