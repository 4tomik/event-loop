const url = "https://jsonplaceholder.typicode.com";

const btnClick = document.getElementById("btn-click");
const numClicks = document.getElementById("num-clicks");
const btnSlow = document.getElementById("btn-slow");
const content = document.getElementById("content");

let clicks = 0;
btnClick.onclick = () => numClicks.innerHTML = `Number of clicks: ${++clicks}`;

btnSlow.onclick = () => getUserInfo(1);

// const getUserInfo = async (id) => {
//   try {
//     let res = await fetch(`${url}/users?id=${id}`);
//     const user = (await res.json())[0];
//     content.innerHTML += `<h3>User Info</h3><p>${user.email}</p>`;

//     res = await fetch(`${url}/posts?userId=${id}&_limit=3`);
//     const posts = await res.json();
//     content.innerHTML += posts.map(post => 
//       `<div class="post"><h4>${post.title}</h4></div>`
//     ).join('');

//     res = await Promise.all(posts.map(post =>
//       fetch(`${url}/comments?postId=${post.id}&_limit=2`)
//     ));
//     const comments = await Promise.all(res.map(r => r.json()));
//     document.querySelectorAll('.post').forEach((post, i) => {
//       post.innerHTML += comments[i].map(comment => 
//         `<p><span>${comment.email}</span>: ${comment.body}</p>`
//       ).join('');
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

const getUser = async (id) => {
  const res = await fetch(`${url}/users?id=${id}`);
  const user = (await res.json())[0];
  content.innerHTML += `<h3>User Info</h3><p>${user.email}</p>`;

  return user;
}

const getPosts = async (user) => {
  const res = await fetch(`${url}/posts?userId=${user.id}&_limit=3`)
  const posts = await res.json();
  content.innerHTML += posts.map(post =>
    `<div class="post"><h4>${post.title}</h4></div>`  
  ).join('')

  return posts;
}

const getComments = async (posts) => {
  const res = await Promise.all(posts.map(post => 
    fetch(`${url}/comments?postId=${post.id}&_limit=2`)  
  ))
  const comments = await Promise.all(res.map(r => r.json()))
  document.querySelectorAll(".post").forEach((div, i) => {
    div.innerHTML += comments[i].map(comment =>
      `<p><span>${comment.email}</span>: ${comment.body}</p>`  
    ).join('')
  })
}

const getUserInfo = async (id) => {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user);
    const comments = await getComments(posts);
  } catch (err) {
    console.log(err);
  }
}
