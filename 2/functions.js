"use strict";
// White is the scenario where you have a function that doesnt return a value
function add(n1, n2) {
    return n1 + n2; //here return a number
}
function showResult(num) {
    console.log('Result:' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
showResult(add(5, 12));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
var combineValues; //Combined values should accept any function that takes two parameter that is number and should return a number
combineValues = add;
console.log(combineValues(8, 8));
