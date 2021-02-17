const theCurrentDay = new Date().getDay()
let day = ''

function figureOutWhatDayItIs() {
	switch (theCurrentDay) {
		case 1:
			day = 'Måndag'
			break;
		case 2:
			day = 'Tisdag'
			break;
		case 3:
			day = 'Onsdag'
			break;
		case 4:
			day = 'Torsdag'
			break;
		case 5:
			day = 'Fredag'
			break;
		case 6:
			day = 'Lördag'
			break;
		case 7:
			day = 'Söndag'
			break;
		default: day = 'day not found!'
	}
	alert(day)
}