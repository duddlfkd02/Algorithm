function solution(nums) {
    let result = []; 
    // 중복되지 않은 경우에만 배열에 저장
    for(let i = 0; i < nums.length; i++){
        if(!result.includes(nums[i])){
            result.push(nums[i])
        }
    }
    // 최대 포켓몬 개수
    const maxSelectPokemon = nums.length / 2;
    
    // result 배열과 maxSelectPokemon 중 최소값 return
    return Math.min(result.length, maxSelectPokemon);
}