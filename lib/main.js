
// require the SDK modules
const { Panel } = require("dev/panel");
const { Tool } = require("dev/toolbox");
const { Class } = require("sdk/core/heritage");
const self = require("sdk/self");

// define a REPLPanel class
// that inherits from dev/panel
const REPLPanel = Class({
  extends: Panel,
  label: "REPL",
  tooltip: "Firefox debugging protocol REPL",
  icon: self.data.url("plane_64.png"),
  url: self.data.url("repl-panel.html"),
  // when the panel is created,
  // take a reference to the debuggee
  setup: function(options) {
    this.debuggee = options.debuggee;
  },
  dispose: function() {
    this.debuggee = null;
  },
  // when the panel's script is ready,
  // send it a message containing
  // the debuggee
  onReady: function() {
    this.debuggee.start();
    this.postMessage("init", [this.debuggee]);
  }
});
exports.REPLPanel = REPLPanel;

// create a new tool,
// initialized with the
// REPLPanel's constructor
const replTool = new Tool({
  panels: { repl: REPLPanel }
});