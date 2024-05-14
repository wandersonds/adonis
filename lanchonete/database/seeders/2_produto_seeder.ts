import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await Produto.createMany([
      {nome: "Coca-cola- lata", preco: 6.5, tamanho: "330 ml", tipoId: 1},
      {nome: "Coca-cola 2L", preco: 10, tamanho: "2L", tipoId: 1},
      {nome: "Coca-cola-600", preco: 8, tamanho: "600 ml", tipoId: 1},

      {nome: "X-Tudo", preco: 15, tamanho: "1 kg",tipoId: 2},
      {nome: "X-Salada", preco: 15, tamanho: "1 kg",tipoId: 2},
      {nome: "X-Bacon", preco: 15, tamanho: "1 kg",tipoId: 2},
      {nome: "X-Bomba", preco:25, tamanho: "2 kg",tipoId: 2},

      {nome: "Bolo", preco:15, tamanho: "300 g",tipoId: 3},
      {nome: "pudim", preco:35, tamanho: "450 g",tipoId: 3},

      {nome: "hot-dog-molho", preco: 2.5, tamanho: "200 g",tipoId: 4},
      {nome: "hot-dog-chapa", preco: 6.5, tamanho: "290 ml",tipoId: 4},
      {nome: "hot-dog-frango", preco: 6.5, tamanho: "290 ml",tipoId: 4},
      {nome: "hot-dog-picante", preco: 6.5, tamanho: "290 ml",tipoId: 4},
      
      {nome: "Porcao-Batata", preco:10, tamanho: "500 g",tipoId: 5},
      {nome: "frango-frito", preco:17, tamanho: "500 g",tipoId: 5},
      {nome: "calabresa", preco:20, tamanho: "300 g",tipoId: 5},
      {nome: "isca-de-peixe", preco:30, tamanho: "600 g",tipoId: 5},
    ])
  }
}