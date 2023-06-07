export default {
    props: [''],
    components: {},
    emits: [''],
    data: function () {
        return {
        }
    },
    methods: {
        sendData(e) {
            const name = document.getElementById("name").value.trim();
            const price = parseFloat(document.getElementById("price").value);
            const description = document.getElementById("description").value;
            if (!name || price <= 0) {
                alert('Please enter a valid name and price greater than 0.');
                document.getElementById("output").innerText = "";
            } else {
                let xhr = new XMLHttpRequest();
                xhr.open('POST', '/api/articles');
                // xhr.setRequestHeader("X-CSRF-TOKEN", document.getElementById("csrf-token2").getAttribute('value'));
                let formdata = new FormData();
                formdata.append("name", name);
                formdata.append("price", price.toString());
                formdata.append("description", description);
                const output = document.getElementById("output");
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            console.log(xhr.responseText);
                            output.innerText = "Erfolgreich gespeichert";
                            output.style.color = "green";
                        } else {
                            console.log(xhr.statusText);
                            output.innerText = "FEHLER!";
                            output.style.color = "red";
                        }
                    }
                };
                xhr.send(formdata);
            }
        }
    },
    template: `
        <div class="mt-5 pt-5 text-center">
        <form method="POST" action="/api/articles">
            <!--        <input id="csrf-token2" type="hidden" name="_token" value="">-->
            <legend>Please add a new article</legend>
            <label class="m-2">Name:</label>
            <input type="text" name="name" id="name" style="margin: 10px;"><br>
            <label class="m-2">Price:</label>
            <input type="number" name="price" id="price" style="margin: 10px;"><br>
            <label class="m-2">Description:</label>
            <textarea name="description" id="description" style="margin: 10px;"></textarea><br><br>
            <button class="btn text-white bg-dark" type="button" @click="sendData" name="button" id="button">
                Speichern
            </button>
        </form>
        <p id="output" class="m-3"></p>
        </div>
    `

}
