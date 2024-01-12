const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  const totalScore = students.reduce((sum, student) => sum + student.score, 0);
  const averageScore = totalScore / students.length;
  return averageScore;
}

let result = getAverageStudentScore(students)
