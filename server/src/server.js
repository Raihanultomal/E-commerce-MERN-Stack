const app = require('./app');
const connectDatabase = require('./config/db');

// secret file theke secret key import kora hoyeche
// ekhane kon port e run korbe server seta import kora hoyeche
const { serverPort } = require('./secret');
app.listen(serverPort, async () => {
  console.log(`server is running at http://localhost:${serverPort}`);
  await connectDatabase();
});
