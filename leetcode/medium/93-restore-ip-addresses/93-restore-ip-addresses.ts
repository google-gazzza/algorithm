// leetcode/medium/93. Restore IP Addresses
// 93-restore-ip-addresses
// URL: https://leetcode.com/problems/restore-ip-addresses/description/

function restoreIpAddresses(input: string): string[] {
  if (input.length > 12) {
    return [];
  }
  const result: string[] = [];

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const dfs = (s: string, g1: number, g2: number, g3: number, g4: number, targetGroup: number) => {
    if (g1 + g2 + g3 + g4 === s.length) {
      const resultCandidate = [];
      resultCandidate.push(s.substring(0, g1));
      resultCandidate.push(s.substring(g1, g1 + g2));
      resultCandidate.push(s.substring(g1 + g2, g1 + g2 + g3));
      resultCandidate.push(s.substring(g1 + g2 + g3));

      const isNotStartWithZero = resultCandidate.every((e) => {
        if (e.length > 1) {
          return e[0] !== '0';
        }
        return true;
      });

      if (isNotStartWithZero) {
        const numArr = resultCandidate.map(Number);

        if (numArr.every((e) => e <= 255)) {
          result.push(resultCandidate.join('.'));
        }
      }
    }

    if (targetGroup <= 1 && g1 < 3) {
      dfs(s, g1 + 1, g2, g3, g4, targetGroup);
    }
    if (targetGroup <= 2 && g2 < 3) {
      dfs(s, g1, g2 + 1, g3, g4, 2);
    }
    if (targetGroup <= 3 && g3 < 3) {
      dfs(s, g1, g2, g3 + 1, g4, 3);
    }
    if (targetGroup <= 4 && g4 < 3) {
      dfs(s, g1, g2, g3, g4 + 1, 4);
    }
  };

  dfs(input, 1, 1, 1, 1, 1);

  return result;
}

let s = '101023';
console.log(restoreIpAddresses(s));
// Output: ['1.0.10.23','1.0.102.3','10.1.0.23','10.10.2.3','101.0.2.3']

s = '25525511135';
// Output: ['255.255.11.135','255.255.111.35']
