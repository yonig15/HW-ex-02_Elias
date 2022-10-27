"use strict";
//3)In JavaScript there is several ways to create objects,
//  define an object that represent Tsionet structure.
class Tsionet {
    constructor(Name, Id, CEO, Establish_Year) {
        this.Name = Name;
        this.Id = Id;
        this.CEO = CEO;
        this.Establish_Year = Establish_Year;
    }
}
let Tsionet1 = new Tsionet("Tsionet", 23213321, "orna kotler", 1994);
console.log(Tsionet1);
