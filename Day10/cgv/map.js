// []
const a = Array(10).fill("A")


//2. 
const  b = Array(10)
    .fill("")
    // 아래 코드는 x를 몇(i) 번째에 넣는지 정하는 코드
    .map((x, i) => {
        return i
    })
console.log(b)

// ["A1"..."A14"]


const c = Array(14)
    // c 배열에 A로 채우고
    .fill("A")
    // A와 인덱스 값
    .map((x, i) => {
    // 인덱스의 값에 1을 더하면 A1부터 출력 가능
        return "A" + (i+1)
    })
console.log(c)

