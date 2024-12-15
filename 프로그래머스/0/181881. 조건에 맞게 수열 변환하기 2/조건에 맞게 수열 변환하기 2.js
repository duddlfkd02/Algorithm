function solution(arr) {
    let x = 0;
    let arr_next = [...arr]; 

    while (true) {
        arr_next = arr_next.map(num => {
            if (num >= 50 && num % 2 === 0) {
                return num / 2;
            } else if (num < 50 && num % 2 !== 0) {
                return (num * 2) + 1;
            } else {
                return num; 
            }
        });

        x++; 

        if (JSON.stringify(arr) === JSON.stringify(arr_next)) {
            break;
        }

        arr = [...arr_next];
    }

    return x - 1;
}
