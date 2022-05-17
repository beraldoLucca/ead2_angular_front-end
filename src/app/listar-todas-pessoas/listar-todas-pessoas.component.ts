import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { MyworkService } from '../mywork.service';

@Component({
  selector: 'app-listar-todas-pessoas',
  templateUrl: './listar-todas-pessoas.component.html',
  styleUrls: ['./listar-todas-pessoas.component.css']
})
export class ListarTodasPessoasComponent implements OnInit {

  listaProdutos: Produto[];

  constructor(private myWork : MyworkService) { }

  carregarProdutos() : void {
    this.myWork.getProdutos().subscribe(res => {
      this.listaProdutos = res;
    });
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

}
