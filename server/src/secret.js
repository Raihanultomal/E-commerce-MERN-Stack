// kon port e run korbe seta .env theke import kora hoyeche
// er pore secret k export kora hoyeche jeno shob jayga theke use kora jay

require('dotenv').config();
const serverPort = process.env.SERVER_PORT || 6000;

const mongodbURL =
  process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/ecommerceMERN';

const defaultImagePath =
  process.env.DEFAULT_USER_IMAGE_PATH || 'public/images/users/default.png';

module.exports = { serverPort, mongodbURL, defaultImagePath };
