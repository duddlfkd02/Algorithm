function solution(str1, str2) {
    // 2글자씩 다중집합 생성 함수
    function makeMuilty(str){
        const multiset = new Map();
        str = str.toLowerCase(); // 대소문자 구분
        
        for(let i = 0; i < str.length - 1; i++){
            const pair = str[i] + str[i + 1]; 
            // 특수문자 제거
            if(pair.match(/^[a-z]{2}$/)){
                multiset.set(pair, (multiset.get(pair) || 0) + 1);
            }
        }
        return multiset;
    }
    // 다중집합, 교집합, 합집합
    const set1 = makeMuilty(str1);
    const set2 = makeMuilty(str2)
    
    let intersection = 0;
    let union = 0
    
    // 모든 키
    const all = new Set([...set1.keys(), ...set2.keys()]);
    
    for(const key of all){
        const count1 = set1.get(key) || 0
        const count2 = set2.get(key) || 0
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    }
    // 유사도
    const similar = union === 0 ? 1 : intersection / union;
    return Math.floor(similar * 65536);
}