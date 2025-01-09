function solution(today, terms, privacies) {
    // terms를 Map 으로 묶어서 사용, 날짜 문자열 비교
    const termMap = {};
    terms.forEach((term) => {
        const [type, period] = term.split(" ");
        termMap[type] = parseInt(period, 10); // 약관 유효기간
    })
    
    const result = [];
    
    privacies.forEach((privacy, idx) => {
        const [date, type] = privacy.split(" ");
        const expireDate = getExpiryDate(date, termMap[type]);
        if(expireDate < today){
            result.push(idx + 1)
        }
    })
    return result;
}

// 만료 날짜 계산 함수
function getExpiryDate(date, period) {
    let [year, month, day] = date.split(".").map(Number);
    month += period;
    if(month > 12){
        year += Math.floor((month - 1) / 12);
        month = (month - 1) % 12 + 1;
    }
    
    day -= 1;
    if(day === 0){
        month -= 1;
        if(month === 0){
            year -= 1;
            month = 12;
        }
        day = 28;
    }
    return `${year}.${String(month).padStart(2, "0")}.${String(day).padStart(2, "0")}`
}