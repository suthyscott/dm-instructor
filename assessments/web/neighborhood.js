const restaurants = ["McDonalds", "Little Caesars", "Arctic Circle", "O'Reilly Auto Parts", "Porky's Kaua'i", "Zaperoco Food", "Cafe Namasthe", "Zao Asian Cafe"]

const showRestaurant = () => {
	console.log("hit")
	const randomElement = restaurants[Math.floor(Math.random() * restaurants.length)];

    const restaurantTitle = document.createElement('h3')
    restaurantTitle.innerText = randomElement
	let section = document.querySelector('section')
    section.appendChild(restaurantTitle)
}

const restaurantButton = document.querySelector('#restaurant-selector')

restaurantButton.addEventListener('click', showRestaurant)