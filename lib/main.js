
"use strict";

const { Panel } = require("dev/panel");
const { Tool } = require("dev/toolbox");
const { Class } = require("sdk/core/heritage");
const self = require("sdk/self");

const REPLPanel = Class({
  extends: Panel,
  label: "REPL",
  tooltip: "Firefox debugging protocol REPL",
  icon: self.data.url("plane_64.png"),
  url: self.data.url("repl-panel.html"),
  setup: function(options) {
    this.debuggee = options.debuggee;
  },
  dispose: function() {
    this.debuggee = null;
  },
  onReady: function() {
    this.debuggee.start();
    this.postMessage("init", [this.debuggee]);
  }
});
exports.REPLPanel = REPLPanel;


const replTool = new Tool({
  panels: { repl: REPLPanel }
});