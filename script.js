const container = document.getElementById('astros')

fetch('http://api.open-notify.org/astros.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status ${response.status}`)
        }
        return response.json()
    })
    .then((data) => {
        console.log(data)

        // Update the DOM with the information from the API
        container.innerHTML = `<h1>There are ${data.number} people in space right now</h1>`

        data.people.forEach((person) => {
            container.innerHTML += `<p>${person.name} is on the ${person.craft}</p>`
        })
    })
    .catch((error) => {
        console.log('Fetch error:', error)
        container.innerHTML = `<p>Ett fel uppstod: ${error.message}</p>`
    })
