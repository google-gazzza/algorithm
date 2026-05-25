// [JS][7kyu] String Reordering
// string-reordering
// https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript

const sentence = (arrayOfObjects) =>
  arrayOfObjects
    .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map((obj) => Object.values(obj)[0])
    .join(' ')

const arr = [{ 4: 'dog' }, { 2: 'took' }, { 3: 'his' }, { '-2': 'Vatsan' }, { 5: 'for' }, { 6: 'a' }, { 12: 'spin' }]
sentence(arr)
