// [JS][6kyu] can-santa-save-christmas
// can-santa-save-christmas
// https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript

const HOUR24 = 24 * 60 * 60
const determineTime = (durations) => {
  const totalSeconds = durations.reduce((acc, time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number)
    return acc + hours * 3600 + minutes * 60 + seconds
  }, 0)
  return totalSeconds <= HOUR24
}

determineTime(['00:30:00', '02:30:00', '00:15:00']) === true
determineTime([]) === true
determineTime(['04:30:00', '02:00:00', '01:30:00', '16:00:00']) === true
determineTime(['12:00:00', '12:00:00']) === true
determineTime(['12:00:00', '12:00:01']) === false
determineTime(['06:00:00', '12:00:00', '06:30:00']) === false
