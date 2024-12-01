function solution(A, B) {
    // A 길이만큼 반복해서 확인 -> B랑 일치하면 멈춤
    for (let i = 0; i < A.length; i++){
        if(A === B){
        return i;
    }
    A = A.slice(-1) + A.slice(0, -1);
    }
    return -1
}