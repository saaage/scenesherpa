const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})
app.listen(port, console.log(`listening on port: ${port}`))
