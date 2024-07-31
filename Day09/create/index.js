// 엘리먼트 타입
const div = document.createElement("div")
div.style.width = "100px"
div.style.height = "100px"
div.style.border = "1px solid black"

const btn = document.createElement("button")
btn.innerText = "버튼"

div.appendChild(btn)
document.body.appendChild(div)