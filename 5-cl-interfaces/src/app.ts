class Department {
    name: string;

    constructor(n: string){
        this.name = n; 
    }

    describe(){
        console.log('Department: '+ this.name); // We use this to refer to a class property or a method from inside of the class
    }
}

const accounting = new Department("Accounting");

accounting.describe();

const accountingCopy = {name:'whatever', describe:accounting.describe};

accountingCopy.describe();