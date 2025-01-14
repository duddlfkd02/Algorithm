function solution(A,B){
    // reduce 사용하기. A, B는 오름/내림차순 정렬하기
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((acc, cur, index) => acc + cur * B[index], 0)
}