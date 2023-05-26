// [Medium] 223. Rectangle Area
// 223_rectangle_area

// https://leetcode.com/problems/rectangle-area
// Runtime: 136 ms, faster than 98.80% of JavaScript online submissions for Rectangle Area.
// Memory Usage: 42.3 MB, less than 55.42% of JavaScript online submissions for Rectangle Area.
const computeArea = (A, B, C, D, E, F, G, H) => {
  const area1 = (C - A) * (D - B)
  const area2 = (G - E) * (H - F)
  let candidate = area1 + area2
  if (C <= E || A >= G || D <= F || B >= H) {
    return candidate
  }

  const leftX = A <= E ? E : A
  const rightX = C >= G ? G : C
  const downY = B <= F ? F : B
  const upY = D >= H ? H : D
  const diffWidth = rightX - leftX
  const diffHeight = upY - downY

  return candidate - (diffWidth * diffHeight)
}
