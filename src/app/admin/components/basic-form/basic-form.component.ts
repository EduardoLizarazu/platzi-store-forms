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
