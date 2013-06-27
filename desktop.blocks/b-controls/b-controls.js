/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-controls', {

    _Slides: null,

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

            this.channel('slide').on({
                // Ставим кнопкам моду disabled (приходит от блока slides)
                'last': function() {

                },
                'first': function() {

                }
            })
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
        var Presentation = this.getPresentation();
        if (Presentation.canShowSlide(Presentation.getSlideId() + 1)) {
            this.channel('slide').trigger('next');
        }
    },

    prevSlide: function() {
        var Presentation = this.getPresentation();
        if (Presentation.canShowSlide(Presentation.getSlideId() - 1)) {
            this.channel('slide').trigger('prev');
        }
    }

}, {});

})();