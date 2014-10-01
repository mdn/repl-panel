This add-on lets you send [remote debugging protocol](https://wiki.mozilla.org/Remote_Debugging_Protocol) requests to the debugging server, and displays the response.

To use it, just type the JSON message into the textbox and hit Ctrl+Enter. If the JSON is bad, it displays the JSON error in red. Otherwise it sends the request to the server and displays both request and response.

For example, try:

    {}
  
or:

    {
      "to": "root",
      "type": "listTabs"
    }

