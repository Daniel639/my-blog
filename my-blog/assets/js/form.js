document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#blogform');
    const username = document.querySelector('#username');
    const title = document.querySelector('#blogTitle');
    const content = document.querySelector('#blogContent');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Create a blog post object
        const blogPost = {
            username: username.value,
            title: title.value,
            content: content.value,
            date: new Intl.DateTimeFormat('en-US',{
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }) .format(new Date())
        };

        // Retrieve the list of blog posts from localStorage
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        // Add the new blog post to the array
        blogPosts.push(blogPost);

        // Store the updated array back in localStorage
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // Redirect to blog.html
        window.location.href = 'blog.html';
    });
});
