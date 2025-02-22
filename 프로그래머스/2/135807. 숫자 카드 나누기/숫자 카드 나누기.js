const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a%b));

const getArrayGCD = (arr) => arr.reduce((acc, cur) => getGCD(acc, cur), arr[0]); 

function solution(arrayA, arrayB) {
    const gcdA = getArrayGCD(arrayA)
    const gcdB = getArrayGCD(arrayB)
    let result = []
    
    if(arrayB.every(num => num % gcdA !== 0)){
        result.push(gcdA);
    }
    if(arrayA.every(num => num % gcdB !== 0)){
        result.push(gcdB);
    }
    
    return result.length? Math.max(...result) : 0;
    
}