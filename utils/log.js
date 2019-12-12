import chalk from 'chalk';

export default {
  success(msg) {
    console.log(chalk.green(`>> ${msg}`));
  },
  error(msg) {
    console.log(chalk.red(`>> ${msg}`));
  }
}