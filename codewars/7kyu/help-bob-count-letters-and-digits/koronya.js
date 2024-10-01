// [JS][7kyu] Help Bob count letters and digits.
// help-bob-count-letters-and-digits
// https://www.codewars.com/kata/5738f5ea9545204cec000155/train/javascript

const countLettersAndDigits = (input) => input.split('').filter((char) => /[a-zA-Z0-9]/.test(char)).length

countLettersAndDigits('hel2!lo') === 6
countLettersAndDigits('n!!_ice!!123') === 7
countLettersAndDigits('1') === 1
countLettersAndDigits('?') === 0
countLettersAndDigits('12345f%%%t5t&/6') === 10
countLettersAndDigits('aBcDeFg090') === 10
countLettersAndDigits('u_n_d_e_r__S_C_O_R_E') === 10
