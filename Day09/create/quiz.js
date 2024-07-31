// 1. 세로
const makeBox = (x) => {
    const div = document.createElement("div")
    div.style.width = "100px"
    div.style.height = "100px"
    div.style.backgroundColor = x
    document.body.appendChild(div)
} 

["red", "blue", "black", "skyblue"].forEach((x) => {
    makeBox(x)
}) 

// 2. 가로
//      1) container 만들어야함 그리고 flex 줘야함
//      2) box 5개 만들고 그리고 container에 넣어야 함
//      3) container를 body에 넣음 끝

const container = document.createElement("div")
container.style.display = "flex"

const makeBox1 = (x) => {
    const div = document.createElement("div")
    div.style.width = "100px"
    div.style.height = "100px"
    div.style.backgroundColor = x
    return div
} 

["pink", "orange", "blue", "skyblue", "green"].forEach((x) => {
    container.appendChild(makeBox1(x))
})

document.body.appendChild(container)