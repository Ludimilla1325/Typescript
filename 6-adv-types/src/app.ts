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

/* Type guards is just a term that descfrobe the idea or approach of checking if
a certain property pr method exists before you try to use it or if you do something
with the type before you try to use it for objects that can be done with instance of "in", 
"of", "typeof". And give all the flexibility of union types and write code that does one thing
or the other based on the exact type
*/