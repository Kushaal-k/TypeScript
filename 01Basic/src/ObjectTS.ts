// type Chai =  { 
//     name: "Masala Chai",
//     price: 20,
//     isHot: true,
// }

// It will automatically understand the variable types 
// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 40,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const gingerTea: Tea = {
    name: "Ginger Tea",
    price: 20,
    ingredients: ["Milk", "Water"]
}

type Cup = {size: string};
let smallCup: Cup = {size : "200ml"}
let largeCup = {size : "500ml", material: "steel"}

smallCup = largeCup // There is no error as minimum criteria is satisfied i.e. size

type User = {
    username: string;
    password: string
}

const u: User = {
    username: "Kush",
    password: "123" //error if we dont give password
}


type Item= {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[]
    address: Address
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}


//With partial we can partially update the variable or even pass nothing
const updateChai = (updates: Partial<Chai>) => {
    console.log(updates);
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})

type ChaiOrder = {
    name? : string;
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

// placeOrder({}) //If we use required, then it is mandatory to pass all variable even if the variable is optional 
placeOrder({
    name: "Kush",
    quantity: 1
})

type Chai1 = {
    name: string;
    price: number;
    quantity: number;
    ingredients: string[]
}

//With pick we could select the property/variable that we need from the type
type BasicChaiInfo = Pick<Chai, "name" | "price">

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

type Chai2 = {
    name: string;
    price: number;
    quantity: number;
    secretIngredients: string[]
}

//Omit is used if we want to remove 
type PublicChai = Omit<Chai, "secretIngredients">