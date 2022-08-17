class EasyHTTP {
    // make an get request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    // make an Http POST request
    async post(url, data) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const resData = await response.json();
            return resData;
        } catch (error) {
            return `Error`;
        }
    }
    // make a PUT request
    async put(url, data) {
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const resData = await response.json();
            return resData;
        } catch (err) {
            return err;
        }
    }
    // make a DELETE request
    async delete(url) {
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
            });
            const resData = "Resource Deleted";
            return resData;
        } catch (err) {
            return err;
        }
    }
}
