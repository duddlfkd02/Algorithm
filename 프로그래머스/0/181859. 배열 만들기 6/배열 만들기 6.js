function solution(arr) {
   let stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (stk.length > 0 && stk[stk.length - 1] === arr[i]) {
            // stk의 마지막 원소와 arr[i]가 같으면 마지막 원소 제거
            stk.pop();
        } else {
            // stk이 비어 있거나, 마지막 원소와 arr[i]가 다르면 arr[i] 추가
            stk.push(arr[i]);
        }
    }
    return stk.length ? stk : [-1]
}