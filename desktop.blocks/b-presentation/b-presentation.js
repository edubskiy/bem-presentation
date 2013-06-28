/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-presentation', {

    _id: false,

    _slideId: false,

    _slidesCount: false,

    getId: function() {
        return this._id;
    },

    getSlideId: function() {
        return this._slideId;
    },

    getSlidesCount: function() {
        return this._slidesCount;
    },

    setId: function(id) {
        this._id = id;
    },

    setSlideId: function(slideId) {
        this._slideId = slideId;
    },

    setSlidesCount: function(slidesCount) {
        this._slidesCount = slidesCount;
    },

    canShowSlide: function(slideId) {
        if ( ! this.getId()) {
            return false;
        }
        if (slideId < 1 || slideId > this.getSlidesCount()) {
            return false;
        }
        return true;
    },

    onSetMod : {

        'js' : function() {
            var t = this,
                typedSlides = [],// Typed slides on screen
                controls = t.findBlockInside('b-controls');
                delay = (function(){ // Delayed function to capture user typing
                    var timer = 0;
                    return function(callback, ms){
                        clearTimeout (timer);
                        timer = setTimeout(callback, ms);
                    };
                })();

            // Подписываем на показы презентации
            this.channel('presentation').on({
                'show': function(e, data) {
                    data = data || {};
                    if (data.presentation) {
                        t.findBlockInside('b-slides').showPresentation(1, data.presentation.getAttribute('data-id'));
                        t.findBlockInside('b-goto').updateGoto(1, data.presentation.getAttribute('data-slides-count'));
                    }
                }
            });

            this.channel('slide').on({
                // Ставим кнопкам моду disabled (приходит от блока slides)
                'last': function() {
                    // disabling go right button
                    controls.setMod(controls.elem('next'),'disabled', 'yes');
                },
                'first': function() {
                    // disable go left button
                    controls.setMod(controls.elem('previous'),'disabled', 'yes');
                },
                'change': function() {
                    // enabling all buttons
                    controls.delMod(controls.elem('previous'),'disabled');
                    controls.delMod(controls.elem('next'),'disabled');
                }
            })

            // left and right keys navigation on screen
            t.bindToDoc('keydown', function(e) {
                // check if we not inside input Goto texbox
                if (!$(e.target).hasClass('b-goto__current-slide')) {
                    typedSlides.push(e.keyCode);
                    delay(function() {
                        var slideId = '';
                        for (var i = 0, typedLength = typedSlides.length; i < typedLength; i++) {
                            slideId += String.fromCharCode(typedSlides[i])
                        }
                        typedSlides = [];
                        slideId = parseInt(slideId);
                        if (!isNaN(slideId) && t.canShowSlide(slideId)) { // and can show slide
                            // clear typedSlides for next input
                            t.channel('slide').trigger('goto', {
                                slideId: slideId
                            });
                        }
                    }, 500);
                }

            });
        }
    }
});

})();
