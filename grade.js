let studentName = 'Naztee Emba'
let score = 70;
let grade;
  
  if (score >= 80 && score <= 100) {
    grade = 'A'
  } else if (score >= 60 && score <=79 ) {
    grade = 'B'
  } else if (score >= 50 && score <= 59) {
    grade = 'C';
  } else if (score >= 40 && score <= 49) {
    grade = 'D';
  } else if (score >= 30 && score <= 39) {
    grade = 'E';
  } else if (score >= 0 && score <= 29 ) {
    grade = 'F';
  }
  else{
    grade = 'invalid score';
  }

console.log(`${studentName} scored: ${score}; grade: ${grade}`);