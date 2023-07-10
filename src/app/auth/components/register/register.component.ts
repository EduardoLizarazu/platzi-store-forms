import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/services/auth.service';
import { MyValidators } from "./../../../utils/validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  // Validador personalizado para el campo password de manera asyncrona
  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), MyValidators.validPassword]],
      // No hace falta que tenga mas validaciones ya que eso lo va a hacer password
      confirmPassword: ['', [Validators.required]],
      type: ['company', [Validators.required]],
      companyName: ['', [Validators.required]],
    }, {
      // Recibe todo el formulario
      validators: MyValidators.matchPasswords
    });

    // Validacion condicionada de acuerdo a cambio de UI
    // Para que se actualice el valor de companyName cuando se cambie el valor de type
    this.typeField.valueChanges
    .subscribe(value => {
      if (value === 'company') {
        this.companyNameField.setValidators([Validators.required]);
      } else {
        // No existe validaciones
        this.companyNameField.setValidators(null);
      }
      // Actualizar validaciones
      this.companyNameField.updateValueAndValidity();
    })
  }

  get typeField() {
    return this.form.get('type');
  }
  get companyNameField() {
    return this.form.get('companyName');
  }

}
