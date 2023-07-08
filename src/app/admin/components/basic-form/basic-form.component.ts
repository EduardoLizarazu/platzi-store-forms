import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from "@angular/forms";
// Validators: Es un conjunto de validadores normales para forms
// Require: campo obligatorio

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  // Form Control
  // 1param: valor por defecto
  // 2param: validacion sync (una directa o varias[array])
  // 3param: validacion async

  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000');
  dateField = new FormControl('');
  ageField = new FormControl(12);

  categoryField = new FormControl('category-2');
  tagField = new FormControl('');

  agreeField = new FormControl(false);
  genderField = new FormControl('');
  zoneField = new FormControl('');



  ngOnInit() {
    // Observable
    // Suscribirse a los cambios del form control en tiempo real
    this.nameField.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  getNameValue() {
    // Capturar el valor del form control en el instante
    console.log(this.nameField.value);
  }

  // Para evitar repetir codigo de validacion en el html
  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }
  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

}
