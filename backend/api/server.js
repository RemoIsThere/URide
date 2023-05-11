const express = require('express');
const app = express();

const port = 3001;
const base = `${__dirname}/public`;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(`${base}/maps.html`);
});

app.get('/driver_list', (req, res) => {
  res.sendFile(`${base}/driver_list.html`);
});

app.get('/other_maps', (req, res) => {
  res.sendFile(`${base}/other_maps.html`);
});

app.get('/razor_pay/client/public/index', (req, res) => {
  res.sendFile(`${base}/razor_pay/client/public/index.html.html`);
});

app.get('*', (req, res) => {
  res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

