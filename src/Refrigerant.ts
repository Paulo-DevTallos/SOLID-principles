import { TaxItem } from "./TaxItem";

export class Refrigerant extends TaxItem {
    constructor(description: string, price: number) {
        super("Refrigerante", description, price)
        
    }
    
    getTax(): number {
        return 10;
    }
}