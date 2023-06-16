import Impressum from './impressum.js';
import Pagination from "./pagination.js";
import Vue3Autocounter from 'vue3-autocounter/dist/vue3-autocounter.ssr';

export default {
    props: ['articles', 'type', 'article_length'],
    components: {
        Impressum, Pagination, 'vue3-autocounter': Vue3Autocounter,
    },
    emits: [''],
    methods: {
        changeToPNG: function (e) {
            e.target.src = e.target.src.replace('jpg', 'png');
        },
        toggleCart: function (e) {
            console.log(e.target.value)
            const price = parseInt(e.target.parentNode.parentNode.children[2].innerHTML)
            if (e.target.value === '+') {
                e.target.setAttribute("value", "-");
                this.sum = this.sum + price
                const lastTd = e.target.parentElement.parentElement.getElementsByTagName("td")[4];
                lastTd.after(e.target.parentElement);
                document.getElementById('table_cart').appendChild(e.target.parentElement.parentElement);
            } else if (e.target.value === '-') {
                e.target.setAttribute("value", "+");
                this.sum = this.sum - price
                const oneBefore = document.getElementsByTagName("tbody")[1];
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
        },
        close_tech_improv: function () {
            document.getElementById("tech_improv").style.display = 'none';
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
            formAction: '',
            'sum': 0
        }
    },
    mounted() {
        this.formAction = '/newsite';
    },
    template: `
        <div id="tech_improv" class="popup">
        <div class="popup--popup-content">
            <h2 class="popup__h2">Technische Verbesserungen</h2>
            <p class="popup__p" id="msg">In Kürze verbessern wir Abalo für Sie!
                Nach einer kurzen Pause sind wir wieder
                für Sie da! Versprochen.</p>
            <button class="popup--close-btn" @click="close_tech_improv">Close</button>
        </div>
        </div>
        <div v-if="type !== 'impressum'" id="app" class="container" data-v-app="">
        <div id="cart" class="container--cart">
            <h3>Warenkorb</h3>
            <table id="myTable" class="container__table">
                <tbody id="table_cart"></tbody>
            </table>
            <div>

                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='sum' :duration='3' prefix='' suffix='EUR'
                                  separator=',' decimalSeparator='.' :decimals='2' :autoinit='true'
                                  @finished='alert(\`Counting finished!\`)'/>
            </div>
        </div>
        <main id="mainForm">
            <form method="get" class="container--search" :action="formAction">
                <label for="search">Artikel suchen: </label>
                <input type="text" class="container--search__input" name="searchArticle" id="search" v-on:input="showResults">
                <input type="submit" class="container--search__button" name="submit" value="Suchen">
            </form>
            <div id="tableApp">
                <div class="table-responsive">
                    <div v-if="searchArticle !== null">
                        <table id="myTable" class="container__table">
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
                                           v-bind:name="'_' + article.id" value="+" class="container__table--button"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-else>
                        <table id="myTable" class="container__table">
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
                                           v-bind:name="'_' + article.id" value="+" class="container__table--button"></td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination v-if="searchArticle === null" :art_length="article_length" :limit="limit" @pageSlider="changePage"></pagination>
                    </div>
                </div>
            </div>
        </main>
        </div>
        <impressum v-else></impressum>

    `





//         <div v-if="type !== 'impressum'" id="app" class="mt-5" data-v-app="">
//         <div id="cart" class="m-5 pt-5 border-top border-left border-right border-bottom">
//     <h3 class="d-flex justify-content-center mt-3">Warenkorb</h3>
// </div>
// <main id="mainForm" class="py-4">
//     <form method="get" :action="formAction">
//     <label for="search">Artikel suchen: </label>
//     <input type="text" name="searchArticle" id="search" v-on:input="showResults">
//         <input type="submit" name="submit" value="Suchen">
//         </form>
//         <div id="tableApp">
//             <div class="table-responsive">
//                 <div v-if="searchArticle !== null">
//                     <table id="myTable" class="table table-hover">
//                         <tbody>
//                         <tr>
//                             <th>id</th>
//                             <th>name</th>
//                             <th>price</th>
//                             <th>description</th>
//                             <th>picture</th>
//                         </tr>
//                         <tr v-for="article in allArticles">
//                             <td id="{{article.id}}">{{ article.id }}</td>
//                             <td>{{ article.ab_name }}</td>
//                             <td>{{ article.ab_price }}</td>
//                             <td>{{ article.ab_description }}</td>
//                             <td><img id="pic" v-bind:src="'/articleImages/' + article.id + '.jpg'" alt="a picture"
//                                      width="100" height="100" @error="changeToPNG"></td>
//                             <td><input type="submit" @click="toggleCart" v-bind:id="'_' + article.id"
//                                 v-bind:name="'_' + article.id" value="+" class="btn text-white bg-dark"></td>
//                         </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <div v-else>
//                     <table id="myTable" class="table table-hover">
//                         <tbody>
//                         <tr>
//                             <th>id</th>
//                             <th>name</th>
//                             <th>price</th>
//                             <th>description</th>
//                             <th>picture</th>
//                         </tr>
//                         <tr v-for="article in limitedArticles">
//                             <td id="{{article.id}}">{{ article.id }}</td>
//                             <td>{{ article.ab_name }}</td>
//                             <td>{{ article.ab_price }}</td>
//                             <td>{{ article.ab_description }}</td>
//                             <td><img id="pic" v-bind:src="'/articleImages/' + article.id + '.jpg'" alt="a picture"
//                                      width="100" height="100" @error="changeToPNG"></td>
//                             <td><input type="submit" @click="toggleCart" v-bind:id="'_' + article.id"
//                                 v-bind:name="'_' + article.id" value="+" class="btn text-white bg-dark"></td>
//                         </tr>
//                         </tbody>
//                     </table>
//                     <pagination v-if="searchArticle === null" :art_length="article_length" :limit="limit" @pageSlider="changePage"></pagination>
//             </div>
//         </div>
//     </div>
// </main>
// </div>
// <impressum v-else></impressum>
}
