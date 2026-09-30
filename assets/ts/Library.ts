import {arrBook} from './Data.js'
import { ArrBookData } from './Data.js';
import Book from './Book.js'
import { view } from './script.js';
import { getAllBooks } from './script.js';
import ReferenceBook from './ReferenceBook.js';

export default class Library {

    static addBook(book : Book|ReferenceBook ): void{
    (book.getCategory()=="Textbook")?
        arrBook.textbooks.push(book):
        (book instanceof ReferenceBook)?
        arrBook.references.push(book):arrBook.generalBooks.push(book);
        view(getAllBooks())
    }

    static removeBook(book : Book): void{
    (book.getCategory()=="Textbook")?
        arrBook.textbooks = arrBook.textbooks.filter(b => b.getTitle() !== book.getTitle())
            :(book.getCategory()=="Reference")?
                arrBook.references = arrBook.references.filter(b => b.getTitle() !== book.getTitle())
                : arrBook.generalBooks = arrBook.generalBooks.filter(b => b.getTitle() !== book.getTitle());
                view(getAllBooks())
        }

        static searchBooks(textSearch : string , arrayBook : Array<Book>  ):Array<Book> {
            let text : string = textSearch.trim().toLowerCase();

        return arrayBook.filter(book => 
            book.getTitle().toLowerCase().includes(text) || book.getAuthor().toLowerCase().includes(text)
        );
        }

        static filterByCategory(category : string , arrayBook : ArrBookData) : Array<Book>{
            return (category=="Textbook")? arrayBook.textbooks:(category=="Reference")? arrayBook.references : arrayBook.generalBooks;
        }

        static toggleAvailability(book : Book): void{
            book.setIsAvailable(!book.getIsAvailable())

        }
}