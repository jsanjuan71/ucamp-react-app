module.exports = {
    moneyFormat: (amount) => amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) // $2,500.00
    
}