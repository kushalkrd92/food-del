import express from 'express'
import cors from 'cors'
import { connnectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// app config
const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connnectDB()

// API endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter); 
app.use("/api/order", orderRouter);

app.get('/', (req, res) => {
  res.send("API Working")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

// mongodb+srv://kushalkrd92:Kushal926@cluster0.meqeb.mongodb.net/?