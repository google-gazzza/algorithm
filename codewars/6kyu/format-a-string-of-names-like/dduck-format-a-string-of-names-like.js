// format-a-string-of-names-like
// https://www.codewars.com/kata/53368a47e38700bd8300030d/

const list = (names) => names.reduceRight((a, c, i) => {
  if (i === names.length - 2) {
    return `${c.name} & ${a}`;
  }
  if (i < names.length - 2) {
    return `${c.name}, ${a}`;
  }
  return c.name;
}, '');

console.log(list([
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
    { name: 'Homer' },
    { name: 'Marge' },
  ]), 'Bart, Lisa, Maggie, Homer & Marge',
  "Must work with many names");
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie',
  "Must work with many names");
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa',
  "Must work with two names");
console.log(list([{ name: 'Bart' }]), 'Bart', "Wrong output for a single name");
console.log(list([]), '', "Must work with no names");
