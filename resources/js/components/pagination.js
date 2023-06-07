export default {
    props: [
        'art_length', 'limit'
    ],
    emits: ['pageSlider'],
    data: function () {
        return {
            pageSlider: 1,
            maxPage: Math.ceil(parseInt(this.art_length) / this.limit)
        }
    },
    methods: {
        next(){
            if(this.pageSlider === this.$data.maxPage) {
                console.log(this.$data.maxPage);
                this.pageSlider = 1;
            }
            else {
                console.log(this.art_length);
                this.pageSlider++;
            }
            this.$emit('pageSlider', this.$data.pageSlider);

        },
        prev(){
            if(this.pageSlider === 1) {
                this.pageSlider = this.$data.maxPage
            }
            else {
                this.pageSlider--;
            }
            this.$emit('pageSlider', this.$data.pageSlider);

        }
    },
    template: `
        <button class="btn text-white bg-dark" v-on:click="prev"> &lt; </button>
        <span> Page: {{pageSlider}} </span>
        <button class="btn text-white bg-dark" v-on:click="next"> &gt; </button>`
}
