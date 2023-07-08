import { Component, OnInit } from '@angular/core';

import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  // Crear un form control
  nameField = new FormControl('');
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000');
  dateField = new FormControl('');
  ageField = new FormControl(12);

  // Select Input
  // categoryField = new FormControl('');
  // Valor por defecto, tiene que ser el mismo que el value option
  categoryField = new FormControl('category-2');
  tagField = new FormControl('');

  // Checkbox & Radio
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

}
