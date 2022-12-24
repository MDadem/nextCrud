const mongoose  = require("mongoose");
const postSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageurl : String
})
export default mongoose.models.Post || mongoose.model('Post', postSchema)