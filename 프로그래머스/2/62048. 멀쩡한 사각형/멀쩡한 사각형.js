function solution(w, h) {
    const value = gcd(w, h);
    
    return w * h - (w + h - value)
   
}

 // 최대 공약수
const gcd = (w, h) => {
    const mod = w % h

    if(mod === 0) {
        return h
    }else{
        return gcd(h, mod)
    }
}