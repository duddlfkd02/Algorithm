function solution(score) {
// 평균을 구한다
const average = score.map(([math, eng]) => (math + eng) / 2);

    
const sortedAverage = [...average]
.sort((a,b) => b - a) // 내림차순 정리
.map((avg, index) => ({ avg, rank: index + 1 })); // 등수를 매긴다

// 다시 원래 순서로 되돌리기
return average.map((avg) => sortedAverage.find(({ avg: sortedAverage }) => avg === sortedAverage).rank)
}