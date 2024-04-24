const blogList = document.getElementById('blog-list');

function renderPosts() {
  blogList.innerHTML = '';
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <p><em>By ${post.username}</em></p>
    `;
    blogList.appendChild(postElement);
  });
}

renderPosts();

