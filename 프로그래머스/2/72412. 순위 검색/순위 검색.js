function solution(info, query) {
  const infoMap = new Map();

  // info를 key 조합별로 정리
  for (const s of info) {
    const [lang, part, career, food, scoreStr] = s.split(" ");
    const score = Number(scoreStr);
    const conditions = [lang, part, career, food];

    makeCombinations(conditions, score, 0, []);
  }

  // 점수 배열 오름차순 정렬
  for (const [key, arr] of infoMap.entries()) {
    arr.sort((a, b) => a - b);
  }

  // query 처리
  const result = [];

  for (const q of query) {
    const parts = q.split(" ").filter(x => x !== "and");
    const key = parts.slice(0, 4).join("");
    const target = Number(parts[4]);

    if (!infoMap.has(key)) {
      result.push(0);
      continue;
    }

    const scores = infoMap.get(key);
    result.push(scores.length - lowerBound(scores, target));
  }

  return result;

  // 조합 생성
  function makeCombinations(conditions, score, idx, path) {
    if (idx === 4) {
      const key = path.join("");
      if (!infoMap.has(key)) {
        infoMap.set(key, []);
      }
      infoMap.get(key).push(score);
      return;
    }

    // 현재 값 사용
    path.push(conditions[idx]);
    makeCombinations(conditions, score, idx + 1, path);
    path.pop();

    // '-' 사용
    path.push("-");
    makeCombinations(conditions, score, idx + 1, path);
    path.pop();
  }

  //이진 탐색
  function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}
