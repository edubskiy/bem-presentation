/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-controls', {

    /**
     * Slides block
     *
     * @private
     */
    _Slides: null,

    /**
     * Gets presentation block
     *
     * @returns {BEM}
     */
    getPresentation: function() {
        return this.findBlockOutside('b-presentation');
    },

    onSetMod : {

        'js' : function() {
            var t = this;

            // left and right buttons navigation
            this
                .bindTo('next', 'click', function() {
                    this.nextSlide();
                })
                .bindTo('previous', 'click', function() {
                    this.prevSlide();
                });

            // left and right keys navigation
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

    gotoSlide: function(slideId) {
        if (this.getPresentation().canShowSlide(slideId)) {
            this.channel('slide').trigger('goto', {
                slideId: slideId
            });
        }
    },

    nextSlide: function() {
        this.gotoSlide(this.getPresentation().getSlideId() + 1);
    },

    prevSlide: function() {
        this.gotoSlide(this.getPresentation().getSlideId() - 1);
    }

}, {});

})();