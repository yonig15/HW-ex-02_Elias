//3)In JavaScript there is several ways to create objects,
//  define an object that represent Tsionet structure.

class Tsionet {
  Name: string;
  Id: number;
  CEO: string;
  Establish_Year: number;
  constructor(Name: string, Id: number, CEO: string, Establish_Year: number) {
    this.Name = Name;
    this.Id = Id;
    this.CEO = CEO;
    this.Establish_Year = Establish_Year;
  }
}

let Tsionet1 = new Tsionet("Tsionet", 23213321, "orna kotler", 1994);
console.log(Tsionet1);
