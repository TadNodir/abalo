"use strict";





const user = 1;
const cartDiv = document.createElement("div");
cartDiv.setAttribute("class", "m-5 border-top border-left border-right border-bottom");
const cartHeader = document.createElement("h3");
cartHeader.setAttribute("class", "d-flex justify-content-center mt-3");
cartHeader.innerText = "Warenkorb";
cartDiv.appendChild(cartHeader);
const main = document.getElementById("mainForm");
main.parentNode.insertBefore(cartDiv, main);

const rowsTr = document.getElementsByTagName("tr");
for(let i = 1; i < rowsTr.length; i++) {
    const wrapTd = document.createElement("td");
    const plus = document.createElement("input");
    plus.setAttribute("type", "submit");
    plus.setAttribute("id", "plus" + i);
    plus.setAttribute("name", "plus" + i)
    plus.setAttribute("value", "+");
    plus.setAttribute("class", "btn text-white bg-dark");

    const minus = document.createElement("input");
    minus.setAttribute("type", "submit");
    minus.setAttribute("id", "minus" + i);
    minus.setAttribute("name", "minus" + i);
    minus.setAttribute("value", "-");
    minus.setAttribute("class", "btn text-white bg-dark");

    wrapTd.appendChild(plus);

    const lastTr = document.getElementsByTagName("tr")[i];
    const lastTd = lastTr.getElementsByTagName("td")[4];
    lastTd.after(wrapTd);
    // const article_id = document.getElementById(i.toString()).innerText;
    plus.addEventListener('click', function () {
        // let xhr = new XMLHttpRequest();
        // xhr.open('POST', '/api/shoppingcart');
        // xhr.setRequestHeader('content-type', 'application/json');
        // xhr.setRequestHeader("X-CSRF-TOKEN", document.getElementById("csrf-token").getAttribute('value'));
        // let formdata = new FormData();

        // console.log("User:" + user.toString())
        // console.log("Artcl:" + article_id)
        // formdata.append("creator_id", user.toString());
        // formdata.append("article_id", article_id);

        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4) {
        //         if (xhr.status === 200) {
        //             console.log(JSON.parse(xhr.responseText));
        //         } else {
        //             console.log(xhr.statusText);
        //         }
        //     }
        // };
        // // console.log(formdata);
        // xhr.send(formdata);

        console.log("Plus")
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

Vue.createApp({
    methods: {
        showResults: function () {
            var input, filter, table, tr, td, i;
            input = document.getElementById("search");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            if(filter.length < 3) {
                return;
            }
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    }
}).mount('#app');
