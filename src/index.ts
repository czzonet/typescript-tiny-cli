import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>>> '
})

rl.prompt()

rl.on('line', (line) => {
  console.log('your input: ', line);
  rl.prompt()
}).on('close', () => {
  console.log('bye');
  process.exit(0)
})