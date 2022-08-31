export class BookModel {
    bookId!:number;   
    bookName!: string;
    author!: string;
    bookDescription!: string;
    bookLogo!: string;
    price!: number;
    quantity!: number;
    
    constructor(bookName:string,author:string,bookDescription:string,bookLogo:string,price:number,quantity:number){
        this.bookDescription=bookDescription;
        this.bookName=bookName;
        this.author=author;
        this.price=price;
        this.quantity=quantity;
        this.bookLogo=bookLogo;
    }

}
