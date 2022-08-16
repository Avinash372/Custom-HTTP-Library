const http = new EasyHTTP();
// GET Users

http.get("https://jsonplaceholder.typicode.com/users")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// POST DATA

let data = {
    name: "AVIANSH",
    age: 29,
    location: "Rajim",
};

http.post("https://jsonplaceholder.typicode.com/users", data)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// PUT DATA
data.email = "avi37sahu@gmail.com";

http.put("https://jsonplaceholder.typicode.com/users/1", data)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// DELETE Data

http.delete("https://jsonplaceholder.typicode.com/users/1")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
