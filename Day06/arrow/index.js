// general function[일반 함수]
function minValue(x, y) {
    return x > y ? y : x
}

// arrow function[화살표 함수]
// (매개변수)=>{구현}
const minValue1 = (x, y) => {
    return x > y ? y : x
}

// 어떠한 단어가 들어오면 뒤에 "!" 붙혀서 돌려주는 함수
const stringValue = (var1) => {
    return var1 + "!"
}

const numberValue = (var1) => {
    return var1 = var1 / 2
}

const numberAddValue = (x, y) => {
    return (x+y)*2
}

// 어떠한 배열과 과일을 넣었을 때, 배열에 과일을 넣어주는 함수
// 아래 함수는 arr라는 배열 요소에 fruit이라는 값이 들어오면 
// arr배열에 fruit값을 맨 뒤에 추가하여 반환하는 함수
const fruits = (arr, fruit) => {
    return arr.push(fruit)
}


// 어떠한 배열과 과일을 영어로 넣었을 때,
// 과일의 알파벳이 a 또는 p가 들어가면 배열에 추가가 안되고
// 그게 아니면 추가되는 함수 만들기!
const arrFruit = (arr, fruit) => {
    if(!fruit.includes("p") && !fruit.includes("a")) {
        return arr.push(fruit)
    }
}

// 비밀번호를 입력했을 때,
// 1. ! or #이 안 들어가면 특수문자 필수!
// 2. 비밀번호의 길이가 6~20사이가 아니면 비밀번호 길이를 재수정!
// 3. 비밀번호의 시작이 IT or it로 시작 안 하면 반드시 IT or it로 시작!
// 다 통과되면 비밀번호 통과

const passWord = (pwd) => {
    if(pwd.includes("!") || pwd.includes("#")) {
        if(pwd.length >= 6 && pwd.length <= 20) {
            if(pwd.startWith("it") || pwd.startWith("IT")){
                return "비밀번호 총족"
            }
        }
    }else {
        return "비밀번호 재설정"
    }
}