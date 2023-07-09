import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";

// FormBuilder es un servicio por lo que hay que inyectarlo en el contructor

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  // Tipamos el form
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    // Inicializar el form
    this.buildForm();
  }

  ngOnInit() {
    // Observable
    // Suscribirse a los cambios del form control en tiempo real
    this.nameField.valueChanges.subscribe(value => {
      console.log(value);
    });
    // Suscribirse a los cambios del form control en tiempo real
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  getNameValue() {
    // Capturar el valor del form control en el instante
    console.log(this.nameField.value);
  }

  // Submit del formulario y validacion
  save(event: Event){
    if(this.form.valid){
      console.log(this.form.value);
    }else{
      // Marcar todos los campos como tocados (ver errores)
      this.form.markAllAsTouched();
    }
  }

  private buildForm() {
    // FormGroup Reactive Form y sus validaciones
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]],
      email : ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#000'],
      date: [''],
      age: [18, [Validators.required, Validators.min(18), Validators.max(65)]],
      category: ['category-2'],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender : [''],
      zone: ['']
    });
  }

  // Obtener el validador de un form group
  get nameField() {
    return this.form.get('name');
  }
  get emailField() {
    return this.form.get('email');
  }
  get phoneField() {
    return this.form.get('phone');
  }
  get colorField() {
    return this.form.get('color');
  }
  get dateField() {
    return this.form.get('date');
  }
  get ageField() {
    return this.form.get('age');
  }
  get categoryField() {
    return this.form.get('category');
  }
  get tagField() {
    return this.form.get('tag');
  }
  get agreeField() {
    return this.form.get('agree');
  }
  get genderField() {
    return this.form.get('gender');
  }
  get zoneField() {
    return this.form.get('zone');
  }

  // Para evitar repetir codigo de validacion en el html
  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }
  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

}
