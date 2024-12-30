function solution(a, b) {
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const date = new Date(2016, a - 1, b)
    const dateIdx = date.getDay();

    return day[dateIdx]
}