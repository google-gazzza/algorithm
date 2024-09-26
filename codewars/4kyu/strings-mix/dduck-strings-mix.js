// strings-mix
// Strings Mix
// https://www.codewars.com/kata/5629db57620258aa9d000014/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/4kyu/strings-mix

const collectData = (map, str, arraySequence) => {
  str.match(/[a-z]/g)
    .forEach((v) => {
      const format = map.get(v) || {};
      format[arraySequence] = (format[arraySequence] || 0) + 1;
      format.max = Math.max(format[1] || 0, format[2] || 0);
      
      if (format[1] === format[2]) {
        format.greater = '=';
      } else {
        format.greater = (format[1] || 0) > (format[2] || 0) ? 1 : 2;
      }
      
      map.set(v, format);
    });
  return map;
};

const mix = (s1, s2) => {
  let map = collectData(new Map(), s1, 1);
  map = collectData(map, s2, 2);
  
  const sortedResult = [...map.entries()].sort((a, b) => {
    if (a[1].max < b[1].max) {
      return 1;
    }
    
    if (a[1].max === b[1].max) {
      if ((parseInt(a[1].greater) || 3) > (parseInt(b[1].greater) || 3)) {
        return 1;
      }
      
      if (a[1].greater === b[1].greater) {
        return a[0].localeCompare(b[0]);
      }
    }
    
    return -1;
  }).filter((v) => v[1].max > 1);
  
  return sortedResult.map((v) => `${v[1].greater}:${v[0].repeat(v[1].max)}`)
    .join('/');
};



console.log(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr");
console.log(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg");
console.log(mix(" In many languages", " there's a pair of functions"),
  "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt");
console.log(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo");
console.log(mix("codewars", "codewars"), "");
console.log(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr");
