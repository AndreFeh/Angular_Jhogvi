import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { produtos, Produto } from '../../data/data';
import { CartService } from '../../services/cart.service';
import { ValuesService } from '../../services/values.service';
import { ProdutoCarrinho } from '../../models/produto-carrinho';
import { ParsePrecoPipe } from '../../shared/parse-preco.pipe';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone:false
})
export class ContentComponent implements OnInit {
  img!: string;
  currentPrice!: number;
  titulo!: string;
  descricao!: string;
  private id!: number;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    public formatBrl: ValuesService,
    private parsePreco: ParsePrecoPipe
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.loadProductById(this.id);
      } else {
        console.error("ID não encontrado na rota.");
      }
    });
  }

  private loadProductById(id: number): void {
	const allProducts: Produto[] = produtos[0].categorias
	.flatMap(categoriaObj => {
	  // filtra apenas os valores que são arrays (produtos), ignora o id (number)
	  return Object.values(categoriaObj).filter(val => Array.isArray(val)).flat() as Produto[];
	});
	  const produto = allProducts.find(prod => prod.id === id);

    if (produto) {
      this.img = produto.imagens[0] || '';
      this.currentPrice = produto.preco;
      this.titulo = produto.titulo;
      this.descricao = produto.descricao;
    } else {
      console.error("Produto não encontrado!");
    }
  }

  addToCart(): void {
    const produto: ProdutoCarrinho = {
      id: this.id,
      img: this.img,
      titulo: this.titulo,
      descricao: this.descricao,
      preco: this.currentPrice,
      qtd: 1
    };

    this.cartService.addToCart({
      ...produto,
      categoria: '',
      cor: '',
      imagens: [],
      detalhes: []
    });

    alert(`${this.titulo} foi adicionado ao carrinho!`);
  }
}
