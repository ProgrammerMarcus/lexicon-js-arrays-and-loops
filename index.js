// 1
const elements = []
elements.push("chocolate", "ice cream", "mustard")
console.log(elements)

// 2
const numbers = [3, 6, 9, 11, 32]
for (n in numbers) {
    numbers[n] = numbers[n] * 3
}
console.log(numbers)

// 3
const numerals = [3, 2, 6, 23, 634]
const empty = []
numerals.forEach((n) => {
    if (n > 10) {
        empty.push(n)
    }
})
console.log(empty)

// 4
const random = [Math.random(), Math.random(), Math.random(),
                Math.random(), Math.random(), Math.random()]
console.log(random)
const sum = random.reduce((all, one) => all += one, 0)
console.log(sum)

// 5
const things = ["donut", "spaghetti", "milk", "apple pie"]
for (i = 0; i < things.length; i++) {
    if (things[i] === "apple pie") {
        console.log(things[i])
    }
}

// 6
const items = ["socks", "shoes", "clock", "phone"]
items.length = 3
console.log(items)

// 7
const ten = [52, 213, 4124543, 23, 31, 23123, 231, 32, 123, 1]
console.log(ten.sort((a, b) => a - b)[ten.length - 1])

// 8
const notEmpty = [23, 235, 23123]
const notEmptySoon = []
while (notEmptySoon.length != notEmpty.length) {
    notEmptySoon.push(notEmpty[notEmptySoon.length])
}
console.log(notEmptySoon)

// 9
const leek = ["drip", "drop", "water", "flowing"]
do {
    leek.pop()
} while (leek.length !== 0)
console.log(leek)