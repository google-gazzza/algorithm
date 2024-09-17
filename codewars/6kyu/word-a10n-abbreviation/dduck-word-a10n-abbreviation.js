// word-a10n-abbreviation
// https://www.codewars.com/kata/5375f921003bf62192000746/

const abbreviate = (string) => string.replace(/\w+/g, (matchResult) => {
  if (matchResult.length > 3) {
    return `${matchResult[0]}${matchResult.length - 2}${matchResult.slice(-1)}`;
  }
  return matchResult;
});

console.log(abbreviate("internationalization"), "i18n");
console.log(abbreviate("accessibility"), "a11y");
console.log(abbreviate("Accessibility"), "A11y");
console.log(abbreviate("elephant-ride"), "e6t-r2e");
console.log(abbreviate("elephant-rides are really fun!"), "e6t-r3s are r4y fun!");
