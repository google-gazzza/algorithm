// [JS][7kyu] Remove All The Marked Elements of a List
// remove-all-the-marked-elements-of-a-list
// https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

Array.prototype.remove_ = function (integer_list, values_list) {
  const removeSet = new Set(values_list)
  return integer_list.filter((value) => !removeSet.has(value))
}

integer_list = [1, 1, 2, 3, 1, 2, 3, 4]
values_list = [1, 3]
Test.assertSimilar(l.remove_(integer_list, values_list), [2, 2, 4])
