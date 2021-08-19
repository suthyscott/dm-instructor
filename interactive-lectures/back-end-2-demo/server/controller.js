const movies = require('./db.json')

let globalId = movies[movies.length-1].id

module.exports = {
    getAllMovies: function(req, res) {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        let index = movies.findIndex(elem => elem.id === +req.params.movieId)
        movies.splice(index,1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        let {title, rating, imageURL} = req.body
        let newMovie = {
            // id: movies[movies.length-1].id + 1,
            id: globalId,
            title: title, 
            rating,
            imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
        globalId++
    },
    updateMovie: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
    
        let index = movies.findIndex(elem => elem.id === +id)
        console.log(id, type, index)
    
        if(movies[index].rating === 5 && type === 'plus'){
          res.status(400).send("No can do, already maxed out")
        }
        else if (movies[index].rating === 0 && type === "minus"){
          res.status(400).send("Can't go lower than that")
        }
        else if (type === 'plus'){
          movies[index].rating++
          res.status(200).send(movies)
        }
        else if (type === 'minus'){
          movies[index].rating--
          res.status(200).send(movies)
        }
        else{
          res.status(400).send("Something went wrong.")
        }
      }

}