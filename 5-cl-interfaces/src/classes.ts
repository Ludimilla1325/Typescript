abstract class Department { //Abstract is very useful to forest at all classes based on some other class share some common method or property
    static fiscalYear = 2020; // when u add the static in a class, you cant acess them from inside your non static parts 
    // private readonly id: string;
    // private name: string;
    protected employees: string[]= []; //protected is like private, but is not available in the class but also in any class that extends this class

    constructor(protected readonly id:string, public name: string){ //readonly means that the id shouldnt change, it can be used only in initialization
        // this.id = id;
        // this.name = n; 
    }
    static createEmployee(name:string){
        return {name:name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee:string){
    
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

//-----
class ITDepartment extends Department{
    admins: string[];
    constructor(id:string, admins:string[]){
        super(id, 'IT'); //Whenever you add ur own constructor in a class that inherits from a number of class, u must add super(); in the inherits class
        this.admins = admins;
    }
    describe(){
        console.log('IT Department - ID:' + this.id);
    }
}

//----
class AccountingDepartment extends Department{
    private lastReport: string;
    private static instance: AccountingDepartment;

// ######### A get method has to return something!! ######
    get mostRecentReport(){
        if (this.lastReport){
            return this. lastReport;   
        }
        throw new Error ('No report found');
    }

// ########## A set, the name usually is the name of porperty that should be set
    set mostRecentReport(value: string){
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    private constructor(id:string, private reports:string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
}

    static getInstance(){
        if (AccountingDepartment.instance){
            return this.instance;
        }
        //This can only run once, becaause we have an instance adnd we make of this if block, and return the existing instance
        this.instance =  new AccountingDepartment('d2',[]);
        return this.instance
    }

    describe(){
        console.log('Accounting Department - ID:' + this.id)
    }

    addEmployee(name:string){
        if (name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports(){
        console.log(this.reports);
    }
}

// --- Using static
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

//-----
const it = new ITDepartment('d1',['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

//accounting.employees[2] = "Anna"; //This is not possible cuz is private

it.describe();
it.name = 'New name';
it.printEmployeeInformation();

console.log(it);

//----
// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2) //they are the same object because we have the same instance, only one, 

//acess as a property with (=)
accounting.mostRecentReport = 'Year end report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Mari');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// let departmentOne = new Department('d3', 'Lu');
// console.log(departmentOne.name);

console.log(Department.fiscalYear);

console.log(Department.createEmployee('Mary'))

//overwriting
//overload