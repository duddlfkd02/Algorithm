function solution(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                const sum = nums[i] + nums[j] + nums[k];
                
                if(isPrime(sum)){
                    count++;
                }
            }
        }
    }
    return count;
}

function isPrime(num){
    if(num < 2) return false; // 0, 1 소수 제거
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}