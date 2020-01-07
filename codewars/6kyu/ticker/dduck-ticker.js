// https://www.codewars.com/kata/ticker/train/javascript

const getTick = (text, width, tick, count = tick) => {
  if (count <= 0) {
    return text.slice(0, width);
  }
  return getTick(text.slice(1) + text[0], width, tick, count - 1);
};

const dduckTicker = (text, width, tick) => {
  text = (''.padStart(width) + text);
  const quotient = Math.floor((tick || 0) / text.length);
  return getTick(text, width, quotient === 0 ? tick : tick % text.length);
};

console.log(dduckTicker('Beautiful is better than ugly.', 10, 0), '          ');
console.log(dduckTicker('Beautiful is better than ugly.', 10, 5), '     Beaut');
console.log(dduckTicker('Beautiful is better than ugly.', 10, 30), 'than ugly.');
console.log(dduckTicker('Beautiful is better than ugly.', 10, 39), '.         ');
console.log(dduckTicker('Beautiful is better than ugly.', 10, 41), '         B');
console.log(dduckTicker('under off part! home! us', 18, 26219));
