// [JS][6kyu] Clock in Mirror
// clock-in-mirror
// https://www.codewars.com/kata/56548dad6dae7b8756000037/train/javascript

const WhatIsTheTime = (timeInMirror) => {
  const [hour, minute] = timeInMirror.split(':').map((v) => Number(v))
  const time = hour * 60 + minute
  const mirrorTime = time > 720 ? 1440 - time : 720 - time
  const mirrorHour = Math.floor(mirrorTime / 60)
  const mirrorMinute = mirrorTime % 60

  return `${mirrorHour === 0 ? 12 : String(mirrorHour).padStart(2, '0')}:${String(mirrorMinute).padStart(2, '0')}`
}

WhatIsTheTime('11:20') === '12:40'
WhatIsTheTime('05:00') === '07:00'

WhatIsTheTime('05:30') === '06:30'
WhatIsTheTime('06:35') === '05:25'
WhatIsTheTime('11:59') === '12:01'
WhatIsTheTime('12:02') === '11:58'
WhatIsTheTime('04:00') === '08:00'
WhatIsTheTime('06:00') === '06:00'
WhatIsTheTime('12:00') === '12:00'
