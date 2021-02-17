const arastoWeight = 87
const marcusWeight = 93

const AND = arastoWeight > 90 && marcusWeight > 90
const OR = arastoWeight > 90 || marcusWeight > 90
const NOT = !(arastoWeight > 90)

function logicalOperators() {
	alert(NOT)
}