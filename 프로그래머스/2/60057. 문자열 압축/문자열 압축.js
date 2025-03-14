function solution(s) {
    let minLength = s.length; // 초기값: 원본 문자열 길이

    for (let i = 1; i <= Math.floor(s.length / 2); i++) { // 1개 ~ s.length / 2 단위로 잘라서 확인
        let arr = [];

        // 문자열 i개 단위로 자르기
        for (let j = 0; j < s.length; j += i) {
            arr.push(s.slice(j, j + i));
        }

        // reduce를 이용한 문자열 압축
        let compressed = arr.reduce((acc, cur, index, array) => {
            if (index === 0) return { str: "", prev: cur, count: 1 }; // 첫 번째 요소

            if (cur === acc.prev) {
                acc.count += 1; 
            } else {
                acc.str += (acc.count > 1 ? acc.count : '') + acc.prev; // 이전 문자열 추가
                acc.prev = cur; 
                acc.count = 1;
            }

            // 마지막 요소일 경우
            if (index === array.length - 1) {
                acc.str += (acc.count > 1 ? acc.count : '') + acc.prev;
            }

            return acc;
        }, { str: "", prev: "", count: 0 }).str;

        // 최소 압축 길이 업뎃
        minLength = Math.min(minLength, compressed.length);
    }

    return minLength;
}
