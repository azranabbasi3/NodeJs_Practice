// First Day

// // const app = require('./app');
// import {add} from './app.js';

// // // const x=40;
// // // const y=20;
// // // const z=x+y;
// // // console.log(z);

// // console.log(app.x);
// // console.log(app.y);
// // console.log(app.z());

// // const a = [1,6,8,2,4,7]
// // const b = a.filter((num)=>{
// //     return num>2
// // })
// // console.log(b)

// // const a = [1,6,8,2,4,7]
// // const b = a.map((num)=>{
// //     return num*2
// // })
// // console.log(b)

// console.log(add());
//------------------------------------------------------------
// const http = require('http');

// http.createServer((req,res)=>{
//     res.write("<h1>Hello World</h1>")
//     res.end()
// }).listen(4000)

// const http = require("http");
// const control = (req,res) => {
//   res.write("<h1>Hello g</h1>");
//   res.end();
// };

// http.createServer(control).listen(4100);
//------------------------------2nd Day-----------------------------------------
// 2nd Day
// const http = require("http");

// http
//   .createServer(() => {
//     console.log("helo g");
//   })
//   .listen(7860);

// -----------------------Callbacks-----------------------------

// function sum(a, b) {
//   return a + b;
// }

// function Getdata(a, b, sum) {
//   console.log("Getting sum data");
//   return sum(a,b);
// }
// let result=Getdata(2, 3, sum)
// console.log(result)

// function Getdata(a, sum) {
//   setTimeout(() => {
//     console.log("getting data", a);
//     if (sum) {
//       sum(a);
//     }
//   }, 3000);
// }
// Getdata(1, () => {
//   Getdata(2, () => {
//     Getdata(3);
//   });
// });

// ----------------------------------promises-------------------------

const Getpromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("i am promise");
      resolve("success");
      //   reject("Network error");
    }, 3000);
  });
};
Getpromise()
  .then((res) => {
    console.log("promise fullfiled", res);
    Getpromise().then((res) => {
      console.log("promise 1 fullfiled", res);
    });
  })
  .catch((rej) => {
    console.log("error", rej);
  });
