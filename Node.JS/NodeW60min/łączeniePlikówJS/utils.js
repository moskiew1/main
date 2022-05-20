const greeting = () => {
    console.log('hello Node!')
}

const add = (a, b) => {
    console.log(a + b)
}

console.log('The file is loaded....')

module.exports = {
    greeting,
    add
} 