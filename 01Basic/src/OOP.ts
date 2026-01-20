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
}