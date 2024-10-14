// [JS][7kyu] Help Suzuki rake his garden!
// help-suzuki-rake-his-garden
// https://www.codewars.com/kata/571c1e847beb0a8f8900153d/train/javascript

const rakeGarden = (garden) =>
  garden
    .split(' ')
    .map((item) => (item === 'rock' ? 'rock' : 'gravel'))
    .join(' ')

const garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
rakeGarden(garden)
