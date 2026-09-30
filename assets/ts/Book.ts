export type BookCategory = "Textbook" | "Reference" | "General";

export default class Book{
    private title : string;
    private author : string;
    private category :BookCategory;
    private isAvailable : boolean;
    constructor(title:string , author : string , category :BookCategory){
        this.title = title;
        this.author = author;
        this.category = category;
        this.isAvailable = true
    }
    setTitle(title : string):void {this.title = title};
    setAuthor(author : string):void {this.author = author};
    setCategory(category : BookCategory):void {this.category = category};
    setIsAvailable(isAvailable : boolean):void {this.isAvailable = isAvailable};

    getTitle():string { return this.title};
    getAuthor():string { return this.author};
    getCategory():BookCategory { return this.category};
    getIsAvailable():boolean { return this.isAvailable};
    
    displayInfo () :string{
        return `Title Book: ${this.title}, Author: ${this.author}, Category: ${this.category}`;
    }
}
