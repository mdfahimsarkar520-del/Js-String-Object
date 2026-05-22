const person ={
    name:'Arshad Fahim',
    age :25,
    profession : 'developer',
    salary:25000,
    married:true,
   'fav Places':['bandorban','saintmartin','kuakata']
}
// console.log(person)

console.log(person.profession)
const income = person.salary;
console.log(income)

//bracket Notation
//third bracket diye a access kora 
console.log(person['age'])
const boyos = person['age']
console.log(boyos)

//error
// console.log(person.'fav Places')
console.log(person['fav Places'])

const Keyname ='profession';
console.log(person[Keyname])