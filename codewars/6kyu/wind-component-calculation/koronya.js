// [JS][6kyu] Wind component calculation
// wind-component-calculation
// https://www.codewars.com/kata/542c1a6b25808b0e2600017c/train/javascript

const degToRad = (deg) => (deg * Math.PI) / 180

const roundInt = (x) => {
  const EPS = 1e-12
  return x >= 0 ? Math.round(x + EPS) : Math.round(x - EPS)
}

const windComponents = (rwy, windDirection, windSpeed) => {
  console.log('rwy:', rwy, 'windDirection:', windDirection, 'windSpeed:', windSpeed)
  const runwayNum = Number.parseInt(rwy.slice(0, 2), 10)
  const runwayHeading = runwayNum * 10

  let diff = windDirection - runwayHeading
  diff = ((diff + 540) % 360) - 180 // [-180, 180)

  const A = degToRad(diff)

  const hw = Math.cos(A) * windSpeed
  const cw = Math.sin(A) * windSpeed

  const hwR = roundInt(hw)
  const cwR = roundInt(cw)

  const headTail = hwR < 0 ? 'Tailwind' : 'Headwind'
  const side = cwR < 0 ? 'left' : 'right'

  return `${headTail} ${Math.abs(hwR)} knots. Crosswind ${Math.abs(cwR)} knots from your ${side}.`
}

windComponents('18L', 170, 15) === 'Headwind 15 knots. Crosswind 3 knots from your left.'
windComponents('22', 160, 20) === 'Headwind 10 knots. Crosswind 17 knots from your left.'
windComponents('33', 120, 1)
