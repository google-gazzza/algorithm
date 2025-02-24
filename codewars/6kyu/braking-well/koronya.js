// [JS][6kyu] Braking well
// braking-well
// https://www.codewars.com/kata/565c0fa6e3a7d39dee000125/train/javascript

const dist = (v, mu) => {
  const adjustV = (v * 1000) / 3600
  const d1 = adjustV ** 2 / (2 * mu * 9.81)
  const stoppingDistance = adjustV * 1

  return d1 + stoppingDistance
}

const speed = (d, mu) => {
  const temp = 2 * mu * 9.81
  const child = -1 * temp + Math.sqrt(temp ** 2 + 4 * temp * d)
  const adjustV = child / 2
  const v = (adjustV * 3600) / 1000

  return v
}

dist(100, 0.7)
speed(83.9598760937531, 0.7)

dist(144, 0.3)
dist(92, 0.5)
dist(142, 0.2)
dist(96, 0.2)

speed(159, 0.8)
speed(164, 0.7)
speed(153, 0.7)
speed(88, 0.9)

// 9.8 m/s -> 9.8 * 60 * 60 / h
// 1 km/h -> 1/60 km / m -> 1/3600 km / s
// 1000 / 3600
