// [JS][7kyu] How long will it take the train to reach its final destination?
// how-long-will-it-take-the-train-to-reach-its-final-destination
// https://www.codewars.com/kata/58342f14fa17ad4285000307/train/javascript

const reachDestination = (distance, speed) => {
  const time = Math.round((distance / speed) * 2) / 2
  return `The train will be there in ${time} hour${time === 1 ? '' : 's'}.`
}

// reachDestination(8, 10)
// reachDestination(7, 10)
// reachDestination(5, 10) === 'The train will be there in 0.5 hours.'
// reachDestination(80, 20) === 'The train will be there in 4 hours.'
// reachDestination(80, 80) === 'The train will be there in 1 hour.'
