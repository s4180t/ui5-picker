sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";const t=new Date;const n=new Date(t.getFullYear(),t.getMonth(),20);const r=new Date(t.getFullYear(),t.getMonth(),30);return e.extend("picker.controller.View1",{async onVHRequest(e){const t=e.getSource();const s=await this._getPicker();this.byId("Picker:Calendar").setMinDate(n);this.byId("Picker:Calendar").setMaxDate(r);s.openBy(t)},async _getPicker(){return this.byId("Picker")||this.loadFragment({name:"picker.fragment.Picker"})},async handlePickerSelect(e){const t=this.getView().getModel("json");const n=e.getSource();const[r]=n.getSelectedDates();const s=await this._getPicker();const a=r.getStartDate();const o=r.getEndDate();n.setMaxDate(null);t.setProperty("/Begda",a);n.setMinDate(a);t.setProperty("/Endda",o);if(a&&o){s.close()}},onChange(){const e=this.getView().getModel("json");const t=e.getProperty("/Begda");const s=e.getProperty("/Endda");if(t<n){e.setProperty("/Begda",n)}if(t>r){e.setProperty("/Begda",r)}if(s<t){e.setProperty("/Endda",t)}}})});
//# sourceMappingURL=View1.controller.js.map