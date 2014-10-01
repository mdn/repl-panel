window.addEventListener("message", event => {
  window.port = event.ports[0];
  window.port.onmessage = receive;
});

var request = document.getElementById("request");
var lastRequest = document.getElementById("last-request");
var JSONError = document.getElementById("json-error");
var response = document.getElementById("response");

request.addEventListener("keyup", send, false);

function send(event) {
  if ((event.keyCode == 13) && (event.getModifierState("Control") == true)) {
    JSONError.textContent = "";
    lastRequest.textContent = "";
    response.textContent = "";

    try {
        var requestContent = JSON.parse(request.value);
        window.port.postMessage(requestContent);
        lastRequest.textContent = JSON.stringify(requestContent, undefined, 2);
        request.value = "";
    }
    catch (exception) {
        JSONError.textContent = exception.message;
    }
  }
}

function receive(event) {
  response.textContent = JSON.stringify(event.data, undefined, 2);
}
