const person ={
    name:'Arshad Fahim',
    age :25,
    profession : 'developer',
    salary:25000,
    married:true,
   'fav Places':['bandorban','saintmartin','kuakata']
}

person.salary = 3000;
person['age'] =26;
person['fav places'] =['maldives','bali','pataya']
console.log(person)

const proName ='profession';
person[proName]='devops'
console.log(person)