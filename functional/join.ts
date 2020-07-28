const students = [{
  id: 1,
  name: 'a',
  birthDate: '1111-12-11',
}, {
  id: 2,
  name: 'b',
  birthDate: '1111-12-11',
}, {
  id: 3,
  name: 'c',
  birthDate: '1111-12-11',
}]

const tests = [{
  id: 1,
  studentID: 1,
  title: 'a',
  score: 0.5,
}, {
  id: 2,
  studentID: 1,
  title: 'b',
  score: 0.75,
}, {
  id: 3,
  studentID: 1,
  title: 'c',
  score: 0.27,
}];

const studentTests = tests.map(test => {
  const student = students.find(student =>
    student.id === test.studentID);
  return {
    studentName: student.name,
    testTitle: test.title,
    testScore: test.score,
  }
});

console.log(studentTests);

const studentTestCount = students.map(student => {
  const reducer = (count, test) =>
    test.studentID === student.id ?
      count + 1 : count;

  const testCount = tests.reduce(reducer, 0);

  return {
    studentName: student.name,
    testCount,
  }
});

console.log(studentTestCount);
