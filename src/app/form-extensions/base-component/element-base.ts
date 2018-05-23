import {Injector} from '@angular/core';
import {AbstractControl, NgModel, ValidationErrors, Validator} from "@angular/forms";
import {ValueAccessorBase} from './value-accessor';
import {Observable} from 'rxjs/index';
import {message} from './validate';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';

export abstract class ElementBase<T> extends ValueAccessorBase<T> implements Validator {
  protected abstract model: NgModel;
  public patternHelp?: string;

  constructor(protected injector: Injector) {
    super(injector);
  }

  private assignPatternHelp(control): void {
    if (control && control.errors && control.errors.pattern) {
      control.errors.pattern.patternHelp = this.patternHelp;
    }
  }

  private getErrorsFromOuterModel(): Observable<ValidationErrors> {
    this.assignPatternHelp(this.formControl);
    return this.formControl == null || this.formControl.errors == null ? of(null) : of(this.formControl.errors);
  }

  validate(control: AbstractControl): ValidationErrors {
    this.assignPatternHelp(control);
    return this.model.control.errors;
  }

  get invalid(): Observable<boolean> {
    return this.getErrorsFromOuterModel().pipe(
      map(v =>  Object.keys(v || {}).length > 0)
    );
  }

  get failures(): Observable<Array<string>> {
    return this.getErrorsFromOuterModel().pipe(
      map(v => Object.keys(v || {}).map(k => message(v, k)))
    );
  }
}
