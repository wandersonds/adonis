// import type { HttpContext } from '@adonisjs/core/http'

import Produto from "#models/produto";

export default class ProdutoComandasController {
    async index(){
        return await Produto.all()
    }
}