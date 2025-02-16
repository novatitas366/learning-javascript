/*
let age = 31;
age = 40 
console.log(age)
*/
/*
//variables strings, numbers, booleans, null, undefined
const name = 'John'; //strings
const age = 30; //number
const isCool = true; //boolean
const rating = 4.5 //number but its a float
const x = null; // null with type of comes up as object
const y = undefined; // undefined;
let z; // also undefined
*/
/*
console.log(typeof name);
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

console.log(`My name is ${name} and i am ${age}`);
*/

/*
const s = 'hello world?';
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(' '));
*/

/*
const s = 'technology, computers, it, code';

console.log(s.split(', '));
*/

//Arrays
/*
const numbers = new Array(1,2,3,4,5);
console.table(numbers)
*/

/*
const fruits = ['apples', 'oranges', 'pears', 10, true];

fruits[3] = 'grapes'

fruits.push("mangos")

fruits.unshift("straberries")

console.log(fruits);
console.log(Array.isArray(fruits))
*/

/*

const person = {
	firstname: 'John',
	lastname: 'Doe',
	age:30,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: '50 main st',
		city: 'Boston',
		state: 'MA'
	}
}

console.log(person.address.city);

const {firstname, lastname, address: {city}} = person

//console.log(firstname);

console.log(city);
*/
/*
const todos = [
	{
		id: 1,
		text: 'Take out trash',
		isCompleted: true
	},
	{
		id: 2,
		text: 'meating with boss',
		isCompleted: false
	},
	{
		id: 3,
		text: 'bruh',
		isCompleted: true
	}
];
console.log(todos[1].text);
console.log(typeof todos);

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

//For

for(let i =0; i<todos.length; i++){
	console.log(todos[i].text)
}

for(let todo of todos){
	console.log(todo.text);
}

//forEach, map, filter

//should check the high order array videos

todos.forEach(function(todo) {
	console.log(todo.text)
});

const todoText = todos.filter(function(todo){
	return todo.isCompleted === true
}).map(function(todo){
	return todo.text;
})
console.log(todoText)

*/
/*
const x = 11;

if(x === 10){
	console.log('x is 10');
}
else if(x < 10) {
	console.log('x is less than 10')
}
else {
	console.log('x more than 10')
}
*/
/*
const addNums = (num1 = 10, num2 = 2) => {
	return num1+num2;
}

console.log(addNums(10, 5))
*/
/*
function Person(firstname, lastname, dateOfBirth){
	this.firstname = firstname
	this.lastname = lastname;
	this.dateOfBirth = new Date(dateOfBirth)
	
}
Person.prototype.getBirthYear = function(){
	return this.dateOfBirth.getFullYear();
}


// CLass

class PersonClass{
	constructor(firstname, lastname, dateOfBirth){
		this.firstname = firstname
		this.lastname = lastname;
		this.dateOfBirth = new Date(dateOfBirth)
	}
	getBirthYear(){
		return this.dateOfBirth.getFullYear();
	}
}
const person1 = new Person('jack', 'IDBKeyRange', '2004-2-2');
const person2 = new PersonClass('sayer', 'idk', '1987-01-01')
console.log(person1);
console.log(person1.getBirthYear())

console.log(person2.getBirthYear())



*/

//DOM


// console.log(window);

// console.log(document.getElementById("my-form"));

// const items = document.querySelectorAll(".item");

// items.forEach((item) => console.log(item));


// const ul = document.querySelector('.items');

// // ul.remove();

// // ul.lastElementChild.remove();

// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerText = 'brad';

// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn');

// btn.style.background = 'red';


// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover', function(e){
// 	e.preventDefault();
// 	document.querySelector('#my-form').style.background = '#ccc';
// 	document.querySelector('body').classList.add('bg-dark');
// 	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// })



// const myForm = document.querySelector('#my-form');
// const nameInput= document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const message = document.querySelector('.msg');
// const users = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);


// function onSubmit(e){
// 	e.preventDefault();

// 	if(nameInput.value === '' || emailInput.value === ''){
// 		message.classList.add('error');
// 		message.textContent = 'Invalid input (empty)';
		
// 		setTimeout(() => message.remove(), 3000);
// 	} else {
// 		const li = document.createElement('li');
// 		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
// 		users.appendChild(li);
		
// 		nameInput.value = '';
// 		emailInput.value = '';
// 	}
// }