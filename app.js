'use strict'

import produtos from './funcionarios.json' with {type: 'json'}

function mostrarPrecos (produto) {
    console.log(produto.categoria(0))
}

produtos.forEach (mostrarPrecos)