"use strict";

let navBar = document.getElementById("navId");
navBar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark fixed-top");
let container = document.createElement("div");
container.setAttribute("class", "collapse navbar-collapse");
let barHeader = document.createElement("div");
barHeader.setAttribute("class", "navbar-header");
barHeader.setAttribute("class", "navbar-brand");
barHeader.innerText = "abalo";

let navData = ['Home', 'Kategorien', 'Verkaufen', 'Unternehmen'];
let unternehmenData = ['Philosophie', 'Karriere'];
let unList = document.createElement("ul");
unList.setAttribute("class", "navbar-nav");

// Iterate navData
navData.forEach(function(value) {
    let li = document.createElement('li');
    let link = document.createElement("a");
    link.innerText = value;
    li.setAttribute("class", "nav-item");
    link.setAttribute("class", "nav-link");
    link.setAttribute("href", "#");
    li.appendChild(link);
    unList.appendChild(li);
    if (value === 'Unternehmen') {
        li.innerText = "";
        li.setAttribute("class", "nav-item dropdown");
        li.setAttribute("id", "dropDownList");
        let link = document.createElement("a");
        link.innerText = value;
        link.setAttribute("class", "nav-link dropdown_toggle");
        link.setAttribute("id", "navbarDropdownMenuLink");
        link.setAttribute("data-toggle", "dropdown");
        link.setAttribute("aria-haspopup", "true");
        link.setAttribute("aria-expanded", "false");
        link.setAttribute("href", "#");
        li.appendChild(link);
        let innerUnList = document.createElement('div');
        innerUnList.setAttribute("id", "dr-menu");
        innerUnList.setAttribute("class", "dropdown-menu");
        innerUnList.setAttribute("aria-labelledby", "navbarDropdownMenuLink");
        // innerUnList.style.backgroundColor = "black";

        unternehmenData.forEach((item) => {
            let link = document.createElement("a");
            link.setAttribute("class", "dropdown-item");
            link.innerText = item;
            link.setAttribute("href", "#");
            // link.style.textDecoration = "none";
            // link.style.color = "white";
            // let li2 = document.createElement('li');
            // li2.appendChild(link);
            innerUnList.appendChild(link);
        });

        li.appendChild(innerUnList);
    }
});

container.append(barHeader, unList);
navBar.appendChild(container);

document.getElementById("dropDownList").onclick = function () {
    document.getElementById("dropDownList").classList.toggle("show");
    document.getElementById("dr-menu").classList.toggle("show");
    document.getElementById("navbarDropdownMenuLink").toggleAttribute("aria-expanded");
}


