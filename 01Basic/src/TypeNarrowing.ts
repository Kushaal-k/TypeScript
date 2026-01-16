function getChai(kind : string | number){
    if(typeof kind === 'string'){
        console.log(`Making ${kind} chai....`);
    }
    return `Chai order: ${kind}`;
}

function serveChai(message?: string){
    if(message){
        return (`Serving ${message}`);
    }
    return "Serving default chai";
}

function orderChai(size: 'small' | 'medium' | 'large' | number){
    if(size === 'small'){
        return 'small cutting chai...'
    }
    else if(size === 'medium' || size === 'large'){
        return 'making extra chai...'
    }
    return `chai order size : ${size}`;
}

class KulhadChai{
    serve(){
        return 'Serving chai in kulhad';
    }
}

class Cutting{
    serve(){
        return 'Serving cutting chai';
    }
}

function serve(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder{
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving order of ${item.type} with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}

type MasalaChai = {
    type: 'masala'
    spiceLevel: number
}
type GingerChai = {
    type: 'ginger'
    amount: number
}
type ElaichiChai = {
    type: 'elaichi'
    aromaLevel: number
}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai){
    switch(order.type){
        case "masala":
            return `Masala Chai`
            break;
        case 'ginger':
            return `Ginger Chai`
            break;
        case 'elaichi':
            return `Elaichi Chai`
            break;
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spoiceLevel" in order){
        return `Brewing masala chai with spice level ${order.spoiceLevel}`;
    }
}
