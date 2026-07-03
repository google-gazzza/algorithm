// [JS][7kyu] Party People
// party-people
// https://www.codewars.com/kata/65013fc50038a68939098dcf/train/javascript

const partyPeople = (party) => {
  party.sort((a, b) => b - a)
  let count = party.length
  party.every((num) => {
    if (num > count) {
      count -= 1
      return true
    }
    return false
  })
  return count
}

partyPeople([4, 5, 4, 1]) === 1
partyPeople([10, 12, 15, 15, 5]) === 0
partyPeople([2, 1, 2, 0]) === 4
partyPeople([0, 0, 0, 0]) === 4
partyPeople([5, 5, 5, 5]) === 0
partyPeople([5, 5, 5, 5, 5]) === 5
partyPeople([1, 5, 3, 5, 0]) === 5
partyPeople([13, 8, 11, 15, 13, 3, 12, 13, 6, 3]) === 0
partyPeople([11, 3, 4, 3, 11, 4, 0, 1, 1, 3]) === 8
partyPeople([15, 3, 8, 0, 2, 12, 13, 7, 6]) === 3
partyPeople([3, 11, 15, 5, 3, 4, 10, 8, 14, 6, 13, 1]) === 6
partyPeople([7, 14, 14, 0, 7, 3, 2, 2]) === 4
partyPeople([2, 6, 7, 4, 6, 10, 4, 3, 6, 2, 0]) === 11
partyPeople([0, 2, 3, 5, 6, 6, 6, 7, 11, 12, 13, 14, 16, 19, 20]) === 8
