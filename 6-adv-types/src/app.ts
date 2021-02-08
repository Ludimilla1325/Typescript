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

function add(a: Combinable, b:Combinable){
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

// Using typeguards with types
function printEmployyeeInformation(emp: UnknownEmployee){
    console.log('Name:' + emp.name);
    if('privileges' in emp){
        console.log('Privileges' + emp.privileges);
    }
    if('startDate' in emp){
        console.log('Start date' + emp.startDate);
    }
}

printEmployyeeInformation(e1);
printEmployyeeInformation({name:'Manu', startDate: new Date()});


//Using type guards with classed
class Car{
    drive(){
        console.log('Driving...')
    }
}

class Truck{
    drive(){ //drive method
        console.log('Driving a truck...');
    }

    loadCargo(amount: number){ // load carg method
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck; // union type

const v1 = new Car(); //creating a new vehicle
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive(); // use the method drive
    if(vehicle instanceof Truck){ // only a class have, thats why we do that
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1); //caling useVehicle
useVehicle(v2);

/* Discrimanated Unions is a pattern which you can use when working with union types that makes implementing types guards easier
*/

interface Bird {  //can be classes
    type:'bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'horse'; // we have one comum object property in every object which describe this object
    runningSpeed:number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log('Moving with speed:' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// const paragraph = document.querySelector('p');

// const paragraph = document.getElementById('message-output');


//In <HTMLInputElement>, here we are telling the typescript the type
//const userInputElement =<HTMLInputElement> document.getElementById('user-input')!; 
// This ! allows us to tell typescript that th expression in front of it will never yield null

// In this case, the expression will yield a value of type
//const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

const userInputElement = document.getElementById('user-input');

//in order to not use the !, when there is possibility of null
    if (userInputElement){
        (userInputElement as HTMLInputElement).value = 'Hi there!';
    }