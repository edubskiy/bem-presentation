/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-slides', {

    presentationId: false,
    slideId: false,
    presentationSlidesCount: false,

    presentations: {},

    showPresentation: function(slideId, presentationId) {
        // Проверяем нет ли в кэше
        if ($.isEmptyObject(this.presentations)) {
            this.presentations = this.findBlockOutside('b-presentation')
                                     .findBlockInside('b-presentations')
        }

        var Presentation = this.presentations.elem(presentationId),
            firstSlide = Presentation.find("[data-id='" + slideId + "']").clone();

        // Показываем первый слайд
        this.elem('window').html(firstSlide);

        // Запоминаем id презентации и слайда для панели управления
        // (в том числе чтобы уменьшить обращения к DOM)
        this.presentationId = presentationId;
        this.slideId = slideId;
        this.presentationSlidesCount = Presentation.data('slides-count');
    },

    canShowSlide: function(slideId) {
        if ( ! this.presentationId) {
            return false;
        }
        if (slideId < 0 || slideId > this.presentationSlidesCount - 1) {
            return false;
        }
        return true;
    },

    onSetMod : {

        'js' : function() {

            // initial presentation choice
            this.on('show:presentation', function(e, data) {
                this.showPresentation(0, data.presentationId);
            });

            // for goto slide
            this.on('show:slide', function(e, data) {
                if (this.canShowSlide(data.slideId)) {
                    this.showPresentation(data.slideId, this.presentationId);
                }
            });

            this.on('show:slide:next', function(e) {
                var slideId = this.slideId + 1;
                if (this.canShowSlide(slideId)) {
                    this.showPresentation(slideId, this.presentationId);
                }
            });

            this.on('show:slide:prev', function(e) {
                var slideId = this.slideId - 1;
                if (this.canShowSlide(slideId)) {
                    this.showPresentation(slideId, this.presentationId);
                }

            });
        }
    },

}, {});

})();
