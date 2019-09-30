// Defaults import
const commander = require('commander')
const { version } = require('./package')


// Actions import
const newAction = require('./actions/new')

// Initialize a new program
const program = new commander.Command()

program
  .version(version)

program
  .command('new')
  .alias('n')
  .arguments('<name>')
  .description('Create a new project from TheCodingMachine React-Native Boilerplate')
  .action(newAction)

program
  .command('*')
  .action(() => program.help())

program.parse(process.argv)
