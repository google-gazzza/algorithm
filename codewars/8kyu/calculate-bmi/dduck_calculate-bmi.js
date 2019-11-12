// https://www.codewars.com/kata/calculate-bmi/train/javascript
const bmi = (weight, height) => {
  const $bmi = weight / height ** 2;
  switch (true) {
    case ($bmi <= 18.5):
      return 'Underweight';
    case ($bmi <= 25):
      return 'Normal';
    case ($bmi <= 30):
      return 'Overweight';
    default:
      return 'Obese';
  }
};

bmi(80, 1.80);
//?
