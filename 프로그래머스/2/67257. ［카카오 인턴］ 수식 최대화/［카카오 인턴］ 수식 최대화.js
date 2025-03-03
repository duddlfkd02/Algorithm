function solution(expression) {
    const numbers = expression.split(/[^0-9]/).map(Number); // 숫자 분리
    const operators = expression.split(/[0-9]+/).filter(op => op); // 연산자 분리

    const priorityOrders = [
        ["+", "-", "*"], ["+", "*", "-"],
        ["-", "+", "*"], ["-", "*", "+"],
        ["*", "-", "+"], ["*", "+", "-"]
    ];

    let maxAnswer = 0;

    // 모든 연산자 우선순위 조합을 순회
    for (let order of priorityOrders) { 
        let numList = [...numbers]; 
        let opList = [...operators];

        // 현재 순서의 연산자 우선순위 적용
        for (let operator of order) { 
            let newNumList = [numList[0]]; // 첫 번째 숫자 저장
            let newOpList = [];

            for (let i = 0; i < opList.length; i++) {
                if (opList[i] === operator) {
                    let calc = calculate(newNumList.pop(), numList[i + 1], operator); 
                    newNumList.push(calc); // 계산한 값 저장
                } else {
                    newNumList.push(numList[i + 1]); // 숫자
                    newOpList.push(opList[i]); // 연산자
                }
            }
            numList = newNumList;
            opList = newOpList;
        }

        maxAnswer = Math.max(maxAnswer, Math.abs(numList[0]));
    }
    return maxAnswer;
}

// 연산 함수
const calculate = (num1, num2, operator) => {
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
};

