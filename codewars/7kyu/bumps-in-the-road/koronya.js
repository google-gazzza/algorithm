// [JS][7kyu] Bumps in the Road
// bumps-in-the-road
// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

const bump = (x) => (x.split('').filter((item) => item === 'n').length > 15 ? 'Car Dead' : 'Woohoo!')

bump('n') === 'Woohoo!'
bump('__nn_nnnn__n_n___n____nn__nnn') === 'Woohoo!'
bump('nnn_n__n_n___nnnnn___n__nnn__') === 'Woohoo!'
bump('_nnnnnnn_n__n______nn__nn_nnn') === 'Car Dead'
bump('______n___n_') === 'Woohoo!'
