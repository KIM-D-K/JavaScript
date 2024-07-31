// document : html을 담당하는 타입

// a는 element 타입
const a = document.createElement("h1") // h1 태그 만들기
a.innerText = "점메추!" // h1태그안에 "점메추!"라는 Text 추가
document.body.appendChild(a) // body에 a를 넣음

// button 태그를 만들고 내용은 럭키비키!
const luckybiky = document.createElement("Button")
luckybiky.innerText = "럭키비키!"
document.body.appendChild(luckybiky)

// div 태그 만들고, 유저에게 아침에 먹었던 음식을
// 물어보고 div에 내용에 넣고 body에 보여주기!
const food = document.createElement("div")
food.innerText = prompt("아침에 먹었던 음식?")
document.body.appendChild(food)