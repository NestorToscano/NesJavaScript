// const fs = require("fs");
// const generateName = require("sillyname");


// fs.readFile("message.txt", "utf8", function (err, data) {
//   if (err)  {
//     throw err;
//   }
//   console.log(data);
// })

// fs.writeFile("message,txt", "Hello from NodeJS!", function (err) {
//   if (err)  {
//     throw err;
//   }
//   console.log("the file has been saved!")
// })

// import generateName from "sillyname";
// var sillyName = generateName();
// console.log(`My name is ${sillyName}`);


import superheroes from "superheroes";
const name = superheroes.randomSuperhero();
console.log(`My name is ${name}`);

