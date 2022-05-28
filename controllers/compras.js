const compras = require('../json/compras.json')
const vendas = require('../json/vendas.json')

module.exports.calculateBuy =  (req, res) => {
    try {
        let comprasTotal = 0
        let IcmsPago = 0
        let StPago = 0
        let vendasTotal = 0

        compras.map((compra, index) => {
            const splitArr = compra.data.split('/')
            if (splitArr[1] >= '2017' && splitArr[1] <= 2021) {
                comprasTotal = compra.total + comprasTotal
                IcmsPago = compra.ICMS + IcmsPago
                StPago = compra.ST + StPago
            }
        })
        vendas.map((venda, index) => {
            const splitArr = venda.data.split('/')
            if (splitArr[1] >= '2017' && splitArr[1] <= 2021) {
                vendasTotal = venda.total + vendasTotal
            }
        })

        let aux = [
            {
                "tag": "COMPRAS",
                "valor": comprasTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
            },
            {
                "tag": "VENDAS",
                "valor": vendasTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            },
            {
                "tag": "ICMS",
                "valor": IcmsPago.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            },
            {
                "tag": "ST",
                "valor": StPago.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            }
        ]
        res.send(aux)

    } catch (e) {
        res.send(e.message)
    }
}