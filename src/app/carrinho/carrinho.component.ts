import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtods';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itenCarrinho: IProdutoCarrinho[] = [];
  total: number = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.itenCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal()
  }

  removeProdutoCarrinho(produtoId: number){
    this.itenCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoDoCarrinho(produtoId);
    location.reload();
  }

  calculaTotal(){
    return this.total = this.itenCarrinho.reduce((prev, curr) => 
    (prev + curr.preco * curr.quantidade), 0);
  }

  comprar(){
    alert("Parabéns, você finalizou sua comprar");
    this.carrinhoService.limparCarrinho();
    this.route.navigate(["produtos"]);
  }
}
