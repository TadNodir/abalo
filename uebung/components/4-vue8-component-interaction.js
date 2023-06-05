// Komponente B
export default {
    props: ['name', 'author'],
    emits: ['click-it'],
    methods: {
        handleClick: function (e) {
            this.$emit('click-it', this.name, this.author);
        }
    },
    template: `<div>
    <button @click="handleClick"> The book {{name}} of {{author}} is amazing. </button>
    </div>`
}
