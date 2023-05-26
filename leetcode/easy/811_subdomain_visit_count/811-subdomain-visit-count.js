/*
811-subdomain-visit-count

# leetcode/easy/811. Subdomain Visit Count
Difficulty: easy
URL: https://leetcode.com/problems/subdomain-visit-count/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let result = {};
  
  cpdomains.forEach((domainInfo) => {
    let [baseCount, domain] = domainInfo.split(' ');
    baseCount = Number(baseCount);
    
    domain.split('.')
      .forEach((domainLevel, i, arr) => {
        const targetDomain = arr.slice(i).join('.');
        result[targetDomain] = (result[targetDomain] || 0) + baseCount;
      });
  });
  
  return [...Object.entries(result)]
    .map((e) => [e[1], e[0]].join(' '));
};

test('test subdomain visit', () => {
  expect(subdomainVisits(["9001 discuss.leetcode.com"]))
    .toEqual(
      expect.arrayContaining([
        "9001 discuss.leetcode.com",
        "9001 leetcode.com",
        "9001 com",
      ]),
    );
  
  expect(subdomainVisits([
    "900 google.mail.com",
    "50 yahoo.com",
    "1 intel.mail.com",
    "5 wiki.org",
  ]))
    .toEqual(
      expect.arrayContaining([
        "901 mail.com",
        "50 yahoo.com",
        "900 google.mail.com",
        "5 wiki.org",
        "5 org",
        "1 intel.mail.com",
        "951 com",
      ]),
    );
});
