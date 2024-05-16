// [JS][6kyu] Breaking search bad
// breaking-search-bad
// https://www.codewars.com/kata/52cd53948d673a6e66000576/train/javascript

// TITLES is a preloaded array of String to search throught

const TITLES = ['How I Met Your Mother', 'Doctor Who', 'The Hobbit']

function search(searchTerm) {
  const search = new RegExp(searchTerm, 'gi')
  return TITLES.filter((title) => !!title.match(search))
}

const result = search('ho')
