function solution(babbling) {
    const possible = ["aya", "ye", "woo", "ma"];

    return babbling.filter(word => {
        let temp = word;

        while (temp.length > 0) {
            let found = false;

            for (const sound of possible) {
                // temp가 sound로 시작하면 제거
                if (temp.startsWith(sound)) {
                    temp = temp.slice(sound.length); // sound 길이만큼 제거
                    found = true;
                    break;
                }
            }

            // 어떤 발음도 제거되지 않았으면 발음 불가
            if (!found) return false;
        }

        // 모든 발음을 제거했을 때 빈 문자열이면 발음 가능
        return true;
    }).length;
}
