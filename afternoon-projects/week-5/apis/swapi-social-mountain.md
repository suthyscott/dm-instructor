swapi.dev/api/people/4/

swapi.dev/api/planets/2

swapi.dev/api/starships/10

https://swapi.dev/api/people/2/, swapi.dev/api/species/2

swapi.dev/api/people/10 ("https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/")

swapi.dev/api/starships/?search=Millennium



Social Mountain

POST requires a text property in the body, but no queries or params. 

GET returns JSON

https://practiceapi.devmountain.com/api/posts?id=555

[200,409]

https://practiceapi.devmountain.com/api/posts/, {
    "text": "Scott Sutherland"
}


https://practiceapi.devmountain.com/api/posts?id=6827, {
    "text": "Blue"
}

https://practiceapi.devmountain.com/api/posts/filter?text=blue


application/json; charset=utf-8

409	
Request was missing req.query.id or req.body.text


Nothing happens because nothing's being done with the query in the backend. 