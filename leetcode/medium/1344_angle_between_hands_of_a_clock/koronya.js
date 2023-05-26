// [Medium] 1344. Angle Between Hands of a Clock
// 1344_angle_between_hands_of_a_clock

// https://leetcode.com/problems/angle-between-hands-of-a-clock
// Runtime: 68 ms, faster than 93.88% of JavaScript online submissions for Angle Between Hands of a Clock.
// Memory Usage: 36.1 MB, less than 96.94% of JavaScript online submissions for Angle Between Hands of a Clock.

const MINUTES_OF_HOUR = 60 
const DEGREE_OF_CIRCLE = 360
const DEGREE_OF_ONE_HOUR_WITH_HOUR_HAND = DEGREE_OF_CIRCLE / 12
const DEGREE_OF_ONE_MINUTE_WITH_MINUTE_HAND = DEGREE_OF_ONE_HOUR_WITH_HOUR_HAND / 60

const getMinuteDegree = minutes => (DEGREE_OF_CIRCLE / MINUTES_OF_HOUR) * minutes

const getHourDegree = (hour, minutes) => {
  const adjustHour = hour === 12 ? 0 : hour
  return DEGREE_OF_ONE_HOUR_WITH_HOUR_HAND * adjustHour + DEGREE_OF_ONE_MINUTE_WITH_MINUTE_HAND * minutes
}

const angleClock = (hour, minutes) => {
  const m = getMinuteDegree(minutes)
  const h = getHourDegree(hour, minutes)
  const result = Math.abs(m - h)

  return result <= 180 ? result : DEGREE_OF_CIRCLE - result
}
