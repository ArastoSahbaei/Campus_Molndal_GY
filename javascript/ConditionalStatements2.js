const date = new Date()
const getCurrentDay = date.getDay()
const currentHour = date.getHours()

function greet() {
	if (currentHour < 18) {
		alert('God dag!')
	} else {
		alert('God kväll!')
	}
}

function greetNewUser() {
	if (getCurrentDay == 1) {
		alert('Måndag')
	} else if (getCurrentDay == 2) {
		alert('Tisdag')
	} else if (getCurrentDay == 3) {
		alert('Onsdag')
	} else if (getCurrentDay == 4) {
		alert('Torsdag')
	} else if (getCurrentDay == 5) {
		alert('Fredag')
	} else {
		alert('Det är helg!')
	}
}