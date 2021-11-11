
const promiseMaker = () => new Promise(promiseReturn)

const resolveAction = (result, name) => console.log(`${name} Your trip stops are ${result.tripStops} and your driver is ${result.driver}`) 

const rejectionAnswer = ({message}, name) => console.log(`${message}, get rekt noob -> ${name}`);


let driverNumber = 3;

function promiseReturn(resolve,reject){
    console.log('Putting in order')
    if(driverNumber >= 1){
        driverNumber--;
        setTimeout(() =>{
            const result = { tripStops: ['London', 'Oxford', 'Manchester'], driver: 'Bob' };
            resolve(result); //returns what we asked
        },1000)
    }else{
        const error = {message: 'out of drivers'}
        setTimeout(() => {
            console.log('No available drivers')
            reject(error)
        })
        //reject(e); //reject reutrns the error
    }
}

module.exports = { promiseMaker, resolveAction, rejectionAnswer }