const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

const app = express()

app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "PUT"],
  credentials: true
}))

app.use('/', router)

 app.listen(4444, () => {
  console.log('server is running on port 4444')
})