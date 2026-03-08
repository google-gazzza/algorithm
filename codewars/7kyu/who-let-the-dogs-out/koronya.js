// [JS][7kyu] Who let the dogs out?
// who-let-the-dogs-out
// https://www.codewars.com/kata/5434d8487abffa2f64000db6/train/javascript

const BARK = 'woof woof'
const SLEEP = 'zzzzzzzzz....'

const dog_bark_by_default2 = (bark) => {
  bark = bark || true
  return bark ? BARK : SLEEP
}

const dog_bark_by_default = (bark) => {
  bark = bark === undefined ? true : bark
  return bark ? BARK : SLEEP
}

const dog_bark_only_if_told_so = (bark) => {
  bark = bark || false
  return bark ? BARK : SLEEP
}

const dog_dont_bark_by_default = (dont_bark) => {
  dont_bark = dont_bark === undefined ? true : dont_bark
  return !dont_bark ? BARK : SLEEP
}

const dog_dont_bark_only_if_told_so = (dont_bark) => {
  dont_bark = dont_bark || false
  return !dont_bark ? BARK : SLEEP
}

dog_bark_only_if_told_so(true) === BARK
dog_bark_only_if_told_so(false) === SLEEP
dog_bark_only_if_told_so() === SLEEP

dog_dont_bark_only_if_told_so(true) === SLEEP
dog_dont_bark_only_if_told_so(false) === BARK
dog_dont_bark_only_if_told_so() === BARK

dog_dont_bark_by_default() === SLEEP
dog_dont_bark_by_default(false) === BARK

dog_bark_by_default() === BARK
dog_bark_by_default(false) === SLEEP
