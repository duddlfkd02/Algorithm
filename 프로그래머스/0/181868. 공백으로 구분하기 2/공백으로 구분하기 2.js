function solution(my_string) {
    let splitArr = my_string.split(" ")
    
    return splitArr.filter((str) => {
        if(str.length !==0) return str
    })
}