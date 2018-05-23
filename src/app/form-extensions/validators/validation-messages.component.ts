import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-validation-messages',
    template: '<div *ngFor="let message of messages">{{message}}</div>'
})

export class ValidationMessagesComponent {
    @Input() messages: Array<string>;
}
