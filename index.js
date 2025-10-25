// Write your code here!
/**Fetch Data from an API**
   - Using the fetch method fetch to https://jsonplaceholder.typicode.com/posts

3. **Display Posts**
   - Create Function to Display Posts called `displayPosts()` 
      - Pass in the array of posts
      - Loop through the posts list, in the loop:
         - Create an `li` element
         - Create an `h1` element 
            - Set textContent to the title of the post
         - Create an `p` element
            - Set textContent to the body of the post         
         - Append h1 and p to li
         - Append li to the ul
            - ul has an id of `post-list`   
   - Call `displayPosts()` after fetch

4. **Refactor with Async/Await**
   - Create function to house fetch and apply async to function
   - Apply await to fetch*/
   
async function fetchPosts() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   const posts = await response.json();
   displayPosts(posts);
}   

function displayPosts(posts) {
   const postList = document.getElementById('post-list');
   posts.forEach(post => {
      const li = document.createElement('li');
      const h1 = document.createElement('h1');
      h1.textContent = post.title;
      const p = document.createElement('p');
      p.textContent = post.body;
      li.appendChild(h1);
      li.appendChild(p);
      postList.appendChild(li);
   });
}

fetchPosts();


