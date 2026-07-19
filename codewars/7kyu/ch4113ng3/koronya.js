// [JS][7kyu] Ch4113ng3
// ch4113ng3
// https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/javascript

const nerdify = (txt) => txt.replace(/a|A/g, '4').replace(/e|E/g, '3').replace(/l/g, '1')

nerdify('Fund4m3nt41s') === 'Fund4m3nt41s'
nerdify('Seven') === 'S3v3n'
nerdify('Los Angeles') === 'Los 4ng313s'
nerdify('Seoijselawuue') === 'S3oijs314wuu3'
