// [JS][7kyu] Well of Ideas - Harder Version
// well-of-ideas-harder-version
// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript

const well = (x) => {
  const goodCount = x.flat().filter((e) => String(e).toLowerCase() === 'good').length
  // prettier-ignore
  return goodCount > 2
    ? 'I smell a series!'
    : goodCount > 0
      ? 'Publish!'
      : 'Fail!'
}

// well([
//   ['bad', 'bAd', 'bad'],
//   ['bad', 'bAd', 'bad'],
//   ['bad', 'bAd', 'bad'],
// ]) === 'Fail!'
// well([
//   ['gOOd', 'bad', 'BAD', 'bad', 'bad'],
//   ['bad', 'bAd', 'bad'],
//   ['GOOD', 'bad', 'bad', 'bAd'],
// ]) === 'Publish!'
// well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]) === 'I smell a series!'

// well([['gOOd', 'bAd', 6], ['CoNcenTraTe', 'CoNcenTraTe', 3, 'CoNcenTraTe', '8', 'bad'], ['bAd']])
