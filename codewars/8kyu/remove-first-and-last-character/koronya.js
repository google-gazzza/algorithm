// [JS][8kyu] Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// remove-first-and-last-character

const removeChar = (str) => str.substr(1, str.length - 2);

removeChar("eloquent") === "loquen";
removeChar("country") === "ountr";
removeChar("person") === "erso";
removeChar("place") === "lac";
removeChar("ooopsss") === "oopss";
