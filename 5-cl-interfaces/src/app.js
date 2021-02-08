"use strict";
//Interfaces can be used to define the structure of a function
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) { // If we receive a name, we gonna print this option
            console.log(phrase + ' ' + this.name);
        }
        else
            console.log('Hi!');
    };
    return Person;
}());
var user1;
user1 = new Person();
user1.greet("Hello, my name is");
console.log(user1);
