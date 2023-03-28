const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/The80iCafe', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex : true,
        });
        console.log('Thành công!!!');
    } catch (error) {
        console.log('Thử lại!!!');
    }   
}


module.exports = {
    connect
}