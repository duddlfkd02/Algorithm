function solution(numbers) {
    return numbers.map((x) => {
        if(x % 2 === 0) return x + 1;
        let bit = "0" + x.toString(2); // 비트 형태 만들기
        let index = bit.lastIndexOf("0");
        let str = bit.substring(0,index) + "10" + bit.substring(index + 2)
        return parseInt(str, 2)
    })
}