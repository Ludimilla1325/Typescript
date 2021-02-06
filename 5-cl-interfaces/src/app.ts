interface Person{ //Interface cant have an initialize, so we must not pass the concrete values.
    name: string;
    age:number;

    greet(phrase: string):void;
}

//we can use the interface to type check an object, It allows we define a struct of one object

let user1: Person;

user1 = {
    name:'Max',
    age:30,
    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet("Hello, my name is");

//WHATS THE DIFFERENCE BETWEEN INTERFACE AND CONST TYPE?
/* 
- Interfaces can only used to describe of an object 
but inside a const Type, you can store anything like
union types.
- To define an interface is clear that u want define the struct
of an objecy, 
- Interface can be use as a contract, a class can implement and class that hears too

*/

