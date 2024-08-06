// [JS][7kyu] Find Screen Size
// find-screen-size
// https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/javascript

const findScreenHeight = (width, ratio) => {
  const height = (width / ratio.split(':')[0]) * ratio.split(':')[1]
  return `${width}x${height}`
}

findScreenHeight(1024, '4:3') === '1024x768'
findScreenHeight(1280, '16:9') === '1280x720'
findScreenHeight(3840, '32:9') === '3840x1080'
