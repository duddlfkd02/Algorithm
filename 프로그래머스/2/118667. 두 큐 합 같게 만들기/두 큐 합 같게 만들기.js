function solution(queue1, queue2) {
    let sum1 = queue1.reduce((prev, cur)=> prev + cur, 0);
    let sum2 = queue2.reduce((prev, cur)=> prev + cur, 0);
    let totalSum = sum1 + sum2;
    let target = totalSum / 2 // 우리가 구해야 하는 값!!
    
    // 전체 합이 홀수일 때는 2로 못 나눔
    if(totalSum % 2 !== 0) return -1;
    
    const newQ = [...queue1,...queue2]; // 두 개 큐 합친 새로운 배열
    let left = 0;
    let right = queue1.length
    let count = 0
    
    while(left < newQ.length && right < newQ.length){
        if(sum1 === target) return count;
        if(sum1 > target){
            sum1 -= newQ[left] // ex.[3, 2, 7, 2] 에서 3 뺌
            left++;
        }else{ // sum1 < target
            sum1 += newQ[right];
            right++
        }
        count++;
    }
    return -1;
}
