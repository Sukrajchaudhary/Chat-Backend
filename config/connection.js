const { default: mongoose } = require('mongoose');
const moongose=require('mongoose');
exports.connectToDb=async()=>{
try {
 await mongoose.connect(process.env.MongooseURI);
 console.log('Database Connect SuccessFully')
} catch (error) {
    console.log(error.message)
}
}