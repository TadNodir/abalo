export default {
    emits: ['update_page'],
    data: function () {
        return {
            kontakt: 'Kontakt',
            impressum: 'impressum'
        }
    },
    methods: {
        setImpressum: function () {
            this.$emit('update_page', this.impressum);
        }
    },
    template: `
        <hr>
        <footer class="footer">
        <p><a class="footer--button" href="mailto:tadnodir99@gmail.com">{{kontakt}}</a>&nbsp|&nbsp<a class="footer--button" @click="setImpressum">Impressum</a></p>
        <p>&copy; 2023 Abalo. All rights reserved.</p>
        </footer>
  `
}
