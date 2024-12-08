function solution(a, b, c, d) {
    const dice = [a, b, c, d].sort((x, y) => x - y);

    if (dice[0] === dice[3]) {
        // 네 주사위가 모두 같은 경우
        return 1111 * dice[0];
    } else if (dice[0] === dice[2] || dice[1] === dice[3]) {
        // 세 개가 같고 나머지 하나가 다른 경우
        const p = dice[1]; // 같은 숫자
        const q = dice[0] === dice[2] ? dice[3] : dice[0]; // 다른 숫자
        return (10 * p + q) ** 2;
    } else if (dice[0] === dice[1] && dice[2] === dice[3]) {
        // 두 쌍씩 같은 경우
        return (dice[0] + dice[2]) * Math.abs(dice[0] - dice[2]);
    } else if (dice[0] === dice[1] || dice[1] === dice[2] || dice[2] === dice[3]) {
        // 두 개가 같고 나머지 두 개가 각각 다른 경우
        const q = dice[0] === dice[1] ? dice[2] : dice[0];
        const r = dice[2] === dice[3] ? dice[1] : dice[3];
        return q * r;
    } else {
        // 네 숫자가 모두 다른 경우
        return dice[0];
    }
}
