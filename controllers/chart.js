const compras = require('../json/compras.json')
const vendas = require('../json/vendas.json')

module.exports.chartSource = (req,res) => {
    try {
        let totalCompras = 0
        let totalCompras2017 = 0
        let totalCompras2018 = 0
        let totalCompras2019 = 0 
        let totalCompras2020 = 0 
        let totalCompras2021 = 0

        let totalVendas = 0
        let totalVenda2017 = 0
        let totalVenda2018 = 0
        let totalVenda2019 = 0
        let totalVenda2020 = 0
        let totalVenda2021 = 0

        compras.map((compra,index) => {
            const splitArr = compra.data.split('/')
            if (splitArr[1] === '2017') {
                totalCompras2017 = compra.total + totalCompras2017
                totalCompras = compra.total + totalCompras
            }
            if (splitArr[1] === '2018') {
                totalCompras2018 = compra.total + totalCompras2018
                totalCompras = compra.total + totalCompras
            }
            if (splitArr[1] === '2019') {
                totalCompras2019 = compra.total + totalCompras2019
                totalCompras = compra.total + totalCompras
            }
            if (splitArr[1] === '2020') {
                totalCompras2020 = compra.total + totalCompras2020
                totalCompras = compra.total + totalCompras
            }
            if (splitArr[1] === '2021') {
                totalCompras2021 = compra.total + totalCompras2021
                totalCompras = compra.total + totalCompras
            }
        })

        vendas.map((venda, index) => {
            const splitArr = venda.data.split('/')
            if (splitArr[1] === '2017') {
                totalVenda2017 = totalVenda2017 + venda.total
                totalVendas = venda.total + totalVendas
            }
            if (splitArr[1] === '2018') {
                totalVenda2018 = totalVenda2018 + venda.total
                totalVendas = venda.total + totalVendas
            }
            if (splitArr[1] === '2019') {
                totalVenda2019 = totalVenda2019 + venda.total
                totalVendas = venda.total + totalVendas
            }
            if (splitArr[1] === '2020') {
                totalVenda2020 = totalVenda2020 + venda.total
                totalVendas = venda.total + totalVendas
            }
            if (splitArr[1] === '2021') {
                totalVenda2021 = totalVenda2021 + venda.total
                totalVendas = venda.total + totalVendas
            }
        })

        let TotalSaldo = totalCompras - totalVendas

        function calcularPorcent(valor1, valor2, valor3) {
            let saldo = valor1 - valor2
                    
            if (saldo < valor3) {
                let result = (saldo / valor3) * 100 
                return Math.round(result) + '%'
            } else {
                let result = (valor3 / saldo) * 100 
                return Math.round(result) + '%'
            }

        }
        
        function acharSaldo(valor1, valor2) {
            return valor1 - valor2
        }
        let aux = [
            {
                ano : '2017',
                saldo : acharSaldo(totalCompras2017,totalVenda2017),
                porcentagem:  calcularPorcent(totalCompras2017,totalVenda2017, TotalSaldo)
            },
            {
                ano : '2018',
                saldo : acharSaldo(totalCompras2018, totalVenda2018),
                porcentagem:  calcularPorcent(totalCompras2018,totalVenda2018, TotalSaldo)
            },
            {
                ano : '2019',
                saldo : acharSaldo(totalCompras2019, totalVenda2019),
                porcentagem:  calcularPorcent(totalCompras2019,totalVenda2019, TotalSaldo)
            },
            {
                ano : '2020',
                saldo : acharSaldo(totalCompras2020, totalVenda2020),
                porcentagem:  calcularPorcent(totalCompras2020,totalVenda2020, TotalSaldo)
            },
            {
                ano : '2021',
                saldo : acharSaldo(totalCompras2021, totalVenda2021),
                porcentagem:  calcularPorcent(totalCompras2021,totalVenda2021, TotalSaldo)
            },
        ]
        
        res.send(aux)
    } catch (e) {
        res.status(400).send('error :' + e.message)
    }
}