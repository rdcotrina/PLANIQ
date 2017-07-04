(function ($) {

    $.fn.extend({

        optimizer: function (opt) {

            let defaults = {
                scale: 15,
                disk: 3,                //ancho del disco de corte
                blocks: [],             //bloques a optimizar
                griddle: null           //la plancha, medidas - w, h
            };

            var options = $.extend(defaults, opt);

            /*=========================================METODOS PRIVADOS=========================================*/
            var _private = {

                sort: function (oSettings) {
                    oSettings.blocks.sort(function (a, b) {
                        return b.area - a.area;
                    }); //descendente en array bidimensional
                },

                render: function (oSettings) {
                    _private.sort(oSettings);

                    alert(oSettings.griddle.h)
                }

            };
            /*=========================================FIN METODOS PRIVADOS=====================================*/

            return this.each(function () {

                var oSettings = options;

                let method = {

                    init: function () {
                        _private.render.call(this, oSettings);
                    }

                };

                method.init.call(this);

            });

        }

    });

})(jQuery);