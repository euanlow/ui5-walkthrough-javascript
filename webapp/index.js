sap.ui.define(["sap/ui/core/mvc/XMLView"], async function (XMLView) {
  "use strict";

  let mainView = await XMLView.create({
    viewName: "com.demo.ui5.walkthrough.view.App"
  });

  mainView.placeAt("content");
});
