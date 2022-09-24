const getCustomersDashboard = new Promise((resolve) => {
    setTimeout(() => {
        resolve('data Customers')
    }, 3000);
})
const getPaymentsDashboard = new Promise((resolve) => {
    setTimeout(() => {
        resolve('data Payments')
    }, 2000);
})
const getTransactionsDashboard = new Promise((resolve) => {
    setTimeout(() => {
        resolve('data Transactions')
    }, 4000);
})


Promise.all([getCustomersDashboard, getPaymentsDashboard, getTransactionsDashboard])
    .then((value) => {
        console.log(value) //  [ 'data Customers', 'data Payments', 'data Transactions' ]
    })

