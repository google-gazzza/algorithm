// ultimate-array-reverser
// Ultimate Array Reverser
// difficulty: 7kyu
// https://www.codewars.com/kata/5c3433a4d828182e420f4197/

const ultimateReverse = (a) => {
  let reversedString = [...(a.join(''))].reverse();
  const result = [];
  
  a.forEach((e) => {
    result.push(reversedString.slice(0, e.length).join(''));
    reversedString = reversedString.slice(e.length);
  });
  
  return result;
};

ultimateReverse(['I', 'like', 'big', 'butts', 'and', 'I', 'cannot', 'lie!']);
//?
//   ['!', 'eilt', 'onn', 'acIdn', 'ast', 't', 'ubgibe', 'kilI']);
