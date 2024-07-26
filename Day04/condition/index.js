// if문(조건식)

// const number = Number(prompt("숫자 5를 눌러봐?"))

// if(number == 5) {
//     alert("ㅎㅇ")
// }

// ------------------------------------------------------------------------------

// 숫자를 입력하고 양수이면 양수네요! alert 나타내기

// const number1 = Number(prompt("숫자를 입력하세요"))

// if(number1 > 0) {

//     alert("양수네요!")
// } 

// const number2 = Number(prompt("숫자를 입력하세요"))

// if(number2 > 0) {
//     alert("양수")
// }else if(number2 == 0) {
//     alert("0임")
// }else {
//     alert("음수")
// }

// 나이를 입력하고 20살 이상이면 성인, 13살 이상이면 청소년, 아니면 어린이
// 19~17 고등학생, 16~14 중학생, 13~8 초등학생, 그 외는 어린이

const age = Number(prompt("나이를 입력하세요>>"))

if(age >= 20) {
    alert("성인")
}else if(age >= 17) {
    alert("고딩")
}else if(age >= 14) {
    alert("중딩")
}else if(age >= 8) {
    alert("초딩")
}else if(age == "") {
    alert("입력해라")
}else {
    alert("어린이")
}

