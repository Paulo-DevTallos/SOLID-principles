export abstract class Item {
    constructor(
        public category: string, 
        public description: string, 
        public price: number
    ) {}
}