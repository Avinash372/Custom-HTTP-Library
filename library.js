function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
    this.http.open("GET", url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, JSON.parse(self.http.responseText));
        } else {
            callback("Error " + self.http.status);
        }
    };
    this.http.send();
};
// make an HTTP POST Request

// make an HTTP PUT Request

// make an HTTP DELETE Request
