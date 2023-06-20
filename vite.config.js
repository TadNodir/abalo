import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.js', 'resources/css/newSiteBody.scss',
                'resources/css/newSiteFooter.scss', 'resources/css/newArticle.scss'],
            refresh: true,
        }),
    ],
});
