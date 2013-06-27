/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-slides', {

    presentations: {},

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
        var t = this;

        // Проверяем нет ли в кэше
        if ($.isEmptyObject(this.presentations)) {
            this.presentations = this.findBlockOutside('b-presentation')
                                     .findBlockInside('b-presentations')
        }

        var blockPresentation = this.getPresentation(),
            presentation = this.presentations.elem(presentationId),
            slidesCount = presentation.data('slides-count'),
            firstSlide = presentation.find("[data-id='" + slideId + "']").clone();

        t.elem('window').fadeIn('fast', function() {
            // Показываем первый слайд
            $(this).hide()
                   .html(firstSlide)
                   .fadeIn('fast');
        });

        if (slideId == slidesCount) {
            this.channel('slide').trigger('last');
        } else if (slideId == 1) {
            this.channel('slide').trigger('first');
        } else {
            this.channel('slide').trigger('change');
        }

        // Запоминаем id презентации и слайда для панели управления
        // (в том числе чтобы уменьшить обращения к DOM)
        blockPresentation.setId(presentationId);
        blockPresentation.setSlideId(slideId);
        blockPresentation.setSlidesCount(slidesCount);
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