let fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString().split("\n"); // [ '1 2' ]
let line = input[0].split(" "); // [ '1', '2' ]

let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a + b);
