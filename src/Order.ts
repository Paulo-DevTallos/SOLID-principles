import { Item } from "./Item";
import { MessageData } from "./MessageData";
import { TaxItem } from "./TaxItem";

export class Order {
    items: Item[];
    messageData: MessageData;

    constructor(messageData: MessageData) {
        this.items = [];
        this.messageData = messageData;
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }

        return total;
    }

    getTaxes() {
        let taxes = 0;
        for (const item of this.items) {
            if (item instanceof TaxItem) { // verifica qual item possui uma instancia de TaxItem
                taxes += item.calculateTax();
            }
        }
        
        return taxes;
    }

    async printMessage(language: string) {
        const message = await this.messageData.read(language)
        return message.replace("{total}", this.getTotal() + "").replace("{taxes}", this.getTaxes() + "");
    }
}