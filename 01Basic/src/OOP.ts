// class Chai {
//     flavour: string;
//     price: number

//     // constructor(flavour: string, price: number){
//     //     this.flavour = flavour;
//     //     this.price = price
//     // }

//     constructor(flavour: string){
//         this.flavour = flavour;
//         console.log(this);
//     }
// }


// const MasalaChai = new Chai("Ginger")
// MasalaChai.flavour = "masala"



class Chai {
    public flavour: string = "Masala"
    
    private secretIngredients = "Cardamom"

    reveal(){
        return this.secretIngredients
    }
}

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName
    }
}

const c = new Chai();


class Wallet {
    #balance = 100 //Private using #

    getBalance(){
        return this.#balance
    }
}

const w = new Wallet();

class Cup{
    readonly capacity: number = 250
}

class ModernChai {
    private _sugar = 2 //

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        this._sugar = value
    }
}


class EkChai {
    static shopName = "Chai cafe"

    constructor(public flavour: string){}
}

console.log(EkChai.shopName);

abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make(): void {
        console.log("I am an abstract function");
    }
}

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){
        
    }

    make(){
        this.heater.heat
    }
}

