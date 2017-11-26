const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '/')))
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.listen(port)
