"use strict";
// // Generic- a type that is connected with other type and is flexible regardug which type is the other type 
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// const names : Array<string> = []; // string[]- a type "array" that is connected to another type "string" 
// //names[0].split(' '); // The array knows which date it stores
// const promise: Promise<string> = new Promise((resolve, reject) =>{
//     setTimeout(()=>{  //The promise knows which data it returns.
//         resolve('This is done');  
//     }, 2000);
// });
//GENERIC FUNCTION - Generics allow you to continue working with your data in a typescript optimal way.
//Constraints - you set it regarding the types your generic types can be based on, you use  "extends object" and in that u gonna say the "T" type. We guarantee that we get two objects here by setting certain constraints, and it can be anything that we set like objects, string , number , union types, etc
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 }); //typescript simply infers the types of the value we are passing as argumet
console.log(mergeObj);
function countAndDescribe(element) {
    var descriptionText = 'Got no value.';
    if (element.lenght === 1) {
        descriptionText = 'Got 1 elementet.';
    }
    else if (element.lenght > 1) {
        descriptionText = 'Got' + element.lenght + 'elements.';
    }
    return [element, descriptionText];
}
//console.log(countAndDescribe('hi'));
// KEYOF CONSTRAINT- we can use generic types with key to ensure that we have correct structure
function extractAndConvert(obj, key) {
    return 'Value:' + obj[key]; // we are using to guarantee that this "key" exists
}
extractAndConvert({ name: 'Ludi' }, 'name'); // {} here i add a name key
//GENERIC CLASSES - flexible with full type support
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Ludi');
textStorage.addItem('Lara');
textStorage.removeItem('Ludi');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    var courseGoal = {}; //Partial- open anything up
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var names = ['Max', 'Ludi']; //This property can just be read, and is good cuz u r precised abt what u do in ur code
// names.push('Manu');
//GENERIC TYPES - its great if you want to lock in a certain type, use the same type through the enterice class instance, or enture function | lock in a type | Generics help you create data structures that work together or wrap values of a broad variety of types (e.g. an array that can hold any type of data).
//      vs 
//UNION TYPES - Its great if you want to have a function which you can call with one of these set types that you allow in a certain place everytime you call it generic | when u are flexible to have different type with every method call with every function
