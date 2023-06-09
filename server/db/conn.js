const mongoose = require('mongoose');
const Db = process.env.DATABASE;
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => {
    console.log(err.message);
  });
