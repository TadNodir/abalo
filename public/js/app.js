const SiteHeader = {
    props: [''],
    emits: [''],
    methods: {
        handleHeaderClick: function (e) {
            this.$emit();
        }
    },
    template: `
        <br><br><br>
        <header>
        <h1>Welcome to Abalo</h1>
        </header>
  `
};

const SiteBody = {
    props: [''],
    emits: [''],
    methods: {
        handleBodyClick: function (e) {
            this.$emit();
        }
    },
    template: `
    <article>
      <h2>About Abalo</h2>
      <p>Abalo is an e-commerce platform for selling products.</p>
    </article>
  `
};

const SiteFooter = {
    props: [''],
    emits: [''],
    methods: {
        handleFooterClick: function (e) {
            this.$emit();
        }
    },
    template: `
    <footer>
      <p>&copy; 2023 Abalo. All rights reserved.</p>
    </footer>
  `
};


export {SiteHeader, SiteBody, SiteFooter};
