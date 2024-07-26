const stocks = ["samsung", "kakao", "apple", "lg"]

stocks.push("hybe") // 맨뒤 배열요소에 추가
stocks.pop() // 맨뒤 배열요소 삭제
stocks.unshift("kia") // 배열 맨 앞에 추가
stocks.shift() // 맨 앞 배열 삭제
stocks.reverse() // 거꾸로

stocks.indexOf("apple") // apple이 몇 번째 배열에 있는지 알려줌
stocks.includes("facebook") // 존재 유무를 알려줌