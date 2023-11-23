sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
    "use strict";
    const now = new Date();
    const minDate = new Date(now.getFullYear(), now.getMonth(), 20);
    const maxDate = new Date(now.getFullYear(), now.getMonth(), 30);

    return Controller.extend("picker.controller.View1", {
        async onVHRequest(event) {
            const input = event.getSource();
            const picker = await this._getPicker();
            this.byId("Picker:Calendar").setMinDate(minDate);
            this.byId("Picker:Calendar").setMaxDate(maxDate);
            picker.openBy(input);
        },

        async _getPicker() {
            return (
                this.byId("Picker") ||
                this.loadFragment({ name: "picker.fragment.Picker" })
            );
        },

        async handlePickerSelect(event) {
            const model = this.getView().getModel("json");
            const calendar = event.getSource();
            const [selectedDate] = calendar.getSelectedDates();
            const picker = await this._getPicker();
            const startDate = selectedDate.getStartDate();
            const endDate = selectedDate.getEndDate();
            calendar.setMaxDate(null);
            model.setProperty("/Begda", startDate);
            calendar.setMinDate(startDate);
            model.setProperty("/Endda", endDate);
            if (startDate && endDate) {
                picker.close();
            }
        },

        onChange() {
            const model = this.getView().getModel("json");
            const startDate = model.getProperty("/Begda");
            const endDate = model.getProperty("/Endda");
            if (startDate < minDate) {
                model.setProperty("/Begda", minDate);
            }
            if (startDate > maxDate) {
                model.setProperty("/Begda", maxDate);
            }
            if (endDate < startDate) {
                model.setProperty("/Endda", startDate);
            }
        },
    });
});
