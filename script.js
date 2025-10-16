// Simple Grade Calculator with Conditional Statements
// Input from User
let subjectEnglish = parseInt(prompt("Enter Mark of English: "));
let subjectMaths = parseInt(prompt("Enter Mark of Mathemathics: "));
let subjectPhysics = parseInt(prompt("Enter Mark of Physics: "));
let subjectChemistry = parseInt(prompt("Enter Mark of Chemistry: "));
let subjectBiology = parseInt(prompt("Enter Mark of Biology: "));
// Display Subjects and It's Marks
// console.log(
//   `Your Marks are: English : ${subjectEnglish}, Maths : ${subjectMaths}, Physics : ${subjectPhysics}, Chemistry : ${subjectChemistry}, Biology : ${subjectBiology}`
// );
// Calculating Total Marks
const totalMark =
  subjectEnglish +
  subjectMaths +
  subjectPhysics +
  subjectChemistry +
  subjectBiology;
//   Display Total Marks
// console.log("Total Mark is " + totalMark);
const average = totalMark / 5;
// Computing the Average Mark
// console.log("Average Mark is " + average);
// Grade Calculator
let grade;
if (average >= 90) {
  grade = "A+";
} else if (average >= 80) {
  grade = "A";
} else if (average >= 70) {
  grade = "B";
} else if (average >= 60) {
  grade = "C";
} else if (average >= 50) {
  grade = "D";
} else {
  grade = "F";
}
// Display Grade
// console.log("Grade is " + grade);
alert(`Total Marks: ${totalMark}\nAverage: ${average}\nGrade: ${grade}`);
