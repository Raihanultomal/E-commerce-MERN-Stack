const createError = require('http-errors');
const User = require('../models/userModel');
const mongoose = require('mongoose'); // mongoose error handle korar jonne import kora hoyeche

const findWithId = async (id, options = {}) => {
  try {
    const item = await User.findById(id, options);

    if (!item) {
      throw createError(404, 'no item found');
    } // error handle kora holo, jodi search kore kono user found na hoy se khetre ki hobe setar jonne
    return item;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      throw createError(400, 'Invalide item Id');
    }
    throw error;
  }
};

module.exports = { findWithId };
