// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
// [JS][8kyu] Third Angle of a Triangle
// third-angle-of-a-triangle

const otherAngle = (a, b) => 180 - a - b;

otherAngle(30, 60) === 90;
otherAngle(60, 60) === 60;
otherAngle(43, 78) === 59;
otherAngle(10, 20) === 150;
