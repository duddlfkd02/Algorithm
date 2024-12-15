function solution(arr) {
    let x = 0;

    while (true) {
        const prev = [...arr]; // 이전 상태 저장

        // 배열 변환
        arr = arr.map(num => 
            num >= 50 && num % 2 === 0 ? num / 2 :
            num < 50 && num % 2 !== 0 ? (num * 2) + 1 :
            num
        );

        x++; // 변환 횟수 증가

        // 현재 상태와 이전 상태를 비교
        if (prev.every((value, i) => value === arr[i])) {
            break; // 두 배열이 같으면 종료
        }
    }

    return x - 1; // 변환 횟수 반환
}
