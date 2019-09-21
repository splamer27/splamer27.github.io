
var login = {
    
    init : function(){
        login.events();
    },

    events : function(){
        console.info('login events')
    }

}
$(document).ready(function() {
    login.init();
});