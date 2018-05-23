import { Injector } from '@angular/core';
import { AbstractControl, NgModel, ValidationErrors, Validator } from "@angular/forms";
import { ValueAccessorBase } from './value-accessor';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { message } from '../validators/validation-messages.component';

export abstract class ElementBase<T> extends ValueAccessorBase<T> implements Validator {
    protected abstract model: NgModel;

    constructor(protected injector: Injector) {
        super(injector);
    }

    private getErrorsFromOuterModel(): Observable<ValidationErrors> {
        return this.formControl == null || this.formControl.errors == null ? of(null) : of(this.formControl.errors);
    }

    validate(control: AbstractControl): ValidationErrors {
        return this.model.control.errors;
    }

    get invalid(): Observable<boolean> {
        return this.getErrorsFromOuterModel().pipe(
            map(v => Object.keys(v || {}).length > 0)
        );
    }

    get failures(): Observable<Array<string>> {
        return this.getErrorsFromOuterModel().pipe(
            map(v => Object.keys(v || {}).map(k => message(v, k)))
        );
    }
}
