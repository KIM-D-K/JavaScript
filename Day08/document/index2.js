const box = document.createElement("div")
box.className = "box"

const area = ["서울", "경기", "춘천/강원", "제주", "인천/부천", "대구/경북"]

// foreach area의 배열에 있는 values
// 하나씩 x변수에 담아서 실행시킴
area.forEach((x) => {
    // div변수에 div태그를 추가
    const div = document.createElement("div")
    // div변수에 area의 배열을 div태그 안에 하나씩 추가
    div.innerText = x
    // div변수에 class이름을 button을 달아줌
    div.className = "button"
    // box의 자식을 div로 함
    box.appendChild(div)
})
// box안에 있는 모든 값을 body에 추가
document.body.appendChild(box)