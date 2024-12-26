function solution(n)
{
    let result = 0;
    const splitN = String(n).split("");

    for(let i = 0; i < splitN.length; i++){
        result += Number(splitN[i])
    }
    return result;
}