import 'dotenv/config'
import app from './app.js'
import connectDb from './src/db/index.js'


const port = process.env.PORT

connectDb(process.env.MONGODB_URL).then((res) => {
    app.listen(port , () => {
        console.log(`server is running on port ${port}`)
    })
})

