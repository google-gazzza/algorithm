// [JS][7kyu] Genetic Algorithm Series - #3 Crossover
// genetic-algorithm-series-3-crossover
// https://www.codewars.com/kata/567d71b93f8a50f461000019/train/javascript

const crossover = (chromosome1, chromosome2, index) => {
  const first = chromosome1.slice(0, index) + chromosome2.slice(index)
  const second = chromosome2.slice(0, index) + chromosome1.slice(index)
  return [first, second]
}

crossover('110', '001', 2)
crossover('111000', '000110', 3)
