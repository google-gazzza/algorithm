// [JS][5kyu] Human Readable Time
// human-readable-time
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

const modifyNumber = (n) => String(n).padStart(2, '0')

const humanReadable = (seconds) => {
  let target = seconds
  const h = Math.floor(target / 3600)
  target -= h * 3600
  const m = Math.floor(target / 60)
  target -= m * 60
  const s = target

  return `${modifyNumber(h)}:${modifyNumber(m)}:${modifyNumber(s)}`
}

humanReadable(0)
humanReadable(59)
humanReadable(60)
humanReadable(90)
humanReadable(3599)
humanReadable(3600)

humanReadable(45296)
humanReadable(86399)
humanReadable(86400)
humanReadable(359999)
