// [JS][6kyu] GA-DE-RY-PO-LU-KI cypher vol 3 - Missing key
// ga-de-ry-po-lu-ki-cypher-vol-3-missing-key
// https://www.codewars.com/kata/592bdf59912f2209710000e9/train/javascript

const findTheKey = (messages, secrets) => {
  const keySet = new Set()
  messages.forEach((message, messageIndex) => {
    const secret = secrets[messageIndex]
    for (let i = 0; i < message.length; i += 1 || 0) {
      const messageChar = message[i]
      const secretChar = secret[i]
      if (messageChar !== secretChar) {
        const key = messageChar.charCodeAt(0) > secretChar.charCodeAt(0) ? `${secretChar}${messageChar}` : `${messageChar}${secretChar}`
        if (!keySet.has(key)) {
          keySet.add(key)
        }
      }
    }
  })
  return [...keySet].sort((a, b) => a.localeCompare(b)).join('')
}

const messages = ['dance on the table', 'hide my beers', 'scouts rocks']
const secrets = ['egncd pn thd tgbud', 'hked mr bddys', 'scplts ypcis']

findTheKey(messages, secrets) === 'agdeikluopry'
