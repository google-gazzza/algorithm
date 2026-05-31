// [JS][7kyu] Cinemas in 2020
// cinemas-in-2020
// https://www.codewars.com/kata/68b0064510c5854a66e6323a/train/javascript

const maximumSeating = (seats) => {
  const seatsLength = seats.length
  const arr = seats.map((seat, index) => ({ seat, index })).filter(({ seat }) => seat === 1)
  const seatSet = new Set(arr.map(({ index }) => index))
  const initialSeatSize = seatSet.size

  for (let i = 0; i < seatsLength; i += 1 || 0) {
    if (!seatSet.has(i - 2) && !seatSet.has(i - 1) && !seatSet.has(i + 1) && !seatSet.has(i + 2)) {
      seatSet.add(i)
      i += 2
    }
  }

  return seatSet.size - initialSeatSize
}

maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) === 2
maximumSeating([0, 0, 0, 0]) === 2
maximumSeating([1, 0, 0, 0, 0, 0, 1]) === 1

maximumSeating([1, 0, 0, 0, 0, 0, 0, 1]) === 1
maximumSeating([1, 0, 0, 0, 0, 1]) === 0
maximumSeating([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) === 4
maximumSeating([0]) === 1
maximumSeating([0, 0]) === 1
maximumSeating([1]) === 0
