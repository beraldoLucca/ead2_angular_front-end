import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyworkService {

  baseURL = "https://banco-de-dados-lucca-beraldo.glitch.me/api";

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL + "/produtos");
  }

  getProduto(id): Observable<any> {
    return this.http.get<Produto>(this.baseURL + `/produtos/${id}`).pipe(
      catchError((err) => {

        return throwError(err);    
      })
    )
  }

  cadastrarProduto(produto) : Observable<any>{
    let body = new HttpParams();
    body = body.set("titulo", produto.titulo);
    body = body.set("preco", String(produto.preco));
    body = body.set("descricao", produto.descricao);
    return this.http.post(this.baseURL + "/produtos", body, {observe: "response"});
  }

  editarProduto(produto) : Observable<any>{
    let body = new HttpParams();
    body = body.set("titulo", produto.titulo);
    body = body.set("descricao", produto.descricao);
    body = body.set("preco", String(produto.preco));
    return this.http.put(this.baseURL + `/produtos/${produto._id}`, body, {observe: "response"});
  }

  excluirProduto(index) : Observable<any>{
    return this.http.delete(this.baseURL + `/produtos/${index}`).pipe(
      catchError((err) => {

        return throwError(err);    
      })
    )
  }

  constructor(private http : HttpClient) { }
}

