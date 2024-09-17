// [JS][6kyu] Clocky Mc Clock-Face
// clocky-mc-clock-face
// https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript

const whatTimeIsIt = (angle) => {
  const minutes = Math.floor(angle * 2)
  const passedHours = Math.floor(minutes / 60)
  const passedMinutes = minutes % 60

  return `${passedHours > 0 ? String(passedHours).padStart(2, '0') : '12'}:${String(passedMinutes).padStart(2, '0')}`
}

whatTimeIsIt(0) === '12:00'
whatTimeIsIt(90) === '03:00'
whatTimeIsIt(180) === '06:00'
whatTimeIsIt(270) === '09:00'
whatTimeIsIt(360) === '12:00'

// 360 -> 12h -> 720m
// 1 -> 2m
