function solution(rank, attendance) {
    const possible = rank
        .map((score, i) => ({score, i}))
        .filter((_, i) => attendance[i])

    possible.sort((a, b) => a.score - b.score);
    
    const [a, b, c] = possible.slice(0, 3).map((item) => item.i)
    
    return 10000 * a + 100 * b + c;
}

