import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import cors from 'cors';

import App from '../components/App';

const server = express();
server.use(express.static(path.resolve(__dirname, '../../dist')));
server.use('/img', express.static(path.resolve(__dirname, '../images')));

server.use(cors());

server.get('/*', (req, res) => {
  const context = {};
  const initialMarkupHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  return res.send(`<!DOCTYPE html>
                          <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <title>React App</title>
                                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                                <link rel="icon" href="/img/icons/react-logo.ico" type="image/x-icon" />
                            <link href="/main.css" rel="stylesheet"></head>
                            <body>
                                <div id="root">${initialMarkupHtml}</div>
                            <script src="/main.js"></script></body>
                          </html>`);
});

server.listen(80, () => {
  console.info(`[SERVER] Server is listening on port ${80}`);
});
