import {Component, Injector, Input, ViewChild} from "@angular/core";
import {NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel} from "@angular/forms";
import {ElementBase} from "../base-component";

@Component({
  selector: "app-checkbox",
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: AppCheckBoxComponent, multi: true},
    {provide: NG_VALIDATORS, useExisting: AppCheckBoxComponent, multi: true}
  ],
  template: `
    <mat-checkbox *ngIf="!isSlider" (click)="touch()" [disabled]="disabled" [(ngModel)]="value">
      {{label}}
    </mat-checkbox>
    <mat-slide-toggle *ngIf="isSlider" (click)="touch()" [disabled]="disabled" [(ngModel)]="value">
      {{label}}
    </mat-slide-toggle>
  `
})

export class AppCheckBoxComponent extends ElementBase<string> {
  @ViewChild(NgModel) model: NgModel;
  @Input() disabled: boolean;
  @Input() label?: string;
  @Input() isSlider: boolean;

  constructor(protected injector: Injector) {
    super(injector);
  }
}
