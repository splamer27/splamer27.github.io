
var contents = {
    
    init : function(){
        contents.events();
    },

    events : function(){
        console.info('contents events')
    }

}
$(document).ready(function() {
    contents.init();
});