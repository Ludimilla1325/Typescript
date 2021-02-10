// // Generic- a type that is connected with other type and is flexible regardug which type is the other type 

// const names : Array<string> = []; // string[]- a type "array" that is connected to another type "string" 
// //names[0].split(' '); // The array knows which date it stores

// const promise: Promise<string> = new Promise((resolve, reject) =>{
//     setTimeout(()=>{  //The promise knows which data it returns.
//         resolve('This is done');  
//     }, 2000);
// });



//GENERIC FUNCTION

function merge<T, U>(objA: T, objB: U){  //This function return thhe intersection of T & U
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Max', hobbies: ['Sports']}, {age:30}); //typescript simply infers the types of the value we are passing as argumet
console.log(mergeObj);