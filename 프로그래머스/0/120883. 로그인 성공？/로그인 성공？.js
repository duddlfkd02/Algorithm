function solution(id_pw, db) {
    // id 일치여부 판단
    const userAccount = db.find(([id]) => id === id_pw[0]);
    // pw 틀린 것 찾기
    if(!userAccount){
        return "fail"
    }else if(userAccount[1] !== id_pw[1] ){
        return "wrong pw"
    }else{
        return "login"
    }
    
}