function solution(numlist, n) {
    // 1. 거리 기준 정렬
    return numlist.sort((a,b) =>
        {const distanceA = Math.abs(a-n)
        const distanceB = Math.abs(b-n)
        
        if(distanceA !== distanceB){
            return distanceA - distanceB
        }
         // 2. 같은 거리 정렬
         if (distanceA === distanceB){
             return b-a
         }
        } )
    
}