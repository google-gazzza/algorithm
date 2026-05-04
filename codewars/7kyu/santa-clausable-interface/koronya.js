// [JS][7kyu] SantaClausable Interface
// santa-clausable-interface
// https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

const isSantaClausable = (obj) => typeof obj.sayHoHoHo === 'function' && typeof obj.distributeGifts === 'function' && typeof obj.goDownTheChimney === 'function'

let santa = {
  sayHoHoHo: function () {
    console.log('Ho Ho Ho!')
  },
  distributeGifts: function () {
    console.log('Gifts for all!')
  },
  goDownTheChimney: function () {
    console.log('*whoosh*')
  },
}

let notSanta = {
  sayHoHoHo: function () {
    console.log('Oink Oink!')
  },
}

isSantaClausable(santa) === true
isSantaClausable(notSanta) === false
