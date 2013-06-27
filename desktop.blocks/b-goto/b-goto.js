/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-goto', {

    updateGoto: function(currentSlide, totalSlides) {
        // Обновляем значение текущего слайда
        this.elem('current-slide').val(currentSlide);

        // Обновляем общее кол-во слайдов
        this.elem('total-slides').html(totalSlides);
    },

    getCurrentSlideId: function() {
        return parseInt(this.elem('current-slide').val(), 10);
    },

    goto: function(slideId) {
        if (this.getPresentation().canShowSlide(slideId)) {
            this.channel('slide').trigger('goto', {
                slideId: slideId
            });
        }
    },

    getPresentation: function() {
        return this.findBlockOutside('b-presentation');
    },

    onSetMod : {

        'js' : function() {
            var t = this;

            // left and right keys navigation
            t.bindToDoc('keydown', function(e) {
                if (e.keyCode == 13) {
                    var slideId = t.getCurrentSlideId()
                    t.goto(slideId);
                }
            });

            t.channel('slide').on({
                // Броадкастим следующий и предыдущий слайд
                'goto': function(e, data) {
                    t.elem('current-slide').val(data.slideId);
                },
            })
        }
    }

}, {});

})();
