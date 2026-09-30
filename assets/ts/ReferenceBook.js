import Book from "./Book.js";
export default class ReferenceBook extends Book {
    locationCode;
    constructor(title, author, category, locationCode) {
        super(title, author, category);
        this.locationCode = locationCode;
    }
    setLocationCode(locationCode) {
        this.locationCode = locationCode;
    }
    getLocationCode() { return this.locationCode; }
    displayInfo() { return `${super.displayInfo()} , LocationCode : ${this.locationCode}`; }
}
