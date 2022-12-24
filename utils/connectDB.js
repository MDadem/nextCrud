const mongoose  = require ('mongoose')
async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://MDadem:55366059MDadem@cluster0.nutebtm.mongodb.net/nextcrud',{useUnifiedTopology : true , useNewUrlParser : true })
        console.log('Cnx Success')
    } catch (error) {//mongodb+srv://MDadem:55366059MDadem@cluster0.kyruyot.mongodb.net/test

        console.log(error)
    }
}
export default connectDB