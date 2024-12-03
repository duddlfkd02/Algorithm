function solution(ineq, eq, n, m) {
    const operator = ineq + eq   
    if (operator === ">=") return n >= m ? 1 : 0;
    if (operator === "<=") return n <= m ? 1 : 0;
    if (operator === ">!") return n > m ? 1 : 0;
    if (operator === "<!") return n < m ? 1 : 0;
    
}