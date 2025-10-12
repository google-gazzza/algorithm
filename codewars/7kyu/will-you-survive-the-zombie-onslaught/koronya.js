// [JS][7kyu] Will you survive the zombie onslaught?
// will-you-survive-the-zombie-onslaught
// https://www.codewars.com/kata/5deeb1cc0d5bc9000f70aa74/train/javascript

const zombieShootout = (zombies, range, ammo) => {
  let shot = 0
  while (zombies > 0 && range > 0 && ammo > 0) {
    zombies -= 1
    range -= 0.5
    ammo -= 1
    shot += 1
  }

  return zombies === 0
    ? `You shot all ${shot} zombies.`
    : range === 0
    ? `You shot ${shot} zombies before being eaten: overwhelmed.`
    : `You shot ${shot} zombies before being eaten: ran out of ammo.`
}

zombieShootout(3, 10, 10) === 'You shot all 3 zombies.'
zombieShootout(100, 8, 200) === 'You shot 16 zombies before being eaten: overwhelmed.'
zombieShootout(50, 10, 8) === 'You shot 8 zombies before being eaten: ran out of ammo.'
