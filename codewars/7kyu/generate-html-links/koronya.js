// [JS][7kyu] Generate HTML links
// generate-html-links
// https://www.codewars.com/kata/56896f078dcf3e886c000067/train/javascript

const generateMenu = (menuItems) => menuItems.map((item) => `<a href=\"${item.url}\">${item.text}</a>`).join('')

generateMenu([
  {
    url: 'http://www.google.com',
    text: '10^100',
  },
  {
    url: '#codewars',
    text: 'codewars',
  },
  {
    url: '#q',
    text: 'query',
  },
])
