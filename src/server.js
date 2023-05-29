const express = require('express')

const app = express()
const port = 8080
// Greetings
app.get('', (req, res) => {
  res.send('Greetings 🤓🖐')
})

app.listen(port, () => {
  console.log(`Escuchando desde el puerto ${port}`)
})
