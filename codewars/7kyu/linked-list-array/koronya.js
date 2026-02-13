// [JS][7kyu] LinkedList -> Array
// linked-list-array
// https://www.codewars.com/kata/557dd2a061f099504a000088/train/javascript

const listToArray = (list) => {
  const result = []
  let target = list
  while (target) {
    result.push(target.value)
    target = target.next
  }
  return result
}
