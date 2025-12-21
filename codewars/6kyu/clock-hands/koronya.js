// [JS][6kyu] Clock Hands
// clock-hands
// https://www.codewars.com/kata/54605ca35bff82c575000d86/train/javascript

const clockHands = (angle) => {
  const a = ((angle % 360) + 360) % 360
  const results = []
  const hourAngleSpeed = 1 / 120
  const minuteAngleSpeed = 1 / 10
  const relSpeed = minuteAngleSpeed - hourAngleSpeed

  for (let k = 0; k < 11; k += 1 || 0) {
    const t = (a + 360 * k) / relSpeed
    const sec = Math.floor(t + 1e-9)
    const h0 = Math.floor(sec / 3600) % 12
    const h = h0 === 0 ? 12 : h0
    const m = Math.floor((sec % 3600) / 60)
    const s = sec % 60

    const HH = String(h).padStart(2, '0')
    const MM = String(m).padStart(2, '0')
    const SS = String(s).padStart(2, '0')

    results.push(`${HH}:${MM}:${SS}`)
  }

  return results
}

// clockHands(0) === ['12:00:00', '01:05:27', '02:10:54', '03:16:21', '04:21:49', '05:27:16', '06:32:43', '07:38:10', '08:43:38', '09:49:05', '10:54:32']
