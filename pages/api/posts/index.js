import connectDB from "../../../utils/connectDB"
import nc from "next-connect"
import Post from "../../../models/Post"
connectDB()

const handler = nc().post(async(req, res)=>{
    const {title, description, imageurl} = req.body

        try {
            const newpost = new Post ({title, description, imageurl})
            await newpost.save()
            res.send('Post added successfuly ')
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: 'something went wrong'})            
        }
}).get((async(req, res)=>{
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        return res.status(400).json({message:'Something went wrong'})
    }
}))

export default handler