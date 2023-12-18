function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      const postContainer = document.getElementById("postContainer");
      postContainer.innerHTML = ''; 

      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
          <p>ID: ${post.id}</p>
          <p>Title: ${post.title}</p>
          <hr>
        `;
        postContainer.appendChild(postElement);
      });
    })
    .catch((error) => {
      console.error('Ошибка при загрузке данных:', error);
    });
}

function filterPosts() {
  const filterValue = document.getElementById("filterInput").value.toLowerCase();
  const posts = document.getElementById("postContainer").querySelectorAll("div");

  posts.forEach((post) => {
    const title = post.querySelector("p:nth-child(2)").textContent.toLowerCase();
    if (title.includes(filterValue)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", fetchPosts);
	