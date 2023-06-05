export default {
    data: function () {
        return {
            pageSlider: 1,
            maxPage: Math.ceil(parseInt(this.article_length) / this.limit)
        }
    },
    methods: {
        next(){
            if(this.pageSlider === this.$data.maxPage)
                this.pageSlider = 1
            else
                this.pageSlider++;
            this.$emit('pageSlider', this.$data.pageSlider);
        },
        prev(){
            if(this.pageSlider === 1)
                this.pageSlider = this.$data.maxPage
            else
                this.pageSlider--;
            this.$emit('pageSlider', this.$data.pageSlider);
        }
    },
    template: `
        <button v-if="pageSlider-1 > 0" v-on:click="prev"> &lt; </button>
        <span> Page: {{pageSlider}} </span>
        <button v-if="pageSlider+1 < 10" v-on:click="next"> &gt; </button>`
}
