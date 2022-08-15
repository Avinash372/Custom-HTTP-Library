const http = new easyHTTP();

http.get("https://jsonplaceholder.typicode.com/posts", (error, posts) => {
    if (error) console.log(error);
    else console.log(posts);
});
