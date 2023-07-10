import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";

// FormBuilder es un servicio por lo que hay que inyectarlo en el contructor

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  // Tipamos el form
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Inicializar el form
    this.buildForm();
  }

  ngOnInit() {
    // Observable
    // Suscribirse a los cambios del form control en tiempo real
    // this.nameField.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
    // // Suscribirse a los cambios del form control en tiempo real
    // this.form.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
  }

  getNameValue() {
    // Capturar el valor del form control en el instante
    console.log(this.name().value);
  }

  // Submit del formulario y validacion
  save(event: Event) {
    this.form.valid ?
      console.log(this.form.value) : this.form.markAllAsTouched();
  }

  private buildForm() {
    // FormGroup Reactive Form y sus validaciones
    // Manejando multiples forms groups
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z ]+$/),
          ],
        ],
        last: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z ]+$/),
          ],
        ],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#FFFFFF', Validators.required],
      date: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      url: ['', Validators.required],
      category: ['', Validators.required],
      tag: ['', Validators.required],
      agree: [false, [Validators.requiredTrue]],
      gender: ['', Validators.required],
      zone: ['', Validators.required],
    });
  }

  // Obtener el validador de un form group
  name = () => this.form.get('fullName.name');
  last = () => this.form.get('fullName.last');
  email = () => this.form.get('email');
  phone = () => this.form.get('phone');
  color = () => this.form.get('color');
  date = () => this.form.get('date');
  age = () => this.form.get('age');
  url = () => this.form.get('url');
  category = () => this.form.get('category');
  tag = () => this.form.get('tag');
  agree = () => this.form.get('agree');
  gender = () => this.form.get('gender');
  zone = () => this.form.get('zone');

  isNameValid = () => this.name().valid && this.name().touched;
  isNameInvalid = () => this.name().invalid && this.name().touched;

  isLastValid = () => this.last().valid && this.last().touched;
  isLastInvalid = () => this.last().invalid && this.last().touched;

  isEmailValid = () => this.email().valid && this.email().touched;
  isEmailInvalid = () => this.email().invalid && this.email().touched;

  isPhoneValid = () => this.phone().valid && this.phone().touched;
  isPhoneInvalid = () => this.phone().invalid && this.phone().touched;

  isColorValid = () => this.color().valid && this.color().touched;
  isColorInvalid = () => this.color().invalid && this.color().touched;

  isDateValid = () => this.date().valid && this.date().touched;
  isDateInvalid = () => this.date().invalid && this.date().touched;

  isAgeValid = () => this.age().valid && this.age().touched;
  isAgeInvalid = () => this.age().invalid && this.age().touched;

  isUrlValid = () => this.url().valid && this.url().touched;
  isUrlInvalid = () => this.url().invalid && this.url().touched;

  isCategoryValid = () => this.category().valid && this.category().touched;
  isCategoryInvalid = () => this.category().invalid && this.category().touched;

  isTagValid = () => this.tag().valid && this.tag().touched;
  isTagInvalid = () => this.tag().invalid && this.tag().touched;

  isAgreeValid = () => this.agree().valid && this.agree().touched;
  isAgreeInvalid = () => this.agree().invalid && this.agree().touched;

  isGenderValid = () => this.gender().valid && this.gender().touched;
  isGenderInvalid = () => this.gender().invalid && this.gender().touched;

  isZoneValid = () => this.zone().valid && this.zone().touched;
  isZoneInvalid = () => this.zone().invalid && this.zone().touched;
}
