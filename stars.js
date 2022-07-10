console.clear()

const charLength = 50
const lineLength = 10

for (let i = 0; i < lineLength; i++) {
  let lines = '| '

  for (let i = 0; i < charLength; i++) {
    randomNumber = Math.round(Math.random() * 3)
    currStr = ''

    if (randomNumber == 0) currStr = '*'
    else if (randomNumber > 0) currStr = ' '

    lines = lines + currStr
  }

  lines = lines + ' |'

  console.log(lines)
}