// [JS][7kyu] Bug Squish!
// bug-squish
// https://www.codewars.com/kata/5a21f943c5e284d4340000cb/train/javascript

const debug = (s) => s.replace(/bugs/g, '_').replace(/bug/g, '').replace(/_/g, 'bugs')

debug('obugobugobuoobugsoo') === 'ooobuoobugsoo'
debug('obbugugo') === 'obugo'
debug('bugs bunny') === 'bugs bunny'
debug('bugs buggy') === 'bugs gy'
