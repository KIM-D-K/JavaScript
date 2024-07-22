// 프롬프트로 몇 년생인가요 물어보고 숫자로 1999 입력하면
// 콘솔로 당신의 나이는 26이군요!

// const age = window.prompt("몇 년생이냐?")
// const agePrint = window.console.log(`당신의 나이는 ${2025-age}이군요...................`)

// 1. 숫자를 두 번 프롬프트로 물어보고,
// 콘솔로 합 : 차 : 곱 : 나타내는 프로그램

// const firstNumber = prompt("첫 번째 숫자를 입력하세요.")
// const secondNuber = prompt("두 번째 숫자를 입력하세요.")
// console.log(`합 : ${Number(firstNumber) + Number(secondNuber)}, 차 : ${Number(firstNumber - secondNuber)}, 곱 : ${Number(firstNumber * secondNuber)}`)

// // 2. 프롬프트로 한 변의 길이를 입력하고,
// // 콘솔로 정사각형의 넓이는 00입니다.
// const lengthPrint = prompt("(정사각형 넓이 계산 프로그램)한 변의 길이를 입력하세요.")
// console.log(`정사각형의 넓이는 ${Number(lengthPrint)*lengthPrint} 입니다.`)


// // 3. 아아(1500) 주문 갯수 프롬프트 , 라떼 주문 갯수 프롬프트
// // 콘솔로 총 가격은 00입니다. ex) 3, 5 ->
// const coffee = prompt("아아 주문 갯수를 입력하세요 샷추가 쌉가능 (개당 1500원~~~)")
// console.log(`총 가격은 ${Number(coffee) * 1500}`)


// 문자/불리언 숫자로!
const first = Number("100")
const second = Number("200")
const third = Number(true) // 1
const fourth = Number(false) // 0

// 숫자/불리언 문자로!
const a = String(1500) // "1500"
const b = String(true) // "true"

// 숫자/문자 -> 불리언

// 0, -0, "" -> false
// 나머지 -> true

Boolean("마라탕") // true
Boolean("마라샹궈") // true
Boolean("탕후루") // true
Boolean(1004) // true
Boolean(4) // true
Boolean("") // false