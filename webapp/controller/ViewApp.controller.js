sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.example.timmer.controller.ViewApp", {
            onInit: function () {
   let myTilesModel =new JSONModel("../model/tiles.json");
   this.getView().setModel(myTilesModel, "tiles")
            },
            // press:function(oRoute){
            //     this.getOwnerComponents().getRouter().navTo(oRoute)
            // }
            press:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Countdown");
            },
            covid:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Covid");
            },
            vacc:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Vacc");
            },
            portfo:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Portfolio");
            },
            salesorder:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("SalesOrder");
            },
            barcode:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Barcode");
            },
            weather:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Weather");
            }
            
        
           
        });
    });
