// [JS][8kyu] Thinkful - Logic Drills: Traffic light
// thinkful-logic-drills-traffic-light
// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

const TRAFFIC_LIGHTS_ORDER = ['green', 'yellow', 'red']

const updateLight = (current) => {
  const currentIndex = TRAFFIC_LIGHTS_ORDER.indexOf(current)
  const nextIndex = (currentIndex + 1) % TRAFFIC_LIGHTS_ORDER.length
  return TRAFFIC_LIGHTS_ORDER[nextIndex]
}

updateLight('green') === 'yellow'
updateLight('yellow') === 'red'
updateLight('red') === 'green'
