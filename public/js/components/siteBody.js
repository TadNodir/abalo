import Impressum from './impressum.js';
import Pagination from "./pagination.js";

export default {
    props: ['articles', 'type', 'article_length'],
    components: {
        Impressum, Pagination
    },
    emits: [''],
    methods: {
        changeToPNG: function (e) {
            e.target.src = e.target.src.replace('jpg', 'png');
        },
        toggleCart: function (e) {
            console.log(e.target.value)
            if (e.target.value === '+') {
                e.target.setAttribute("value", "-");
                const lastTd = e.target.parentElement.parentElement.getElementsByTagName("td")[4];
                lastTd.after(e.target.parentElement);
                document.getElementById('cart').appendChild(e.target.parentElement.parentElement);
            } else if (e.target.value === '-') {
                e.target.setAttribute("value", "+");
                const oneBefore = document.getElementsByTagName("tbody")[0];
                oneBefore.appendChild(e.target.parentElement.parentElement);
            } else {
                console.log("Cannot add to cart");
            }
        },
        showResults: function () {
            var input, filter, table, tr, td, i;
            input = document.getElementById("search");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            if (filter.length < 3) {
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
        },
        changePage: function (pageIndex) {
            // console.log("here")
            this.$data.offset = (pageIndex - 1) * this.$data.limit;
            if (this.$data.searchArticle === null) {
                this.$data.limitedArticles = this.$data.allArticles.slice(this.$data.offset, this.$data.offset + this.$data.limit)
            } else {
                this.formAction = '/newsite?searchArticle=' + this.$data.searchArticle + '&limit=' + this.$data.limit + '&offset=' + this.$data.offset;
            }
        }
    },
    data: function () {
        return {
            'allArticles': JSON.parse(this.articles),
            'limitedArticles': JSON.parse(this.articles).slice(0, 5),
            'limit': 5,
            'offset': 0,
            'art_length': JSON.parse(this.article_length),
            'searchArticle': null,
            formAction: ''
        }
    },
    mounted() {
        this.formAction = '/newsite';
    },
    template: `
        <div v-if="type !== 'impressum'" id="app" class="mt-5" data-v-app="">
        <div id="cart" class="m-5 pt-5 border-top border-left border-right border-bottom">
            <h3 class="d-flex justify-content-center mt-3">Warenkorb</h3>
        </div>
        <main id="mainForm" class="py-4">
            <form method="get" :action="formAction">
                <label for="search">Artikel suchen: </label>
                <input type="text" name="searchArticle" id="search" v-on:input="showResults">
                <input type="submit" name="submit" value="Suchen">
            </form>
            <div id="tableApp">
                <div class="table-responsive">
                    <div v-if="searchArticle !== null">
                        <table id="myTable" class="table table-hover">
                            <tbody>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>price</th>
                                <th>description</th>
                                <th>picture</th>
                            </tr>
                            <tr v-for="article in allArticles">
                                <td id="{{article.id}}">{{ article.id }}</td>
                                <td>{{ article.ab_name }}</td>
                                <td>{{ article.ab_price }}</td>
                                <td>{{ article.ab_description }}</td>
                                <td><img id="pic" v-bind:src="'/articleImages/' + article.id + '.jpg'" alt="a picture"
                                         width="100" height="100" @error="changeToPNG"></td>
                                <td><input type="submit" @click="toggleCart" v-bind:id="'_' + article.id"
                                           v-bind:name="'_' + article.id" value="+" class="btn text-white bg-dark"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-else>
                        <table id="myTable" class="table table-hover">
                            <tbody>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>price</th>
                                <th>description</th>
                                <th>picture</th>
                            </tr>
                            <tr v-for="article in limitedArticles">
                                <td id="{{article.id}}">{{ article.id }}</td>
                                <td>{{ article.ab_name }}</td>
                                <td>{{ article.ab_price }}</td>
                                <td>{{ article.ab_description }}</td>
                                <td><img id="pic" v-bind:src="'/articleImages/' + article.id + '.jpg'" alt="a picture"
                                         width="100" height="100" @error="changeToPNG"></td>
                                <td><input type="submit" @click="toggleCart" v-bind:id="'_' + article.id"
                                           v-bind:name="'_' + article.id" value="+" class="btn text-white bg-dark"></td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination v-if="searchArticle === null" :article_length="art_length" :limit="limit" @pageSlider="changePage"></pagination>
                    </div>
                </div>
            </div>
        </main>
        </div>
        <impressum v-else></impressum>
    `
}
