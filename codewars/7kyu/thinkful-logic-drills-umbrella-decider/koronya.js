// [JS][7kyu] Thinkful - Logic Drills: Umbrella decider
// thinkful-logic-drills-umbrella-decider
// https://www.codewars.com/kata/5865a28fa5f191d35f0000f8/train/javascript

const takeUmbrella = (weather, chance) => weather === 'rainy' || (weather !== 'sunny' && chance > +0.2) || (weather === 'sunny' && chance > +0.5)

takeUmbrella('sunny', 0.4) === false
takeUmbrella('rainy', 0) === true
takeUmbrella('cloudy', 0.2) === false
