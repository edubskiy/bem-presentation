/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-controls', {

    myCoolestEverMethod: function() {
            alert('that is cool');
    },

    onSetMod : {

        'js' : function() {

        }
    }

}, {

    live : function() {
        this.liveBindTo('inner', 'click', function() {
            var slides = this.findBlockOutside('b-presentation')
                            .findBlockInside('b-slides');

            slides.trigger('show:slide', {
                prev: 1,
                next: 2
            })
        });
    }

});

})();