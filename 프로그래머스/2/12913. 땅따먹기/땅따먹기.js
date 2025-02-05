function solution(land) {
    for(let i = 1; i < land.length; i++){ // 행
      for(let j = 0; j < 4; j++ ){ // 열
          // 이전 행에서 현재 열을 제외한 나머지 열 중 최대 값 구하기
        land[i][j] += Math.max(...[0,1,2,3]
            .filter((col) => col !== j)
            .map((col) => land[i - 1][col])
            );
        }
    }
    return Math.max(...land[land.length - 1])
}