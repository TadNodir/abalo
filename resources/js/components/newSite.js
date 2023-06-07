import SiteHeader from './siteHeader.js';
import SiteBody from './siteBody.js';
import SiteFooter from './siteFooter.js';

export default {
    props: ['article_length', 'articles'],
    components: {
        SiteHeader, SiteBody, SiteFooter,
    },
    data: function () {
        return {
            type: null,
            article: this.articles,
            artLen: this.article_length
        }
    },
    methods: {
        setType: function (value) {
            console.log("val: " + value)
            this.$data.type = value;
        }
    },
    template: `
        <site-header @update_page="setType('home')"></site-header>
        <site-body :type="type" :article_length="artLen"
                   :articles="article"></site-body>
        <site-footer @update_page="setType"></site-footer>
    `
}
