"use strict";
//7)Create html page that include CSS and JavaScript and connect the to html page.
const MyList = document.querySelector("#Family");
const listFamily = document.createElement("li");
listFamily.textContent = "KazaBlan";
MyList === null || MyList === void 0 ? void 0 : MyList.append(listFamily);
const title = document.getElementById("mytitle");
title === null || title === void 0 ? void 0 : title.style.backgroundColor = "rgb(50,200,200)";
title === null || title === void 0 ? void 0 : title.style.textAlign = "center";
title === null || title === void 0 ? void 0 : title.style.border = "2px solid";
