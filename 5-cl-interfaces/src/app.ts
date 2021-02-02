class Department {
    // private id: string;
    // private name: string;
    private employees: string[]= []; //private makes it private only to what s inside class

    constructor(private id:string, public name: string){
        // this.id = id;
        // this.name = n; 
    }

    describe(){
        console.log(`Department (${this.id}): ${this.name}`); // We use this to refer to a class property or a method from inside of the class
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("id","Accounting");

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

//accounting.employees[2] = "Anna"; //This is not possible cuz is private

accounting.describe();
accounting.name = 'New name';
accounting.printEmployeeInformation();

const accountingCopy = {name:'whatever', describe:accounting.describe};

accountingCopy.describe();