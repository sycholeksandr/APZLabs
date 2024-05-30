const app = require('./api/app.js');

const PORT = process.env.PROXY_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
