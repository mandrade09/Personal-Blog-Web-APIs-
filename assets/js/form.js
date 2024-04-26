
// WHEN I submit the form, THEN blog post data is stored to localStorage.


const blogForm = document.getElementById('blog-form');


blogForm.addEventListener('submit', function(event) {

  event.preventDefault(); 

  // Get form input value

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

// WHEN I enter try to submit a form without a username, title, or content, THEN I am presented with a message that prompts me to complete the form.

  if (!username || !title || !content) {
    alert('Please complete form');
    return;
  }

// new object for blog post with values 

  const post = {
    username,
    title,
    content
  };

  // blog post data is stored to localStorage
  
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  
  posts.push(post);
  
  localStorage.setItem('posts', JSON.stringify(posts));

  window.location.href = 'blog.html';

});

