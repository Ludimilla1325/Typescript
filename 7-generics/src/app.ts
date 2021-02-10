// // Generic- a type that is connected with other type and is flexible regardug which type is the other type 

// const names : Array<string> = []; // string[]- a type "array" that is connected to another type "string" 
// //names[0].split(' '); // The array knows which date it stores

// const promise: Promise<string> = new Promise((resolve, reject) =>{
//     setTimeout(()=>{  //The promise knows which data it returns.
//         resolve('This is done');  
//     }, 2000);
// });



//GENERIC FUNCTION - Generics allow you to continue working with your data in a typescript optimal way.

//Constraints - you set it regarding the types your generic types can be based on, you use  "extends object" and in that u gonna say the "T" type. We guarantee that we get two objects here by setting certain constraints, and it can be anything that we set like objects, string , number , union types, etc
function merge<T extends object, U extends object>(objA: T, objB: U){  //This function return thhe intersection of T & U
    return Object.assign(objA, objB);
}
const mergeObj = merge({name: 'Max', hobbies: ['Sports']}, {age:30}); //typescript simply infers the types of the value we are passing as argumet
console.log(mergeObj);

//GENERIC FUNCTION

//97 - ERROR
interface Lenghty {
    lenght: number;
}
function  countAndDescribe<T extends Lenghty>(element: T): [T, string]{
    let descriptionText = 'Got no value.';
    if (element.lenght === 1){
        descriptionText= 'Got 1 elementet.';
    } else if (element.lenght > 1){
        descriptionText = 'Got' + element.lenght + 'elements.';
    }
    return [element, descriptionText];
}

//console.log(countAndDescribe('hi'));

// KEYOF CONSTRAINT- we can use generic types with key to ensure that we have correct structure

function extractAndConvert <T extends object, U extends keyof T>(obj: T, key: U){ //1st paramenter should be any kind of object and the 2nd should be any kind of key in that object
    return 'Value:' + obj[key]; // we are using to guarantee that this "key" exists
}

extractAndConvert({name: 'Ludi'}, 'name'); // {} here i add a name key

//GENERIC CLASSES - flexible with full type support

class DataStorage<T extends string | number | boolean> { //flebility and type safety because we know perfectly what is stored
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        if (this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return[...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Ludi');
textStorage.addItem('Lara');
textStorage.removeItem('Ludi');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj).
// objStorage.addItem({name:'Manu'});
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());


//GENERIC UTILITY TYPES - (Partial / Readonly)

interface CourseGoal{
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal{
    let courseGoal: Partial<CourseGoal> = {}; //Partial- open anything up
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Ludi']; //This property can just be read, and is good cuz u r precised abt what u do in ur code
// names.push('Manu');