const log = console.log
const chalk = require('chalk')

const info = (message) => {
  return log(chalk.blue(message))
}

module.exports = {
  info,
}