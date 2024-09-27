// [JS][8kyu] Filter out the geese
// filter-out-the-geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

const EXCEPT_LIST = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']

const gooseFilter = (birds) => birds.filter((item) => !EXCEPT_LIST.includes(item))

gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'])
gooseFilter(['Mallard', 'Hook Bill', 'African', 'Crested', 'Pilgrim', 'Toulouse', 'Blue Swedish'])
