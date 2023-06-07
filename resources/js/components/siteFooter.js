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
        <footer class="text-center">
        <p><a href="mailto:tadnodir99@gmail.com">{{kontakt}}</a>&nbsp|&nbsp<a @click="setImpressum">{{impressum}}</a></p>
        <p>&copy; 2023 Abalo. All rights reserved.</p>
        </footer>
  `
}
