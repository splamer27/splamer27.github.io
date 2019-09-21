

var category = {
    
    init : function(){
        category.events();
    },

    events : function(){
        console.info('category events')
    }

}
$(document).ready(function() {
    category.init();
});