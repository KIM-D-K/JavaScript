// key와 value로 이루어져 있다.
// key - (중복 불가, 문자거나 숫자만 가능)
// value - (중복됨, 아무데이터 타입 가능)
const inSideOut = {
    title : "인사이드아웃",
    limit_age : 12,
    conmpany : "PIXAR",
    running_time : 90,
    genre : ["kids", "drama", "fantasy"],
}

// object 데이터 조회
inSideOut.title // "인사이드아웃"
inSideOut.genre[1] // "drama"

inSideOut["title"] // "인사이드아웃"
inSideOut["genre"][1] // drama

// object 데이터 추가
inSideOut.director = "켈시 맨"

// object 데이터 삭제 (key가 삭제됨)
delete inSideOut.limit_age

// coffee
// 커피이름 : ""
// 커피가격 : ""
// 커피카페인유무 : 
// 커피 원두 종류 :
// 커피 성분 : 

const coffee = {
    cName : "아메",
    cPrice : 60000,
    cCaffeine : "있다",
    cBeans: "마일드",
    cIngredients : {
        cOnce_kcal : "80kcal",
        cNa : "5mg"
    },
}

coffee.cIngredients.cNa // 5mg