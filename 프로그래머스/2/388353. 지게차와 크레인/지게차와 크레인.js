function solution(storage, requests) {
  const n = storage.length;
  const m = storage[0].length;
  let map = storage.map(row => row.split(''));
  let answer = 0;

  // directions: 상, 하, 좌, 우
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const isInBounds = (x, y) => x >= 0 && y >= 0 && x < n && y < m;

  // 외부 공간 탐색
  const markOutside = () => {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [];

    // 가장자리에서 시작
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if ((i === 0 || i === n - 1 || j === 0 || j === m - 1) && map[i][j] === "") {
          queue.push([i, j]);
          visited[i][j] = true;
        }
      }
    }

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let d = 0; d < 4; d++) {
        const nx = x + dx[d];
        const ny = y + dy[d];
        if (isInBounds(nx, ny) && !visited[nx][ny] && map[nx][ny] === "") {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
    return visited; // 외부와 연결된 빈칸들
  };

  for (const req of requests) {
    const char = req[0];

    if (req.length === 1) {
      // 지게차 요청
      const outside = markOutside();

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (map[i][j] === char) {
            // 상하좌우 중 한 곳이라도 외부 or 외부빈칸에 접해있으면 제거
            for (let d = 0; d < 4; d++) {
              const ni = i + dx[d];
              const nj = j + dy[d];
              if (!isInBounds(ni, nj) || (map[ni][nj] === "" && outside[ni][nj])) {
                map[i][j] = "";
                break;
              }
            }
          }
        }
      }
    } else {
      // 크레인 요청
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (map[i][j] === char) {
            map[i][j] = "";
          }
        }
      }
    }
  }

  // 남은 컨테이너 개수 세기
  return map.flat().filter(v => v !== "").length;
}
