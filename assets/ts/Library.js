import { arrBook } from './Data.js';
import { view } from './script.js';
import { getAllBooks } from './script.js';
import ReferenceBook from './ReferenceBook.js';
export default class Library {
    static addBook(book) {
        (book.getCategory() == "Textbook") ?
            arrBook.textbooks.push(book) :
            (book instanceof ReferenceBook) ?
                arrBook.references.push(book) : arrBook.generalBooks.push(book);
        view(getAllBooks());
    }
    static removeBook(book) {
        (book.getCategory() == "Textbook") ?
            arrBook.textbooks = arrBook.textbooks.filter(b => b.getTitle() !== book.getTitle())
            : (book.getCategory() == "Reference") ?
                arrBook.references = arrBook.references.filter(b => b.getTitle() !== book.getTitle())
                : arrBook.generalBooks = arrBook.generalBooks.filter(b => b.getTitle() !== book.getTitle());
        view(getAllBooks());
    }
    static searchBooks(textSearch, arrayBook) {
        let text = textSearch.trim().toLowerCase();
        return arrayBook.filter(book => book.getTitle().toLowerCase().includes(text) || book.getAuthor().toLowerCase().includes(text));
    }
    static filterByCategory(category, arrayBook) {
        return (category == "Textbook") ? arrayBook.textbooks : (category == "Reference") ? arrayBook.references : arrayBook.generalBooks;
    }
    static toggleAvailability(book) {
        book.setIsAvailable(!book.getIsAvailable());
    }
}
