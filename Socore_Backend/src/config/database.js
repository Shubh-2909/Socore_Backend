import mongoose from "mongoose";

// In es6 moduling , we can use the 'export' keyword right before the function also.
export const connect = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/twitter_dev');
}

// module.exports = connect;