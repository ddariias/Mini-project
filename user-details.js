    let div = document.getElementById('blocDiv')
    let searchId = new URLSearchParams (window.location.search)
    let urlId = searchId.get('id')

    fetch(`https://jsonplaceholder.typicode.com/users/${urlId}`)
        .then(value => value.json())
        .then(value => {

            div.innerHTML = `<p>ID: ${value.id}</p>
                                <p>Name: ${value.name}</p>
                                <p>Username: ${value.username}</p>
                                <p>Email: ${value.email}</p>
                                <p>Address: ${value.address.street}, ${value.address.suite}, ${value.address.city}, ${value.address.zipcode}, ${value.address.geo.lat}, ${value.address.geo.lng}</p>
                                <p>Phone: ${value.phone}</p>
                                <p>Website: ${value.website}</p>
                                <p>Company: ${value.company.name},${value.company.catchPhrase}${value.company.bs}</p>`

            document.div.appendChild(div)
        })

    let buttonNew = document.getElementById('button')
    let post = document.getElementById('blocPost')
    let mainPost = document.getElementById('post')

    buttonNew.addEventListener('click', function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${urlId}/posts`)
            .then(value => value.json())
            .then(value => {
                value.forEach(posts => {
                    let postElement = document.createElement('div');
                    postElement.innerText = `Title: ${posts.title}`;
                    postElement.innerHTML += `<br>`
                    let newButton = document.createElement('button')
                    newButton.textContent = 'info about this post'
                    newButton.addEventListener('click', () => {
                        window.open(`post-details.html?postId=${posts.id}`);
                    });

                    post.appendChild(postElement);
                    postElement.appendChild(newButton)
                    newButton.classList.add('buttonInfo')
                    postElement.classList.add('postDiv')
                });

                mainPost.appendChild(post)

            });
    })