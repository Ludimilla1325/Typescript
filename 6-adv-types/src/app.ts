type Admin = {
    name:string;
    privileges: string[];
};

type Employee = {  //interface Employee {}
    name:string;
    startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee{}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

// Intersection Types
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


//Type Guard - it allows us to utilize the flebility union types

// Function overloads - we can have multiple ways oof calling a function with different parameters

function add(a:number, b:number): number;
function add(a:string, b:string): string;
function add(a:string, b:number): string;
function add(a:number, b:string): string;
function add(a: Combinable, b:Combinable){
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('ludi', 'Milla');
result.split(' '); //split is just for string

const fetchedUserData = {
    id:'u1',
    name:'Max',
    job:{title:'CEO', description:'My own company'}
};

console.log(fetchedUserData?.job?.title); //You can add a ? after the thing you're not sure whether its to find or not, so it will check if exists before tries to acess this.




// type UnknownEmployee = Employee | Admin;

// // Using typeguards with types
// function printEmployyeeInformation(emp: UnknownEmployee){
//     console.log('Name:' + emp.name);
//     if('privileges' in emp){
//         console.log('Privileges' + emp.privileges);
//     }
//     if('startDate' in emp){
//         console.log('Start date' + emp.startDate);
//     }
// }

// printEmployyeeInformation(e1);
// printEmployyeeInformation({name:'Manu', startDate: new Date()});


// //Using type guards with classed
// class Car{
//     drive(){
//         console.log('Driving...')
//     }
// }

// class Truck{
//     drive(){ //drive method
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount: number){ // load carg method
//         console.log('Loading cargo...' + amount);
//     }
// }

// type Vehicle = Car | Truck; // union type

// const v1 = new Car(); //creating a new vehicle
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive(); // use the method drive
//     if(vehicle instanceof Truck){ // only a class have, thats why we do that
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v1); //caling useVehicle
// useVehicle(v2);

// /* Discrimanated Unions is a pattern which you can use when working with union types that makes implementing types guards easier
// */

// interface Bird {  //can be classes
//     type:'bird';
//     flyingSpeed: number;
// }

// interface Horse{
//     type: 'horse'; // we have one comum object property in every object which describe this object
//     runningSpeed:number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch(animal.type){
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed
//     }
//     console.log('Moving with speed:' + speed)
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// // const paragraph = document.querySelector('p');

// // const paragraph = document.getElementById('message-output');

// //const userInputElement =<HTMLInputElement> document.getElementById('user-input')!; 
// //const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// const userInputElement = document.getElementById('user-input');
//     if (userInputElement){
//         (userInputElement as HTMLInputElement).value = 'Hi there!';
//     }

// // Index properties- we can use it, when there are many inputs from users, and each one have a different situation

// interface ErrorContainer{
//     [prop: string]: string;  //We dont exaclty what will be the input but we know that every property which is added to object which is bassed on error container must have a porperty name which can be interpreted as a string and the value for that property
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// };

