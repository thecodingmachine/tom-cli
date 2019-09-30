const shell = require('shelljs')
const _ = require('lodash')
const { info } = require('./../lib/log')

const boilerplateRepository = 'git@github.com:thecodingmachine/react-native-boilerplate.git'


module.exports = (name) => {
  const validName = _.camelCase(_.deburr(name))

  // Info
  info('Start creating a new project named ' + validName + ' ...')

  // Clone the boilerplate into valid project name
  const cloneCommand = 'git clone ' + boilerplateRepository + ' ' + validName
  shell.exec(cloneCommand)

  // Move into created project for following actions
  shell.cd(validName)

  // Create the configuration file
  shell.cp('App/Config/index.dev.js', 'App/Config/index.js')
}