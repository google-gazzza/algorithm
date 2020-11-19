// replace-every-nth
// Replace every nth
// difficulty: 7kyu
// https://www.codewars.com/kata/57fcaed83206fb15fd00027a/

const replaceNth = (text, n, oldValue, newValue) => {
  if (n < 1) {
    return text;
  }
  
  let count = 0;
  
  return [...text].map((e) => {
    if (e === oldValue) {
      count += 1;
      if (count % n === 0) {
        return newValue;
      }
    }
    
    return e;
  }).join('');
};


console.log(replaceNth('Vader said: No, I am your father!', 2, 'a', 'o'), 'Vader soid: No, I am your fother!');
console.log(replaceNth('Vader said: No, I am your father!', 4, 'a', 'o'), 'Vader said: No, I am your fother!');
console.log(replaceNth('Vader said: No, I am your father!', 6, 'a', 'o'), 'Vader said: No, I am your father!');
console.log(replaceNth('Vader said: No, I am your father!', 0, 'a', 'o'), 'Vader said: No, I am your father!');
console.log(replaceNth('Vader said: No, I am your father!', -2, 'a', 'o'), 'Vader said: No, I am your father!');
console.log(replaceNth('Vader said: No, I am your father!', 1, 'i', 'y'), 'Vader sayd: No, I am your father!');
console.log(replaceNth('Luke cries: Noooooooooooooooo!', 6, 'o', 'i'), 'Luke cries: Noooooioooooioooo!');
