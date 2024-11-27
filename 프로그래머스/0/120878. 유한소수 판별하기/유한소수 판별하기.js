const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b)); // 최대공약수 함수

function solution(a, b) {
    // 1. 최대공약수를 이용해 기약분수의 분모 계산
    const gcd = getGcd(a, b);
    b = b / gcd; 

    // 2. 분모에서 2와 5를 제거
    while (b % 2 === 0) {
        b /= 2;
    }
    while (b % 5 === 0) {
        b /= 5;
    }

    // 3. 분모가 1이면 유한소수, 아니면 무한소수
    return b === 1 ? 1 : 2;
}
