sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("ns.fiori.controller.View1", {
			onInit: function () {
                var oData = {
                    "comboitem": [{
                        "key":"IN",
                        "Name":"INDIA"
                    },
                 { "key":"USA",
                        "Name":"United States Of America"},
                        {
                            "Key":"UK",
                            "Name":"United Kingdom"
                        }

                   ]
                };
                var omodel = new JSONModel(oData);
                this.getView().byId("idcbox2").setModel(omodel);
                
            //    ew sap.ui.model.odata.ODataModel();
            //     this.getView().setModel(oDatamodel); var oDatamodel= n
}

		});
	});
