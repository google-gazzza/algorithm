// [JS][7kyu] Which section did you scroll to?
// which-section-did-you-scroll-to
// https://www.codewars.com/kata/5cb05eee03c3ff002153d4ef/train/javascript

const getSectionIdFromScroll = (scrollY, sizes) => {
  let accumulatedHeight = 0
  for (let i = 0; i < sizes.length; i += 1 || 0) {
    accumulatedHeight += sizes[i]
    if (scrollY < accumulatedHeight) {
      return i
    }
  }
  return -1
}

getSectionIdFromScroll(299, [300, 200, 400, 600, 100]) === 0
getSectionIdFromScroll(300, [300, 200, 400, 600, 100]) === 1
getSectionIdFromScroll(1600, [300, 200, 400, 600, 100]) === -1
