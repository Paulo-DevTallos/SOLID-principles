import { TaxItem } from "./TaxItem";

export class Wisky extends TaxItem {
    constructor(description: string, price: number) {
        super("Wisky", description, price)
    }

    getTax(): number {
        return 20;
    }
}