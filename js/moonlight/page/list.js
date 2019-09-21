var list_page = {
    
    init : function(){
        list_page.events();
    },

    events : function(){
        console.info('list_page events')
    }

}
$(document).ready(function() {
    list_page.init();
});