// [JS][7kyu] Upstream/Downstream
// upstream-downstream
// https://www.codewars.com/kata/58162692c2a518f03a000189/train/javascript

const time = (distance, boatSpeed, stream) => {
  const [direction, streamSpeed] = stream.split(' ')
  const isPlus = direction === 'Downstream'
  const speed = boatSpeed + (isPlus ? Number(streamSpeed) : -Number(streamSpeed))
  return Math.round((distance / speed) * 100) / 100
}

time(24, 10, 'Downstream 2') === 2
time(24, 14, 'Upstream 2') === 2
time(54, 28, 'Downstream 3') === 1.74
