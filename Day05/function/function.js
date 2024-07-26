// function [함수]
function add100(x) {
    return x + 100
}

function minus100(x) {
    return x - 100
}

// x는 매개변수
function wonYoungThingKing(x) {
    return x + "러어키" // 반환 값 
}

function test(x, y) {
    return (x + y) ** 2
}

function even(x) {
    if(x % 2 == 0) {
        return "짝수"
    }else {
        return "홀수"
    }

}

function max(x, y) {
    if(x > y) {
        return x
    }else {
        return y
    }
}

const a = add100(3000) // 3100
const b = minus100(1000) //900
const c = wonYoungThingKing("수업") // 전달인자 
const d = max(5, 7)

function same(x, y){
    return x == y ? "똑같음" : "다름"
}



