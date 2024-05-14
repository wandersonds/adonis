import Tipo from '#models/tipo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    return await Tipo.createMany([
      {nome: "Bedidas"},
      {nome: "Hamburguer"},
      {nome: "Sobremesas"},
      {nome: "Hot Dog"},
      {nome: "Porções"},
    ])

  }
}