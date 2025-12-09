// [JS][7kyu] Airport itinerary
// airport-itinerary
// https://www.codewars.com/kata/57a72cb872292dc43100000c/train/javascript

const itinerary = (travel) => {
  const result = []
  let prevAirport = ''
  travel.forEach(({ in: travelIn, out: travelOut }) => {
    if (travelIn !== prevAirport) {
      result.push(travelIn)
    }
    result.push(travelOut)
    prevAirport = travelOut
  })

  return result.join('-')
}

itinerary([{ in: 'TRN', out: 'FCO' }]) === 'TRN-FCO'
itinerary([
  { in: 'TRN', out: 'FCO' },
  { in: 'CIA', out: 'JFK' },
]) === 'TRN-FCO-CIA-JFK'
itinerary([
  { in: 'TRN', out: 'FCO' },
  { in: 'FCO', out: 'JFK' },
]) === 'TRN-FCO-JFK'
itinerary([
  { in: 'TRN', out: 'FCO' },
  { in: 'CIA', out: 'TRN' },
]) === 'TRN-FCO-CIA-TRN'
itinerary([
  { in: 'TRN', out: 'FCO' },
  { in: 'FCO', out: 'TRN' },
]) === 'TRN-FCO-TRN'
