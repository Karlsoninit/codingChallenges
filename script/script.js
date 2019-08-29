const people = [
  {
    name: "Maksim",
    year: 1988,
    id: 54566
  },
  {
    name: "Bond",
    year: 1964,
    id: 39485
  },
  {
    name: "Bro",
    year: 1999,
    id: 123531
  },
  {
    name: "Haris",
    year: 2008,
    id: 9773
  }
];

const unique = 39485;

console.log(people);

const result = arr =>
  arr.filter(elem => new Date().getFullYear() - elem.year >= 40);

const someOld = result(people);

console.log(someOld);

const index = people.findIndex(elem => elem.id === unique);

const newArrWithout = [...people.slice(0, index), ...people.slice(index + 1)];

console.log(people);
console.log(index);
console.log(newArrWithout);
