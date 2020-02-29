document.addEventListener("DOMContentLoaded", bindPostButton);


function bindPostButton() {
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        var req = new XMLHttpRequest();
        var nameLoad = document.getElementById("name").value;
        var emailLoad = document.getElementById("email").value;
        var phoneLoad = document.getElementById("phone").value;
        var messageLoad = document.getElementById("message").value;
        var reqURL = "http://httpbin.org/post";
        req.open("POST", reqURL, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                console.log(response);
                document.getElementById("postResult").textContent = response.data.slice(1,-1);
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("message").value = "";
            }
            else {
                console.log("Network Error: " + req.status + " (" + req.statusText + ")");
            }
        });
        var dataFormat = JSON.stringify(nameLoad + ", " + emailLoad + ", " + phoneLoad + ", " + messageLoad);
        req.send(dataFormat);
        event.preventDefault();
    });
}
