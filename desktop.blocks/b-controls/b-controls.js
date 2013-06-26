/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-controls', {

    _Slides: null,

    onSetMod : {

        'js' : function() {
            this
                .bindTo('next', 'click', function() {
                    this.nextSlide();
                })
                .bindTo('previous', 'click', function() {
                    this.prevSlide();
                });

            this.bindToDoc('keydown', function(e) {
                if (e.keyCode == 37) {
                    this.prevSlide();
                } else if (e.keyCode == 39) {
                    this.nextSlide();
                }
            });
        }
    },

    getSlidesBlock: function() {
        if ( ! this._Slides) {
            this._Slides = this.findBlockOutside('b-presentation')
                               .findBlockInside('b-slides');
        }
        return this._Slides;
    },

    nextSlide: function() {
        this.getSlidesBlock().trigger('show:slide:next');
    },

    prevSlide: function() {
        this.getSlidesBlock().trigger('show:slide:prev');
    }

}, {

//    live : function() {
//        this
//            .liveBindTo('next', 'click', function() {
//                this.nextSlide();
//            })
//            .liveBindTo('previous', 'click', function() {
//                this.prevSlide();
//            });
//    }

});

})();