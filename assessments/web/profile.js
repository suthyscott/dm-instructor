const favBtns = document.querySelectorAll('button')

for(let i = 0; i< favBtns.length; i++){
    favBtns[i].addEventListener('click', (e)=> {
        alert(`My favorite ${e.target.id} is ${e.target.value}`)
    })
}