import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

export function validateColorHex() {
    return (control: AbstractControl) => {
        const expression = new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$");
        if (!control.value || expression.test(control.value)) {
            return null;
        }

        return {hexadecimal: "Please enter a hexadecimal value (alphanumeric, 0-9 and A-F)"};
    };
}

@Directive({
    selector: "[colorHexValidator][ngModel],[colorHexValidator][formControl],[colorHexValidator][formControlName]",
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => ColorHexValidatorDirective), multi: true}
    ]
})
export class ColorHexValidatorDirective implements Validator {
    validator: Function;

    constructor() {
        this.validator = validateColorHex();
    }

    validate(control: AbstractControl): { [validator: string]: string } {
        return this.validator(control);
    }
}
