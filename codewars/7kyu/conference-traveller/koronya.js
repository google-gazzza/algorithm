// [JS][7kyu] Conference Traveller
// conference-traveller
// https://www.codewars.com/kata/56f5594a575d7d3c0e000ea0/train/javascript

const conferencePicker = (citiesVisited, citiesOffered) => {
  for (const city of citiesOffered) {
    if (!citiesVisited.includes(city)) {
      return city
    }
  }
  return 'No worthwhile conferences this year!'
}

conferencePicker(['Mexico City', 'Johannesburg', 'Stockholm', 'Osaka', 'Saint Petersburg', 'London'], ['Stockholm', 'Paris', 'Melbourne']) === 'Paris'
conferencePicker(['Buenos Aires', 'Mexico City', 'Johannesburg'], ['Melbourne', 'Moscow']) === 'Melbourne'
conferencePicker(
  ['Tokyo', 'Madrid', 'Melbourne', 'Sydney', 'Rio De Janeiro', 'Saint Petersburg', 'Brisbane', 'Paris', 'Houston'],
  ['Sydney', 'Chicago', 'Paris'],
) === 'Chicago'
conferencePicker([], ['Philadelphia', 'Osaka', 'Tokyo', 'Melbourne']) === 'Philadelphia'
conferencePicker(['London', 'Berlin', 'Mexico City', 'Melbourne', 'Buenos Aires', 'Hong Kong', 'Madrid', 'Paris'], ['Berlin', 'Melbourne']) ===
  'No worthwhile conferences this year!'
