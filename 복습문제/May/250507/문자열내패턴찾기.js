/* 🧠 문제 설명

주어진 텍스트(text) 안에서 패턴(pattern)이 등장하는 모든 시작 인덱스(0-based)를 찾아서 반환하세요.
단, 단순한 브루트포스 탐색이 아닌 KMP 알고리즘으로 시간 복잡도를 O(|text| + |pattern|)에 맞추어 구현합니다.


✅ 입력
	•	첫 번째 줄: 텍스트 text (길이 1 이상, 최대 1,000,000)
	•	두 번째 줄: 패턴 pattern (길이 1 이상, 최대 1,000,000)

✅ 출력
	•	패턴이 텍스트에 등장하는 횟수
	•	두 번째 줄에 등장하는 시작 인덱스를 공백으로 구분하여 오름차순으로 나열
(없으면 두 번째 줄은 비워 출력)

input:
ABABABCABABABCABABABC
ABABC

output:
3
2 6 10
*/

function solution(text, pattern) {
  // lps 배열 만들기
  const lps = new Array(pattern.length).fill(0);
  let len = 0,
    i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else if (len !== 0) {
      len = lps[len - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }
  // text에 있는 pattern 찾기
  const matches = [];
  let j = 0; // pattern index
  for (let i = 0; i < text.length; ) {
    if (text[i] === pattern[j]) {
      // 글자가 일치하면 두 포인터 모두 추가
      i++;
      j++;
      if (j === pattern.length) {
        matches.push(i - j);
        // 다음 매칭을 위해 j를 lps[j-1]로 점프
        j = lps[j - 1];
      }
    } else if (j !== 0) {
      // 이미 일부 일치한 상태였다면
      // 그만큼의 접두,접미사 중복만큼 점프
      j = lps[j - 1];
    } else {
      // j=0 이면, 텍스트 포인터만 전진
      i++;
    }
  }
  console.log(matches.length);
  console.log(matches.join(" "));
}

const pattern = "ABABC";
const text = "ABABABCABABABCABABABC";

solution(text, pattern);

/**
 * 1) 입력받은 pattern P로 lps[] 계산  (O(m))
 * 2) text T를 i 포인터로 스캔하면서 
   j 포인터는 “현재까지 일치한 P의 길이” 역할 (O(n))
 * 3) 완전히 일치(j===m)하면 (i-m)을 기록하고
   j = lps[j-1]로 패턴 내에서 재비교 준비
 * 4) 불일치 시 j>0이면 j=lps[j-1]로 점프,
            j===0이면 i++ 로 넘어가기
 * 5) 결과: matches.length, matches (시작 인덱스 목록)
 */
