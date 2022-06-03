Backend com finalidade de devolver apis com resultados de calculos feitos apartir de compras e vendas de uma empresa,
e retornar em apis os calculos ja formatados para utilizar na area especifica.


rota : '/chartSource '.

Controller : './controllers/chart.js' - responsavel por fazer os calculos relacionados as vendas e compras de cada ano e retornar uma api com esses calculos formatados para utilizar nos graficos: 

- Formato de retorno de api =

[{

    ano : 'ano desejado',
    saldo : 'valor referente ao calculo entre compras e vendas',
    porcentagem : 'porcentagem referente ao saldo total de todos os anos desejados'
    
}]

 --------------------------------------------------------------------------
rota : /calculateBuy

controller : './controllers/compras.js' - responsavel por fazer fazer calculos de compras e vendar e retornar uma api para utilizar nos cards com informações especificas (compras, vendas, icms, st)

- Formato de retorno de api = 
[{

    'tag' : 'tag desejada para o card',
    'valor' : 'valor resultante do pedido na tag'
    
}]
------------------------------------------------------------------------------

rota : '/tableSource'

Controller : './controllers/table.js'  - responsavel por fazer os calculos e retornar uma api com informações especificas (compras, vendas, icms, st) para utilização em tabelas.

- Formato de retorno de api = 
[{

    ano : 'ano referente ao pedido',
    compras : 'valor das compras',
    vendas : 'valor das vendas',
    ICMS : 'valor do icms',
    ST : 'valor do st"
    
}]
