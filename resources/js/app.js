import './bootstrap';
import {createApp} from 'vue/dist/vue.esm-browser';
import newSite from './components/newSite.js';
import newArticle from './components/newArticle.js';
// import dropdown from 'vue-my-dropdown';


const app = createApp({});
app.component('new-site', newSite);
// app.component('dropdown', dropdown);
app.component('new-article', newArticle);
app.mount('#bigApp');
