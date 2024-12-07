function solution(number) {
    let spilitNum = []
    let sum = 0
    spilitNum = number.split("")
    for(let i = 0; i < spilitNum.length; i++){
        sum += Number(spilitNum[i])
    }
    return sum % 9
}