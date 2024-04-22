// script.js
document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blog-list');
  
    // Fetch posts from JSON Server
    axios.get('http://localhost:3000/posts')
      .then(response => {
        const posts = response.data;
        // Iterate over each post and create list items
        posts.forEach(post => {
          const li = document.createElement('li');
          li.innerHTML = ` <div class="card" style="width: 18rem;">
            <img src="${post.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.content}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
          blogList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  });
  