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