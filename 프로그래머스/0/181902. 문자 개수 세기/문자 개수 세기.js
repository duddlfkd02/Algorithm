function solution(my_string) {
    let result = Array(52).fill(0)
    
    for(const char of my_string){
        if(char >= "A" && char <= 'Z'){
         // 대문자
        result[char.charCodeAt(0) - 65]++;
        }else if (char >= 'a' && char <= 'z') {
            // 소문자
            result[char.charCodeAt(0) - 97 + 26]++;
        }
    }
    return result;
}