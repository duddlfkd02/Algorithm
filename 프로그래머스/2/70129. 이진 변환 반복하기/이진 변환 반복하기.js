function solution(s) {
    let transforCount = 0 // 이진변환횟수
    let zeroCount = 0; //0 개수
    
    while(s !== "1"){
        //1. 주어진 문자열에서 0 제거하기
        const removedZeroCount =  s.split("0").length - 1;
        zeroCount += removedZeroCount;
        s = s.replace(/0/g, "");
        
        // 2. 남은 문자열 길이
        const newSLength = s.length;
        s = newSLength.toString(2);
        
        transforCount++
    }
    return [transforCount, zeroCount]
}