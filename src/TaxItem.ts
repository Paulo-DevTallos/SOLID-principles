import { Item } from "./Item";

export abstract class TaxItem extends Item {
    calculateTax() {
        // reponsabilidade de calcular as taxas sao de Item
        return (this.price * this.getTax()) / 100;

    }

    abstract getTax(): number;
}