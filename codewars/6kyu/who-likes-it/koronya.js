// [JS][6kyu] Who likes it?
// who-likes-it
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

const likes = (names) => {
  const namesLen = names.length
  if (namesLen === 0) {
    return `no one likes this`
  }
  if (namesLen === 1) {
    return `${names[0]} likes this`
  }
  if (namesLen === 2) {
    return `${names[0]} and ${names[1]} like this`
  }
  if (namesLen === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  return `${names[0]}, ${names[1]} and ${namesLen - 2} others like this`
}

likes([])
likes(['Peter'])
likes(['Jacob', 'Alex'])
likes(['Max', 'John', 'Mark'])
likes(['Alex', 'Jacob', 'Mark', 'Max'])
