function solution(skill, skill_trees) {
// 각 skill_trees에서 skill에 해당하는 문자만 남긴다.
// filter를 사용하여 skill에 포함된 문자만 추출
// 추출된 문자열이 skill 시작하는지 확인
// 조건을 만족하는 경우 개수를 증가시킨다.

    let result  = 0;
    
    for(const tree of skill_trees){
        let filterTree = tree.split("").filter((str) => skill.includes(str)).join("");
    
        if(skill.startsWith(filterTree)) result++
    }
    return result;
    
}