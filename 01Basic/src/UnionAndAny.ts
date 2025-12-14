// | Union Types
// A variable that can hold multiple types

let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';
apiRequestStatus = 'success';

let airLineSeat: 'aisle' | 'window' | 'middle';
airLineSeat = 'aisle';

const orders = ['12', '23', '45'];
//If we don't give string type, currentOrder will be of type any
let currentOrder: string | undefined;

for(let order of orders){
    if(order === '23'){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);