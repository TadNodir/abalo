export default {
    data: function () {
        return {
            count: 1
        }
    },
    template: `<h3>Counter: {{count}}</h3>
        <button v-on:click="count++">Increment</button>
    <button v-on:click="count--">Decrement</button>`
}
