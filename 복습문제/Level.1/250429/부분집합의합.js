/**의사코드 작성 */
/**
 * f countSubsetSums(arr, S):
 * count <- 0
 *
 *  f dfs(idx, sum):
 *  // 조건: 배열 끝에 도달했을 때
 *  만약에 idx === arr.length라면
 *    만약 sum === S 이면 count++
 *    return
 *
 *  // 1) arr[idx]를 고르지 않을 때 : idx에 해당하는 원소 선택하지 않고 다음 단계로 넘어감
 *  dfs(idx + 1, sum)
 *
 *  // 2) arr[idx]를 고를 때 : idx값을 포함하고, 더한 뒤 다음 단계로 넘어감
 *  dfs(idx + 1, sum + arr[idx])
 *
 *  dfs(0,0)
 *  return count
 *
 */

function solution(arr, S) {
  let count = 0;

  function dfs(idx, sum) {
    if (idx === arr.length) {
      if (sum === S) count++;
      return;
    }

    dfs(idx + 1, sum);

    dfs(idx + 1, sum + arr[idx]);
  }
  dfs(0, 0);
  return count;
}

/** ⭐️ 공통된 dfs 기본 틀
function dfs(현재상태) {
  // 1) 기저(base) 조건: 더 이상 탐색할 필요 없거나 만족 여부 검사
  if (종료조건) {
    처리할 로직(결과 누적·비교 등);
    return;
  }

  // 2) 분기(branch) 또는 다음 상태로 전환
  for (const nextState of 가능한다음상태들) {
    // 선택 전 처리(방문 표시, 합산 등)
    dfs(nextState);
    // 선택 후 처리(방문 취소, 합 제거 등) — Backtracking
  }
}
 */
