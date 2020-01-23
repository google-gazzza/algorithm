// https://www.codewars.com/kata/santas-naughty-list

const findChildren = (santasList, children, filteredList = []) => {
  const targetChild = children.shift();
  
  santasList = santasList.map((v) => {
    if (targetChild === v) {
      filteredList.push(v);
      return null;
    }
    return v;
  });
  
  return children.length ? findChildren(santasList, children, filteredList)
    : [...new Set(filteredList.sort())];
};

// findChildren(['Jason', 'Jackson', 'Jordan', 'Johnny'], ['Jason', 'Jordan', 'Jennifer']);
//?
// ['Jason', 'Jordan']);

findChildren(['jASon', 'JAsoN', 'JaSON', 'jasON'], ['JasoN', 'jASOn', 'JAsoN', 'jASon', 'JASON']);
//?
// ['JAsoN', 'jASon']);

findChildren(['Jason', 'James', 'Johnson'], ['Jason', 'James', 'JJ']);
//?
// ['James', 'Jason']);

testarr = ['HxSbXRX',
  'LTAOucDcPEQX',
  'PxLAJ',
  'SBQbuYvjLZbsjQxg',
  'SjXxLx',
  'SjXxLx',
  'SvudCbuDYLYbnxpHjNz',
  'ZBLLoqrLZ',
  'acJJNRcZIq',
  'acJJNRcZIq',
  'alBRLzjZLfbZuaPzEG',
  'jaOvKNOeP',
  'kJQHWGvkmWRNhKoDg',
  'kJQHWGvkmWRNhKoDg',
  'kwnKcaRkrfpfoln',
  'kwnKcaRkrfpfoln',
  'oCchFboUy',
  'rnwWnbQyBJHWERmoHqY',
  'rnwWnbQyBJHWERmoHqY',
  'rnwWnbQyBJHWERmoHqY',
  'rnwWnbQyBJHWERmoHqY',
  'sBPsISoBCrRlIcPLI',
  'sBPsISoBCrRlIcPLI',
  'vJPHFqFvCbVWxUIuDrcN',
  'zOpKk'];

console.log([...new Set(testarr)]);
//?
