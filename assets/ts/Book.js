export default class Book {
    title;
    author;
    category;
    isAvailable;
    constructor(title, author, category) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.isAvailable = true;
    }
    setTitle(title) { this.title = title; }
    ;
    setAuthor(author) { this.author = author; }
    ;
    setCategory(category) { this.category = category; }
    ;
    setIsAvailable(isAvailable) { this.isAvailable = isAvailable; }
    ;
    getTitle() { return this.title; }
    ;
    getAuthor() { return this.author; }
    ;
    getCategory() { return this.category; }
    ;
    getIsAvailable() { return this.isAvailable; }
    ;
    displayInfo() {
        return `Title Book: ${this.title}, Author: ${this.author}, Category: ${this.category}`;
    }
}
