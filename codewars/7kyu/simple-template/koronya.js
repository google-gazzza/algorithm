// [JS][7kyu] Simple template
// simple-template
// https://www.codewars.com/kata/56ae72854d005c7447000023/train/javascript

function createTemplate(template) {
  return (data) => template.replace(/{{\s*([^}]+)\s*}}/g, (_, key) => data[key] ?? '')
}

const tmpl = '{{firstName}} {{lastName}} likes {{interests}}'

const personStore = [
  {
    firstName: 'John',
    lastName: 'Smith',
    interests: 'sport',
  },
  {
    firstName: 'Albert',
    lastName: 'Einstein',
    occupation: 'physicist',
  },
]

createTemplate(tmpl)(personStore[0])
createTemplate(tmpl)(personStore[1])
