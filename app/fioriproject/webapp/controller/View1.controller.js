sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("fioriproject.controller.View1", {
            onInit: function () {

            },
            onNext: function(oEvent){
                var oItem =oEvent.getSource();
                var oRouter= this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2",{
                    invoicePath : window.encodeURIComponent(oItem.getBindingContext().getPath().substr(1))
                });
            }
        });
    });
