/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-slides', {

    getPresentation: function() {
        return this.findBlockOutside('b-presentation');
    },

    /**
     * Shows slide for given presentation
     *
     * @param {int} slideId
     * @param {string} presentationId
     */
    showPresentation: function(slideId, presentationId) {
        var t = this,
            bPresentation = t.getPresentation(),
            currentPresentation = bPresentation.findBlockInside('b-presentations').elem(presentationId),
            slidesCount = currentPresentation.data('slides-count'),
            slides = currentPresentation.find("[data-type='slides']").clone(),
            prevSlideId = bPresentation.getSlideId();

        // if we need to switch between presentations
        if (presentationId != bPresentation.getId()) {
            // append slides to presentation window
            t.elem('window').html(slides);
        }

        if (slideId == slidesCount) {
            t.channel('slide').trigger('last');
        } else if (slideId == 1) {
            t.channel('slide').trigger('first');
        } else {
            t.channel('slide').trigger('change');
        }

        // Запоминаем id презентации и слайда для панели управления
        // (в том числе чтобы уменьшить обращения к DOM)
        bPresentation.setId(presentationId)
                     .setSlideId(slideId)
                     .setPrevSlideId(prevSlideId)
                     .setSlidesCount(slidesCount);

        t.delMod(t.findElem('item'), 'active');
        t.setMod(t.findElem('item'), 'active', 'yes');
    },

    onElemSetMod: {
        'item' : {
            'active' : {
                'yes' : function(el) {
                    return this.getPresentation().getSlideId() == $(el).data().id;
                },
                '': function(el) {
                    return this.getPresentation().getPrevSlideId() == $(el).data().id;
                }
            }
        }
    },

    onSetMod : {

        'js' : function() {
            var t = this;
            this.channel('slide').on({
                // Броадкастим следующий и предыдущий слайд
                'goto': function(e, data) {
                    t.showPresentation(data.slideId, t.getPresentation().getId());
                }
            })
        }
    },

}, {});

})();