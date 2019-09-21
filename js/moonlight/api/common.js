

var bk = {
    
    init : function(){
        bk.events();
    },

    events : function(){
        console.info('bk events')

        // header home
        $(document).on('click','#site-title a',function(){
            location.href='/'; 
        })

        // header menu click
        $(document).on('click','#ml-menu li',function(){
            var menuId = '';
            var param = '?md=';
            location.href='/category.html'            
        })
    }

}
$(document).ready(function() {
    bk.init();
});