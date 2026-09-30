import Book from "./Book.js";
import { BookCategory } from "./Book.js";

export default class ReferenceBook extends Book{
    private  locationCode  : string;
    constructor(title:string , author : string , category :BookCategory ,locationCode :string){
        super(title , author , category );
        this.locationCode  = locationCode;
    }

    setLocationCode (locationCode : string) : void {
        this.locationCode = locationCode;
    } 

    getLocationCode () : string {return this.locationCode}

    displayInfo () :string{ return `${super.displayInfo()} , LocationCode : ${this.locationCode}`}
}