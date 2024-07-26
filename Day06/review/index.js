function temperature(x) {
    if(x > 30) {
        return "더워요"
    }else if(x <= 30 ) {
        return "살짝 더월"
    }else if(x <= 20) {
        return "쾌적해요"
    }else if(x > 0 && x <= 10) {
        return "쌀쌀해요"
    }else {
        return "얼어디져요"
    }
}
const c = Number(prompt("온도?"))
console.log(temperature(c))

function oliveYoungSail(x) {
    if(x > 50000) {
        return { orginal : x, discount : x*0.8 }
    }else if(x >= 30000) {
        return x*0.9
    }else {
        return x
    }
}
const p = Number(prompt("구매가격?"))
console.log(oliveYoungSail(p))



