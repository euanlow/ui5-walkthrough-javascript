sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.demo.ui5.walkthrough.controller.App", {
      onInit: function (ctx) {},
      onButtonPress: function (ctx) {
        MessageToast.show("Button pressed!");
      }
    });
  }
);
