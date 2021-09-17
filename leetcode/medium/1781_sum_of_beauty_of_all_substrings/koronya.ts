// [Medium] 1781. Sum of Beauty of All Substrings
// 1781_sum_of_beauty_of_all_substrings

// https://leetcode.com/problems/sum-of-beauty-of-all-substrings
// Runtime: 3668 ms, faster than 100.00% of TypeScript online submissions for Sum of Beauty of All Substrings.
// Memory Usage: 45.6 MB, less than 100.00% of TypeScript online submissions for Sum of Beauty of All Substrings.

const getBeauty = (map: Map<string, number>): number => {
  const sortedArr = [...map].sort((a, b) => b[1] - a[1])
  return sortedArr[0][1] - sortedArr[sortedArr.length - 1][1]
}

function beautySum(s: string): number {
  let result = 0
  const sLen = s.length
  const dfs = (start: number, map: Map<string, number>) => {
    const score = getBeauty(map)
    result += score
    if (start < sLen) {
      const str = s[start]
      map.set(str, (map.get(str) || 0) + 1)
      dfs(start + 1, map)
    }
  }
  for (let i: number = 0; i < sLen; i += 1) {
    const map = new Map<string, number>()
    map.set(s[i], 1)
    dfs(i + 1, map)
  }

  return result
}


beautySum('aabcb') //?
beautySum('aabcbaa') //?
beautySum(
  'kcgdnprqxcmpcavjzjgvgekzsvoejxwrdsidzitpzcegxrrrnayndadtqwqswuinzyhdewzzvukqbzobylcporryqpurrzzmidrjcgtfoeyycrsbpbinbzweirmlamaajudtaermybbopxknkwalbnowfsevnodehzdalgailizfvnenmfuatxieorjaybxilmjsslalgeecmsbqwdjntfoaizbpmxekrtesrguepsevaymfwetnddblkbrirhrxrxvrpnqtazyurmwmlxtxczsypiycedwdgyzelbyapgfmedpzbfjfmbtydaqnshncgciqhatuzzpjklomxxqkdvrcwpotadandkwkfnrgiugpxyfjzzwkfdlvytfufxpsdwgmrqzufghuyq',
) //?
