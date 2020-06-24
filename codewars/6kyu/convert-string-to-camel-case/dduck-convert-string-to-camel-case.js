// Convert string to camel case
// https://www.codewars.com/kata/517abf86da9663f1d2000003/

const toCamelCase = (str) => str.split('')
  .reduce((a, c, i) => {
    if (a && a[i - 1].match(/[_,-]/)) {
      return a.slice(0, i) + c.toUpperCase();
    }
    return a + c;
  }, '')
  .replace(/[_,-]/gi, '');


console.log(toCamelCase(''), '', "An empty string was provided but not returned");
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value");
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value");
console.log(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value");
