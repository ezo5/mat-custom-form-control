import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { validateColorHex } from "./form-extensions/validators";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    formGroup: FormGroup;
    private detail = {colorHex: "#ccc"};

    constructor(private fb: FormBuilder) {
        this.formGroup = this.fb.group({
            colorHex: [this.detail.colorHex, [validateColorHex(), Validators.maxLength(20), Validators.minLength(2)]],
            checkbox: true
        });

        // Dsabled test
        this.formGroup.disable();
        setTimeout(() => {
            this.formGroup.enable();
        }, 1500);
    }
}
