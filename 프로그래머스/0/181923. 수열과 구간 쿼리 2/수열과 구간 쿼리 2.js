function solution(arr, queries) {
    const result = [];

    for (const [s, e, k] of queries) {
        let minVal = Infinity; // 최소값을 저장 (최초엔 아주 큰 값)

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minVal) {
                minVal = arr[i]; // 조건을 만족하는 값이 최소값이면 갱신
            }
        }

        // 최소값이 갱신되지 않았다면 -1 추가, 그렇지 않으면 최소값 추가
        result.push(minVal === Infinity ? -1 : minVal);
    }

    return result;
}
