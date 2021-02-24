const car1 = "Saab"
const car2 = "Volvo"
const car3 = "BMW"

const superHeroes = new Array("hero1", "hero2", "hero3")
//Array börjar alltid ifrån 0!
let cars = [
	"Saab",
	"Volvo",
	"BMW",
	"Polestar",
	"Nissan",
	"Audi",
	"Mazda"
]

const newPerson = { firstName: "Arasto", isTeacher: true }
const newPerson2 = { firstName: "randomName", lastName: "randomLastName", age: 500, isTeacher: false }
const people = [newPerson, newPerson2]

function getObjectValueFromArray() {
	alert(people[1].firstName)
}

function getObjectValues() {
	alert(newPerson.firstName + newPerson.isTeacher)
}

function addNewElementToArray() {
	cars.push('Hyundai')
	getLastElementOfArray()
}

function getFirstElementOfArray() {
	alert(cars[0])
}

function getLastElementOfArray() {
	const lastIndex = cars.length - 1
	alert(cars[lastIndex])
}

function getAmountOfCars() {
	alert(cars.length)
}

function dataTypeOfArray() {
	alert(typeof (cars))
}

function manipulateArrayValue() {
	alert(cars[2])
	cars[2] = "Polestar"
	alert(cars[2])
}

function getAllArrayValues() {
	alert(cars)
}

function getOneValueFromArray() {
	alert(cars[3])
}

function outOfBoundariesException() {
	//Felet som uppstår när man försöker ett värde i en array som inte finns!
	alert(cars[300000])
}