function solution(people, limit) {
    let boatCount = 0;
    const peopleSort = people.sort((a, b) => b - a);
    
    let left = 0;
    let right = peopleSort.length - 1;
    
    while(left <= right){
        if(peopleSort[left] + peopleSort[right] <= limit){
            right--;
        }
        left++;
        boatCount++;
    }
    return boatCount;
}
    
        
        