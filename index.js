    let mainDiv = document.createElement('div')
    document.body.appendChild(mainDiv)
    mainDiv.classList.add('main')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((value) => value.json())
        .then((users) => {
            console.log(users);
            for (const {id, name} of users) {
                let createDiv = document.createElement('div')
                createDiv.innerText = `${id} ${name}`
                createDiv.classList.add('userDiv')
                let createButton = document.createElement('button')
                createButton.innerText = 'More information'
                createButton.addEventListener( 'click', () =>{
                    window.open(`user-details.html?id=${id}`)
                })

                createDiv.appendChild(createButton)
                mainDiv.appendChild(createDiv)

            createDiv.classList.add('user')
                createButton.classList.add('userButton')
            }
        })
