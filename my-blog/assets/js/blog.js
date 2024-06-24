document.addEventListener('DOMContentLoaded', () => {
  const blogPostsContainer = document.getElementById('blogPost');

  if (!blogPostsContainer) {
      console.error("Error: Blog posts container element ('blogPost') not found.");
      return;
  }

  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  blogPostsContainer.innerHTML = ""; // Clear previous content

  if (blogPosts.length === 0) {
      blogPostsContainer.innerHTML = '<p>No blog posts yet. Create one!</p>';
  } else {
      // Create a wrapper element (e.g., a <div>) to hold the blog posts
      const postsWrapper = document.createElement('div');
      
      blogPosts.forEach(post => {
          const postElement = document.createElement('article');
          postElement.classList.add('blog-post');
          // Create elements for title, content, author, and date
          const titleElement = document.createElement('h2');
          const contentElement = document.createElement('p');
          const metaElement = document.createElement('p'); 
          metaElement.classList.add('post-meta'); 
          // Set content for each element
          titleElement.textContent = post.title;
          contentElement.textContent = post.content;
          metaElement.textContent = `Posted by: ${post.username} on ${post.date}`; // Include the date
          // Append elements to the postElement
          postElement.appendChild(titleElement);
          postElement.appendChild(metaElement); // Append the meta element with date
          postElement.appendChild(contentElement);
          // Append the post to the wrapper
          postsWrapper.appendChild(postElement);
      });
      // Append the wrapper to the container
      blogPostsContainer.appendChild(postsWrapper);
  }
});
