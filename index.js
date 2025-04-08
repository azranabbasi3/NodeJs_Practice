// // First Day

// // // const app = require('./app');
// // import {add} from './app.js';

// // // // const x=40;
// // // // const y=20;
// // // // const z=x+y;
// // // // console.log(z);

// // // console.log(app.x);
// // // console.log(app.y);
// // // console.log(app.z());

// // // const a = [1,6,8,2,4,7]
// // // const b = a.filter((num)=>{
// // //     return num>2
// // // })
// // // console.log(b)

// // // const a = [1,6,8,2,4,7]
// // // const b = a.map((num)=>{
// // //     return num*2
// // // })
// // // console.log(b)

// // console.log(add());
// //------------------------------------------------------------
// // const http = require('http');

// // http.createServer((req,res)=>{
// //     res.write("<h1>Hello World</h1>")
// //     res.end()
// // }).listen(4000)

// // const http = require("http");
// // const control = (req,res) => {
// //   res.write("<h1>Hello g</h1>");
// //   res.end();
// // };

// // http.createServer(control).listen(4100);
// //------------------------------2nd Day-----------------------------------------
// // 2nd Day
// // const http = require("http");

// // http
// //   .createServer(() => {
// //     console.log("helo g");
// //   })
// //   .listen(7860);

// // -----------------------Callbacks-----------------------------

// // function sum(a, b) {
// //   return a + b;
// // }

// // function Getdata(a, b, sum) {
// //   console.log("Getting sum data");
// //   return sum(a,b);
// // }
// // let result=Getdata(2, 3, sum)
// // console.log(result)

// // function Getdata(a, sum) {
// //   setTimeout(() => {
// //     console.log("getting data", a);
// //     if (sum) {
// //       sum(a);
// //     }
// //   }, 3000);
// // }
// // Getdata(1, () => {
// //   Getdata(2, () => {
// //     Getdata(3);
// //   });
// // });

// // ----------------------------------promises-------------------------

// // const Getpromise = () => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("i am promise");
// //       resolve("success");
// //       //   reject("Network error");
// //     }, 3000);
// //   });
// // };
// // Getpromise()
// //   .then((res) => {
// //     console.log("promise fullfiled", res);
// //     Getpromise().then((res) => {
// //       console.log("promise 1 fullfiled", res);
// //     });
// //   })
// //   .catch((rej) => {
// //     console.log("error", rej);
// //   });

// //------------------3rd Day------------------------------

// // const express = require("express");
// // const app = express();

// // app.get("/", (req, res) => {
// //   console.log("data from req is -->>", req.query);
// //   res.send("Home page");
// // });

// // app.get("/about", (req, res) => {
// //   res.send("about page");
// // });

// // app.get("/contact", (req, res) => {
// //   res.send("contact page");
// // });

// // app.listen(4000, () => {
// //   console.log("server is running on port 4000");
// // });

// // const express = require("express");
// // const app = express();

// // app.get("/", (req, res) => {
// //   res.send(`<h1>Welcome to Home page</h1>         <a href="/about">About</a>`);
// // });

// // app.get("/about", (req, res) => {
// //   res.send(
// //     `<h>Welcome to About page</h><br/> <input type="text" value="${req.query.name}" placeholder="Enter your name">`
// //   );
// // });

// // app.get("/contact", (req, res) => {
// //   res.send("contact page");
// // });

// // app.listen(4000, () => {
// //   console.log("server is running on port 4000");
// // });

// //---------------------4th day----------------------------

// // const express = require("express");
// // const app = express();
// // const path = require("path");

// // const pathname = path.join(__dirname);

// // app.get("/", (req, res) => {
// //   res.send("helo home page");
// // });
// // app.get("/about", (req, res) => {
// //   res.sendFile(`${pathname}/about.html`);
// // });
// // app.listen(4000, () => {
// //   console.log("server is running on port 4000");
// // });

// //-----ejs template engine---------

// // const express = require("express");
// // const app = express();
// // const path = require("path");

// // const pathname = path.join(__dirname);
// // app.set("view engine", "ejs");

// // app.get("/", (req, res) => {
// //   res.send("helo home page");
// // });
// // app.get("/profile", (req, res) => {
// //   const user = {
// //     name: "azran",
// //     age: 22,
// //     city: "islamabad",
// //     skill: ["html", "css", "java", "C"],
// //   };
// //   res.render("profile", { user });
// // });
// // app.get("/about", (req, res) => {
// //   res.sendFile(`${pathname}/about.html`);
// // });
// // app.listen(4000, () => {
// //   console.log("server is running on port 4000");
// // });

// // -----------middleware----------------

// const express = require("express");
// const app = express();

// const middle = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("enter your age");
//   } else if (req.query.age < 18) {
//     res.send("you cant access the website");
//     next();
//   } else {
//     next();
//   }
// };

// app.use(middle);
// app.get("/", (req, res) => {
//   res.send(`<h1>Welcome to Home page</h1>    `);
// });

// app.get("/about", (req, res) => {
//   res.send("about");
// });

// app.get("/contact", (req, res) => {
//   res.send("contact page");
// });

// app.listen(4000, () => {
//   console.log("server is running on port 4000");
// });
