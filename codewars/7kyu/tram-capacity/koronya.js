// [JS][7kyu] Tram Capacity
// tram-capacity
// https://www.codewars.com/kata/5b190aa7803388ec97000054/train/javascript

const tram = (stops, descending, onboarding) => {
  let prev = 0
  const arr = Array.from({ length: stops }).map((_, i) => {
    prev = prev - descending[i] + onboarding[i]
    return prev
  })
  return Math.max(...arr)
}

tram(4, [0, 2, 4, 4], [3, 5, 2, 0]) === 6
tram(2, [0, 2, 4, 4], [3, 5, 2, 0]) === 6
tram(1, [0, 2, 4, 4], [3, 5, 2, 0]) === 3
tram(10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) === 25
tram(5, [0, 2, 4, 14, 2], [3, 5, 14, 0, 0]) === 16
