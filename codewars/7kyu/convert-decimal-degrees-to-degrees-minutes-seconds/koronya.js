// [JS][7kyu] Convert Decimal Degrees to Degrees, Minutes, Seconds
// convert-decimal-degrees-to-degrees-minutes-seconds
// https://www.codewars.com/kata/590ac6b9be4dff49b0000042/train/javascript

const convert = (degrees) => {
  let outputDegrees = Math.floor(degrees)
  let minutes = Math.floor((degrees - outputDegrees) * 60)
  let seconds = Math.round(((degrees - outputDegrees) * 60 - minutes) * 60)
  if (seconds === 60) {
    minutes += 1
    seconds = 0
  }

  if (minutes === 60) {
    outputDegrees += 1
    minutes = 0
  }

  if (minutes === 0 && seconds === 0) {
    return [outputDegrees]
  }
  if (seconds === 0) {
    return [outputDegrees, minutes]
  }
  return [outputDegrees, minutes, seconds]
}

// convert(0)
// convert(40.567)
// convert(80.5)
// convert(70.234)
// convert(20.999)
// convert(33.333)
// convert(50)
// convert(0.0001388888888888889)
// convert(0.0001388888888888888)
// convert(91.33333333333333)
// convert(69.36666666666666)
// convert(262.21666666666664)
// convert(0.99999999)
