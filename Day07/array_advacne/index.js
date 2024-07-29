const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.push(6)

// map :  요소들을 바꾸기!
const tomato = arr.map(() => {
    return "🍅"
})

// 모두 10

const ten = arr.map(() => {
    return 10
})


const oneTwo = arr.map((x) => {
    return x % 2 == 1 ? 1 : 2
})

const three = arr.map((x) => {
    return x == 3 ? "🍅" : x
})

// const stringArray = arr.map((x) => {
//     return String(x)
// }) 

console.log(tomato)
console.log(ten)
console.log(oneTwo)
console.log(three)

// filter: 요소들을 필터링~

const oddArr = arr.filter((x) => {
    return x % 2 == 1
})

console.log(`oddArr:${oddArr}`)

// 1. 3의 배수만 살리기
const threeMultiple = arr.filter((x) => {
    return x % 3 == 0
})

// 2. 6 이상만 살리기
const sixOver = arr.filter((x) => {
    return x > 6
})

const fruits = ["peach" , "apple", "mango", " strawberry", "avocado",
     "grape", "kiwi", "watermelon", "melon"]

const melonLove = fruits.filter((x) => {
    return  x == "melon"
})

const length = fruits.filter((x) => {
    return 6 <= x.length
})

const upper = fruits.filter((x) => {
    return x.toUpperCase()
})