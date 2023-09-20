// [JS][7kyu] V A P O R C O D E
// v-a-p-o-r-c-o-d-e
// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

const vaporcode = (string) =>
  string
    .split('')
    .filter((str) => str !== ' ')
    .join('  ')
    .toUpperCase()

vaporcode('Lets go to the movies') === 'L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S'
vaporcode('Why isnt my code working') === 'W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G'
