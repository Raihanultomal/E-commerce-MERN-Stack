const createError = require('http-errors');
const User = require('../models/userModel');
const { successResponse } = require('./responseController');
const mongoose = require('mongoose');
const getUsers = async (req, res, next) => {
  try {
    // kew search dile sei value ta nibe
    // default hisebe '' rakha thakbe
    const search = req.query.search || '';

    // kono page number diye search korle...
    const page = Number(req.query.page) || 1;

    // ekta page e maximum koto users dekhabe...
    const limit = Number(req.query.limit) || 5;

    //  search korar shomoy regular expression method folllow korbo
    // ekhane kei key word diye search dea hoise seta karo sathe millei result dekhabe
    // age piche shob kichu .* diye trim kora hoyeche
    const searchRegExp = new RegExp('.*' + search + '.*', 'i');

    // admin jokhn users search dibe tokhn only users kei pabe
    // admin , admin der k dekhte chaibe na
    // tai nicher funtion use kora hoyeche
    // er pore name,email,phone er jonne regular expression er maddhome filter kora hobe
    // orthat name,email,phn diye search dite parbo
    const filter = {
      isAdmin: { $ne: true },

      $or: [
        { name: { $regex: searchRegExp } },
        { email: { $regex: searchRegExp } },
        { phone: { $regex: searchRegExp } },
      ],
    };

    const options = { password: 0 }; // password admin dekhte chacce na / dekhano dorkr nei

    const users = await User.find(filter, options)
      .limit(limit) // paginationa kora hoyeche
      .skip((page - 1) * limit);

    const count = await User.find(filter).countDocuments();
    if (!users) throw createError(404, 'no users found'); // error handle kora holo, jodi search kore kono user found na hoy se khetre ki hobe setar jonne
    // res.status(200).send({
    //   message: 'Users Id showing bellow',
    //   users,
    //   pagination: {
    //     totalPages: Math.ceil(count / limit),
    //     currentPage: page,
    //     previousPage: page - 1 > 0 ? page - 1 : null,
    //     nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
    //   },
    // });
    return successResponse(res, {
      statusCode: 200,
      message: 'Users Id showing bellow',
      payload: {
        users,
        pagination: {
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          previousPage: page - 1 > 0 ? page - 1 : null,
          nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// single user ber korar jonne route-controller likha hocce

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const options = { password: 0 };
    const user = await User.findById(id, options);

    if (!user) {
      throw createError(404, 'no user found');
    } // error handle kora holo, jodi search kore kono user found na hoy se khetre ki hobe setar jonne

    return successResponse(res, {
      statusCode: 200,
      message: 'Single user Id showing bellow',
      payload: { user },
    });
  } catch (error) {
    if (error instanceof mongoose.Error) {
      next(createError(400, 'Invalide User Id'));
      return;
    }
    next(error);
  }
};

module.exports = { getUsers, getUser };
