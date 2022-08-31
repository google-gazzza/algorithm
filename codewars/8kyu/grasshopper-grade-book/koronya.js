// [JS][8kyu] Grasshopper - Grade book
// grasshopper-grade-book
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

const getGrade = (s1, s2, s3) => {
  const avg = (s1 + s2 + s3) / 3;
  if (avg >= 90) {
    return "A";
  }
  if (avg >= 80) {
    return "B";
  }
  if (avg >= 70) {
    return "C";
  }
  if (avg >= 60) {
    return "D";
  }
  return "F";
};

getGrade(95, 90, 93) === "A";
getGrade(100, 85, 96) === "A";
getGrade(92, 93, 94) === "A";
