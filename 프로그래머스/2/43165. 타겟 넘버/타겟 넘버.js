function solution(numbers, target) {
    let result = 0;
    
    function dfs(index, sum){
        // 탈출조건 : index === numbers.length(그 이상은 재귀할 필요 없으니까 불필요)
        if(index === numbers.length){
            if(sum === target) result++;
            return; // 종료
        }
        // dfs 함수 동작
        // 실행 후 다음 인덱스로 넘어가 -> index + 1
        // 두번째 파라미터 : + 또는 - 경우의 수
        dfs(index + 1, sum + numbers[index])
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0,0)
    
    return result
}