// Uncurried

const ucGradeTest =
  ( passGrade, failGrade, average, testScore ) =>
    testScore >= average ?
      passGrade :
      failGrade;

console.log(ucGradeTest('+', '-', .5, .46));
console.log(ucGradeTest('+', '-', .5, .47));

// Currying

const gradeTest =
  passGrade =>
    failGrade =>
      average =>
        testScore =>
          testScore >= average ? passGrade : failGrade;

const tester =
  gradeTest('+')('-')(.5);

console.log(tester(.46));
console.log(tester(.47));
