module.exports.items = ["item1", "item2"];

const person = {
  name: "bob",
  age: 23,
};

module.exports.singlePerson = person;

// we have created keys == items and singlePerson whose values are the array and object

//OR USING DESTRUCTURING

// const items = ["item1", "item2"];

// const person = {
//   name: "bob",
//   age: 23,
// };

//reassign object to whatever name you want so from person to Single Person
// const singlePerson = person;

// module.exports = { items, singlePerson };
