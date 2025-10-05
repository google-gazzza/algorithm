// [JS][6kyu] Linux history and `!` command. Series#4 The `!string` command
// linux-history-and-command-series-4-the-string-command
// https://www.codewars.com/kata/5818236ae7f457017b00022b/train/javascript

const bangStartString = (s, history) => {
  const commands = history.split('\n').map((s) => s.replace(/^\s*\d+\s+/, ''))
  const findItem = commands.findLast((c) => c.startsWith(s))
  if (findItem) {
    return findItem
  }

  return `!${s}: event not found`
}

var history = '   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls\n  5  touch me\n  6  chmod 000 me\n  7  more me\n  8  history'
bangStartString('more', history) === 'more me'
var history = '   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls\n  5  touch me\n  6  chmod 000 me\n  7  history\n  8  more me'
bangStartString('touch', history) === 'touch me'
var history = '   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls\n  5  touch me\n  6  chmod 000 me\n  7  history\n  8  more me'
bangStartString('me', history) === '!me: event not found'
var history = '   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls \n  5  touch me\n  6  chmod 000 me\n  7  history\n  8  more me'
bangStartString('mkdir', history) === '!mkdir: event not found'
