function solution(numbers){
    const totalNumbers = [0,1,2,3,4,5,6,7,8,9];
    const notIncludeNumbers = totalNumbers.filter((num) => !numbers.includes(num))
    return notIncludeNumbers.reduce((acc, cur) => acc + cur, 0)
}