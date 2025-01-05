function solution(n, lost, reserve) {
    // 중복값 제거, 체육복 빌려주기 가능 / 불가능
    let lostUniform = lost.filter((student) => !reserve.includes(student));
    let reserveUniform = reserve.filter((student) => !lost.includes(student));
    
    // 정렬
    lostUniform.sort((a, b) => a - b);
    reserveUniform.sort((a, b) => a - b);
    
    
    lostUniform = lostUniform.filter((student) => {
        // 앞 학생
        const prevStudent = reserveUniform.indexOf(student -1);
        if(prevStudent !== -1){
            reserveUniform.splice(prevStudent, 1);
            return false; //빌렸으니까 lost에서 제거
        }
        // 뒷 학생
        const nextStundent = reserveUniform.indexOf(student +1);
        if(nextStundent !== -1){
            reserveUniform.splice(nextStundent, 1);
            return false; //빌렸으니까 lost에서 제거
        }
        // 전부 해당 안되면 체육복 빌리기 X
        return true;
    })
    
    return n - lostUniform.length
}