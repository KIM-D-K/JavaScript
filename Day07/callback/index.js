const luckybiky = (x) => {
    return x + "럭키비키자나~"
}

luckybiky("월요일 아침")
luckybiky("자바스크립트")


const ive = (x) => {
    console.log("아이브 멤버")
    // 아래코드는 전달인자로 받은 값이 x에 대입이 됨
    // wonyoung이면 wonyoung()함수 호출
    x()
    console.log("끝")
}
const wonyoung = () => {
    console.log("장원영")
}
const youjin = () => {
    console.log("안유진")
}

ive(wonyoung)
ive(youjin)