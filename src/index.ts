#!/usr/bin/env node

import express, { Request, Response, NextFunction } from 'express';
import child_process from 'child_process';
import { validateServerPort } from './libs/helpers';
import apiRoutes from './routes/api';

const app = express();

app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  // return the views/index.html
  res.sendFile('index.html', { root: __dirname + '/../views' });
});

let port = 4321;
if (process.argv.includes('--port')) {
  const inx = process.argv.indexOf('--port') + 1;
  port = validateServerPort(process.argv[inx]);
}

app.listen(port, () => {
  const url = `http://localhost:${port}`;

  console.log(`Server started at ` + url);

  // opening the browser
  var start = (process.platform == 'darwin' ? 'open': process.platform == 'win32'? 'start': 'xdg-open');
  child_process.exec(start + ' ' + url);  
});