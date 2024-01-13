
export function validateServerPort(port: any): number {
  if (typeof port === 'undefined') {
    console.error('Error: --port requires a port number');
    process.exit(1);
  }

  port = parseInt(port);

  if (isNaN(port)) {
    console.error('Error: --port is not a valid number');
    process.exit(1);
  } else if (port < 0 || port > 65535) {
    console.error('Error: --port is not a valid port number: the port should be port > 0 and port < 65535');
    process.exit(1);
  }

  return port;
}

export function getPort(): number {
  let port = 4321;
  let inx = null;

  if (process.argv.includes('--port')) {
    inx = process.argv.indexOf('--port') + 1;
  } else if (process.argv.includes('-p')) {
    inx = process.argv.indexOf('-p') + 1;
  }

  if (inx !== null) {
    port = validateServerPort(process.argv[inx]);
  }
  
  return port;
}