// [JS][7kyu] Canvas Fun #1: Draw Lines
// canvas-fun-1-draw-lines
// https://www.codewars.com/kata/5928da5f1fad49c34d00013a/train/javascript

function drawLines(points) {
  var canvas = new Canvas(100, 100) //Create a 100 x 100 canvas
  var ctx = canvas.getContext('2d')
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, 100, 100) //Draw background
  ctx.strokeStyle = '#ff0000' //Set pen's color
  ctx.beginPath()
  //Don't delete or modify the code above
  //Your code starts here:

  points.forEach((point, index) => {
    const [x, y] = point
    if (index === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  })

  //Don't delete or modify the following code
  ctx.stroke() //Draw the path you made above
  return canvas.toDataURL() //Returns the image data
}
