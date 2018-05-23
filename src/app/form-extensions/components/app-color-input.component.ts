import { AfterViewInit, Component, Injector, Input, ViewChild } from "@angular/core";
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgModel } from "@angular/forms";
import { MatInput } from "@angular/material";
import { ElementBase } from "../base-component";

@Component({
    selector: "app-color-input",
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: AppColorInputComponent, multi: true},
        {provide: NG_VALIDATORS, useExisting: AppColorInputComponent, multi: true}
    ],
    template: `
        <mat-form-field>
            <input matInput
                   colorHexValidator
                   (blur)="touch()"
                   [placeholder]="placeholder"
                   [required]="required"
                   [(ngModel)]="value"/>
            <mat-error>
                <app-validation-messages *ngIf="(invalid | async) && !disabled" [messages]="failures | async">
                </app-validation-messages>
            </mat-error>
            <mat-hint *ngIf="hint">{{hint}}</mat-hint>
        </mat-form-field>
    `
})

export class AppColorInputComponent extends ElementBase<string> implements AfterViewInit {
    @ViewChild(NgModel) model: NgModel;
    @ViewChild(MatInput) matInput: MatInput;

    @Input() required: boolean;
    @Input() placeholder: string;
    @Input() hint?: string;
    @Input() patternHelp?: string;

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.matInput.ngControl = this.injector.get(NgControl, null); // hacky way to make material control invalid when paren is invalid
        });
    }

    constructor(protected injector: Injector) {
        super(injector);
    }
}
