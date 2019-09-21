var contents_page = {
    
    init : function(){
        contents_page.events();
    },

    events : function(){
        console.info('contents_page events')
    }

}
$(document).ready(function() {
    contents_page.init();
});