// [JS][7kyu] Covfefe
// covfefe
// https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/train/javascript

const covfefe = (str) => {
  const replaceStr = str.replace(/coverage/g, 'covfefe')
  return str.includes('coverage') ? replaceStr : `${replaceStr} covfefe`
}

covfefe('coverage') === 'covfefe'
covfefe('coverage coverage') === 'covfefe covfefe'
covfefe('nothing') === 'nothing covfefe'
covfefe('double space ') === 'double space  covfefe'
covfefe('covfefe') === 'covfefe covfefe'
covfefe('erag') === 'erag covfefe'
