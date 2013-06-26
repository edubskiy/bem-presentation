/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-slides', {

    onSetMod : {

        'js' : function() {

            this.on('show:presentation', function(e, data) {
                console.log("Slides got a trigger about presentation: ");
                console.log(data);
            });

            this.on('show:slide', function(e, data) {
                this.showSlide(data);
            });

            console.log('Slides JS is inited now!');
            /* ... */
        }
    },

    showSlide: function(slideData) {
        console.log("Showing slide with data:");
        console.log(slideData);
        // сделать (setMod) active текущему слайду
        // убрать (delMod) предыдущему
    }

}, {});

})();
