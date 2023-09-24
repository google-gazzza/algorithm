// [JS][5kyu] Simple assembler interpreter
// simple-assembler-interpreter
// https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript

const simple_assembler = (program) => {
  const lines = program.map((line) => line.split(' '))
  const map = {}
  const linesLen = lines.length
  let index = 0
  while (index < linesLen) {
    const [command, register, value] = lines[index]
    switch (command) {
      case 'mov':
        map[register] = isNaN(value) ? map[value] : Number(value)
        break
      case 'inc':
        map[register] += 1
        break
      case 'dec':
        map[register] -= 1
        break
      case 'jnz':
        const checkVal = isNaN(register) ? map[register] : Number(register)
        const steps = isNaN(value) ? map[value] : Number(value)
        if (checkVal !== 0) {
          index += steps
          continue
        }
        break
    }
    index += 1
  }

  return map
}
