// [JS][6kyu] Let's Recycle!
// let-s-recycle
// https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

const typeList = ['paper', 'glass', 'organic', 'plastic']

const recycle = (array) =>
  typeList.map((type) => {
    return array.filter((item) => item.material === type || item.secondMaterial === type).map((item) => item.type)
  })

const list = [
  { type: 'rotten apples', material: 'organic' },
  { type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
  { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
  { type: 'amazon box', material: 'paper' },
  { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
]

recycle(list)
