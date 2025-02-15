// 타겟넘버
function solution(numbers, target) {
  let answer = 0;

  function dfs(idx, sum) {
    if (idx !== numbers.length) {
      dfs(idx + 1, sum + numbers[idx]);
      dfs(idx + 1, sum - numbers[idx]);
      return;
    }
    if (sum === target) answer++;
  }

  dfs(0, 0);

  return answer;
}
