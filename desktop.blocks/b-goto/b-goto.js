/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-goto', {

    requestFullScreen: function(element) {
        // Supports most browsers and their versions.
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

        if (requestMethod) { // Native full screen.
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    },

    cancelFullscreen: function(){
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    },

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

    toggleFullScreenMode: function() {
        var t = this,
            content = t.findBlockOutside('b-content'),
            slides = content.findBlockInside('b-slides');

        if (content.hasMod('fullscreen', 'active')) {
            t.cancelFullscreen();
        } else {
            t.requestFullScreen(content.domElem[0]);
        }

        content.toggleMod('fullscreen', 'active');
        slides.toggleMod('fullscreen', 'active');
        t.toggleMod(t.elem('fullscreen'), 'fullscreen', 'active');
    },

    onSetMod : {

        'js' : function() {
            var t = this,
                fullscreenFiredByClick = false; // prevent fullscreen event to be fired twice

            t.bindTo('fullscreen', 'click', function(e) {
                fullscreenFiredByClick = true;
                this.toggleFullScreenMode();
            })

            // left and right keys navigation
            t.bindToDoc('keydown', function(e) {
                if (e.keyCode == 13) {
                    var slideId = t.getCurrentSlideId()
                    t.goto(slideId);
                }
            });

            t.bindToDoc('webkitfullscreenchange mozfullscreenchange fullscreenchange',function() {
                if ( ! fullscreenFiredByClick) {
                    this.toggleFullScreenMode();
                }
                fullscreenFiredByClick = false;
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
