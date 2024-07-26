// 1. 각도를 물어보고, 0~90 예각, 90 직각, 90~180 둔각, 180 평각

const angle = Number(prompt("각도?"))

if(angle == 180) {
    alert("평각")
}else if(angle > 90) {
    alert("둔각")
}else if(angle == 90) {
    alert("직각")
}else if(angle > 0){
    alert("예각")
}else {
    alert("입력오류")
}

// 2. 영어 시험 점수를 입력하고
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 그 외는 나락

const eng = Number(prompt("영어시험 점수"))

if(eng >= 90) {
    alert("A")
}else if(eng >= 80) {
    alert("B")
}else if(eng >= 70) {
    alert("C")
}else if(eng >= 60) {
    alert("D")
}else {
    alert("나락이다")
}

// 3. 오브젝트 문제 mbti를 물어봐서 어떤 상황인지 알려주는 프로그램


const mbti1 = prompt("e인가요 i인가요?")
const mbti2 = prompt("n인가요 s인가요?")
const mbti3 = prompt("f인가요 t인가요?")
const mbti4 = prompt("j인가요 p인가요?")


const mbti = {
    e : "외향적",
    i : "내향적",
    n : "직관적",
    s : "감각적",
    f : "감성적",
    t : "이성적",
    j : "계획적",
    p : "즉흥적",
}

console.log(`당신의 mbti는 ${mbti[mbti1]} ${mbti[mbti2]} ${mbti[mbti3]} ${mbti[mbti4]}`)