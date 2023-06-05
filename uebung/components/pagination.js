export default {
    data: function () {
        return {
            pageSlider: 1
        }
    },
    template: `
        <button v-if="pageSlider-1 > 0" v-on:click="pageSlider--"> < </button>
        <span> Page: {{pageSlider}} </span>
        <button v-if="pageSlider+1 < 10" v-on:click="pageSlider++"> > </button>`
}
