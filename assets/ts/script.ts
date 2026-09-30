import {arrBook} from './Data.js'
import { ArrBookData } from './Data.js'
import Library from './Library.js'
import Book from './Book.js'
import ReferenceBook from './ReferenceBook.js'
const containerBooks : HTMLElement | null = document.querySelector('.container')
const viewall :HTMLButtonElement  | null = document.querySelector(".DS_ALL")
const search :HTMLInputElement | null   = document.querySelector(".DS_SearchInput")
const CategorySelect : HTMLSelectElement | null = document.querySelector(".DS_CategorySelect")

export function getAllBooks(): (Book | ReferenceBook)[] {
    return [
        ...arrBook.textbooks,
        ...arrBook.references,
        ...arrBook.generalBooks
    ];
}
export function view(books: Array<Book>): void {
if(containerBooks){
    containerBooks.innerHTML = 
        books.map(book =>{

            return `
            <div class="DS_Card">
                <h2>${book.getTitle()}</h2>
                <p>Author: ${book.getAuthor()}</p>
                <p>Category: ${book.getCategory()}</p>
                <p>Available: ${book.getIsAvailable() ? "Yes" : "No"}</p>
                ${book instanceof ReferenceBook ? `<p>Location: ${book.getLocationCode()}</p>` : ""}
                <button data-title="${book.getTitle()}" class="DS_BtnAvail" >Available</button>
            </div>
        `
}).join('');
        const buttons = containerBooks.querySelectorAll('.DS_BtnAvail');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const title = button.getAttribute('data-title');
                if (title) {
                    const book = getAllBooks().find(b => b.getTitle() === title);
                    if (book) {
                        Library.toggleAvailability(book);
                        viewFilter();
                        console.log("toggle Availability");
                    }
                }
            });
        });
    }};
    view(getAllBooks())


    const viewFilter  = (): void => {
        let arr:ArrBookData ={...arrBook};
        let arrfilter: Array<Book> =  getAllBooks();

        const categoryValue = CategorySelect ? CategorySelect.value : "";
        const searchValue = search ? search.value.trim() : "";
        if(categoryValue){
            arrfilter = Library.filterByCategory(categoryValue , arr)
        }
        if(searchValue){
            arrfilter= Library.searchBooks(searchValue , arrfilter)
        }
        view(arrfilter);
    }



    search?.addEventListener("input" , viewFilter)
    CategorySelect?.addEventListener("change" , viewFilter)
    viewall?.addEventListener("click" , () :void=>{if (search) search.value = "";
            if (CategorySelect) CategorySelect.value = "";
            view(getAllBooks());})





// let dalaa : Book =new Book("DALAA SULEIMAN ", "Dr. Ahmed", "Textbook")
// Library.addBook(dalaa)
// Library.removeBook(dalaa)
