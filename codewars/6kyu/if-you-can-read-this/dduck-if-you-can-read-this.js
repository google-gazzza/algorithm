// if-you-can-read-this
// If you can read this...
// difficulty: 6kyu
// https://www.codewars.com/kata/586538146b56991861000293/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/if-you-can-read-this...

const natoPhoneticAlphabt = {
  'a': 'Alfa',
  'b': 'Bravo',
  'c': 'Charlie',
  'e': 'Echo',
  'd': 'Delta',
  'f': 'Foxtrot',
  'g': 'Golf',
  'h': 'Hotel',
  'i': 'India',
  'j': 'Juliett',
  'k': 'Kilo',
  'l': 'Lima',
  'm': 'Mike',
  'n': 'November',
  'o': 'Oscar',
  'p': 'Papa',
  'q': 'Quebec',
  'r': 'Romeo',
  's': 'Sierra',
  't': 'Tango',
  'u': 'Uniform',
  'v': 'Victor',
  'w': 'Whiskey',
  'x': 'Xray',
  'y': 'Yankee',
  'z': 'Zulu',
};

const to_nato = (words) => [...words.replace(/\s/g, '').toLowerCase()].map((v) => {
  if (v.match(/[a-z]/)) {
    return natoPhoneticAlphabt[v];
  }
  return v;
}).join(' ');



console.log(to_nato('If you can read') === "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
console.log(to_nato('Did not see that coming') === "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
console.log(to_nato('go for it!') === "Golf Oscar Foxtrot Oscar Romeo India Tango !");
