import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyworkService } from '../mywork.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  
  formCadastro = new FormGroup({
    titulo: new FormControl(),
    preco: new FormControl(),
    descricao: new FormControl()
  });
  produto = {_id : "", titulo : "", preco: 0.0, descricao: ""};
  isValid: number = 0;

  constructor(private myWork : MyworkService, private rota: ActivatedRoute, private router: Router) { }

  onSubmit() {
    if (this.formCadastro.valid) {
      this.produto = {
        _id: this.formCadastro.value._id,
        titulo: this.formCadastro.value.titulo,
        preco: this.formCadastro.value.preco,
        descricao: this.formCadastro.value.descricao
      }
    this.myWork.editarProduto(this.produto).subscribe(res => {
      
      if(res.ok == true) {
        alert("O produto foi editado com sucesso");
        this.router.navigate([""]);
      } else {
        alert("O produto não foi editado!");
      }
    });
  }else {
    alert("Dados inválidos");
    this.initEditForm();
  }
}

  ngOnInit(): void {
    this.initEditForm();
  }

  initEditForm(){
    let param = this.rota.snapshot.paramMap.get("index");
    if(param != null){
      this.myWork.getProduto(param)
      .subscribe(
        (response) => {                           
          this.produto = response;
          this.formCadastro = new FormGroup({
            _id: new FormControl(this.produto._id),
            titulo: new FormControl(this.produto.titulo, [Validators.required, Validators.minLength(4)]),
            preco: new FormControl(this.produto.preco, [Validators.required, Validators.max(100)]),
            descricao: new FormControl(this.produto.descricao, [Validators.required, Validators.minLength(3)])
          });
        },
        (error) => {                              
          alert("Id inválido");
          this.router.navigate([""]);
          throw error;
        }
      )
    }
  }
}
