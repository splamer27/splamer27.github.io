
var main_page = {
    
    init : function(){
        main_page.events();
    },

    events : function(){
        console.info('main_page events')
    }

}
$(document).ready(function() {
    main_page.init();
});