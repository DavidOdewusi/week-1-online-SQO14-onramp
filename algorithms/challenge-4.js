function calculateGrade(marks) {
  let average;
  let sum = 0;
  //   Looping through the marks array to calculate the sum of the marks
  for (let i = 0; i < marks.length; i++) sum += marks[i];
  // Calculating Average
  average = sum / marks.length;

  const roundedAverage = Math.round(average);
  // Comparing avverage grade with the grade table
  if (roundedAverage >= 1 && roundedAverage <= 49) return "F";
  else if (roundedAverage >= 50 && roundedAverage <= 59) return "E";
  else if (roundedAverage >= 60 && roundedAverage <= 69) return "D";
  else if (roundedAverage >= 70 && roundedAverage <= 79) return "C";
  else if (roundedAverage >= 80 && roundedAverage <= 89) return "B";
  else if (roundedAverage >= 90 && roundedAverage <= 100) return "A";
}
console.log(calculateGrade([19, 5, 42, 2, 77]));
console.log(calculateGrade([59, 80, 40, 2, 77]));
console.log(calculateGrade([89, 50, 40, 90, 77]));
console.log(calculateGrade([59, 75, 82, 77]));
console.log(calculateGrade([80, 80, 80]));
console.log(calculateGrade([90, 90, 97]));
module.exports = calculateGrade;
