// const person:{
//     name:string;
//     age: number;
// } = {
var person = {
    name: 'Ludi',
    age: 18,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] //tuples- is like an array but with always only 2 elements
};
//person.role.push('admin'); //Push is an exeception which is allowed, typescript cant catch this error
//person.role[1] = 10; The 2nd argument should be a string
person.role = [0, 'admin']; //To work eith tuple will make ur code more strict
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); //ERROR !!!
}
