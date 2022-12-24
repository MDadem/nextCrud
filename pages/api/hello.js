import connectDB from "../../utils/connectDB"
connectDB()
export default function handler(req, res) {
  res.status(200).json({ name: 'Cnx OK !' })
}
