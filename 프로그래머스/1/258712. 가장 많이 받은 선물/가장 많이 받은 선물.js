function solution(friends, gifts) {
    const giftMap = {};
    const sentGifts = {};
    const receivedGifts = {};
    const nextMonthGifts = {};

    // 초기화
    for (const friend of friends) {
        giftMap[friend] = {};
        sentGifts[friend] = 0;
        receivedGifts[friend] = 0;
        nextMonthGifts[friend] = 0;

        for (const otherFriend of friends) {
            if (friend !== otherFriend) {
                giftMap[friend][otherFriend] = 0;
            }
        }
    }

    // 선물 기록 저장
    for (const gift of gifts) {
        const [giver, receiver] = gift.split(" ");
        giftMap[giver][receiver] += 1;
        sentGifts[giver] += 1;
        receivedGifts[receiver] += 1;
    }

    // 모든 친구 쌍 비교
    for (let i = 0; i < friends.length - 1; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const friendA = friends[i];
            const friendB = friends[j];
            const sentAB = giftMap[friendA][friendB];
            const sentBA = giftMap[friendB][friendA];

            if (sentAB > sentBA) {
                nextMonthGifts[friendA] += 1;
            } else if (sentBA > sentAB) {
                nextMonthGifts[friendB] += 1;
            } else {
                // 선물 횟수가 같다면 선물 지수 비교
                const giftScoreA = sentGifts[friendA] - receivedGifts[friendA];
                const giftScoreB = sentGifts[friendB] - receivedGifts[friendB];

                if (giftScoreA > giftScoreB) {
                    nextMonthGifts[friendA] += 1;
                } else if (giftScoreB > giftScoreA) {
                    nextMonthGifts[friendB] += 1;
                }
                // 선물 지수도 같다면 아무도 선물 받지 않음
            }
        }
    }

    // 가장 많이 선물을 받은 친구 찾기
    return Math.max(...Object.values(nextMonthGifts));
}
