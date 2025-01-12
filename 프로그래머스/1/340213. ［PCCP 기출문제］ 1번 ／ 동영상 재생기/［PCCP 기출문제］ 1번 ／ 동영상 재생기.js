function solution(video_len, pos, op_start, op_end, commands) {
    // 시간 -> 초 단위 변환
    const timeToSeconds = (time) => {
        const [min, sec] = time.split(":").map(Number);
        return min * 60 + sec;
    };

    // 초 단위 -> mm:ss 형식 변환
    const secondsToTime = (sec) => {
        const mm = Math.floor(sec / 60).toString().padStart(2, "0");
        const ss = (sec % 60).toString().padStart(2, "0");
        return `${mm}:${ss}`;
    };

    const videoSec = timeToSeconds(video_len);
    const posSec = timeToSeconds(pos);
    const opStartSec = timeToSeconds(op_start);
    const opEndSec = timeToSeconds(op_end);
    let curPos = posSec;
    
    // 오프닝 구간 처리
    const skipOpening = () => {
        if(curPos >= opStartSec && curPos <= opEndSec){
            curPos = opEndSec;
        }
    }
    
    skipOpening();

    for (const command of commands) {
        if (command === "prev") {
            curPos = Math.max(0, curPos - 10);
            skipOpening();
        } else if (command === "next") {
            curPos = Math.min(videoSec, curPos + 10);
            skipOpening();
        }
    }

    return secondsToTime(curPos);
}
