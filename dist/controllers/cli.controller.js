"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CliController {
    process;
    constructor(process) {
        this.process = process;
    }
    static exec(process) {
        (new CliController(process)).cliExec();
    }
    cliExec() {
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
    version() {
        const packageJson = require('../../package.json');
        console.log(packageJson.version);
        this.process.exit(1);
    }
    help() {
        console.log('Usage: log-explorer [options] [command]');
        console.log('Options:');
        console.log('  -v, --version  output the version number');
        console.log('  -h, --help     output usage information');
        console.log('  -p, --port     specify the port number');
        this.process.exit(1);
    }
}
exports.default = CliController;
