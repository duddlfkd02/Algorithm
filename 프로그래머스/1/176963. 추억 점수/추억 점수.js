function solution(name, yearning, photo) {
    // yearning의 숫자를 모두 더해서 result 배열에 넣는 것
    // name의 i phto i 가 맞아야한다
    // yearning에 없다면 0을 더한다
    const mapping = {};
    
    for(let i = 0; i < name.length; i++){
        mapping[name[i]] = yearning[i]; // 각각 그리움 점수 맞춰서 객체 생성
    }
    
    const result = photo.map((persons) => {
        return persons.reduce((sum, person) => {
            return sum + (mapping[person] || 0); // 점수가 없으면 0
        }, 0);
    });
    
    return result;


}