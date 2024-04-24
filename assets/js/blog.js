
// WHEN I view the main content, THEN I am presented with a list of blog posts that are pulled from localStorage.

const blogList = document.getElementById('blog-list');


function renderPosts() {
  
  blogList.innerHTML = '';  
  
  // Get saved blog posts from localStorage
  const posts = JSON.parse(localStorage.getItem('posts'));
  
  // Loop each post to display according to assigned elements

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

// Callback function to render posts 

renderPosts();

