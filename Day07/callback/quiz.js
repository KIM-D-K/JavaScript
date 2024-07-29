// cook! recipe 요리시작! recipe() 요리끝!
// taco 함수 1. 타코준비  2. 재료넣기 3. 감싸기
// ramen 함수 1. 물끓이기 2. 면넣기 3. 스프넣기 4. 물 끄기

const recipe = (x) => {
    console.log("요리시작!")
    x()
    console.log("요리 끝!")
}
const taco = (x) => {
    console.log("1. 타코준비")
    console.log(`2. ${x}넣기`)
    console.log("3. 감싸기")
}
const ramen = () => {
    console.log("1. 물 긇이기")
    console.log("2. 면넣기")
    console.log("3. 스프넣기")
    console.log("4. 물 끄기")
}
recipe(() => taco("새우"))
recipe(() => taco("치즈"))
recipe(() => taco("g흐🥅"))
recipe(ramen)
recipe(() => {
    console.log("1. 물 끓이기")
    console.log("2. 소금 넣기")
    console.log("3. 고기 넣기")
    console.log("4. 음식물 쓰레기에 버리기")
})

taco("새우")
taco("치즈")

// while(true) {
//     const food = prompt("뭐 먹을텨? 1. 타코  2. 라면")
//     if(food == "1" || food == "타코") {
//         recipe(taco)
//         break
//     }else if(food == "2" || food == "라면"){
//         recipe(ramen)
//         break
//     }else {
//         alert("다시 입력하세요!")
//     }
// }