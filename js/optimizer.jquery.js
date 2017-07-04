(function($){
    
    $.fn.extend({
        
        optimizer: function(opt){
            
            let defaults = {
                data: []
            };

            var options = $.extend(defaults, opt);
            
            /*=========================================METODOS PRIVADOS=========================================*/
            var _private = {
                
                render: function(oSettings){
                    alert(this.id)
                }

            };
            /*=========================================FIN METODOS PRIVADOS=====================================*/
            
            return this.each(function () {

                var oSettings = options;

                let method = {

                    init: function () {
                        _private.render.call(this,oSettings);
                    }

                };

                method.init.call(this);

            });
            
        }
        
    });    
    
})(jQuery);
alert(8)