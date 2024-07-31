const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. 홀수는 2배 짝수는 제곱으로 다시 만들기!
const oddAdd = arr.map((x) => {
    if(x % 2 != 0) {
        return x*2;
    }else {
        return x**2;
    }
})


// 2. 3배수는 🥕 5배수는🍒 나머지는 🍉
const multiple = arr.map((x) => {
    if(x % 3 == 0) {
        return x = '🥕'
    }else if(x % 5 == 0) {
        return x = '🍒'
    }else {
        return x = '🍉'
    }
})

const fruits = ["apple", "banana", "melon", "kiwi", "mango", "srtawberry"]
// 3. 6글자 이상만 과일 명단 남기기
const six = fruits.filter((x) => {
    return 6 <= x.length
})

//4. 알파벳 a가 포함된 과일만 남기기
const four = fruits.filter((x) => {
    return x.includes("a")
})


console.log(oddAdd)
console.log(multiple)
console.log(six)
console.log(four)