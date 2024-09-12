// [JS][5kyu] Closest and Smallest
// closest-and-smallest
// https://www.codewars.com/kata/5868b2de442e3fb2bb000119/train/javascript

const getSum = (num) => num.split('').reduce((acc, cur) => acc + parseInt(cur), 0)

const closest = (strng) => {
  if (strng === '') {
    return []
  }
  const arr = strng
    .split(' ')
    .map((num, index) => {
      return {
        num: Number(num),
        sum: getSum(num),
        index,
      }
    })
    .sort((a, b) => a.sum - b.sum || a.index - b.index)

  let minDiffIndex = -1
  let minDiff = Number.MAX_SAFE_INTEGER
  const limit = arr.length - 1
  for (let i = 0; i < limit; i += 1 || 0) {
    const diff = arr[i + 1].sum - arr[i].sum
    if (diff < minDiff) {
      minDiffIndex = i
      minDiff = diff
    }
  }

  return arr.slice(minDiffIndex, minDiffIndex + 2).map((item) => [item.sum, item.index, item.num])
}

// closest('103 123 4444 99 2000')
// closest('80 71 62 53')

// closest('')
// closest('456899 50 11992 176 272293 163 389128 96 290193 85 52')
// closest('239382 162 254765 182 485944 134 468751 62 49780 108 54')
// closest('241259 154 155206 194 180502 147 300751 200 406683 37 57')
// closest('89998 187 126159 175 338292 89 39962 145 394230 167 1')
// closest('462835 148 467467 128 183193 139 220167 116 263183 41 52')

// closest('403749 18 278325 97 304194 119 58359 165 144403 128 38')
// closest('28706 196 419018 130 49183 124 421208 174 404307 60 24')
// closest('189437 110 263080 175 55764 13 257647 53 486111 27 66')
// closest('79257 160 44641 146 386224 147 313622 117 259947 155 58')
// closest('315411 165 53195 87 318638 107 416122 121 375312 193 59')
