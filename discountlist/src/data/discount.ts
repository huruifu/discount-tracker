export class DiscountItem {
    constructor (
        public id: number, 
        public store: string, 
        public productLink: string, 
        public imageLink: string, 
        public description: string, 
        public discountPercentage: number, 
        public price: number, 
        public originalPrice: number) {}
}