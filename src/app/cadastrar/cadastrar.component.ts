import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MyworkService } from '../mywork.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  formCadastro: FormGroup;
  produto = {titulo : "", preco: 0.0, descricao: ""};

  private initForm() {
    this.formCadastro = new FormGroup({
      titulo: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      preco: new FormControl(null, [Validators.required, Validators.max(100)]),
      descricao: new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }

  constructor(private myWork : MyworkService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    if (this.formCadastro.valid) {
      this.produto = {
        titulo: this.formCadastro.value.titulo,
        preco: this.formCadastro.value.preco,
        descricao: this.formCadastro.value.descricao
      }
      this.myWork.cadastrarProduto(this.produto).subscribe(res => {
        
        if(res.ok == true) {
          alert("O cadastro foi realizado com sucesso");
          this.router.navigate([""]);
        } else {
          alert("O cadastro não foi realizado!");
        }
      });
    } else {
      alert("Dados inválidos");
      this.initForm();
    }
  }

}
