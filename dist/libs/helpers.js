"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateServerPort = void 0;
function validateServerPort(port) {
    if (typeof port === 'undefined') {
        console.error('Error: --port requires a port number');
        process.exit(1);
    }
    port = parseInt(port);
    if (isNaN(port)) {
        console.error('Error: --port is not a valid number');
        process.exit(1);
    }
    else if (port < 0 || port > 65535) {
        console.error('Error: --port is not a valid port number: the port should be port > 0 and port < 65535');
        process.exit(1);
    }
    return port;
}
exports.validateServerPort = validateServerPort;
