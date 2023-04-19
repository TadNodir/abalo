"use strict";
document.body.innerHTML = "<nav id=\"navId\"></nav>\n" +
                          "<article id=\"articleId\"></article>";

let navBar = document.getElementById("navId");
navBar.setAttribute("class", "navbar navbar-inverse navbar-fixed-top");
let container = document.createElement("div");
container.setAttribute("class", "container-fluid");
let barHeader = document.createElement("div");
barHeader.setAttribute("class", "navbar-header");
barHeader.setAttribute("class", "navbar-brand");
barHeader.innerText = "abalo";

let navData = ['Home', 'Kategorien', 'Verkaufen', 'Unternehmen'];
let unternehmenData = ['Philosophie', 'Karriere'];
let unList = document.createElement("ul");
unList.setAttribute("class", "nav navbar-nav");

// Iterate navData
navData.forEach(function(value) {
    let li = document.createElement('li');
    let link = document.createElement("a");
    link.innerText = value;
    li.appendChild(link);
    unList.appendChild(li);
    if (value === 'Unternehmen') {
        li.innerText = "";
        li.setAttribute("class", "dropdown");
        let link = document.createElement("a");
        link.innerText = value;
        link.setAttribute("class", "dropdown_toggle");
        li.appendChild(link);
        let innerUnList = document.createElement('ul');

        innerUnList.setAttribute("class", "dropdown-content");
        innerUnList.setAttribute("id", "myDropdown");
        innerUnList.style.backgroundColor = "black";

        unternehmenData.forEach((item) => {
            let link = document.createElement("a");
            link.innerText = item;
            link.style.textDecoration = "none";
            link.style.color = "white";
            let li2 = document.createElement('li');
            li2.appendChild(link);
            innerUnList.appendChild(li2);
        });

        li.appendChild(innerUnList);
    }
});

document.body.appendChild(unList)
container.append(barHeader, unList);
navBar.appendChild(container);




