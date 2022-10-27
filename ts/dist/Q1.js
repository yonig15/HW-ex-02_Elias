"use strict";
// 1) Given a string, that contains a special character together with alphabets
// (‘a’ to ‘z’ and ‘A’ to ‘Z’), reverse the string in a way that special characters are not affected.
let str = "a,b$c";
let strRev = str.split("").reverse().join("");
function UNIQ_Revers() {
    let strLast = "";
    for (let i = 0, j = 0; i < str.length; ++i) {
        if (/[a-zA-Z]/.test(str[i]) !== true) {
            strLast += str[i];
        }
        else {
            //searching letters from reversed string
            while (/[a-zA-Z]/.test(strRev[j]) !== true) {
                j++;
            }
            strLast += strRev[j];
            j++;
        }
    }
    return strLast;
}
console.log("UNIQ Revers: " + UNIQ_Revers());
