// [JS][7kyu] Batman Quotes
// batman-quotes
// https://www.codewars.com/kata/551614eb77dd9ee37100003e/train/javascript

const getHeroName = (hero) => {
  const heroName = hero.toLowerCase()
  if (heroName.includes('bat')) return 'Batman'
  if (heroName.includes('jok')) return 'Joker'
  if (heroName.includes('rob')) return 'Robin'
  return ''
}

const getHeroNumber = (hero) => {
  const heroNumber = hero.match(/\d+/)
  return heroNumber ? Number(heroNumber[0]) : -1
}

const getQuote = (quotes, hero) => {
  const heroName = getHeroName(hero)
  const heroNumber = getHeroNumber(hero)
  return `${heroName}: ${quotes[heroNumber]}`
}

const quotes = ['WHERE IS SHE?!', 'Holy haberdashery, Batman!', "Let's put a smile on that faaaceee!"]
getQuote(quotes, 'Rob1n') === 'Robin: Holy haberdashery, Batman!'
getQuote(quotes, 'Joke2') === "Joker: Let's put a smile on that faaaceee!"
getQuote(quotes, 'Batm0n') === 'Batman: WHERE IS SHE?!'
