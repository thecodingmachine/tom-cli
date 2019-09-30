const shell = require('shelljs')
const chalk = require('chalk')
const log = console.log


module.exports = (name) => {
    log(chalk.blue('Start creating a new project named "'), chalk.blueBright.bold(name), chalk.blue('" ...'))
    shell.exec('git clone ')
}