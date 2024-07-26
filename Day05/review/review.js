const bus = Number(prompt("1. 마을버스 2. 고속버스 3. 우등버스"))
const age = Number(prompt("나이?"))
const busArr = [1500, 2000, 3000]

if(age > 64) {
    if(bus == 1) {
        console.log(`${busArr[bus] * 0.7}`)
    }else if(bus == 2) {
        console.log(`${busArr[bus] * 0.7}`)
    }else if(bus == 3) {
        console.log(`${busArr[bus] * 0.7}`)
    }
}else if(age <= 13) {
    console.log(`꽁짜`)
}else {
    if(bus == 1) {
        console.log(`${busArr[bus]}`)
    }else if(bus == 2) {
        console.log(`${busArr[bus]}`)
    }else if(bus == 3) {
        console.log(`${busArr[bus]}`)
    }
}
