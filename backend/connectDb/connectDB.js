const mongoose=require('mongoose')
const connectDb=async()=>  
{
    await mongoose.connect('mongodb://localhost/mypractice', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>
      console.log("hello Abdullah ,I am from database ....I connected succesfully.thanks"))
}
module.exports=connectDb