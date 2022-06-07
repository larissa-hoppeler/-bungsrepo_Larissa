console.log('Hello:Du');
let number = 9
let string = 'string'

// arrays

// let array = [3, 6, 54, 92, 41, 10, 9, 54, 99]
// console.log(array.length)
// console.log(array[5])

// for (let i = 2; i < array.length; i += 2) {
//   console.log('for loop in position:');
//    console.log('showing array in position:' + i)
//    console.log(array[i])
// }

// how to fill an array with random values

let empty_array = []

let number_of_items = 50

for (let i = 0; i < number_of_items; i++) {
    let random_value = Math.random() * 1000
    empty_array.push(random_value)
}

console.log(empty_array)

// let's see what are objects 

let object = {
    x: 10,
    y: 200,
    width: 100,
    height: 300
}

let div = document.createElement('div')
div.style.position = 'fixed'
div.style.width = object.width + 'px'
div.style.height = object.height + 'px'
div.style.top = object.y + 'px'
div.style.left = object.x + 'px'
div.style.backgroundColor = '#f44'

document.body.appendChild(div)

console.log(object)