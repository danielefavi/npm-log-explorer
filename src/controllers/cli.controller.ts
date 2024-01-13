export default class CliController {
  private process: NodeJS.Process;
  
  constructor(process: NodeJS.Process) {
    this.process = process;
  }

  public static exec(process: NodeJS.Process) {
    (new CliController(process)).cliExec();
  }

  public cliExec() {
    const args = this.process.argv.slice(2);

    console.log(args);
    switch (args[0]) {
      case '-v':
      case '--version':
        this.version();
        break;
      case '-h':
      case '--help':
        this.help();
        break;
    }
  }

  public version() {
    const packageJson = require('../../package.json');
    console.log(packageJson.version);

    this.process.exit(1);
  }

  public help() {
    console.log('Usage: log-explorer [options] [command]');

    console.log('Options:');
    console.log('  -v, --version  output the version number');
    console.log('  -h, --help     output usage information');
    console.log('  -p, --port     specify the port number');

    this.process.exit(1);
  }

}