// [JS][6kyu] Unique Cuts
// unique-cuts
// https://www.codewars.com/kata/68be9f8256132dcf53eb1e6e/train/javascript

const splitString = (string) => {
  const strMap = new Map()
  const strLen = string.length
  for (let i = 0; i < strLen; i += 1 || 0) {
    const char = string[i]
    if (!strMap.has(char)) {
      strMap.set(char, { start: i })
    } else {
      strMap.set(char, { ...strMap.get(char), end: i })
    }
  }

  const result = []
  const stack = []
  ;[...strMap].forEach(([_, { start, end }]) => {
    if (stack.length === 0) {
      stack.push({ start, end })
    } else {
      const last = stack.pop()
      if (start < last.end && (end < last.end || end === undefined)) {
        stack.push(last)
      } else if (start < last.end && end > last.end) {
        stack.push({ start: last.start, end })
      } else {
        stack.push({ start, end })
        if (last.end) {
          result.push(last.end - last.start + 1)
        } else {
          result.push(1)
        }
      }
    }
  })
  if (stack.length > 0) {
    const last = stack.pop()
    result.push((last.end || strLen - 1) - last.start + 1)
  }

  return result
}

// splitString('')
// splitString('abbccc')
// splitString('abbacdceef')
// splitString('abacded')
// splitString('abcdea')
// splitString('ababcd')
// splitString('ababcbacadefegdehijhklij')
// splitString('swsqsvwwqvwljipejpjeepipigelggcttcmtftcmfcdbyydybybdokkkoouuuarzzrarzaxnhxxxhhhn')
// splitString('zzlbpbpzblqqiqiuqiwuiwuukxfkfxfmmgeddjedgejjjgegchocyyhhyhoynvssvrrrvvsnsttaat')
// splitString('wdywdywsvissigikgkeevccfzfmhfzhqooqmomqxbtbalntlanjlujunjxppprrr')
// splitString('qrmkybbzkrjjskzymrzvvqsiddiouhhghcggoidcuexntetnllxapfawfappw')
// splitString('omoeqmoqmeeqcwwxggxwcgwypaaayyappypvtddtvddrflrfkfrkllkijnsjujinssnunusbhzbbhzzhz')
// splitString('bommxxbxvvovblhlycslsychsqdnnfzfzqdanappguupugiitwkwktwtkejjjrer')
// splitString('oloqjqocjqljqocseyyyesseeswgdwzwgwgzzgdnhbnhbhbnhrmaauvfmrumvumffratxikpiktxpk')

// splitString('ozjzjogojggoiiixrmyiximriiyxxmyyyrryymrqpqpqpkppkpkqkhhvhnhnnhnnvsssscecsccsesdadlttdatltaffadfdlafbubwuwbbuuubb')

// splitString('eexarxprapxrpperpaxxpexpuvdvbubuvuwhdjbwtuhvbwjdhvubwdudtwwdwbjslfqycszzoocolggoiigogfmlgfnymqflfcilyynyycmogiicyqomlgkkkkkkk')
// splitString('drkauhykwogzbobzllolbeqpvxxtjpctmfjxvmnifjms')

// splitString('pqjzzqdjljjzdjzzqqllqqjkwkcixuchchcwhixkxwcwbcuwivukuiixuurfafayayffrffnntenemtttmmetmennmetgssoogsggoo')
// splitString('tvflyzoazttlvflvzhaahzahhvlfzflfguuguukkkgggukbdmjsiwbmwwiimbcjsbpijjcjbsnxnqnrnqeeee')
// splitString('kujjjkyyuuhihtihithttiopemeppoeeopgggffddgdfgrvacrqcrcaqrqaccqrbbnxnbwwbsxbxxwwlzll')
// splitString('phaaphalahynxjjvsfjudxuzbmjfouozruzzeosdexvgtkckwcqwwcci')

// splitString('qqpgqqqpgggqqqerkezrrcvcvrevreererrvrvaoxalxxloaxoaxaxxaxaoxoybjynnjjynbjnuynubuybbubbnjjynuyjjbnjbunyyufdfmfmfddfmwhsisshhstshhshh')

// splitString(
//   'mjmtttttmmjjjtjjmmjmjtmjmtjmjmmttmmysaaiisyssaaaiyiisyyaaysiyyyssaaaasyaysiisssaasisyiisqlqblqqqqbqqbulqqulqqqqvczvcvvvczznncvnzzzzzvncvvzvczcnvzvvvzzdppphhpdddhphdhddhdddhhpdhphdpddokkfffkkokkxkokofxooookokofxfxkkffofxxffxkkoorgegwwrewgewegwreeweeregregggwwrwwrgweegeweeewgwrr',
// )
