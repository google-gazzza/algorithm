// [JS][7kyu] Simple Fun #251: Apples Distribution
// simple-fun-251-apples-distribution
// https://www.codewars.com/kata/590fca79b5f8a69285000465/train/javascript

const applesDistribution = (apples, boxCapacity, maxResidue) => {
  let count = 0
  let index = 1
  while (index <= boxCapacity) {
    let residue = apples % index
    if (residue <= maxResidue) {
      count += 1
    }
    index += 1
  }

  return count
}

applesDistribution(7, 4, 1) === 3
applesDistribution(10, 5, 1) === 4
