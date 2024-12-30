function solution(number, limit, power) {
    let totalWeight = 0;

    for (let i = 1; i <= number; i++) {
        let divisorCount = 0;

        // 약수 개수 
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                divisorCount++; 
                if (j !== i / j) divisorCount++; 
            }
        }

        if (divisorCount > limit) {
            totalWeight += power;
        } else {
            totalWeight += divisorCount;
        }
    }

    return totalWeight;
}
