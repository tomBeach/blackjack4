$(document).ready(function(){
    console.log('jQuery loaded');
    console.log('document ready');

    var bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');
    console.log("bootstrap3_enabled: " + bootstrap3_enabled);



    // ======= ======= ======= Menu ======= ======= =======
    // ======= ======= ======= Menu ======= ======= =======
    // ======= ======= ======= Menu ======= ======= =======



    function Menu(whichMenu) {
        console.log('Menu');
        this.login = { element: null, class: "nav-link", textArray: ["login", "logout", "signup"] };
        this.profile = { element: null, class: "nav-link" };
        this.add = { element: null, class: "nav-link" };
        this.genre = { element: null, selection: null, genresArray: [], class: "nav-link" };
        this.group = { element: null, selection: null, groupsArray: [], class: "nav-link" };
        this.category = { element: null, selection: null, categoriesArray: [], class: "nav-link" };
        this.search = { element: null, class: "nav-link" };
    }
    var menuObject = new Menu("menu1");

});
