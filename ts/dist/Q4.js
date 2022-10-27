"use strict";
// 4)	In JavaScript with are using the … operator over objects arrays and function, using this operator
// a.	Clone array of numbers
// b.	Get array first and second elements
// c.	Get array first and second elements and the rest put them in one element
// d.	Define simple object of person and get the first name and last name using …
// e.	Define function that receive a and b elements and the rest of elements put them in args property. (Rest Parameter and Spread Operator).
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
console.log("-------------- a -----------------");
// a
let numArr = [2, 4, 5, 6, 7, 8, 8, 9];
let cloneArr = [...numArr];
console.log(cloneArr);
console.log("-------------- b -----------------");
//b
let firstSecond = [[...numArr][0], [...numArr][1]];
console.log(firstSecond);
console.log("-------------- c -----------------");
//c
let lastArr = [];
let first, second, lastNums;
[first, second, ...lastNums] = numArr;
console.log(first, second, lastNums);
console.log("-------------- d -----------------");
//d
let person = {
    fName: "Yoni",
    lName: "Golan",
    age: 28,
    id: 205394984,
};
let { fName, lName } = person, otherInfo = __rest(person, ["fName", "lName"]);
console.log(fName);
console.log(lName);
console.log("-------------- e -----------------");
//e
function addPerson2(_a = person) {
    var { fName, lName } = _a, rest = __rest(_a, ["fName", "lName"]);
    return { fName: fName, lName: lName, args: rest };
}
let person2 = addPerson2();
console.log(person2);
