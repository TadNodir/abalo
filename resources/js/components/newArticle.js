import SiteHeader from './siteHeader.js';
import SiteFooter from './siteFooter.js';
import NewArticleBody from './newArticleBody.js';

export default {
    components: {
        SiteHeader, NewArticleBody, SiteFooter
    },
    template: `
        <site-header></site-header>
        <new-article-body></new-article-body>
        <site-footer></site-footer>
    `
}
