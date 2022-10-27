//7)Create html page that include CSS and JavaScript and connect the to html page.

const MyList = document.querySelector("#Family");
const listFamily = document.createElement("li");
listFamily.textContent = "KazaBlan";
MyList?.append(listFamily);

const title = document.getElementById("mytitle");
title?.style.backgroundColor = "rgb(50,200,200)";
title?.style.textAlign = "center";
title?.style.border = "2px solid";
