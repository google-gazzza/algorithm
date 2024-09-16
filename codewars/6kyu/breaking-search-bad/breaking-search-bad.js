// breaking-search-bad
// https://www.codewars.com/kata/52cd53948d673a6e66000576

const TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney'];

const search = (searchTerm) => {
  const searchRegExp = new RegExp(searchTerm, 'i');
  
  return TITLES.filter((title) => searchRegExp.test(title));
};

console.log(search('ock'));
//?
// --> ['Rocky 1', 'Rocky 2']
