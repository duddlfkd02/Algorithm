function solution(bandage, health, attacks) {
    const [time, recovery, bonusRecovery] = bandage;
    let curHealth = health;
    let curAttack = 0;
    
    for (const [attackTime, damage] of attacks) {
        // 공격 간 시간 차이 계산
        const timeDiff = attackTime - curAttack - 1;
        // 연속 성공 횟수 계산
        const success = Math.floor(timeDiff / time);
        // 총 회복량 계산
        const totalRecovery = timeDiff * recovery + success * bonusRecovery;
        // 체력 업데이트 (최대 체력을 초과하지 않도록 제한)
        curHealth = Math.min(health, curHealth + totalRecovery);
        
        // 공격으로 체력 감소
        curHealth -= damage;
        
        // 체력이 0 이하가 되면 종료
        if (curHealth <= 0) return -1;

        // 현재 공격 시간 업데이트
        curAttack = attackTime;
    }
    return curHealth; 
}