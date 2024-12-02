function solution(a, b) {
   const sumNum = String(a) + String(b)
   console.log(sumNum)
   const multiplyNum = 2 * a * b
   return Number(sumNum) >= multiplyNum ? Number(sumNum) : multiplyNum
}