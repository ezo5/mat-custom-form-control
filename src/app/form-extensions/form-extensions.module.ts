import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppCheckBoxComponent, AppColorInputComponent} from "./components";
import {ColorHexValidatorDirective} from "./validators";
import {ValidationMessagesComponent} from "./validators/validation-messages.component";
import {MatCheckboxModule, MatInputModule, MatSlideToggleModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  declarations: [
    AppColorInputComponent,
    AppCheckBoxComponent,
    ValidationMessagesComponent,
    ColorHexValidatorDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppCheckBoxComponent,
    AppColorInputComponent
  ]
})

export class FormExtensionsModule {
}
