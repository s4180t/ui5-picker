//@ui5-bundle picker/Component-preload.js
sap.ui.require.preload({
	"picker/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","picker/model/models"],function(e,i,t){"use strict";return e.extend("picker.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"picker/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("picker.controller.App",{onInit:function(){}})});
},
	"picker/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";const t=new Date;const n=new Date(t.getFullYear(),t.getMonth(),20);return e.extend("picker.controller.View1",{async onVHRequest(e){const t=e.getSource();const r=await this._getPicker();this.byId("Picker:Calendar").setMinDate(n);r.openBy(t)},async _getPicker(){return this.byId("Picker")||this.loadFragment({name:"picker.fragment.Picker"})},async handlePickerSelect(e){const t=this.getView().getModel("json");const n=e.getSource();const[r]=n.getSelectedDates();const s=await this._getPicker();const o=r.getStartDate();const c=r.getEndDate();t.setProperty("/Begda",o);n.setMinDate(o);t.setProperty("/Endda",c);if(o&&c){s.close()}},onChange(){const e=this.getView().getModel("json");const t=e.getProperty("/Begda");const r=e.getProperty("/Endda");if(t<n){e.setProperty("/Begda",n)}if(r<t){e.setProperty("/Endda",t)}}})});
},
	"picker/fragment/Picker.fragment.xml":'<m:Popover\r\n    xmlns:m="sap.m"\r\n    id="Picker"\r\n    placement="Vertical"><unified:Calendar\r\n        xmlns:unified="sap.ui.unified"\r\n        id="Picker:Calendar"\r\n        select="handlePickerSelect"\r\n        intervalSelection="true"><unified:selectedDates><unified:DateRange\r\n                id="Picker:DateRange"\r\n                startDate="{json>/Begda}"\r\n                endDate="{json>/Endda}" /></unified:selectedDates></unified:Calendar></m:Popover>',
	"picker/i18n/i18n.properties":'# This is the resource bundle for picker\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Picker\n\n#YDES: Application description\nappDescription=\r\n#XTIT: Main view title\ntitle=Picker',
	"picker/manifest.json":'{"_version":"1.58.0","sap.app":{"id":"picker","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.11.4","toolsId":"00138741-262a-4e80-ac5d-b7d1d4c0fe64"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"picker.i18n.i18n"}},"json":{"type":"sap.ui.model.json.JSONModel"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"picker.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"picker.view.App","type":"XML","async":true,"id":"App"}}}',
	"picker/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"picker/view/App.view.xml":'<mvc:View controllerName="picker.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"picker/view/View1.view.xml":'<mvc:View\n    xmlns:form="sap.ui.layout.form"\n    controllerName="picker.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    displayBlock="true"\n    xmlns="sap.m"><Page\n        id="page"\n        title="{i18n>title}"><form:SimpleForm\n            id="FormEdit"\n            emptySpanL="4"\n            editable="true"><Label\n                id="FormEdit:Date:Label"\n                text="{i18n>Date}" /><Input\n                id="FormEdit:Date:Begda"\n                showValueHelp="true"\n                valueHelpIconSrc="sap-icon://calendar"\n                valueHelpRequest="onVHRequest"\n                value="{ path: \'json>/Begda\', type: \'sap.ui.model.type.Date\', formatOptions: { style: \'short\' } }"\n                change="onChange" /><Input\n                id="FormEdit:Date:Endda"\n                showValueHelp="true"\n                valueHelpIconSrc="sap-icon://calendar"\n                valueHelpRequest="onVHRequest"\n                value="{ path: \'json>/Endda\', type: \'sap.ui.model.type.Date\', formatOptions: { style: \'short\' } }"\n                change="onChange" /></form:SimpleForm><form:SimpleForm\n            id="FormReadOnly"\n            emptySpanL="4"\n            editable="false"><Label\n                id="FormReadOnly:Date:Label"\n                text="{i18n>Date}" /><Text\n                id="FormReadOnly:Date:Begda"\n                text="{ path: \'json>/Begda\', type: \'sap.ui.model.type.Date\' }" /><Text\n                id="FormReadOnly:Date:Endda"\n                text="{ path: \'json>/Endda\', type: \'sap.ui.model.type.Date\' }" /></form:SimpleForm></Page></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map