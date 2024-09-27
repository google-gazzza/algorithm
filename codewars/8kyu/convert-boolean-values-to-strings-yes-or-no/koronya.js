// [JS][8kyu] Convert boolean values to strings 'Yes' or 'No'.
// convert-boolean-values-to-strings-yes-or-no
// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

const boolToWord = (bool) => (bool === true ? "Yes" : "No");

boolToWord(true) === "Yes";
boolToWord(false) === "No";
