This add-on lets you send [remote debugging protocol](https://wiki.mozilla.org/Remote_Debugging_Protocol) requests to the debugging server, and displays the response.

To use it, just type the JSON message into the textbox and hit Ctrl+Enter. The response is displayed on the right-hand side.

For example, try:

    {}
  
or:

    {
      "to": "root",
      "type": "listTabs"
    }

To learn more about how this add-on works see the tutorial at: [https://developer.mozilla.org/en-US/docs/Tools/Adding_a_panel_to_the_toolbox](https://developer.mozilla.org/en-US/docs/Tools/Adding_a_panel_to_the_toolbox).
