class EasyHTTP {
    // make an get request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
    // make an Http POST request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((resolve) => resolve.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
    // make a PUT request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((resolve) => resolve.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
    // make a DELETE request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((resolve) => resolve.json())
                .then((data) => resolve("Resource deleted."))
                .catch((err) => reject(err));
        });
    }
}
