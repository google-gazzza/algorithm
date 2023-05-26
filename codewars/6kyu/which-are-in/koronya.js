// [JS][6kyu] Which are in?
// which-are-in
// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

const inArray = (array1, array2) => array1.filter((item) => array2.find((item2) => item2.includes(item))).sort()

inArray(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'])
inArray(['live', 'strong', 'arp'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'])
// inArray(['tarp', 'mice', 'bull'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'])
