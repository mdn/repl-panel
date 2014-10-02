window.addEventListener("message", function(event) {
  window.port = event.ports[0];
  window.port.onmessage = receive;
});

var request = document.getElementById("request");
var response = document.getElementById("response");

request.addEventListener("keyup", send, false);

function send(event) {
  if ((event.keyCode == 13) && (event.getModifierState("Control") == true)) {
    window.port.postMessage(JSON.parse(request.value));
  }
}

function receive(event) {
  response.textContent = JSON.stringify(event.data, undefined, 2);
}
