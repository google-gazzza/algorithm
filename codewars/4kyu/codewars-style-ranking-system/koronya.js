// [JS][4kyu] Codewars style ranking system
// codewars-style-ranking-system
// https://www.codewars.com/kata/51fda2d95d6efda45e00004e

const getRankDiff = (taskRank, userRank) => {
  if ((taskRank < 0 && userRank < 0) || (taskRank > 0 && userRank > 0)) {
    return userRank - taskRank
  }
  const diff = userRank - taskRank
  return diff > 0 ? diff - 1 : diff + 1
}

class User {
  constructor() {
    this.rank = -8
    this.progress = 0
  }

  incProgress(taskRank) {
    if (taskRank < -8 || taskRank > 8 || taskRank === 0) {
      throw new Error('Invalid task rank')
    }
    const rankDiff = getRankDiff(taskRank, this.rank)
    if (rankDiff >= 0) {
      if (rankDiff === 0) {
        this.progress += 3
      } else if (rankDiff === 1) {
        this.progress += 1
      }
    } else {
      this.progress += 10 * rankDiff * rankDiff
    }

    if (this.progress >= 100) {
      const rankUpCount = Math.floor(this.progress / 100)
      if (this.rank < 0 && this.rank + rankUpCount >= 0) {
        this.rank += rankUpCount + 1
      } else {
        this.rank += rankUpCount
      }
      this.progress %= 100
    }

    if (this.rank >= 8) {
      this.rank = 8
      this.progress = 0
    }
  }
}

// const user = new User()
// user.rank
// user.progress
// user.incProgress(-7)
// user.progress
// user.incProgress(-5)
// user.rank
// user.progress
// user.incProgress(-4)
// user.rank
// user.progress
