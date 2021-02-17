const characterName = 'Arasto'
const characterClass = 'Warrior'
const strengthLevel = 92
const canCharacterEquipSword = characterClass == 'Warrior'
const canCharacterEquipWand = characterClass == 'Wizard'

function checkIfCharacterCanEquipSwords() {
	if (canCharacterEquipSword && strengthLevel > 70) {
		if (strengthLevel > 90) {
			alert('Youve equipped Excalibur')
		} else {
			alert('Youve equipped Wooden Sword')
		}
	} else {
		alert('You cannot use swords unfortunatley!')
	}
}

function ternaryOperator() {
	canCharacterEquipSword
		? alert('Youve equipped Excalibur')
		: alert('Youve equipped Wooden Sword')
}

function checkIfCharacterCanEquipSwordsV2() {
	(canCharacterEquipSword && strengthLevel > 70)
		? (strengthLevel > 90)
			? alert('Youve Equipped Excalibur')
			: alert('Youve Equipped Wooden Sword')
		: alert('You cannot use swords unfortunatley!')
}
