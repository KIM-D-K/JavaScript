// 유저에게 배경색, 글 내용을 입력받고
// body에 유저에게 받은 배경색과 글의 내용이 담긴
// 버튼 태그 만들기

// userIput변수에 프롬프트로 입력 받은 값을 띄어쓰기 기준으로
// 각각 배열에 담음
const userIput = prompt("배경색과 글 내용입력!").split(" ")
// btn변수에 button태그를 생성
const btn = document.createElement("button")
// btn변수 스타일 배경색을 적용
btn.style.backgroundColor = userIput[0]
// btn변수 태그안에 내용을 적용
btn.innerText = userIput[1]

// body아래 btn을 생성
document.body.appendChild(btn)

// 유저에게 배경색 3가지 묻고
// 3가지 색을 각각 box(높이:100, 넓이:100)을 가진
// 상자 만들기


const bg = prompt("배경색 3가지 입력").split(" ")
bg.forEach((x) => {
    const div = document.createElement("div")
    div.style.height = "100px"
    div.style.width = "100px"
    div.style.backgroundColor = x
    document.body.appendChild(div)
})