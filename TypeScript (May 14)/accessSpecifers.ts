class Product {
    protected name = 'Rahul';
    protected price = 20;
    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
    display(): void{
        console.log(this.name);
        console.log(this.price);
    }
}
let product1 = new Product('Asus Vivobook', 75000);
product1.display();

class ProductTax extends Product {
protected tax: number;
constructor(name: string, price: number, tax: number){
super(name,price);
this.tax=tax;
}
display(): void{
    super.display();
    console.log(this.tax);
}
getNetPrice(): number {
    return this.price + this.price * this.tax/100;
}

}

var pt = new ProductTax('Asus Vivobook', 75000, 28);
pt.display();
console.log('The Net Price is : ' + pt.getNetPrice());