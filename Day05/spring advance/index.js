console.log("americano".toUpperCase()) // 문자열을 대문자로 바꿔줌
console.log("americano".repeat(3)) // 매개변수 값 만큼 반복
console.log("americano".repeat(3).toUpperCase()) 
console.log("AMERICANO".toLowerCase())

// 단어 입력 받고 대문자화 몇 번 반복

const val1 = prompt("단어?")
const val2 = Number(prompt("반복 횟수?"))
console.log(`${val1.toUpperCase().repeat(val2)}`)

"abcdef".replace("a", "👍") // "a"자리에 "👍" 값으로 출력(단, 맨 앞 하나만 출력)
"abcdaaaaf".replaceAll("a", "👍") // "a"자리에 "👍" 값으로 출력(모두 바꿔줌)
console.log("abcdef".replace("a", "👍")) 