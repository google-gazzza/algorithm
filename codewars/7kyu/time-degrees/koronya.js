// [JS][7kyu] Time Degrees
// time-degrees
// https://www.codewars.com/kata/5782a87d9fb2a5e623000158/train/javascript

const clockDegree = (s) => {
  const [h, m] = s.split(':').map(Number)
  if (h > 23 || h < 0 || m > 59 || m < 0 || isNaN(h) || isNaN(m)) {
    return 'Check your time !'
  }

  const hh = h % 12 === 0 ? 12 : h % 12
  const mm = m === 0 ? 60 : m

  return `${hh * 30}:${mm * 6}`
}

// clockDegree('01:01') === '30:6'
// clockDegree('00:00') === '360:360'
// clockDegree('01:03') === '30:18'
// clockDegree('01:30') === '30:180'
// clockDegree('12:05') === '360:30'
// clockDegree('26:78') === 'Check your time !'
// clockDegree('23:60') === 'Check your time !'
// clockDegree('24:60') === 'Check your time !'
// clockDegree('16:25') === '120:150'
// clockDegree('17:09') === '150:54'
// clockDegree('19:00') === '210:360'
// clockDegree('20:34') === '240:204'
// clockDegree('23:20') === '330:120'
// clockDegree('24:00') === 'Check your time !'
// clockDegree('-09:00') === 'Check your time !'
