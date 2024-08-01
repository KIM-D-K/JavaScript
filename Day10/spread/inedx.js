// String => Array 타입 캐스팅
// spread 연산자

const a = [..."abcdefg"]
console.log(a)

// Array => String 타입 캐스팅

// 1. 지양하셈
a.toString() // => a, b, c, d, e, f, gs
// 2. 이거쓰셈
a.join("!") // => "a!b!c!d!e!f!g" => !으로 문자를 하나씩 나뉨