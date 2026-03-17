// [JS][8kyu] Are there any arrows left?
// are-there-any-arrows-left
// https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript

const anyArrows = (arrows) => arrows.some((arrow) => !arrow.damaged)

anyArrows([]) === false
anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }]) === true
anyArrows([{ range: 10, damaged: true }, { damaged: true }]) === false
