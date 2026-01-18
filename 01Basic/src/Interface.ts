// function makeChai(order: {type: string; sugar: number; strong: boolean}) {
//     console.log(order);
// }

// function serveChai(order: {type: string; sugar: number; strong: boolean}){
//     console.log(order);
// }

//Both function has same signature - so we can make a Type 

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
}

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

// type CupSize = "small" | "large"

// class Chai implements CupSize { //This won't work 
    
// }

interface CupSize {
    size: "small" | "large";
}

class Chai implements CupSize {
    size: "small" | "large" = "large"
}

// type Response = {ok: true} | {ok: false}
// class Res implements Response{           //This also wont work
//     ok: boolean = false;
// }

type Tea = "ginger" | "masala" | "lemon"
function orderChai(t: Tea){
    console.log(t);
}



type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaTea = BaseChai & Extra

const cup: MasalaTea = {
    teaLeaves: 2,
    masala: 3
}

//Optional values
type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "Kushaal"}
const u2: User = {username: "Kushaal", bio: "kush.ai"}

//Readonly values
type Config = {
    readonly appname: string
    version: number
}

const cfg: Config = {
    appname: "COD",
    version: 1
}

// cfg.appname = "PUBG" //Can't be changed as its only read only 