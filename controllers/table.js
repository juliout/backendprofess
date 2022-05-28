const compras = require('../json/compras.json')
const vendas = require('../json/vendas.json')

module.exports.tableSource = (req, res) => {
    try {
        let obj2017 = {
            ano : '2017',
            compras : 0,
            vendas : 0,
            ICMS : 0,
            ST : 0
        }
        let obj2018 = {
            ano : '2018',
            compras : 0,
            vendas : 0,
            ICMS : 0,
            ST : 0
        }
        let obj2019 = {
            ano : '2019',
            compras : 0,
            vendas : 0,
            ICMS : 0,
            ST : 0
        }
        let obj2020 = {
            ano : '2020',
            compras : 0,
            vendas : 0,
            ICMS : 0,
            ST : 0
        }
        let obj2021 = {
            ano : '2021',
            compras : 0,
            vendas : 0,
            ICMS : 0,
            ST : 0
        }

        compras.map((compra, index) => {
            const splitArr = compra.data.split('/')
            if (splitArr[1] === '2017') {
                obj2017.vendas =  obj2017.vendas + compra.total
                obj2017.ICMS =  obj2017.ICMS + compra.ICMS
                obj2017.ST = obj2017.ST + compra.ST
            }
            if (splitArr[1] === '2018') {
                obj2018.vendas =  obj2018.vendas + compra.total
                obj2018.ICMS =  obj2018.ICMS + compra.ICMS
                obj2018.ST = obj2018.ST + compra.ST
            }
            if (splitArr[1] === '2019') {
                obj2019.vendas =  obj2019.vendas + compra.total
                obj2019.ICMS =  obj2019.ICMS + compra.ICMS
                obj2019.ST = obj2019.ST + compra.ST
            }
            if (splitArr[1] === '2020') {
                obj2020.vendas =  obj2020.vendas + compra.total
                obj2020.ICMS =  obj2020.ICMS + compra.ICMS
                obj2020.ST = obj2020.ST + compra.ST
            }
            if (splitArr[1] === '2021') {
                obj2021.vendas =  obj2021.vendas + compra.total
                obj2021.ICMS =  obj2021.ICMS + compra.ICMS
                obj2021.ST = obj2021.ST + compra.ST
            }
        })
        vendas.map((venda, index) => {
            const splitArr = venda.data.split('/')
            if (splitArr[1] === '2017') {
                obj2017.compras = obj2017.compras + venda.total
            }
            if (splitArr[1] === '2018') {
                obj2018.compras = obj2018.compras + venda.total
            }
            if (splitArr[1] === '2019') {
                obj2019.compras = obj2019.compras + venda.total
            }
            if (splitArr[1] === '2020') {
                obj2020.compras = obj2020.compras + venda.total
            }
            if (splitArr[1] === '2021') {
                obj2021.compras = obj2021.compras + venda.total
            }
        })
        
        let aux = [
            {
                ...obj2017
            },
            {
                ...obj2018
            },
            {
                ...obj2019
            },
            {
                ...obj2020
            },
            {
                ...obj2021
            },
        ]
        res.send(aux)
        
    } catch (e) {
        res.send(e.message)
        
    }
}