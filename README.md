# Library Management System

## About
A web-based Library Management System built using pure TypeScript and Object-Oriented Programming (OOP) principles, with no external libraries.

## OOP Concepts
1. **Encapsulation:** Used private properties with getters and setters.
2. **Inheritance:** `ReferenceBook` extends the main `Book` class.
3. **Polymorphism:** Overrode `displayInfo()` for reference books.
4. **Abstraction:** Put the core logic in a `Library` class.

## Files
* `Book.ts` - Main book class
* `ReferenceBook.ts` - Subclass for references
* `Library.ts` - Main functions (add, remove, search, filter)
* `Data.ts` - Initial books data
* `script.ts` - DOM and UI handling

## Features
* View books by categories
* Search and filter books easily
* Toggle book availability
