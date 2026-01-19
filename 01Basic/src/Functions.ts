function makeChai(type: string, cups: number) {
	//Types of parameter
	console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala Chai", 2);

function getChaiPrice(): number {
	//Return type of function
	return 4;
}

function makeOrder(order: string): string | null {
	//If return type is string- we will get error as we are also returning null in one case
	if (!order) return null;
	return order;
}

function logChai(): void {
	//If a function is not returning anything we use void type
	console.log("Chai");
}

//Optional parameters
function orderChai(type?: string) {
	console.log();
}

function orderChai2(type: string = "Masala") {
	console.log();
}

function createChai(order: {
	type: string;
	sugar: number;
	size: "small" | "large";
}): number {
	return 10;
}
