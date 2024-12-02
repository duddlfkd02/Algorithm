function solution(a, b) {
   const sumNum1 = String(a) + String(b);
    const sumNum2 = String(b) + String(a)
    return Number(sumNum1) >= Number(sumNum2) ? Number(sumNum1) : Number(sumNum2)
}