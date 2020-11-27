import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import {  FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';
import { Usuario } from './models/usuario';
import { NgBrazilValidators, MASKS } from 'ng-brazil';
import { CustomValidators } from 'ngx-custom-validators';
import { DisplayMessage, GenericValidator, ValidationMessages } from '../generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ],
})
export class CadastroComponent implements OnInit, AfterViewInit {

  // FormItems collection
  @ViewChildren(FormControlName,{read: ElementRef}) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario : Usuario;
  MASKS = MASKS;
  
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};
  formResult: string;
  
  constructor(private fb: FormBuilder) { 
    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      cpf:{
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'        
      },
      email: {
        required: 'Informe o e-mail',
        email: 'E-mail inválido'        
      },
      senha:{
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir enter 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      },
      senhaConfirmacao:{
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir enter 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }
  

  ngOnInit(): void {

    let senha= new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let senhaConfirmacao = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]),CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(155) ]],
      cpf: ['', [Validators.required,NgBrazilValidators.cpf]],
      email: ['', [Validators.email,Validators.required]],
      senha: senha,
      senhaConfirmacao: senhaConfirmacao
    });
  }

  ngAfterViewInit(): void {
    let controlBurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement,'blur'));

    merge(...controlBurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });
  }

  adicionarUsuario(){
    if( this.cadastroForm.dirty && this.cadastroForm.valid){
      this.usuario = Object.assign({}, this.usuario,this.cadastroForm.value );
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }   
    else{
        this.formResult = "Não submeteu";
    }
    
    
  }

}
