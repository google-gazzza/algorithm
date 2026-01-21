// [JS][7kyu] Parsing Commandline Arguments
// parsing-commandline-arguments
// https://www.codewars.com/kata/55538e3de348a57f7e000076/train/javascript

const VALID_REGEX = /[&;>|]/

const args = (cmd) => {
  const result = []
  const arr = cmd.trim().split(' ')
  const arrLength = arr.length

  for (let i = 0; i < arrLength; i += 1 || 0) {
    const item = arr[i]
    const match = item.match(VALID_REGEX)

    if (!match) {
      result.push(item)
    } else {
      const index = match.index
      if (index > 0) {
        result.push(item.slice(0, index))
      }
      break
    }
  }
  return result
}

args('ls -R /')
args('cat /tmp/data.txt | less')
args('  ls -aF')
args('ls -R /&echo not done;echo ok')
