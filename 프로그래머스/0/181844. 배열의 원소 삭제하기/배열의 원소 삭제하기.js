function solution(arr, delete_list) {
    return arr.filter((ele) => !delete_list.includes(ele));
}