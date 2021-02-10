// Generic- a type that is connected with other type and is flexible regardug which type is the other type 

const names : Array<string> = []; // string[]- a type "array" that is connected to another type "string" 
//names[0].split(' '); // The array knows which date it stores

const promise: Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(()=>{  //The promise knows which data it returns.
        resolve('This is done');  
    }, 2000);
});