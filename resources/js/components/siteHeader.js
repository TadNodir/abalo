// import dropdown from 'vue-my-dropdown'
const navData = ['Home', 'Kategorien', 'Verkaufen', 'Unternehmen'];
const unternehmenData = ['Philosophie', 'Karriere'];

export default {
    props: [ 'position', 'animation', 'visible'],
    emits: ['update_page'],
    // components: {
    //     dropdown
    // },
    data: function () {
        return {
            home: 'home',
            // vis: this.visible,
            // pos: this.position,
            // anim: this.animation
        }
    },
    methods: {
        setType: function () {
            console.log("here")
            this.$emit('update_page', this.home);
        },
        addToggleEvent: function () {
            // document.getElementById("dropDownList").onclick = () => {
                document.getElementById("dropDownList").classList.toggle("show");
                document.getElementById("dr-menu").classList.toggle("show");
                document.getElementById("navbarDropdownMenuLink").toggleAttribute("aria-expanded");
            // }
        },
    },
    template: `
        <nav id="navId" class="nav">
        <div class="nav__div-container">
            <div class="nav__div-container__div--brand">abalo</div>
            <ul class="nav__div-container__ul--branches">
                <li class="nav__div-container__li--elements">
                    <a @click="setType" class="nav__div-container__li--elements__a" href="#">Home</a>
                </li>
                <li class="nav__div-container__li--elements">
                    <a class="nav__div-container__li--elements__a" href="#">Kategorien</a>
                </li>
                <li class="nav__div-container__li--elements">
                    <a class="nav__div-container__li--elements__a" href="#">Verkaufen</a>
                </li>
                <li class="nav__div-container__li--elements dropdown" id="dropDownList" @click="addToggleEvent">
                    <a class="nav__div-container__li--elements__a dropdown_toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false" href="#">Unternehmen</a>
                    <div id="dr-menu" class="nav__div-container__li--elements__dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="nav__div-container__li--elements__a" href="#">Philosophie</a>
                        <a class="nav__div-container__li--elements__a" href="#">Karriere</a>
                    </div>
                </li>
            </ul>
        </div>
        </nav>
        <article id="articleId"></article>
    `

}






// <nav id="navId" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//     <div class="collapse navbar-collapse">
//         <div class="navbar-brand">abalo</div>
//         <ul class="navbar-nav">
//             <li class="nav-item">
//                 <a @click="setType" class="nav-link">Home</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link" href="#">Kategorien</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link" href="#">Verkaufen</a>
//         </li>
//         <li class="nav-item dropdown" id="dropDownList" @click="addToggleEvent">
//         <a class="nav-link dropdown_toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
//            aria-haspopup="true" aria-expanded="false" href="#">Unternehmen</a>
//         <div id="dr-menu" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <a class="dropdown-item" href="#">Philosophie</a>
//             <a class="dropdown-item" href="#">Karriere</a>
//         </div>
//     </li>
// </ul>
// </div>
// </nav>
// <article id="articleId"></article>
