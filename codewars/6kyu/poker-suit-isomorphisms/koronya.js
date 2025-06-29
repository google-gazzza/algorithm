// [JS][6kyu] Poker Suit Isomorphisms
// poker-suit-isomorphisms
// https://www.codewars.com/kata/6847f6ebe89e0623fb5aa2c0/train/javascript

const convertShapeInfoToString = (shapeInfo) => {
  return Object.values(shapeInfo)
    .map((shapeCards) => shapeCards.sort().join('-'))
    .sort((a, b) => b.length - a.length || a.localeCompare(b))
    .filter((shapeCards) => shapeCards.length > 0)
    .join('_')
}

const boardsIsomorphic = (board0, board1) => {
  const board0Length = board0.length
  const board1Length = board1.length
  if (board0Length !== board1Length) {
    return false
  }
  const shape0Info = {
    h: [],
    d: [],
    s: [],
    c: [],
  }
  const shape1Info = {
    h: [],
    d: [],
    s: [],
    c: [],
  }
  const makeShapeInfo = (str, shapeInfo) => {
    for (let i = 1; i < board0Length; i += 2 || 0) {
      shapeInfo[str[i]].push(str[i - 1])
    }
  }

  makeShapeInfo(board0, shape0Info)
  makeShapeInfo(board1, shape1Info)

  return convertShapeInfoToString(shape0Info) === convertShapeInfoToString(shape1Info)
}

boardsIsomorphic('Ah', 'Ah') === true
boardsIsomorphic('Ah', 'Ac') === true
boardsIsomorphic('Ah', 'Kc') === false
boardsIsomorphic('Ah', '') === false
boardsIsomorphic('Ah', 'AcKh') === false
boardsIsomorphic('Ah', 'KcKd9h') === false
boardsIsomorphic('QdQh2h', 'QcQd2d') === true
boardsIsomorphic('Qh9h2h', 'Qh9h2h') === true
boardsIsomorphic('Ah9d3c', 'As9h3c') === true
boardsIsomorphic('Ah9d3c', 'As9h3h') === false
boardsIsomorphic('9d7h3s', '9d7h3s') === true
boardsIsomorphic('QdQh2h3h', 'QcQs2s3s') === true
boardsIsomorphic('AhKd7c2c', 'AsKh7d2d') === true
boardsIsomorphic('Ts9s8s7s', 'Tc9c8c7c') === true
boardsIsomorphic('AsKcTd7c', 'AhKsTc7s') === true
boardsIsomorphic('QhJhTh9h', 'QsJsTs9s') === true

boardsIsomorphic('QdQh2h3h', 'QcQs2s4s') === false
boardsIsomorphic('AhKd7c2c', 'AsKh7d3d') === false
boardsIsomorphic('Ts9s8s7s', 'Tc9c8c6c') === false
boardsIsomorphic('AsKcTd7c', 'AhKsTc6s') === false
boardsIsomorphic('QhJhTh9h', 'QsJsTs8s') === false

boardsIsomorphic('AhKdQcJhTh', 'AcKhQdJcTc') === true
boardsIsomorphic('2h3h4h5h6h', '2d3d4d5d6d') === true
boardsIsomorphic('9sTsJsQsKs', '9cTcJcQcKc') === true
boardsIsomorphic('AcKcQcJcTc', 'AhKhQhJhTh') === true
boardsIsomorphic('Ah2h3h4h5h', 'As2s3s4s5s') === true

boardsIsomorphic('AhKdQcJhTh', 'AsKhQdJc9c') === false
boardsIsomorphic('2h3h4h5h6h', '2d3d4d5d7d') === false
boardsIsomorphic('9sTsJsQsKs', '9cTcJcQcAc') === false
boardsIsomorphic('AcKcQcJcTc', 'AsKhQhJh9h') === false
boardsIsomorphic('Ah2h3h4h5h', 'As2s3s4s6s') === false
boardsIsomorphic('', '') === true
boardsIsomorphic('', '2d3d4d5d7d') === false
boardsIsomorphic('9sTsJsQsKs', '9cTcJcQc') === false
