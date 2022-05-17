import { Component, OnInit } from '@angular/core';
import { MyworkService } from '../mywork.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  produto: Produto;

  constructor(private myWork : MyworkService, private rota: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let param = this.rota.snapshot.paramMap.get("index");
    if(param != null){
      this.myWork.excluirProduto(param)
      .subscribe(
        (response) => {      
          alert("O produto foi excluido com sucesso");                     
          this.router.navigate(["/listar"]);
        },
        (error) => {                              
          alert("Id inválido");
          this.router.navigate(["/listar"]);
          throw error;
        }
      )
    }
  }

}
