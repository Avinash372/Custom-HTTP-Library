const http = new easyHTTP();
// GET
http.get("https://jsonplaceholder.typicode.com/posts/", (error, posts) => {
    if (error) console.log(error);
    else console.table(posts);
});
// POST

const data = {
    title: "Avinash",
    body: "Avinash is becoming the greatest developer",
};

http.post(
    "https://jsonplaceholder.typicode.com/posts",
    data,
    (error, posts) => {
        if (error) console.log(error);
        else console.table(posts);
    }
);

// PUT
data.title = "Avinash's legacy";
http.put(
    "https://jsonplaceholder.typicode.com/posts/12",
    data,
    (error, posts) => {
        if (error) console.log(error);
        else console.table(posts);
    }
);

// DELETE
http.delete(
    "https://jsonplaceholder.typicode.com/posts/12",
    data,
    (error, response) => {
        if (error) console.log(error);
        else console.table(response);
    }
);
