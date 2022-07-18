/*
929-unique-email-addresses
leetcode/easy/929. Unique Email Addresses
URL: https://leetcode.com/problems/unique-email-addresses/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function numUniqueEmails(emails: string[]): number {
  const emailSet = new Set<string>();

  emails.forEach((email) => {
    let [localName, domain] = email.split('@');
    localName = localName.split('+')[0];
    localName = localName.replace(/\./g, '');

    emailSet.add(`${localName}@${domain}`);
  });

  return emailSet.size;
}

let emails = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com',
];
console.log(numUniqueEmails(emails));
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.


emails = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'];
console.log(numUniqueEmails(emails));
// Output: 3
