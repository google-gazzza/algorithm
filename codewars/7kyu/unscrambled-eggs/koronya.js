// [JS][7kyu] Unscrambled eggs
// unscrambled-eggs
// https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/train/javascript

const unscrambleEggs = (word) => word.replace(/egg/g, '')

unscrambleEggs('Beggegeggineggneggeregg') === 'Beginner'

unscrambleEggs('ceggodegge heggeregge') === 'code here'

unscrambleEggs('FeggUNegg KeggATeggA') === 'FUN KATA'
