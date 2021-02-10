// // Generic- a type that is connected with other type and is flexible regardug which type is the other type 

// const names : Array<string> = []; // string[]- a type "array" that is connected to another type "string" 
// //names[0].split(' '); // The array knows which date it stores

// const promise: Promise<string> = new Promise((resolve, reject) =>{
//     setTimeout(()=>{  //The promise knows which data it returns.
//         resolve('This is done');  
//     }, 2000);
// });



//GENERIC FUNCTION - Generics allow you to continue working with your data in a typescript optimal way.

//Constraints - you set it regarding the types your generic types can be based on, you use  "extends object" and in that u gonna say the "T" type. We guarantee that we get two objects here by setting certain constraints, and it can be anything that we set like objects, string , number , union types, etc
function merge<T extends object, U extends object>(objA: T, objB: U){  //This function return thhe intersection of T & U
    return Object.assign(objA, objB);
}
const mergeObj = merge({name: 'Max', hobbies: ['Sports']}, {age:30}); //typescript simply infers the types of the value we are passing as argumet
console.log(mergeObj);