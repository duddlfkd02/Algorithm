

function solution(a, b, n) {
    let totalCoke = 0;

    while (n >= a) {
        const exchangeCoke = Math.floor(n / a) * b; 
        totalCoke += exchangeCoke; 
        n = (n % a) + exchangeCoke; 
    }

    return totalCoke; 
}