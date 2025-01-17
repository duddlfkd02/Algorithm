function solution(brown, yellow) {
    const total = brown + yellow;

    for(let h = 3; h <= Math.sqrt(total); h++){
        if (total % h === 0) { 
            const w = total / h;
        
        // 노란색 타일 크기
            if ((w - 2) * (h - 2) === yellow) {
                return [w, h];
            }
        }
    }
}