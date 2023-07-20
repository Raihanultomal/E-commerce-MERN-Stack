const createError = require('http-errors');
// const User = require('../models/userModel');
const mongoose = require('mongoose'); // mongoose error handle korar jonne import kora hoyeche

const findWithId = async (Model, id, options = {}) => {
  try {
    const item = await Model.findById(id, options);

    if (!item) {
      throw createError(404, `${Model.modelName} dose not exist with this id`);
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
