const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./controller')
// console.log(ctrl.getMovies)

app.get(`/api/movies`, ctrl.getMovies)
app.delete('/api/movies/:id', ctrl.deleteMovie)
app.post('/api/movies', ctrl.createMovie)
app.put('/api/movies/:id', ctrl.updateMovie)

app.listen(4004, () => console.log(`Take us to warp 4004!`))