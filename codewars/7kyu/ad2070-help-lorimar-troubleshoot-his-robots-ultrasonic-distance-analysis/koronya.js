// [JS][7kyu] AD2070: Help Lorimar troubleshoot his robots- ultrasonic distance analysis
// ad2070-help-lorimar-troubleshoot-his-robots-ultrasonic-distance-analysis
// https://www.codewars.com/kata/57102bbfd860a3369300089c/train/javascript

const getRoundedNumber = (num) => Math.round(num * 10 ** 4) / 10 ** 4

const sensorAnalysis = (sensorData) => {
  const sensorDataLength = sensorData.length
  const sum = sensorData.reduce((acc, curr) => acc + curr[1], 0)
  const avg = sum / sensorDataLength

  const deviationSquareArr = sensorData.map((item) => (avg - item[1]) ** 2)
  const avgDev = deviationSquareArr.reduce((acc, curr) => acc + curr, 0) / (sensorDataLength - 1)
  const standardDeviation = Math.sqrt(avgDev)

  return [getRoundedNumber(avg), getRoundedNumber(standardDeviation)]
}

const sensorData = [
  ['Distance:', 116.28, 'Meters', 'Sensor 5 malfunction =>lorimar'],
  ['Distance:', 117.1, 'Meters', 'Sensor 5 malfunction =>lorimar'],
  ['Distance:', 123.96, 'Meters', 'Sensor 5 malfunction =>lorimar'],
  ['Distance:', 117.17, 'Meters', 'Sensor 5 malfunction =>lorimar'],
]

sensorAnalysis(sensorData)
