function solution(n, q, ans) {
    // n까지의 숫자 중 5개 고르기
    const combinatons = [];
    
    const dfs = (start, arr) => {
        if(arr.length === 5){
            combinatons.push([...arr])
            return;
        }
        
        for(let i = start + 1; i <= n; i++){
            arr.push(i);
            dfs(i, arr);
            arr.pop();
        }
    }
    dfs(0, []);
    
    // q, ans와 맞는지 검사
    let result = 0;
    
    for(const comb of combinatons){
        let valid = true;
        
        for(let i = 0; i < q.length; i++){
            const input = q[i];
            const expected = ans[i];
            
            const match = input.filter((x) => comb.includes(x)).length;
            
            if(match !== expected){
                valid = false;
                break;
            }
        }
         if (valid) result++;
    }
    return result;
}
