export default {
    data: function () {
        return {
            pageSlider: 1
        }
    },
    template: `
        <button class="btn text-white bg-dark" v-if="pageSlider-1 > 0" v-on:click="pageSlider--"> < </button>
        <span> Page: {{pageSlider}} </span>
        <button class="btn text-white bg-dark" v-if="pageSlider+1 < 10" v-on:click="pageSlider++"> > </button>`
}
