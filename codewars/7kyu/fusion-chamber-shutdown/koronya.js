// [JS][7kyu] ⚠️Fusion Chamber Shutdown⚠️
// fusion-chamber-shutdown
// https://www.codewars.com/kata/5fde1ea66ba4060008ea5bd9/train/javascript

const burner = (c, h, o) => {
  const water = Math.min(Math.floor(h / 2), o)
  h -= water * 2
  o -= water

  const co2 = Math.min(c, Math.floor(o / 2))
  c -= co2
  o -= co2 * 2

  const methane = Math.min(c, Math.floor(h / 4))
  c -= methane
  h -= methane * 4

  return [water, co2, methane]
}

burner(45, 11, 100)
burner(354, 1023230, 0)
burner(939, 3, 694)
burner(215, 41, 82100)
burner(113, 0, 52)
