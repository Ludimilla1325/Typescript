// Arrow functions

// const add = (a:number, b:number = 1) => a + b;

// const printOutPut: (a:number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button){
//     button.addEventListener('click', event => console.log(event));
// }

// printOutPut(add(5));

//PUSH - JAVASCRIPT

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person ={
    firstName:'Max',
    age:30
};

const copiedPerson = { ...person }; //Using the {...}, you get a perfect copy of person, you are not only copy but u r doing a pull of the key value pars

//REST Parameters

const add = (...numbers: number[]) =>{ // here accept many arguments as i get
    return numbers.reduce((curResult, curValue) =>{
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(10, 20, 30,3);
console.log(addedNumbers);


//Array & Object Destructuring
//To put the elements of hobbies out of hobbies, 1st element to hobby1 and 2nd to hobby2 and the rest to remainingHobbies
const [hobby1, hobby2, ...remainingHobbies] =  hobbies;
console.log(hobbies, hobby1, hobby2);

// To put name and age out of person
const { firstName:userName, age} = person;

console.log(userName, age);