function solution(arr) {
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    const lcm = (a, b) => {
        return (a * b) / gcd(a, b)
    }
    
    return arr.reduce((acc, cur) => lcm(acc, cur), arr[0])
    }
