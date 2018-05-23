import { Component, Input } from '@angular/core';

export const message = (validator: any, key: string): string => {
    switch (key) {
        case "required":
            return "The value is required !";
        case "pattern":
            return "This field contains forbidden characters!";
        case "minlength":
            return `The value must be longer than ${validator.minlength.requiredLength} !`;
        case "maxlength":
            return `The value must be shorter than ${validator.maxlength.requiredLength} !`;
        case "min":
            return `The value must be bigger than ${(<any>validator).min} !`;
        case "max":
            return `The value must be smaller than ${(<any>validator).max} !`;
    }

    switch (typeof validator[key]) {
        case "string":
            return <string>validator[key];
        default:
            return `;
      Validation;
      failed: ${key}`;
    }
};

@Component({
    selector: 'app-validation-messages',
    template: '<div *ngFor="let message of messages">{{message}}</div>'
})

export class ValidationMessagesComponent {
    @Input() messages: Array<string>;
}
