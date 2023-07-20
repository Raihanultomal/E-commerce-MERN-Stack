//  amra server.js e app.user/app.get eivabe user korechi
// ekhane app nei tai amra router k import korechi
// ekhon app er jaygay userRouter use korlei hobe

const express = require('express');
const {
  getUsers,
  getUser,
  deleteUser,
} = require('../controllers/userController');
const userRouter = express.Router();

// nicher post request tar modde kichu logic use korechi
// kintu eta controller e thakar kotha
// karon amra MVC model use korte chacci
// tai logic gulo controller folder theke handle kora hobe

// userRouter.post('/profile', (req, res) => {
//   res.status(200).send({
//     message: 'This responds from POST....',
//   });
// });

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
