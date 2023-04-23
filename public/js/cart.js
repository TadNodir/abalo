"use strict";

const cartDiv = document.createElement("div");
cartDiv.setAttribute("class", "m-5 border-top border-left border-right border-bottom");
const cartHeader = document.createElement("h3");
cartHeader.setAttribute("class", "d-flex justify-content-center mt-3");
cartHeader.innerText = "Warenkorb";
cartDiv.appendChild(cartHeader);
const main = document.getElementById("mainForm");
main.parentNode.insertBefore(cartDiv, main);


const amount = document.getElementsByTagName("tr").length;
for(let i = 1; i < amount; i++) {
    const wrapTd = document.createElement("td");
    const plus = document.createElement("input");
    plus.setAttribute("type", "submit");
    plus.setAttribute("id", "plus" + i);
    plus.setAttribute("value", "+");
    plus.setAttribute("class", "btn text-white bg-dark");

    const minus = document.createElement("input");
    minus.setAttribute("type", "submit");
    minus.setAttribute("id", "minus" + i);
    minus.setAttribute("value", "-");
    minus.setAttribute("class", "btn text-white bg-dark");

    wrapTd.appendChild(plus);

    const lastTr = document.getElementsByTagName("tr")[i];
    const lastTd = lastTr.getElementsByTagName("td")[4];
    lastTd.after(wrapTd);

    plus.addEventListener('click', function () {
        plus.remove();
        wrapTd.appendChild(minus);
        lastTd.after(wrapTd);
        cartDiv.appendChild(lastTr);
    });


    minus.addEventListener('click', function () {
        minus.remove();
        wrapTd.appendChild(plus);
        lastTd.after(wrapTd);
        const oneBefore = document.getElementsByTagName("tbody")[0];
        oneBefore.appendChild(lastTr);
    });
}
