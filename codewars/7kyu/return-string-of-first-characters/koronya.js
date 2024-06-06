// [JS][7kyu] Return String of First Characters
// return-string-of-first-characters
// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript

const makeString = (s) =>
  s
    .split(' ')
    .map((word) => word[0])
    .join('')

makeString('sees eyes xray yoat') === 'sexy'
makeString('brown eyes are nice') === 'bean'
makeString('cars are very nice') === 'cavn'
makeString('kaks de gan has a big head') === 'kdghabh'
