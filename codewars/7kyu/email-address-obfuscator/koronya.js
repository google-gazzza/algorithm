// [JS][7kyu] Email Address Obfuscator
// email-address-obfuscator
// https://www.codewars.com/kata/562d8d4c434582007300004e/train/javascript

const obfuscate = (email) => email.replace(/@/g, ' [at] ').replace(/\./g, ' [dot] ')

obfuscate('test@123.com') === 'test [at] 123 [dot] com'
obfuscate('Code_warrior@foo.ac.uk') === 'Code_warrior [at] foo [dot] ac [dot] uk'
