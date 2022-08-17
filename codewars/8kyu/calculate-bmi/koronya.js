// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
// [JS][8kyu] Calculate bmi
// calculate-bmi

const bmi = (weight, height) => {
  const score = weight / (height * height);
  if (score > 30) {
    return "Obese";
  } else if (score > 25) {
    return "Overweight";
  } else if (score > 18.5) {
    return "Normal";
  } else {
    return "Underweight";
  }
};

bmi(80, 1.8) === "Normal";
