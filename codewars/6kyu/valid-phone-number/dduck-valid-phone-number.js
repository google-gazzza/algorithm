// valid-phone-number
// https://www.codewars.com/kata/525f47c79f2f25a4db000025

const validPhoneNumber = (phoneNumber) => !!phoneNumber.match(/^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/);

console.log(validPhoneNumber("(123) 456-7890"), true);
//?
