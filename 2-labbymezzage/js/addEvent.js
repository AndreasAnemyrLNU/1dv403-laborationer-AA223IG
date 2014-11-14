"use strict";


var b = document.body;

var c = document.createElement("div");
c.setAttribute("href", "#");

c.style.width = "200px";
c.style.height = "200px";
c.style.border = "1px solid black";


var text = document.createTextNode("Lorem Ipsum Lorem Ipsum...");

c.appendChild(text);

console.log(c.getAttribute("href"));

b.appendChild(c);

c.addEventListener("click", testAlert, false);

function testAlert(){

    this.style.backgroundColor = "red";
    this.style.float = "right";

}


