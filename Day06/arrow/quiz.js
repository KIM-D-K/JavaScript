// 배열, 과일, 갯수를 매개변수로 입력 받고,
// 배열에 {name : 과일, count : 갯수} 추가되는 함수 만들기
const empty = []

const fruitsMarket = (arr, fruit, num) => {
    arr.push({name : fruit, count : num})
}

fruitsMarket(empty, "사과", 5)
fruitsMarket(empty, "배", 4)
fruitsMarket(empty, "키위", 3)
fruitsMarket(empty, "딸기", 2)

console.log(empty)