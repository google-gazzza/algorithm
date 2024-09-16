// srot-the-inner-ctonnet-in-dsnnieedcg-oredr
// https://www.codewars.com/kata/5898b4b71d298e51b600014b/solutions/javascript

const sortTheInnerContent = (words) => {
  return words.split(' ')
    .map((word) => {
        if (word.length > 2) {
          return [
            word[0],
            ...(word.slice(1, -1).split('').sort((a, b) => b.localeCompare(a))),
            word.slice(-1)
          ].join('');
        }
        return word;
      }
    )
    .join(' ');
};

console.log(sortTheInnerContent("sort the inner content in descending order"), "srot the inner ctonnet in dsnnieedcg oredr");
console.log(sortTheInnerContent("wait for me"), "wiat for me");
console.log(sortTheInnerContent("this kata is easy"), "tihs ktaa is esay");
