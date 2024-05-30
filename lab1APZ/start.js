//start.js
const sendResp = require('./server.js');

sendResp.listen(3000, () => {
    console.log('Server start at localhost:3000');
});
