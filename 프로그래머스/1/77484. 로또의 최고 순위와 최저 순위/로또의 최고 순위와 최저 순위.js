function solution(lottos, win_nums) {
    
    const correctNums = lottos.filter((num) => win_nums.includes(num)).length;
    const zero = lottos.filter((num) => num === 0).length;
    
    const max = correctNums + zero;
    const min = correctNums;
    
    const getResults = (nums)=> {
        if(nums === 6) return 1;
        if(nums === 5) return 2;
        if(nums === 4) return 3;
        if(nums === 3) return 4;
        if(nums === 2) return 5;
        return 6
    }
    return [getResults(max), getResults(min)]
}