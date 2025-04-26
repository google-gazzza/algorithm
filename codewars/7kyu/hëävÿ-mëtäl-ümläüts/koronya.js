// [JS][7kyu] Hëävÿ Mëtäl Ümläüts
// hëävÿ-mëtäl-ümläüts
// https://www.codewars.com/kata/57d4e99bec16701a67000033/train/javascript

const convertMap = new Map([
  ['a', 'ä'],
  ['A', 'Ä'],
  ['e', 'ë'],
  ['E', 'Ë'],
  ['i', 'ï'],
  ['I', 'Ï'],
  ['o', 'ö'],
  ['O', 'Ö'],
  ['u', 'ü'],
  ['U', 'Ü'],
  ['Y', 'Ÿ'],
  ['y', 'ÿ'],
])

const heavyMetalUmlauts = (boringText) =>
  boringText
    .split('')
    .map((char) => convertMap.get(char) || char)
    .join('')

heavyMetalUmlauts('Announcing the Macbook Air Guitar') === 'Ännöüncïng thë Mäcböök Äïr Güïtär'
heavyMetalUmlauts('Facebook introduces new heavy metal reaction buttons') === 'Fäcëböök ïntrödücës nëw hëävÿ mëtäl rëäctïön büttöns'
heavyMetalUmlauts("Strong sales of Google's VR Metalheadsets send tech stock prices soaring") ===
  "Ströng sälës öf Gööglë's VR Mëtälhëädsëts sënd tëch stöck prïcës söärïng"
heavyMetalUmlauts('Vegan Black Metal Chef hits the big time on Amazon TV') === 'Vëgän Bläck Mëtäl Chëf hïts thë bïg tïmë ön Ämäzön TV'
