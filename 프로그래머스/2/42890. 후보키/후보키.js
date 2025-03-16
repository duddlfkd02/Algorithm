function solution(relation) {
    const rowLen = relation.length;
    const colLen = relation[0].length;
    const candidateKeys = [];

    // 1. 모든 컬럼 조합 생성
    const combinations = (array, selectNumber) => {
        if (selectNumber === 0) return [[]];
        if (array.length === 0) return [];

        const first = array[0];
        const rest = array.slice(1);

        const withFirst = combinations(rest, selectNumber - 1).map(comb => [first, ...comb]);
        const withoutFirst = combinations(rest, selectNumber);

        return [...withFirst, ...withoutFirst];
    };

    let allCombinations = [];
    for (let i = 1; i <= colLen; i++) {
        allCombinations.push(...combinations([...Array(colLen).keys()], i));
    }

    // 2. 유일성
    for (let comb of allCombinations) {
        let tuples = new Set(relation.map(row => comb.map(col => row[col]).join(",")));

        // 유일성을 만족하는 경우
        if (tuples.size === rowLen) {
            let isMinimal = candidateKeys.every(key => !key.every(col => comb.includes(col)));

            if (isMinimal) candidateKeys.push(comb);
        }
    }

    return candidateKeys.length; 
}
