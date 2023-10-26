import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {
  clientForm: FormGroup;
  afficherRecapitulatif = false; // Drapeau pour afficher/masquer le récapitulatif


  constructor(private formBuilder: FormBuilder) {
    this.clientForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: [''],
      cp: [''],
      ville: [''],
      tel: [''],
      email: ['', [Validators.required, Validators.email]],
      civilite: [''],
      password: [''],
      login: [''],
      pays: ['']
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      // Traitez le formulaire comme vous le souhaitez
      // Par exemple, sauvegardez les données dans une variable
      const formData = this.clientForm.value;

      // Activez le drapeau pour afficher le récapitulatif
      this.afficherRecapitulatif = true;
    }
  }
}
