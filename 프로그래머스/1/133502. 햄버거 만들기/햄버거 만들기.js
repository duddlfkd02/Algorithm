function solution(ingredient) {
   // 정해진 순서여야만 햄버거 생성 가능
    // index 순회하면서 맞는지 확인
    // 맞으면 햄버거 개수 증가
    const hamburger = [1,2,3,1];
    let making = [];
    let count = 0;
    
    for(let i = 0; i < ingredient.length; i++){
        making.push(ingredient[i]);

        if(making.length >= 4 && 
           making.slice(-4).join('') === hamburger.join('')
          ){
            making.splice(-4);
            count++;
        }
    }
    return count;
}