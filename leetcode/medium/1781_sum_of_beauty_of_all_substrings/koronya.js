// [Medium] 1781. Sum of Beauty of All Substrings
// 1781_sum_of_beauty_of_all_substrings

// https://leetcode.com/problems/sum-of-beauty-of-all-substrings
// Runtime: 6889 ms, faster than 6.25% of JavaScript online submissions for Sum of Beauty of All Substrings.
// Memory Usage: 53.2 MB, less than 93.75% of JavaScript online submissions for Sum of Beauty of All Substrings.

const getBeauty = (map) => {
  const sortedArr = [...map].sort((a, b) => b[1] - a[1])
  return sortedArr[0][1] - sortedArr[sortedArr.length - 1][1]
}

/**
 * @param {string} s
 * @return {number}
 */
const beautySum = function (s) {
  let result = 0
  const sLen = s.length
  const dfs = (start, map) => {
    const score = getBeauty(map)
    result += score
    if (start < sLen) {
      const str = s[start]
      map.set(str, (map.get(str) || 0) + 1)
      dfs(start + 1, map)
    }
  }
  for (let i = 0; i < sLen; i += 1 || 0) {
    const map = new Map()
    map.set(s[i], 1)
    dfs(i + 1, map)
  }

  return result
}

// TLE...
const getBeauty2 = (str) => {
  const strMap = new Map()
  for (const item of str) {
    strMap.set(item, (strMap.get(item) || 0) + 1)
  }
  const sortedArr = [...strMap].sort((a, b) => b[1] - a[1])
  return sortedArr[0][1] - sortedArr[sortedArr.length - 1][1]
}

/**
 * @param {string} s
 * @return {number}
 */
const beautySum2 = function (s) {
  let result = 0
  const sLen = s.length
  const dfs = (str, start) => {
    const score = getBeauty2(str)
    result += score
    if (start < sLen) {
      dfs(str + s[start], start + 1)
    }
  }
  for (let i = 0; i < sLen; i += 1 || 0) {
    dfs(s[i], i + 1)
  }

  return result
}

beautySum('aabcb') //?
beautySum('aabcbaa') //?
beautySum(
  'kcgdnprqxcmpcavjzjgvgekzsvoejxwrdsidzitpzcegxrrrnayndadtqwqswuinzyhdewzzvukqbzobylcporryqpurrzzmidrjcgtfoeyycrsbpbinbzweirmlamaajudtaermybbopxknkwalbnowfsevnodehzdalgailizfvnenmfuatxieorjaybxilmjsslalgeecmsbqwdjntfoaizbpmxekrtesrguepsevaymfwetnddblkbrirhrxrxvrpnqtazyurmwmlxtxczsypiycedwdgyzelbyapgfmedpzbfjfmbtydaqnshncgciqhatuzzpjklomxxqkdvrcwpotadandkwkfnrgiugpxyfjzzwkfdlvytfufxpsdwgmrqzufghuyq',
) //?
