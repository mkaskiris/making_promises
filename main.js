
const {promiseMaker, rejectionAnswer, resolveAction} = require('./promise');

function placeOrder(customer){
    console.log(`${customer} looking for a ride`);

    promiseMaker()
        .then(r => resolveAction(r, customer))
        .catch(e => rejectionAnswer(e, customer))
}

let customer = ['John', 'Mary', 'Lucas', 'Emma', 'Paul'];

for(let c of customer){
    placeOrder(c);
}