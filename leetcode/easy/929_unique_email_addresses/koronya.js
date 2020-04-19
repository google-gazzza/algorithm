// Runtime: 64 ms, faster than 98.94% of JavaScript online submissions for Unique Email Addresses.
// Memory Usage: 42.8 MB, less than 16.67% of JavaScript online submissions for Unique Email Addresses.
const adjustLocalName = name => {
  const nameLen = name.length
  let returnStr = ''

  for (let i = 0; i < nameLen; i += 1) {
    const str = name[i]
    if (str === '+') {
      break
    }
    if (str !== '.') {
      returnStr += str
    }
  }

  return returnStr
}

const numUniqueEmails = emails => {
  const emailSet = new Set()
  emails.map(item => {
    const [local, domain] = item.split('@')
    const uniqueEmail = `${adjustLocalName(local)}@${domain}`

    if (!emailSet.has(uniqueEmail)) {
      emailSet.add(uniqueEmail)
    }
  })

  return emailSet.size
}
