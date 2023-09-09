import { Item } from "./Item";
import { MessageDataFile } from "./MessageDataFile";
import { Order } from "./Order";
import { Refrigerant } from "./Refrigerant";
import { Water } from "./Water";
import { Wisky } from "./Wisky";

const makeSut = () => {
    const messageData = new MessageDataFile();
    const order = new Order(messageData);

    return order;
}

describe("Order", () => {
    it ("Should create a order and calculate total", () => {
        // given - dado que eu tenha eu crio o novo pedido...
        const order = makeSut();
        order.addItem(new Refrigerant("coca-cola", 10)); // 10%
        order.addItem(new Wisky("Jack Daniels", 100)); // 20%
        order.addItem(new Water("Agua", 5)); // livre de impostos
        // when - quando eu 
        const orderTotal = order.getTotal();
        // then - eu espero
        expect(orderTotal).toBe(115);
    });

    it ("Should create a order and calculate taxes", () => {
        const order = makeSut();
        order.addItem(new Refrigerant("coca-cola", 10));
        order.addItem(new Wisky("Jack Daniels", 100));
        order.addItem(new Water("Agua", 5));
        const taxes = order.getTaxes();
        expect(taxes).toBe(21);
    });

    it ("Should create a order and print one message in PT", async () => {
        const order = makeSut();
        order.addItem(new Refrigerant("coca-cola", 10));
        order.addItem(new Wisky("Jack Daniels", 100));
        order.addItem(new Water("Agua", 5));
        const message = await order.printMessage("pt");
        expect(message).toBe("O total foi de R$115, Os impostos foram 21%, Obrigado pela compra!");
    });

    it ("Should create a order and print one message in EN", async () => {
        const order = makeSut();
        order.addItem(new Refrigerant("coca-cola", 10));
        order.addItem(new Wisky("Jack Daniels", 100));
        order.addItem(new Water("Agua", 5));
        const message = await order.printMessage("en");
        expect(message).toBe("The total was R$115, the taxes was 21%, Thank you for your order!");
    }); 
});