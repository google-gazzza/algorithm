// [JS][6kyu] Prize Draw
// prize-draw
// https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript

const START_ZERO_INDEX = 'a'.charCodeAt(0) - 1

const getSum = (str, weight) => {
  return (
    weight *
    (str.length +
      str.split('').reduce((acc, cur) => {
        return acc + cur.toLowerCase().charCodeAt(0) - START_ZERO_INDEX
      }, 0))
  )
}

const rank = (st, we, n) => {
  if (!st) {
    return 'No participants'
  }
  const peopleList = st.split(',')
  if (n > peopleList.length) {
    return 'Not enough participants'
  }
  // prettier-ignore
  const matchedPeople = peopleList.map((name, index) => [name, getSum(name, we[index])]).sort((a, b) => (b[1] !== a[1] ? b[1] - a[1] : a[0] > b[0] ? 1 : -1))[n - 1]

  return matchedPeople[0]
}

// rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 4)
// rank('Lagon,Lily', [1, 5], 2)
// rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 8)
// rank('', [4, 2, 1, 4, 3, 1, 2], 6)
// rank('COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH', [1, 4, 4, 5, 2, 1], 4)

// rank(
//   'Elijah,Lily,Jacob,William,Abigail,Natalie,Robert,Noah,Ava,Andrew,Benjamin,Olivai,Joshua,Mia,Aiden,Lagon,Addison,Isabella,Elizabeth',
//   [5, 5, 2, 3, 4, 6, 5, 4, 6, 5, 6, 5, 4, 3, 1, 1, 4, 6, 6],
//   5,
// )
