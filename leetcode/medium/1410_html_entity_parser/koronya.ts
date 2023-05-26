// [Medium] 1410. HTML Entity Parser
// 1410_html_entity_parser

// https://leetcode.com/problems/html-entity-parser
// Runtime: 120 ms, faster than 50.00% of TypeScript online submissions for HTML Entity Parser.
// Memory Usage: 46.3 MB, less than 100.00% of TypeScript online submissions for HTML Entity Parser.

const MATCHED_OBJ = {
  '&quot;': '"',
  '&apos;': "'",
  '&amp;': '&',
  '&gt;': '>',
  '&lt;': '<',
  '&frasl;': '/',
}

const getEntityStr = (str: string): string => (MATCHED_OBJ[str] ? MATCHED_OBJ[str] : str)

/**
 * @param {string} text
 * @return {string}
 */
function entityParser(text: string): string {
  let entityStr: string = ''
  let resultStr: string = ''
  const textLen: number = text.length
  for (let i: number = 0; i < textLen; i += 1) {
    const str: string = text[i]
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
// [Medium] 1410. HTML Entity Parser
// 1410_html_entity_parser

// https://leetcode.com/problems/html-entity-parser
// Runtime: 120 ms, faster than 50.00% of TypeScript online submissions for HTML Entity Parser.
// Memory Usage: 46.3 MB, less than 100.00% of TypeScript online submissions for HTML Entity Parser.

const MATCHED_OBJ = {
  '&quot;': '"',
  '&apos;': "'",
  '&amp;': '&',
  '&gt;': '>',
  '&lt;': '<',
  '&frasl;': '/',
}

const getEntityStr = (str: string): string => (MATCHED_OBJ[str] ? MATCHED_OBJ[str] : str)

/**
 * @param {string} text
 * @return {string}
 */
function entityParser(text: string): string {
  let entityStr: string = ''
  let resultStr: string = ''
  const textLen: number = text.length
  for (let i: number = 0; i < textLen; i += 1) {
    const str: string = text[i]
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
