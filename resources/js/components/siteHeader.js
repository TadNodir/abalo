const navData = ['Home', 'Kategorien', 'Verkaufen', 'Unternehmen'];
const unternehmenData = ['Philosophie', 'Karriere'];

export default {
    emits: ['update_page'],
    data: function () {
        return {
            home: 'home'
        }
    },
    methods: {
        setType: function () {
            console.log("here")
            this.$emit('update_page', this.home);
        },
        addToggleEvent: function () {
            document.getElementById("dropDownList").onclick = () => {
                document.getElementById("dropDownList").classList.toggle("show");
                document.getElementById("dr-menu").classList.toggle("show");
                document.getElementById("navbarDropdownMenuLink").toggleAttribute("aria-expanded");
            }
        },
        // render: function () {
        //     this.container.append(this.barHeader, this.unList);
        //     this.navBar.appendChild(this.container);
        //     this.addToggleEvent();
        // }

    },
    template: `
        <nav id="navId" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="collapse navbar-collapse">
            <div class="navbar-brand">abalo</div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a @click="setType" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Kategorien</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Verkaufen</a>
                </li>
                <li class="nav-item dropdown" id="dropDownList" @click="addToggleEvent">
                    <a class="nav-link dropdown_toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false" href="#">Unternehmen</a>
                    <div id="dr-menu" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Philosophie</a>
                        <a class="dropdown-item" href="#">Karriere</a>
                    </div>
                </li>
            </ul>
        </div>
        </nav>
        <article id="articleId"></article>`
}
