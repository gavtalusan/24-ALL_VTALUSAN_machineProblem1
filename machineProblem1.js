/* 
    Program:      Computation Of Grades using Function
    Programmer:   Talusan, Vincent Gabriel L
    Section:      24-ALL
    Start Date:   June 10,2023
    End Date:     June 10,2023

*/
  function calculateGrade(classParticipation, summativeAssessment, finalExamination) {
  const classParticipationWeight = 0.3;
  const summativeAssessmentWeight = 0.3;
  const finalExaminationWeight = 0.4;

  const grade = (classParticipation * classParticipationWeight) +
    (summativeAssessment * summativeAssessmentWeight) +
    (finalExamination * finalExaminationWeight);

  return grade;
}

function calculateLetterGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Data for five students
const students = [
  { name: 'Vincent Talusan', classParticipation: 90, summativeAssessment: 90, examgrade: 90, gradescore: 90, finalExamination: 90 },
  { name: 'Gav Talusan', classParticipation: 85, summativeAssessment: 85, examgrade: 83, gradescore: 83, finalExamination: 80 },
  { name: 'Gabriel Talusan', classParticipation: 75, summativeAssessment: 76, examgrade: 77, gradescore: 78, finalExamination: 70 },
  { name: 'Gabriel Vincent', classParticipation: 70, summativeAssessment: 60, examgrade: 80, gradescore: 80, finalExamination: 65 },
  { name: 'Vincent Gabriel', classParticipation: 60, summativeAssessment: 50, examgrade: 60, gradescore: 65, finalExamination: 65 }
];

// Calculate grades and display results
students.forEach(student => {
  const grade = calculateGrade(student.classParticipation, student.summativeAssessment, student.finalExamination);
  const letterGrade = calculateLetterGrade(grade);

  console.log('Name:', student.name);
  console.log('Class Participation:', student.classParticipation);
  console.log('Summative Assesment:', student.summativeAssessment);
  console.log('Exam Grade:', grade);
  console.log('Grade score:', grade);
  console.log('Letter Grade:', letterGrade);
  console.log('-----------------------------------------');
});