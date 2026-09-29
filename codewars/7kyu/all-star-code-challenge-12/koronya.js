// [JS][7kyu] All Star Code Challenge #12
// all-star-code-challenge-12
// https://www.codewars.com/kata/5864916573bd9c1e1c000007/train/javascript

function combineFriends(array) {
  const result = {}
  array.map((item) => {
    const id = item.id
    delete item.id
    result[id] = item
  })
  return result
}

var Friend = (function () {
  //utilizing closure
  var id = 0
  return function Friend(obj) {
    //will give unique ID to each object
    this.id = id++
    for (var i in obj) {
      this[i] = obj[i]
    }
  }
})()

var first = new Friend({ name: 'dave' })
var second = new Friend({ blah: false })
var third = new Friend({ this: 'is', just: 'a test' })
var inputArray = [first, second, third]
var allFriends = combineFriends(inputArray)

allFriends['0']['name'] === 'dave' // => true
Object.keys(allFriends).length === inputArray.length // => true
allFriends['0'].id === undefined // => true
