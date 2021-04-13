const url = "https://jsonplaceholder.typicode.com";

const btnClick = document.getElementById("btn-click");
const numClicks = document.getElementById("num-clicks");
const btnSlow = document.getElementById("btn-slow");
const content = document.getElementById("content");

let clicks = 0;
btnClick.onclick = () => numClicks.innerHTML = `Number of clicks: ${++clicks}`;

btnSlow.onclick = () => getUserInfo(1);

const getUserInfo = (id) => {
  request({ uri: `${url}/users?id=${id}` }, (err, res, body) => {
    if (err) {
      console.log(err);
    } else {
      const user = JSON.parse(body)[0];
      content.innerHTML += `<h3>User Info</h3><p>${user.email}</p>`;
      request({ uri: `${url}/posts?userId=${user.id}&_limit=3` }, (err, res, body) => {
        if (err) {
          console.log(err);
        } else {
          const posts = JSON.parse(body);
          posts.forEach(post => {
            request({ uri: `${url}/comments?postId=${post.id}&_limit=2` }, (err, res, body) => {
              if (err) {
                console.log(err);
              } else {
                const comments = JSON.parse(body);
                const html = comments.map(comment => 
                  `<p><span>${comment.email}</span>: ${comment.body}</p>`
                ).join('');
                content.innerHTML += `<div class="post"><h4>${post.title}</h4>${html}</div>`;
              }
            });
          });
        }
      });
    }
  });
}
