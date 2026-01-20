const chaiFlavours: string[] = ["masala", "ginger"]
const chaiPrice: number[] = [10,20]

const rating: Array<number> = [4.5,5.0]

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "Masala", price: 25},
    {name: "Ginger", price: 25},
]

// menu.push() // Changes can be done to menu 1111

const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push()  //We can't push or change cities as its readonly

//2D-Array
const table: number[][] = [
    [1,2,3],
    [4,5,6]
]

//TUPLES

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]
// chaiTuple = [20, "Masala"] //Order of tuples can't be changed

//Optional variable in tuples
let userInfo: [string, number, boolean?]
userInfo = ["kushaal", 100]
userInfo = ["kushaal", 100, true]

//Readonly Tuples
const location: readonly [number, number] = [32.4434, 3323.434]

const chaiItems: [name: string, price:number] = ["Masala", 25]



//ENUMS
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.MEDIUM

enum Status {
    PENDING = 100,
    SERVED, //automatically gets 101
    CANCELLED, //automatically gets 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)
// makeChai("masala") //Gets error


//Standard practice is to keep the enums of same type - not mixed like here( string and number )
enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

// Const enum 
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

let t: [string, number] = ["chai", 10]
t.push("extra")