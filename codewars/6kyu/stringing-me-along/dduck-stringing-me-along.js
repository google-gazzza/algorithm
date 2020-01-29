// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e

const createMessage = (s, res = '') => (s ? (newStr) => createMessage(newStr, `${res} ${s}`) : res.slice(1));


const t1 = createMessage('Hello')('World!')('how')('are')('you?')();
const t2 = 'Hello World! how are you?';
console.log(t1 === t2);
