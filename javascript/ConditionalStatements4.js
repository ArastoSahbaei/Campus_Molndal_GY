let desiredWeaponToEquip = 'Maple Bow'
let equippedWeapon = ''

function displayWeapon() {
	equippedWeapon.length > 1
		? alert(`You have equipped: ${equippedWeapon}`)
		: alert('You do not have a weapon equipped!')
}

function equipWeapon() {
	switch (desiredWeaponToEquip) {
		case 'Excalibur':
			equippedWeapon = 'Excalibur'
			break;
		case 'Elder Wand':
			equippedWeapon = 'Elder Wand'
			break;
		case 'Hammer':
			equippedWeapon = 'Hammer'
			break;
		case 'Maple Bow':
			equippedWeapon = 'Maple Bow'
			break;
		default: `Did not found the weapon you were looking for: ${desiredWeaponToEquip}`
	}
	displayWeapon()
}