This add-on lets you send [remote debugging protocol](https://wiki.mozilla.org/Remote_Debugging_Protocol) requests to the debugging server, and displays the response.

To use it, just type the JSON message into the textbox and hit Ctrl+Enter. The response is displayed on the right-hand side.

For example, try:

    {}
  
or:

    {
      "to": "root",
      "type": "listTabs"
    }

