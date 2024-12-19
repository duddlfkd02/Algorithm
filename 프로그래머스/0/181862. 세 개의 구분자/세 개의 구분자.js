function solution(myStr) {
    const result = myStr.split(/[a|b|c]/g).filter((ele) => ele) 
    return result.length ? result : ["EMPTY"]
}