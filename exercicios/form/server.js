const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
// vair converter e criar uma objeto com os dados do form

app.post('/usuarios', (req, resp) => {
  console.log(req.body)
  resp.send('usuario cadastrado!!!')
})
app.post('/usuarios/:id', (req, resp) => {
  console.log(req.params.id)
  resp.send('usuario alterado!!!')
})

app.listen(3003)
