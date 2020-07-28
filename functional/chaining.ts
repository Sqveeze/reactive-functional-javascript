// const arr = ['functional', 'programming', 'is', 'awesome'];
//
// console.log(
//   arr
//     .map((word) => word.length)
//     .filter(num => num % 2 === 0)
//     .reduce((a, b) => a + b, 0)
// );

// const elevator = {
//   floor: 5,
//   up() {
//     this.floor += 1;
//     return this;
//   },
//   down() {
//     this.floor -= 1;
//     return this;
//   }
// }

// const moveElevator = elevator.up().up().down().up().floor;

//

const sequence2 = (f1, f2) =>
  (...args) =>
    f2(f1(...args));

const sequence = (f1, ...fRest) =>
  fRest.reduce(sequence2, f1);

const elevator = {
  floor: 5
};

const up = elevator => {
  return {
    floor: elevator.floor + 1
  }
}

const down = elevator => {
  return {
    floor: elevator.floor - 1
  }
}

const newFloor = up(down(up(up(elevator)))).floor;

const move = sequence(up, up, down, up);
const newElevator = move(elevator);

console.log(newFloor);
