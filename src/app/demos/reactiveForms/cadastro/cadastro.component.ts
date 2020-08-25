import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';
import { NgBrazilValidators, MASKS } from 'ng-brazil';
import { CustomValidators } from 'ngx-custom-validators';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ],
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario : Usuario;
  MASKS = MASKS;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required,NgBrazilValidators.cpf]],
      email: ['', [Validators.email,Validators.required]],
      senha: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]],
      senhaConfirmacao: ['']
    });
  }

  adicionarUsuario(){
    this.usuario = Object.assign({}, this.usuario,this.cadastroForm.value );
    
  }

}
