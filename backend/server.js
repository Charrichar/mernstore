import dotenv from 'dotenv'
import express from'express'
import connectDB from './config/db.js'
import products from './data/products.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()


connectDB()

console.log(process.env.PORT)

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)


app.get('/api/products', (req, res) => {
    res.json(products)
})

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Running on port ${PORT}`))