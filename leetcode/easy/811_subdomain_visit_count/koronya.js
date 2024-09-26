// https://leetcode.com/problems/subdomain-visit-count
// Runtime: 72 ms, faster than 89.98% of JavaScript online submissions for Subdomain Visit Count.
// Memory Usage: 38.5 MB, less than 79.41% of JavaScript online submissions for Subdomain Visit Count.

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = cpdomains => {
  const domainMap = new Map()
  cpdomains.map(item => {
    const [count, domain] = item.split(' ')
    domain.split('.').reduceRight((acc, cur) => {
      const seperator = acc === '' ? '' : '.'
      const subdomain = cur + seperator + acc
      domainMap.set(subdomain, (domainMap.get(subdomain) || 0) + Number(count))
      return subdomain
    }, '')
  })
  return [...domainMap].map(item => `${item[1]} ${item[0]}`)
}
