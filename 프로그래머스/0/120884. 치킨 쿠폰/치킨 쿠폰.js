function solution(chicken) {
    // 1. 치킨을 한 번 주문할 때마다 currentCoupon이 1씩 증가한다.
    // 2. 이 currentCoupon이 10개가 되면 freeChicken이 1 증가한다.
    // 3. chicken / freeChicken 을 return 해서 결과값을 찾는다.
    let currentCoupone = chicken;
    let freeChicken = 0;
    
    while(currentCoupone >= 10){
        let newChicken = Math.floor(currentCoupone / 10);
        freeChicken += newChicken;
        // 남은 쿠폰
        currentCoupone = newChicken + (currentCoupone % 10)
    }
    return freeChicken;
}