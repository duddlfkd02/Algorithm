function solution(A, B) {
    // A를 여러 번 밀어보며 B와 같은지 확인
    for (let i = 0; i < A.length; i++){
        if(A === B){
        return i; // 밀어서 B와 같아지는 최소 횟수 반환
    }
        // A를 오른쪽으로 한 칸 밀기
        A = A.slice(-1) + A.slice(0, -1);
    }
    return -1 // 끝까지 확인해도 같아지지 않으면 -1 반환
}