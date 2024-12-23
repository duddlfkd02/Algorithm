function solution(date1, date2) {
   const newDate1 = new Date(date1[0], date1[1] - 1, date1[2])
   const newDate2 = new Date(date2[0], date2[1] - 1, date2[2])
   
    return newDate1 < newDate2 ? 1 : 0
}