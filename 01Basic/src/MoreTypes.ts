let response: any = "42" //even after initializing with string the reponse will still remain any

let numericLength: number = (response as string).length //Forceful Type Assertion when we know the type of

type Book = {
    name: string
}

let bookString = '{"name": "i dont know"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name); //we get name for bookObject if we do type assertion, otherwise we wont get name 

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any
value = "chai"
value = [1,2,3]
value = 2.5

value.toUpperCase() //No error in editor is value is any
let newvalue: unknown
newvalue = "chai"
newvalue = [1,2,3]
newvalue = 2.5

// newvalue.toUpperCase() // error in editor is value is unknown

if(typeof newvalue === "string"){
    newvalue.toUpperCase()
}

try {
    
} catch (error: any) {
    console.log(error.message); // There could be case where error has no message as it not an instance of Error
}

try {
    
} catch (error) {
    if(error instanceof Error)
        console.log(error.message); //Better approach
}


const data: unknown = "chai or code"
const strData: string = data as string // Forceful Type Assertion if we want to use data value


type Role = "admin" | "user"

function redirectBasedOnRole(role: Role): void {
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return;
    }
    role; //Shows never datatype as all the type of user are handled 
        // if we add a third role, then this role will get that datatype automatically
}

function noReturn():never { //A funtion never retiurns anything like in case of infinite loop (server running constantly)
    while(true) {

    }
}