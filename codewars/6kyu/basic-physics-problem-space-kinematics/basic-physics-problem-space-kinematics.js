// basic-physics-problem-space-kinematics
// https://www.codewars.com/kata/58dc420210d162048a000085/train/javascript

const meetingTime = (a, b, r) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  
  if (max === 0 || min === 0) {
    const distance = Math.max(Math.abs(max), Math.abs(min));
    return distance.toFixed(2);
  }
  
  return Math.abs(min / (max - min) * max).toFixed(2);
};

console.log(meetingTime(12, 15, 5), "60.00");
console.log(meetingTime(12, -15, 6), "6.67");
console.log(meetingTime(0, 0, 7), "0.00");
console.log(meetingTime(12, 0, 10), "12.00");
console.log(meetingTime(-24, 0, 10), "24.00");
