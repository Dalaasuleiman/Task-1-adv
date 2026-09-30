import Book from "./Book.js";
import ReferenceBook from "./ReferenceBook.js";
export let arrBook = {
    textbooks: [
        new Book("OOP Principles & Design", "Dr. Ahmed", "Textbook"),
        new Book("Data Structures & Algorithms", "Dr. Khaled", "Textbook"),
        new Book("Database Systems Fundamentals", "Dr. Sarah", "Textbook"),
        new Book("Computer Networks Architecture", "Eng. Omar", "Textbook"),
    ],
    references: [
        new ReferenceBook("Software Engineering: A Practitioner's Approach", "Roger Pressman", "Reference", "A1-Shelf3"),
        new ReferenceBook("Artificial Intelligence: A Modern Approach", "Stuart Russell", "Reference", "B2-Shelf1"),
        new ReferenceBook("Operating System Concepts", "Abraham Silberschatz", "Reference", "C3-Shelf4"),
        new ReferenceBook("Clean Code: A Handbook of Agile Software Craftsmanship", "Robert C. Martin", "Reference", "D4-Shelf2"),
    ],
    generalBooks: [
        new Book("Atomic Habits", "James Clear", "General"),
        new Book("The Art of Time Management", "Brian Tracy", "General"),
        new Book("Thinking, Fast and Slow", "Daniel Kahneman", "General"),
        new Book("Deep Work", "Cal Newport", "General")
    ]
};
