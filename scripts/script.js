const wrapper = document.querySelector('[data-wrapper]')
const line = document.querySelector('[data-line]')
const buffer = document.querySelector('[data-buffer]')
const array = []

let lineValue = '' 
let flag = 0
let activeOperator = 'None'

wrapper.addEventListener('click', () => {
	const getText = event.target.innerText
	const dataValue = event.target.dataset.buttonaction
	const dataName = event.target.attributes['0'].name

	if (dataName === 'data-buttonnumber') {
		lineValue += getText
		line.innerHTML = lineValue
		flag = 0
	} else if (dataName === 'data-buttonaction') {	
		buffer.innerHTML = lineValue + ' ' + getText
		flag = 1
		activeOperator = +dataValue
	} 
	
	if (lineValue != '' && flag === 1) {
		array.push(+lineValue)
		lineValue = ''
	}

	if (activeOperator === 1 || activeOperator === 3 || activeOperator === 5 || activeOperator === 7 || dataName === 'data-buttonresult') {
		array.push(+lineValue)
		line.innerHTML = calc (array, activeOperator)
	}

	console.log('Активный оператор = ' + activeOperator)
})

function calc (arr, switchIndex) {
	switch(switchIndex) {
		case 0:
			return Math.pow(arr[0], arr[1])
		case 1:
			return Math.sqrt(arr[0])
		case 2:
			return arr[0] / arr[1]
		case 3:
			return Math.PI
		case 4:
			return arr[0] * arr[1]
		case 5:
			return factorial (arr[0])
		case 6:
			return arr[0] - arr[1]
		case 7:
			array[0] = array[0] * -1
			return array[0]
		case 8:
			return arr[0] + arr[1]
		default:
			return 'Ошибка'
	}
}

function factorial (n) {
	let result = n
	for(let i = n; i > 1; i--) {
		result *= i - 1
		console.log(i)
	}
	return result
}



// console.log(event.target.dataset.buttonaction)

// if (event.target.dataset.buttonaction == ) console.log('action') ?? console.log('number')

// console.log(event.target.attributes['0'])


// console.log(event)
// console.log(event.target.attributes['0'].name)

// console.log(+event.target.innerText)


// const lineValue = line.attributes['0'].ownerElement.innerText


// console.dir(wrapper)
// console.log(wrapper.children['0'].childNodes['1'].attributes['0'].nodeValue)