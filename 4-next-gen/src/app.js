"use strict";
// Arrow functions
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const add = (a:number, b:number = 1) => a + b;
// const printOutPut: (a:number | string) => void = output => console.log(output);
// const button = document.querySelector('button');
// if (button){
//     button.addEventListener('click', event => console.log(event));
// }
// printOutPut(add(5));
//PUSH - JAVASCRIPT
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    firstName: 'Max',
    age: 30
};
var copiedPerson = __assign({}, person); //Using the {...}, you get a perfect copy of person, you are not only copy but u r doing a pull of the key value pars
//REST Parameters
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(10, 20, 30, 3);
console.log(addedNumbers);
//Array & Object Destructuring
//To put the elements of hobbies out of hobbies, 1st element to hobby1 and 2nd to hobby2 and the rest to remainingHobbies
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
// To put name and age out of person
var userName = person.firstName, age = person.age;
console.log(userName, age, person);
