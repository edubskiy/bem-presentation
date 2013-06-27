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