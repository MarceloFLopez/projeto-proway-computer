import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtods';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;
  
  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtoService.getOne(produtoId);
  }

}
