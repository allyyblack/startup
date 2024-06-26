const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('picklr-service/public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/connect', (_req, res) => {
  res.send(true);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('public/index.html', { root: 'picklr-service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});