    let info = document.getElementById('infoOfPost');
    let searchId = new URLSearchParams(window.location.search);
    let urlId = searchId.get('postId');

    let baseUrl = 'https://jsonplaceholder.typicode.com'
    let postUrl = baseUrl + '/posts/' + urlId

    fetch(postUrl)
        .then(response => response.json())
        .then(post => {
            info.innerHTML = `
                <p>ID: ${post.id}</p>
                <p>Title: ${post.title}</p>
                <p>Body: ${post.body}</p>
                <hr>
            `;
        })

    let commentUrl = baseUrl + '/posts/' + urlId + '/comments'
    let commentDiv = document.getElementById('comment')
    fetch(commentUrl)
        .then(value => value.json())
        .then(value => {
            value.forEach(comment => {
                let comments = document.createElement('div');
                comments.classList.add('commentsDiv')
                comments.innerHTML = `
                <p>Id: ${comment.id}</p>
                <p>Name: ${comment.name}</p>
                <p>Email: ${comment.email}</p>
                <p>Body: ${comment.body}</p>
            `;
                commentDiv.appendChild(comments);
            });
        })
