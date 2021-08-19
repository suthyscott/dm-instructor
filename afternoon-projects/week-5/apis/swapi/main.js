const residentsButton = document.querySelector('#residents-button')
const div = document.querySelector('div')

const buttonClick = () => {
    axios.get('https://swapi.dev/api/planets/2')
        .then(res => {
            console.log(res.data.residents)
            for(let i = 0; i < res.data.residents.length; i++){
                axios.get(res.data.residents[i])
                    .then(personRes => {
                        console.log('hi', personRes)
                        let person = document.createElement("h2")
                        person.innerText = personRes.data.name
                        div.append(person)
                    })
            }
        })
}

residentsButton.addEventListener("click", buttonClick)