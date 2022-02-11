// 1
let originalString = "Hello";

function searchString(str, originalString) {
  return str.includes(originalString);
}

console.log(searchString("Hello", "llo")); // true
console.log(searchString("Hello", "www")); // false

// 2
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}

console.log(capitalizeFirstLetter("hello")); // Hello
console.log(capitalizeFirstLetter("HELLO")); // HELLO
console.log(capitalizeFirstLetter("hElLo")); // HElLo

// 3
function truncate(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
console.log(truncate("Hello world", 5)); // Hello...
console.log(truncate("Hello world", 25)); // Hello world

// 4
const students = [
  {
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];
function findAverageOfStudent(arr) {
  let newArray = arr.map((student) => {
    const marks = student.marks;
    const newStudent = Object.assign({}, student);
    newStudent.averageMark = marks.reduce(
      (sum, current) => sum + current / marks.length,
      0
    );
    return newStudent;
  });
  return newArray;
}
const newStudents = findAverageOfStudent(students);
console.log(newStudents);

function findAverageMark(array) {
  const averageMarkOfNewStudent = array.reduce(
    (sum, student) => sum + student.averageMark / array.length,
    0
  );
  return averageMarkOfNewStudent;
}
const newAverageMark = findAverageMark(newStudents);
console.log(newAverageMark);

// 5
const vehicles = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Toyota", model: "Sequoia", type: "SUV", price: 45560 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Ford", model: "Explorer", type: "SUV", price: 31660 },
];

let typeSuv = vehicles.filter((item) => item.type.toLowerCase() === "suv");
console.log(vehicles);
console.log(typeSuv);
let sum = typeSuv.reduce((a, b) => a + b.price, 0);
let result = sum / typeSuv.length;
console.log(`Средняя стоимость автомомилей type 'suv': ${result}`);

// 6
function copySorted(array) {
  let newArray = array.slice();
  newArray.sort((a, b) => a - b);
  return newArray;
}
let arr = [10, 20, 3, 4, 0, 99, 97];
let sorted = copySorted(arr);

console.log(arr); // [10, 20, 3, 4, 0, 99, 97]
console.log(sorted); // [0, 3, 4, 10, 20, 97, 99]

// 7
function getKeysCount(obj) {
  return Object.keys(obj).length;
}

console.log(getKeysCount({ name: "John" })); // 1
console.log(getKeysCount({ name: "John", age: 22 })); // 2
console.log(getKeysCount({ name: "John", salary: null })); // 2
