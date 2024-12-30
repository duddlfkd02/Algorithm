function solution(answers) {
    // 각 수포자의 찍는 패턴
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 각 수포자의 점수 계산
    let scores = [0, 0, 0];

    // 정답 배열 순회
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === first[i % first.length]) scores[0]++; // 1번 수포자
        if (answers[i] === second[i % second.length]) scores[1]++; // 2번 수포자
        if (answers[i] === third[i % third.length]) scores[2]++; // 3번 수포자
    }

    // 가장 높은 점수 
    const maxScore = Math.max(...scores);

    // 가장 높은 점수를 가진 수포자 찾기
    const result = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            result.push(i + 1);
        }
    }

    return result;
}
