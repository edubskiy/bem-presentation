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
            var t = this;

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
        }
    }
});

})();
