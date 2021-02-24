let cars = ["Volvo", "Polstar", "Volkswagen", "Audi", "BMW"]
let numbers = [324, 24, 235, 56, 345, 345, 24, 35, 456, 456, 345, 345, 345]


function whileLoopExample() {
	let i = 0;
	while (i != 100) {
		console.log('Hej!')
		i++
	}
}

function loopOverString() {
	const language = "Javascript"
	for (let x of language) {
		console.log(x)
	}
}

function mapThroughArray() {
	numbers.map((x, i) => console.log(x, i))
}

function forEachExample() {
	numbers.forEach(example => console.log(example))
}

function forLoopExample2() {
	for (i = 0; i <= 100; i++) {
		console.log(i + " " + Math.random())
	}
}

function forLoopExample() {
	let index;
	for (index = 0; index < cars.length; index++) {
		console.log(cars[index])
	}
}